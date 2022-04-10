import React, { Component } from "react";
import "./Pages.css";
import logo from "../../imgs/logo.png";
import Popup from "./Popup";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      isFilePicked: false,
      showPopup: false,
      isInvalid: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  changeHandler = (event) => {
    console.log(`length of event.target.files: ${event.target.files.length}`);
    console.log(`event.target.files[0]: ${event.target.files[0]}`);
    this.setState({ selectedFile: event.target.files[0] }, () => {
      console.log(
          `this.state.selectedFile in changeHandler(): ${
              this.state.selectedFile
          }`
      );
    });
    this.setState({ isFilePicked: true });
  };

  handleSubmission = (event) => {
    if (this.state.isFilePicked) {
      this.setState({ showPopup: true });
      this.setState({ isInvalid: false });

      const formData = new FormData();
      formData.append("file", this.state.selectedFile);

      fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      this.setState({ showPopup: false });
      this.setState({ isInvalid: true });
    }
    event.preventDefault();
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
    this.setState({ isFilePicked: false });
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
        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup} code="A67897BDJ4239GHJR" />
        ) : (
          <>
            <div className="center_text">
              <input
                type="file"
                className="upload_btn"
                onChange={this.changeHandler}
              />
            </div>
            <div className="center_text">
              <button
                className="submit-btn"
                style={{ marginTop: "2.5em" }}
                onClick={this.handleSubmission}
              >
                Submit
              </button>
            </div>
            {this.state.isInvalid ? (
              <div className="center_text">
                <p className="error">
                  ERROR: Please upload the correct file type
                </p>
              </div>
            ) : null}
          </>
        )}
        <div className="center_text">
          <p className="contact">contact us: email@gatech.edu</p>
        </div>
      </div>
    );
  }
}

export default Upload;
