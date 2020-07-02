import React from "react";
import "./App.css";
import LoginPage from "./login/LoginPage/LoginPage";
import GamePage from "./game/GamePage/GamePage";

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [checkingToken, setCheckingToken] = React.useState(true);

  console.log("App#render", { authenticated, checkingToken });

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
          setAuthenticated(true);
          setCheckingToken(false);
        });
    } else {
      setCheckingToken(false);
    }
  }, []); // deps = [] => didMount/willUnmount

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Motux</h1>
      </header>
      {checkingToken ? (
        <p>Vérification du token...</p>
      ) : (
        <>
          {authenticated && <GamePage />}
          {!authenticated && <LoginPage onLogin={handleLogin} />}
        </>
      )}
    </div>
  );
}

export default App;
