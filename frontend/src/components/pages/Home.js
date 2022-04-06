import React from "react";
import "./Pages.css";
import logo from "../../imgs/logo.png";

export default class Home extends React.Component {
  render() {
    return (
      <div
        className="pages"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={logo} width="400" alt="logo" />
      </div>
    );
  }
}
