import React from "react";
import { func } from "prop-types";
import "./GuessForm.scss";
import { useSelector } from "react-redux";

// TODO prop "onTryWord"
const GuessForm = ({ onTryWord }) => {
  const wordLength = useSelector((state) => state.game.wordLength);
  const disabled = useSelector((state) => state.game.inputDisabled);

  const wordRef = React.useRef();

  // When switching from enabled to disabled, empty
  // When switching from disabled to enabled, focus
  React.useEffect(() => {
    if (disabled) {
      wordRef.current.value = "";
    } else {
      wordRef.current.focus();
    }
  }, [disabled]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTryWord(wordRef.current.value);
  };

  return (
    <form className="GuessForm" onSubmit={handleSubmit}>
      <input
        ref={wordRef}
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
