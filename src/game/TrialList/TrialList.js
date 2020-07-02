import React from "react";
import { Trial } from "../types";
import { arrayOf, string } from "prop-types";
import TrialItem from "./TrialItem";
import "./TrialList.scss";

const TrialList = ({ trials, username }) => {
  return (
    <ul className="TrialList">
      {trials.map((trial, index) => (
        // key={index} OK because no reordering, and items are actually always added to the end
        <TrialItem
          key={index}
          trial={trial}
          isMyself={trial.name === username}
        />
      ))}
    </ul>
  );
};

TrialList.propTypes = {
  trials: arrayOf(Trial.isRequired).isRequired,
  username: string.isRequired,
};

export default TrialList;
