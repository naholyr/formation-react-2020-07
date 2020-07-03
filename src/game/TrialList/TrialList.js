import React from "react";
import TrialItem from "./TrialItem";
import "./TrialList.scss";
import { useSelector } from "react-redux";

const TrialList = () => {
  const username = useSelector((state) => state.username);
  const trials = useSelector((state) => state.game.trials);

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

export default TrialList;
