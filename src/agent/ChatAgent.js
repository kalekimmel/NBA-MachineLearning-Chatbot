import { useEffect,useState} from "react";

const createChatAgent = () => {

    const CS571_WITAI_ACCESS_TOKEN = "ZXHLC2PJLEELNWMJQAWP642FQ2R75LYM"; 


    const handleInitialize = async () => {
        return ["This will predict the Lakers' chance of winning versus any NBA team based on data pulled from the 2022 season and my machine learning model. This is one purpose out of many trained in my machine learning model. I created this app using React and Wit.Ai as a more visual way to see what my machine learning model predicted.", "Type in an opponent to see the Lakers' chance of winning against them, for example 'List of options: Clippers, Bulls, Hawks, Nets, Magic, Warriors, Jazz, Suns, Pacers, Thunder, Knicks, Mavs, Raptors, Celtics, Timberwolves, Pelicans, Bucks, Grizzlies, Hornets, Wizards, 76ers, Nuggets, Trail Blazers, Rockets, Heat, Pistons, Cavs, Spurs, Kings'","To learn about all of the different purposes I trained my model for, type 'All purposes'","To see my code for this win predictor, type 'Code'","To see one example of my iterative process and improving my model, type 'Process'"]
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
            if(intent==="Code"){
                return `(check https://github.com/kalekimmel/NBA-Machine-Learning for full code, this is only for win predictor)import pandas as pd
                from sklearn.model_selection import train_test_split
                from sklearn.ensemble import RandomForestClassifier
                from sklearn.metrics import accuracy_score

                # Load the data
                gamesAll = pd.read_csv("games.csv", index_col=0)

                # Filter games for the 2022 season
                games2022 = gamesAll[gamesAll["SEASON"] == 2022]

                # Preprocess the data
                games2022 = games2022.dropna()

                # Aggregate team statistics
                home_stats = games2022.groupby('HOME_TEAM_ID').agg({
                    'PTS_home': 'mean', 
                    'FG_PCT_home': 'mean', 
                    'FT_PCT_home': 'mean', 
                    'FG3_PCT_home': 'mean', 
                    'AST_home': 'mean', 
                    'REB_home': 'mean'
                }).rename(columns=lambda x: x.replace('_home', ''))

                away_stats = games2022.groupby('VISITOR_TEAM_ID').agg({
                    'PTS_away': 'mean', 
                    'FG_PCT_away': 'mean', 
                    'FT_PCT_away': 'mean', 
                    'FG3_PCT_away': 'mean', 
                    'AST_away': 'mean', 
                    'REB_away': 'mean'
                }).rename(columns=lambda x: x.replace('_away', ''))

                # Calculate points per game
                ppg_home = home_stats[['PTS']]
                ppg_away = away_stats[['PTS']]

                # Combine home and away stats
                team_stats = home_stats.add(away_stats, fill_value=0) / 2

                # Calculate win percentages
                home_wins = games2022.groupby('HOME_TEAM_ID')['HOME_TEAM_WINS'].mean()
                away_wins = 1 - games2022.groupby('VISITOR_TEAM_ID')['HOME_TEAM_WINS'].mean()

                win_percentages = pd.DataFrame({
                    'TEAM_ID': home_wins.index,
                    'WIN_PERCENTAGE': (home_wins + away_wins) / 2
                }).set_index('TEAM_ID')

                # Merge the win percentages and points per game with team stats
                team_stats = team_stats.merge(win_percentages, left_index=True, right_index=True)
                team_stats['PTS'] = (home_stats['PTS'] + away_stats['PTS']) / 2

                # Define features and target
                features = games2022[['PTS_home', 'FG_PCT_home', 'FT_PCT_home', 'FG3_PCT_home', 'AST_home', 'REB_home', 
                                    'PTS_away', 'FG_PCT_away', 'FT_PCT_away', 'FG3_PCT_away', 'AST_away', 'REB_away']]
                target = games2022['HOME_TEAM_WINS']

                # Split the data into training and testing sets
                X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)

                # Train the model
                model = RandomForestClassifier(n_estimators=100, random_state=42)
                model.fit(X_train, y_train)

                # Evaluate the model
                y_pred = model.predict(X_test)
                accuracy = accuracy_score(y_test, y_pred)
                print(f"Model Accuracy: {accuracy * 100:.2f}%")

                # Function to predict the outcome of a new game using team IDs
                def predict_game_by_team_id(home_team_id, away_team_id):
                    # Fetch team statistics
                    home_team_stats = team_stats.loc[home_team_id]
                    away_team_stats = team_stats.loc[away_team_id]
                    
                    # Create a DataFrame for the new game
                    new_game = pd.DataFrame({
                        'PTS_home': [home_team_stats['PTS']], 'FG_PCT_home': [home_team_stats['FG_PCT']], 'FT_PCT_home': [home_team_stats['FT_PCT']], 
                        'FG3_PCT_home': [home_team_stats['FG3_PCT']], 'AST_home': [home_team_stats['AST']], 'REB_home': [home_team_stats['REB']],
                        'PTS_away': [away_team_stats['PTS']], 'FG_PCT_away': [away_team_stats['FG_PCT']], 'FT_PCT_away': [away_team_stats['FT_PCT']], 
                        'FG3_PCT_away': [away_team_stats['FG3_PCT']], 'AST_away': [away_team_stats['AST']], 'REB_away': [away_team_stats['REB']]
                    })
                    
                    # Predict the probabilities
                    probabilities = model.predict_proba(new_game)
                    home_win_prob = probabilities[0][1] * 100  # Probability of home team winning
                    away_win_prob = probabilities[0][0] * 100  # Probability of away team winning

                    # Print the win percentages and points per game
                    print(f"Home Team Win Percentage: {home_team_stats['WIN_PERCENTAGE'] * 100:.2f}%")
                    print(f"Away Team Win Percentage: {away_team_stats['WIN_PERCENTAGE'] * 100:.2f}%")
                    print(f"Home Team Points Per Game: {home_team_stats['PTS']:.2f}")
                    print(f"Away Team Points Per Game: {away_team_stats['PTS']:.2f}")
                    
                    return f"Home Team Win Probability: {home_win_prob:.2f}%, Away Team Win Probability: {away_win_prob:.2f}%"

                # Example usage
                result = predict_game_by_team_id(1610612747, 1610612748)  # Replace with actual team IDs
                print(result)`
                            }
                            
                            
                            
                            
                            
                            
                        
           
            
            
        
        if(intent==="Process"){
            return `from sklearn.model_selection import GridSearchCV
            param_grid = {
                'n_estimators': [50, 100, 200],
                'max_depth': [None, 10, 20, 30],
                'min_samples_split': [2, 10, 20]
            }

            grid_search = GridSearchCV(estimator=rf, param_grid=param_grid, cv=5, scoring='accuracy', n_jobs=-1)

            grid_search.fit(train[predictors], train[target])

            best_params = grid_search.best_params_
            best_rf = grid_search.best_estimator_
            print(f"Best parameters: {best_params}")
            Best parameters: {'max_depth': 10, 'min_samples_split': 20, 'n_estimators': 50}

             GridSearchCV helps in selecting the best hyperparameters that yield the highest accuracy for the given data.
            `

        }
        if(intent==="All_purposes"){
            return"1. Data preprocessing 2. Train on 7 seasons, try to predict winners of games in 2022 not for specific teams 3. See what teams model was better at correctly predicting results for 4. Hyperparameter tuning as well as random forest versus gradient boosting model evaluation 5. Create model to predict Lakers win likelihood against every team 6. Create model to predict scores of games"
            
        }
        else{
            return "Sorry, I don't have that team on file."
        }
        return "Sorry, I don't have that team on file."
    }
}

    return {
        handleInitialize,
        handleReceive
    }
}

export default createChatAgent;