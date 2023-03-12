import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="warning"
          style={{
            marginBottom: "20px",
          }}
        >
          <NavbarBrand
            href="/"
            style={{
              margin: "auto",
              fontSize: "30px",
            }}
          >
            Store
          </NavbarBrand>
          <NavbarBrand  href="/">
            Buy Now {this.props.sepet.length}
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
