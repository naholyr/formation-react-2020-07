import React from "react";
import PropTypes from "prop-types";

const Counter = ({ initialValue /*: number */ = 1 }) => {
  const [value, setValue] = React.useState(initialValue);

  const handleClick = (e /* SyntheticEvent */) => {
    e.preventDefault();
    // replace
    setValue(value + 1);
  };

  return (
    <>
      <button onClick={handleClick}>{value} (click to increment)</button>
      <br />
    </>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number,
};

export default Counter;
