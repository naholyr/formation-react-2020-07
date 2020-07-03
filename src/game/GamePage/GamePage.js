import React from "react";
import ScoreList from "../ScoreList/ScoreList";
import TrialList from "../TrialList/TrialList";
import GuessForm from "../GuessForm/GuessForm";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import {
  setScores,
  setTrials,
  setWordLength,
  toggleInputDisabled,
  addTrial,
} from "../../actions";

const GamePage = () => {
  const token = useSelector((state) => {
    console.log("GamePage selector");
    return state.token;
  });

  const dispatch = useDispatch();

  // Socket.io client
  const socket = React.useRef();

  // Send word
  const handleTryWord = (word) => {
    if (socket.current) {
      socket.current.emit("tryWord", word);
    }
  };

  // Websocket connection
  React.useEffect(() => {
    socket.current = io.connect(process.env.REACT_APP_ENDPOINT);

    socket.current.emit("login", token, (game) => {
      dispatch(setScores(game.scores));
      dispatch(setTrials(game.trials));
      dispatch(setWordLength(game.wordLength));
    });

    socket.current.on("disableInput", () => {
      dispatch(toggleInputDisabled(true));
    });
    socket.current.on("enableInput", () => {
      dispatch(toggleInputDisabled(false));
    });

    socket.current.on("addTrial", (trial) => {
      dispatch(addTrial(trial));
    });
    socket.current.on("updateScores", (scores) => {
      dispatch(setScores(scores));
    });
    socket.current.on("wordLength", (wordLength) => {
      dispatch(setWordLength(wordLength));
    });

    socket.current.on("failure", (code) => {
      alert(code); // TODO error in Redux
    });

    socket.current.on("winner", (username) => {
      console.log("winner", username); // TODO show nice message in UI
    });

    return () => {
      socket.current.disconnect();
      socket.current = undefined;
    };
  }, [dispatch, token]);

  // TODO get game & username from store?
  return (
    <div id="game">
      <ScoreList />
      <div id="guess">
        <TrialList />
        <GuessForm onTryWord={handleTryWord} />
      </div>
    </div>
  );
};

export default GamePage;
