import React from "react";
import { Game } from "../types";
import ScoreList from "../ScoreList/ScoreList";
import TrialList from "../TrialList/TrialList";
import GuessForm from "../GuessForm/GuessForm";
import { string } from "prop-types";

const GamePage = ({ game, username }) => {
  return (
    <div id="game">
      <ScoreList scores={game.scores} />
      <div id="guess">
        <TrialList username={username} trials={game.trials} />
        <GuessForm wordLength={game.wordLength} />
      </div>
    </div>
  );
};

GamePage.propTypes = {
  game: Game.isRequired,
  username: string.isRequired,
};

export default GamePage;
