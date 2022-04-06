import React, { Component } from "react";
import "./Pages.css";
import "./Popup.css";

export default class Popup extends React.Component {
  render() {
    return (
      <div className="popup_outter">
        <div className="popup_inner">
          <h1>
            Keep track of the following code to later check in on your order:
          </h1>
          <button onClick={this.props.closePopup} className="close_btn">
            X
          </button>
          <p className="code">{this.props.code}</p>
        </div>
      </div>
    );
  }
}
