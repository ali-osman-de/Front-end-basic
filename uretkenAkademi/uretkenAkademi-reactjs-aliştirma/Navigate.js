import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap"

class Navigate extends Component {
  render() {
    return (
      <div>
        <Navbar color="info" dark>
          <NavbarBrand href="/">
            Reactstrap
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Navigate;
