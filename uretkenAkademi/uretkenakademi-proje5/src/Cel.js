import React, { Component } from "react";
import { Alert } from "reactstrap";

class Cel extends Component {
  render() {
    return (
      <div>
        <h4
          style={{
            marginTop: "30px",
          }}
        >
          <Alert color="primary">Celcius: {this.props.dereceCel}</Alert>
        </h4>
      </div>
    );
  }
}

export default Cel;
