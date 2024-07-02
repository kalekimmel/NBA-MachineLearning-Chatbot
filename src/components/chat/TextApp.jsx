import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BeatLoader } from "react-spinners";

import TextAppMessageList from "./TextAppMessageList";
import MessageType from "./messages/MessageType";
import createChatAgent from "../../agent/ChatAgent";
import BarChart from "./BarChart";

function TextApp() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();
  const [isFirstTime, setIsFirstTime] = useState(true);

  const chatAgent = useMemo(() => createChatAgent(), []);

  const addMessage = (m) => {
    setMessages((o) => [...o, m]);
  };

  const addAIMessage = (txt) => {
    addMessage({ type: MessageType.AI, text: txt });
  };

  const addClientMessage = (txt) => {
    addMessage({ type: MessageType.CLIENT, text: txt });
  };

  useEffect(() => {
    setIsLoading(true);
    chatAgent.handleInitialize().then((msgs) => {
      if (msgs && Array.isArray(msgs)) {
        msgs.forEach((m) => addAIMessage(m));
      }
      setIsLoading(false);
    });
  }, [chatAgent]);

  const handleSend = async (e) => {
    e?.preventDefault();
    const input = inputRef.current.value?.trim();
    if (input) {
      addClientMessage(input);
      setIsLoading(true);
      const response = await chatAgent.handleReceive(input);
      addAIMessage(response);

      // Display a different message if not the first time
      if (!isFirstTime) {
        setIsFirstTime(false);

        const initMessages = await chatAgent.handleInitialize();
        if (initMessages && Array.isArray(initMessages)) {
          initMessages.forEach((m) => addAIMessage(m));
        }
        setIsFirstTime(false);
      } else {
        addAIMessage(
          "You can type in another opponent to see the Lakers' chance of winning against them, or type 'All purposes', 'Code', or 'Process'"
        );
      }

      setIsLoading(false);
      inputRef.current.value = "";
    }
  };
  const data = {
    labels: [
      "Kings",
      "Suns",
      "Wizards",
      "Nuggets",
      "Celtics",
      "Pistons",
      "76ers",
    ],
    datasets: [
      {
        label: "Lakers Win Odds Against Teams",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [18, 46, 68, 40, 17, 72, 60],
      },
    ],
  };
  const data2 = {
    labels: ["Kings", "Lakers"],
    datasets: [
      {
        label: "Expected Points in a Lakers / Kings Matchup",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [115.22, 112.2],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const options2 = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        anchor: "end",
        formatter: Math.round,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="app">
      <TextAppMessageList messages={messages} />
      {isLoading ? <BeatLoader color="#36d7b7" /> : <></>}
      <div className="input-area">
        <Form className="inline-form" onSubmit={handleSend}>
          <Form.Control
            ref={inputRef}
            style={{ marginRight: "0.5rem", display: "flex" }}
            placeholder="Type a message..."
            aria-label="Type and submit to send a message."
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </Form>
      </div>
      <div className="chart-area">
        <div className="chart-wrapper">
          <BarChart data={data} options={options} />
        </div>
        <div className="chart-wrapper">
          <BarChart data={data2} options={options2} />
        </div>
      </div>
    </div>
  );
}

export default TextApp;
