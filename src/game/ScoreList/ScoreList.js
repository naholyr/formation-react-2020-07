import React from "react";
import "./ScoreList.scss";
import ScoreItem from "./ScoreItem";
import { useSelector } from "react-redux";

const ScoreList = () => {
  const username = useSelector((state) => state.username);
  const scores = useSelector((state) => state.game.scores);

  return (
    <ul className="ScoreList">
      {scores.map((s) => (
        <ScoreItem
          key={s.name}
          name={s.name}
          score={s.score}
          isMyself={s.name === username}
        />
      ))}
      {/* verbose way of life
        // leave JSX → enter JS
        scores.map(
          // transform(for each item)
          (score) => {
            // unique key = score.name
            return (
              <ScoreItem
                key={score.name}
                name={score.name}
                score={score.score}
                isMyself={score.name === username}
              />
            );
          } // end of transform
        ) // end of map
        // leave JS → enter JSX
        */}
    </ul>
  );
};

export default ScoreList;
