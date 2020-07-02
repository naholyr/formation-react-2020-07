import React from "react";
import { number } from "prop-types";
import "./GuessForm.scss";

// TODO prop "wordLength"
const GuessForm = ({ wordLength }) => {
  return (
    <form className="GuessForm">
      <input
        type="text"
        name="word"
        pattern="[^-_ '&quot;]+"
        required=""
        // TODO following props depend on wordLength
        minLength={7}
        maxLength={7}
        placeholder="7 lettres"
        style={{ width: "14rem" }} // 2rem/letter
      />
    </form>
  );
};

GuessForm.propTypes = {
  wordLength: number.isRequired,
};

export default GuessForm;
