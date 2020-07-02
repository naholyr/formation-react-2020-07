import React from "react";
import "./LoginInput.scss";
import { shape, instanceOf } from "prop-types";

const LoginInput = ({ inputRef }) => {
  return (
    <input
      className="LoginInput"
      ref={inputRef}
      autoFocus={true}
      placeholder="Your name"
    />
  );
};

LoginInput.propTypes = {
  inputRef: shape({
    current: instanceOf(Element),
  }).isRequired,
};

export default LoginInput;
