import React, { Component } from "react";
import { Alert } from "reactstrap";

class Kel extends Component {
  render() {
    return (
      <div>
        <h4
          style={{
            marginTop: "30px",
          }}
        >
          <Alert color="info">Kelvin: {this.props.dereceKel}</Alert>
        </h4>
      </div>
    );
  }
}

export default Kel;
