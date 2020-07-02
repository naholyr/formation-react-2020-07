import React from "react";
import { Trial } from "../types";
import { bool } from "prop-types";
import cx from "classnames";
import "./TrialItem.scss";

const STATUS_TO_CLASSNAME = {
  0: "incorrect",
  1: "misplaced",
  2: "correct",
};

const TrialItem = ({ trial, isMyself }) => {
  console.log(trial);
  return (
    <li className={cx("TrialItem", { myself: isMyself })}>
      <strong>{trial.name}</strong>
      {trial.word.map(([char, status], index) => (
        // key={index} OK because no reordering, and items are actually always added to the end
        <span key={index} className={STATUS_TO_CLASSNAME[status]}>
          {char}
        </span>
      ))}
    </li>
  );
};

TrialItem.propTypes = {
  trial: Trial.isRequired,
  isMyself: bool.isRequired,
};

export default TrialItem;
