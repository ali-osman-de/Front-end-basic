import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="info"
          style={{
            margin: "auto",
            opacity: "80%",
          }}
        >
          <NavbarBrand
            href="/"
            style={{
              margin: "auto",
            }}
          >
            DERECE HESAPLAYICI
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
