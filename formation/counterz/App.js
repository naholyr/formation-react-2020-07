import React from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const [counters, setCounters] = React.useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setCounters([<Counter key={Math.random()} />, ...counters]);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Add counter</button>
      <hr />
      {counters}
    </div>
  );
};

export default App;
