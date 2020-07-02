import React from "react";

const FakeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("f1", e.target.elements.f1.value);
    console.log("f4", e.target.elements.f4.value);
  };

  const [value2, setValue2] = React.useState("x");
  const handleChange2 = (e) => {
    let val = e.target.value;
    console.log("f2", val);
    if (val[val.length - 1] !== "-") {
      val += "-";
    }
    setValue2(val);
  };

  return (
    <form onSubmit={handleSubmit}>
      Uncontrolled without default:
      <input name="f1" />
      <hr />
      Controlled:
      <input name="f2" value={value2} onChange={handleChange2} />
      <hr />
      Readonly:
      <input name="f3" value="toto" readOnly />
      <hr />
      Uncontrolled:
      <input name="f4" defaultValue="toto" />
    </form>
  );
};

export default FakeForm;
