import { useEffect,useState} from "react";

const createChatAgent = () => {

    const CS571_WITAI_ACCESS_TOKEN = "ZXHLC2PJLEELNWMJQAWP642FQ2R75LYM"; 


    const handleInitialize = async () => {
        return "This will predict Lakers chance of winning versus any NBA team in 2022 based on data pulled from the 2022 season. Type in an opponent to see the Lakers' chance of winning against them, for example 'List of options: Clippers, Bulls, Hawks, Nets, Magic, Warriors, Jazz, Suns, Pacers, Thunder, Knicks, Mavs, Raptors, Celtics, Timberwolves, Pelicans, Bucks, Grizzlies, Hornets, Wizards, 76ers, Nuggets, Trail Blazers, Rockets, Heat, Pistons, Cavs, Spurs, Kings'"
    }

    const handleReceive = async (prompt) => {
        const apiResponse= await fetch("https://api.wit.ai/message?q=" + encodeURIComponent(prompt),{
            headers:{
                "Authorization":"Bearer " + CS571_WITAI_ACCESS_TOKEN
            }
        })
        const response = await apiResponse.json();
       console.log(response);
        if (response.intents.length>0){
            console.log(response.intents);
            const intent=response.intents[0].name;
            if(intent==="Kings"){
                return "Lakers Season Win Percentage: 37.72%, Kings Season Win Percentage: 62.15%, Lakers Points Per Game: 113.11, Kings Points Per Game: 118.58, Lakers Win Probability Versus Kings: 18.00%"
            }
            if(intent==="Suns"){
                return "Lakers Season Win Percentage: 37.72%, Suns Season Win Percentage: 55.59%, Lakers Points Per Game: 113.11, Suns Points Per Game: 115.01, Lakers Win Probability Versus Suns: 46%"
            }
            if(intent==="Wizards"){
                return "Lakers Season Win Percentage: 37.72%, Wizards Season Win Percentage: 36.90%, Lakers Points Per Game: 113.11, Wizards Points Per Game: 109.33, Lakers Win Probability Versus Wizards: 68%"
            }
            if(intent==="Nuggets"){
                return "Lakers Season Win Percentage: 37.72%, Nuggets Season Win Percentage: 64.17%, Lakers Points Per Game: 113.11, Nuggets Points Per Game: 115.21, Lakers Win Probability Versus Nuggets: 40%"
            }
            if(intent==="Celtics"){
                return "Lakers Season Win Percentage: 37.72%, Celtics Season Win Percentage: 66.67%, Lakers Points Per Game: 113.11, Celtics Points Per Game: 118.75, Lakers Win Probability Versus Celtics: 17%"
            }
            if(intent==="Pistons"){
                return "Lakers Season Win Percentage: 37.72%, Pistons Season Win Percentage: 21.11%, Lakers Points Per Game: 113.11, Pistons Points Per Game: 109.89, Lakers Win Probability Versus Pistons: 72%"
            }
            if(intent==="Philadelphia_76ers"){
                return "Lakers Season Win Percentage: 37.72%, 76ers Season Win Percentage: 62.50%, Lakers Points Per Game: 113.11, 76ers Points Per Game: 111.47, Lakers Win Probability Versus 76ers: 60%"
            }
            if(intent==="Raptors"){
                return "Lakers Season Win Percentage: 37.72%, Raptors Season Win Percentage: 45.47%, Lakers Points Per Game: 113.11, Raptors Points Per Game: 111.60, Lakers Win Probability Versus Raptors: 72%"
            } 
            if(intent==="Cavs"){
                return "Lakers Season Win Percentage: 37.72%, Cavs Season Win Percentage: 60.15%, Lakers Points Per Game: 113.11, Cavs Points Per Game: 110.22, Lakers Win Probability Versus Cavs: 64%"
            }
            if(intent==="Bucks"){
                return "Lakers Season Win Percentage: 37.72%, Bucks Season Win Percentage: 60.00%, Lakers Points Per Game: 113.11, Bucks Points Per Game: 111.27, Lakers Win Probability Versus Bucks: 58%"
            }
            if(intent==="Trail_Blazers"){
                return "Lakers Season Win Percentage: 37.72%, Trail Blazers Season Win Percentage: 47.73%, Lakers Points Per Game: 113.11, Trail Blazers Points Per Game: 111.45, Lakers Win Probability Versus Trail Blazers: 64%"
            }
            if(intent==="Pacers"){
                return "Lakers Season Win Percentage: 37.72%, Pacers Season Win Percentage: 48.69%, Lakers Points Per Game: 113.11, Pacers Points Per Game: 114.75, Lakers Win Probability Versus Pacers: 48%"
            }
            if(intent==="Spurs"){
                return "Lakers Season Win Percentage: 37.72%, Spurs Season Win Percentage: 31.25%, Lakers Points Per Game: 113.11, Spurs Points Per Game: 109.61, Lakers Win Probability Versus Spurs: 63%"
            }
            if(intent==="Nets"){
                return "Lakers Season Win Percentage: 37.72%, Nets Season Win Percentage: 61.11%, Lakers Points Per Game: 113.11, Nets Points Per Game: 112.64, Lakers Win Probability Versus Nets: 50%"
            }
            if(intent==="Clippers"){
                return "Lakers Season Win Percentage: 37.72%, Clippers Season Win Percentage: 55.24%, Lakers Points Per Game: 113.11, Clippers Points Per Game: 108.23, Lakers Win Probability Versus Clippers: 58%"
            }
            if(intent==="Jazz"){
                return "Lakers Season Win Percentage: 37.72%, Jazz Season Win Percentage: 51.58%, Lakers Points Per Game: 113.11, Jazz Points Per Game: 115.51, Lakers Win Probability Versus Jazz: 37%"
            }
            if(intent==="Pelicans"){
                return "Lakers Season Win Percentage: 37.72%, Pelicans Season Win Percentage: 63%, Lakers Points Per Game: 113.11, Pelicans Points Per Game: 117.12, Lakers Win Probability Versus Pelicans: 24%"
            }
            if(intent==="Timberwolves"){
                return "Lakers Season Win Percentage: 37.72%, Timberwolves Season Win Percentage: 53.95%, Lakers Points Per Game: 113.11, Timberwolves Points Per Game: 114.95, Lakers Win Probability Versus Timberwolves: 49%"
            }
            if(intent==="Bulls"){
                return "Lakers Season Win Percentage: 37.72%, Bulls Season Win Percentage: 56.1%, Lakers Points Per Game: 113.11, Bulls Points Per Game: 115.2, Lakers Win Probability Versus Bulls: 46%"
            }
            if(intent==="Hawks"){
                return "Lakers Season Win Percentage: 37.72%, Hawks Season Win Percentage: 50.7%, Lakers Points Per Game: 113.11, Hawks Points Per Game: 113.98, Lakers Win Probability Versus Hawks: 57%"
            }
            if(intent==="Magic"){
                return "Lakers Season Win Percentage: 37.72%, Magic Season Win Percentage: 30.25%, Lakers Points Per Game: 113.11, Magic Points Per Game: 109.7, Lakers Win Probability Versus Magic: 70%"
            }
            if(intent==="Warriors"){
                return "Lakers Season Win Percentage: 37.72%, Warriors Season Win Percentage: 60.7%, Lakers Points Per Game: 113.11, Warriors Points Per Game: 116.17, Lakers Win Probability Versus Warriors: 32%"
            }
            if(intent==="Thunder"){
                return "Lakers Season Win Percentage: 37.72%, Thunder Season Win Percentage: 30.7%, Lakers Points Per Game: 113.11, Thunder Points Per Game: 109.25, Lakers Win Probability Versus Thunder: 66%"
            }
            if(intent==="Knicks"){
                return "Lakers Season Win Percentage: 37.72%, Knicks Season Win Percentage: 58.36%, Lakers Points Per Game: 113.11, Knicks Points Per Game: 114.17, Lakers Win Probability Versus Knicks: 56%"
            }
            if(intent==="Mavs"){
                return "Lakers Season Win Percentage: 37.72%, Mavs Season Win Percentage: 50.92%, Lakers Points Per Game: 113.11, Mavs Points Per Game: 110.49, Lakers Win Probability Versus Mavs: 68%"
            }
            if(intent==="Grizzlies"){
                return "Lakers Season Win Percentage: 37.72%, Grizzlies Season Win Percentage: 53.95%, Lakers Points Per Game: 113.11, Grizzlies Points Per Game: 108.7, Lakers Win Probability Versus Grizzlies: 70%"
            }
            if(intent==="Heat"){
                return "Lakers Season Win Percentage: 37.72%, Heat Season Win Percentage: 60.44%, Lakers Points Per Game: 113.11, Heat Points Per Game: 115.20, Lakers Win Probability Versus Heat: 36%"
            }
            if(intent==="Rockets"){
                return "Lakers Season Win Percentage: 37.72%, Rockets Season Win Percentage: 24.28%, Lakers Points Per Game: 113.11, Rockets Points Per Game: 109.2, Lakers Win Probability Versus Rockets: 78%"
            }
            if(intent==="Hornets"){
                return "Lakers Season Win Percentage: 37.72%, Hornets Season Win Percentage: 53.24%, Lakers Points Per Game: 113.11, Hornets Points Per Game: 112.40, Lakers Win Probability Versus Hornets: 47%"
            }
            
            
            
            
            
            
            
           
           
            
            
        }
        else{
            return "Sorry, I don't have that team on file."
        }
        return "Sorry, I don't have that team on file."
    }

    return {
        handleInitialize,
        handleReceive
    }
}

export default createChatAgent;