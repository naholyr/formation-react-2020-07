import React from "react";
import "./App.css";
import LoginPage from "./login/LoginPage/LoginPage";
import GamePage from "./game/GamePage/GamePage";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./actions";

/* Easy facile
const useSelector = select => {
  const store = useContext(ReduxContext); // TODO
  const [data, setData] = React.useState(() => select(store.getState()));

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = store.getState();
      const newData = select(newState);
      if (data !== newData) {
        console.log("setData");
        setData(newData);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [data]);

  return data;
}
*/

const useMousePosition = () => {
  const [pos, setPos] = React.useState({});
  React.useEffect(() => {
    const handler = (e) => {
      setPos({ x: e.x, y: e.y });
    };
    document.addEventListener("mousemove", handler);
    return () => {
      document.removeEventListener("mousemove", handler);
    };
  });
  return pos;
};

const MouseCoords = () => {
  const pos = useMousePosition();

  return (
    <div>
      {pos.x},{pos.y}
    </div>
  );
};

function App() {
  const selector = (appState) => {
    return appState.username;
  };
  const username = useSelector(selector);

  const dispatch = useDispatch();
  const handleLogin = (username, token) => {
    dispatch(login(username, token));
  };

  const loading = useSelector((state) => state.loading);
  const authenticated = username !== null;

  /* Abonnement au store (le truc qu'on n'a pas envie de réécrire à chaque fois, remplacé par useSelector)
  const [username, setUsername] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = window.store.subscribe(() => {
      const newState = window.store.getState();
      if (username !== newState.username) {
        console.log("setUsername");
        setUsername(newState.username);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [username]);
  */

  React.useEffect(() => {
    console.log("App#render", { username, loading });
  }, [loading, username]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Motux</h1>
      </header>
      {loading ? (
        <p>Chargement…</p>
      ) : (
        <>
          {authenticated && <GamePage />}
          {!authenticated && <LoginPage onLogin={handleLogin} />}
        </>
      )}
      <MouseCoords />
    </div>
  );
}

export default App;
