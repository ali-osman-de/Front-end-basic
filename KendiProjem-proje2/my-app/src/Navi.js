import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap"

class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="warning">
          <NavbarBrand href="/" style={{
            margin:"auto",
            fontSize: "30px",
            fontFamily: "Arial",
            fontWeight: "lighter"
        }}>MyStore</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
