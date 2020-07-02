import React from "react";

const Owner = () => {
  // TODO handleToggle => setChecked
  //return <ControlledCheckbox checked={true} onToggle={handleToggle} />;

  return <UncontrolledCheckbox defaultChecked={true} />;
};

// Controlled
const ControlledCheckbox = ({ checked = false, onToggle }) => {
  const handleChange = (e) => {
    e.preventDefault();
    onToggle(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      className={`mfcss-checkbox ${checked ? "mfcss-checked" : ""}`}
    />
  );
};

// Uncontrolled
const UncontrolledCheckbox = ({ defaultChecked = false }) => {
  const [checked, setChecked] = React.useState(defaultChecked);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className={`mfcss-checkbox ${checked ? "mfcss-checked" : ""}`}
      onChange={handleChange}
    />
  );
};

export default Checkbox;
