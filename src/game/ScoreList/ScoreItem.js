import React from "react";
import { string, bool, number } from "prop-types";
import cx from "classnames";
import "./ScoreItem.scss";

const ScoreItem = ({ name, score, isMyself }) => {
  return (
    <li className={cx("ScoreItem", { myself: isMyself })}>
      <strong>{name}</strong>
      <em>{score} pts</em>
    </li>
  );
};

ScoreItem.propTypes = {
  name: string.isRequired,
  score: number.isRequired,
  isMyself: bool.isRequired,
};

export default ScoreItem;
