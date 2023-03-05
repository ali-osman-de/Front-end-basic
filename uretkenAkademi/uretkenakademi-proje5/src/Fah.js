import React, { Component } from "react";
import { Alert } from "reactstrap";

class Fah extends Component {
  render() {
    return (
      <div>
        <h4
          style={{
            marginTop: "30px",
          }}
        >
          <Alert color="warning">Fahrenheit: {this.props.dereceFah}</Alert>
        </h4>
      </div>
    );
  }
}

export default Fah;
