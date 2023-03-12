import React, { Component } from "react";
import "./Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <span>Loading...</span>
        <div className="half-spinner"></div>
      </div>
    );
  }
}

export default Loading;
