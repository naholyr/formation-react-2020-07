import React from "react";
import "./App.css";
import LoginPage from "./login/LoginPage/LoginPage";
import GamePage from "./game/GamePage/GamePage";

// FIXME temp data
const game = {
  scores: [
    { name: "Juju", score: 52 },
    { name: "Nicolas", score: 52 },
  ],
  trials: [
    {
      name: "Nicolas",
      word: [
        ["T", 0],
        ["O", 2],
        ["U", 0],
        ["R", 1],
        ["N", 0],
        ["E", 2],
        ["E", 1],
      ],
    },
    {
      name: "Juju",
      word: [
        ["J", 0],
        ["O", 2],
        ["Y", 0],
        ["E", 1],
        ["U", 0],
        ["S", 0],
        ["E", 1],
      ],
    },
    {
      name: "Nicolas",
      word: [
        ["C", 0],
        ["O", 2],
        ["U", 0],
        ["T", 0],
        ["E", 1],
        ["A", 0],
        ["U", 0],
      ],
    },
    {
      name: "Nicolas",
      word: [
        ["P", 2],
        ["O", 2],
        ["I", 0],
        ["R", 0],
        ["I", 2],
        ["E", 2],
        ["R", 2],
      ],
    },
  ],
  wordLength: 7,
};

function App() {
  const [username, setUsername] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const authenticated = username !== null;

  React.useEffect(() => {
    console.log("App#render", { username, loading });
  }, [loading, username]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(
        `${process.env.REACT_APP_ENDPOINT}/whoami?token=${encodeURIComponent(
          token
        )}`
      )
        .then((response) => response.json())
        .then((result) => {
          setUsername(result.username);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []); // deps = [] => didMount/willUnmount

  const handleLogin = (username, token) => {
    setUsername(username);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Motux</h1>
      </header>
      {loading ? (
        <p>Chargement…</p>
      ) : (
        <>
          {authenticated && <GamePage game={game} username={username} />}
          {!authenticated && <LoginPage onLogin={handleLogin} />}
        </>
      )}
    </div>
  );
}

export default App;
