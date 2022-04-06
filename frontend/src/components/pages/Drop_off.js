import React, { Component } from "react";
import "./Pages.css";
import logo from "../../imgs/logo.png";

class Drop_off extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isInvalid: false,
      pathname: window.location.pathname,
    };

    this.clearData = this.clearData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    window.onpopstate = () => {
      this.setState({ pathname: window.location.pathname });
    };
  }

  handleChange(event) {
    this.setState({ isInvalid: false });
    this.setState({ value: event.target.value });
  }

  clearData() {
    this.setState({ value: "" });
  }

  handleSubmit(event) {
    if (this.state.value === "") {
      this.setState({ isInvalid: true });
    }

    event.preventDefault();
    this.clearData();
  }

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
        <img src={logo} width="400" height="105" alt="logo" />
        <p className="center_text" style={{ paddingTop: "2em" }}>
          Your current location is:
        </p>
        <p className="bold_center_text">{this.props.location}</p>
        <p className="center_text">Enter your code provided at submission.</p>
        <div className="center_text">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="center_text">
          <button
            className="submit-btn"
            style={{ marginTop: "2.5em" }}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
        {this.state.isInvalid ? (
          <div className="center_text">
            <p className="error">ERROR: Invalid code entered</p>
          </div>
        ) : null}
        <div className="center_text">
          <p className="contact">contact us: email@gatech.edu</p>
        </div>
      </div>
    );
  }
}

export default Drop_off;
