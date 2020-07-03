import React from "react";
import { func } from "prop-types";
import "./GuessForm.scss";
import { useSelector } from "react-redux";

// TODO prop "onTryWord"
const GuessForm = ({ onTryWord }) => {
  const wordLength = useSelector((state) => state.game.wordLength);
  const disabled = useSelector((state) => state.game.inputDisabled);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTryWord(e.target.elements.word.value);
  };

  return (
    <form className="GuessForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="word"
        pattern="[^-_ '&quot;]+"
        required={true}
        disabled={disabled}
        minLength={wordLength}
        maxLength={wordLength}
        placeholder={`${wordLength} lettres`}
        style={{ width: `${2 * wordLength}rem` }} // 2rem/letter
      />
    </form>
  );
};

GuessForm.propTypes = {
  onTryWord: func.isRequired,
};

export default GuessForm;
