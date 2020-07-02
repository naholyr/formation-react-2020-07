import React from "react";
import { arrayOf } from "prop-types";
import { Score } from "../types";
import "./ScoreList.scss";
import ScoreItem from "./ScoreItem";

const ScoreList = ({ scores }) => {
  // TODO scores.map(…)
  return (
    <ul className="ScoreList">
      <ScoreItem name="Nicolas" score={52} isMyself={true} />
      <ScoreItem name="Juju" score={52} isMyself={false} />
    </ul>
  );
};

ScoreList.propTypes = {
  scores: arrayOf(Score.isRequired).isRequired,
};

export default ScoreList;
