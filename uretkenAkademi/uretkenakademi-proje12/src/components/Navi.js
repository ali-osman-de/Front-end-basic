import React from "react";
import {Navbar, NavbarBrand} from "reactstrap"

function Navi() {
  return (
    <div>
      <Navbar className="fluid" color="light" light>
        <NavbarBrand className="mx-auto" href="/">
        <h1 className="fs-4 fw-light text-secondary">Art Gallery</h1>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navi;
