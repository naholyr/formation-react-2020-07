import React from "react";
import "./GamePage.scss";

const GamePage = () => {
  return (
    <div id="game">
      <ul id="scores">
        <li>
          <strong className="player">Juju</strong>
          <em className="score">52 pts</em>
        </li>

        <li className="myself">
          <strong className="player">Nicolas</strong>
          <em className="score">52 pts</em>
        </li>

        <li>
          <strong className="player">naholyr</strong>
          <em className="score">0 pts</em>
        </li>
      </ul>

      <div id="guess">
        <ul id="trials">
          <li className="myself">
            <strong>Nicolas</strong>
            <span className="incorrect">T</span>
            <span className="correct">O</span>
            <span className="incorrect">U</span>
            <span className="misplaced">R</span>
            <span className="incorrect">N</span>
            <span className="correct">E</span>
            <span className="misplaced">E</span>
          </li>

          <li>
            <strong>naholyr</strong>
            <span className="incorrect">J</span>
            <span className="correct">O</span>
            <span className="incorrect">Y</span>
            <span className="misplaced">E</span>
            <span className="incorrect">U</span>
            <span className="incorrect">S</span>
            <span className="misplaced">E</span>
          </li>

          <li className="myself">
            <strong>Nicolas</strong>
            <span className="incorrect">C</span>
            <span className="correct">O</span>
            <span className="incorrect">U</span>
            <span className="incorrect">T</span>
            <span className="misplaced">E</span>
            <span className="incorrect">A</span>
            <span className="incorrect">U</span>
          </li>

          <li className="myself">
            <strong>Nicolas</strong>
            <span className="correct">P</span>
            <span className="correct">O</span>
            <span className="misplaced">I</span>
            <span className="misplaced">R</span>
            <span className="correct">I</span>
            <span className="correct">E</span>
            <span className="correct">R</span>
          </li>
        </ul>

        <form id="word">
          <input
            type="text"
            name="word"
            pattern="[^-_ '&quot;]+"
            required=""
            minLength={7}
            maxLength={7}
            placeholder="7 lettres"
            style={{ width: "14rem" }}
          />
        </form>
      </div>
    </div>
  );
};

export default GamePage;
