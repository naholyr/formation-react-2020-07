import React from "react";
import "./LoginButton.scss";

class LoginButton extends React.Component {
  componentDidMount() {
    console.log("LoginButton#componentDidMount");
  }

  componentWillUnmount() {
    console.log("LoginButton#componentWillUnmount");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LoginButton#getSnapshotBeforeUpdate", {
      prevProps,
      prevState,
    });
    return "toto";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LoginButton#componentDidUpdate", {
      prevProps,
      prevState,
      snapshot,
    });
  }

  render() {
    return <button className="LoginButton">Log in</button>;
  }
}

export default LoginButton;
