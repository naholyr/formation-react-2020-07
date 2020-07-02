import React from "react";
import "./LoginPage.scss";
import LoginInput from "../LoginInput/LoginInput";
import LoginButton from "../LoginButton/LoginButton";
import { func } from "prop-types";

/*
class LoginPage extends React.Component {
  componentDidMount() {
    this.originalTitle = document.title;
    document.title = "Log in - Motux"
    connect(this.props.room);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.room !== this.props.room) {
      disconnect();
      connect(this.props.room);
    }
  }
  componentWillUnmount() {
    document.title = this.originalTitle;
    disconnect()
  }
}
*/

const LoginPage = ({ onLogin, room }) => {
  console.log("LoginPage#render");

  const ref = React.useRef();

  /*
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    connect(room);
    return () => {
      // eslint-disable-next-line no-undef
      disconnect();
    };
  }, [room]);
  */

  React.useEffect(() => {
    // Side-effect
    const originalTitle = document.title;
    document.title = "Log in - Motux";
    // Cleanup
    return () => {
      document.title = originalTitle;
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = ref.current.value;

    fetch(`${process.env.REACT_APP_ENDPOINT}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }) // Promise<Response>
      .then((response) => {
        return response.json(); // Promise<Object>
      }) // Promise<Object>
      .then((result) => {
        // Side-effect: store token
        localStorage.setItem("token", result.token);
        onLogin(username, result.token);
      });
  };

  return (
    <form className="LoginPage" onSubmit={handleSubmit}>
      <LoginInput inputRef={ref} />
      <LoginButton />
    </form>
  );
};

LoginPage.propTypes = {
  onLogin: func.isRequired,
};

export default LoginPage;
