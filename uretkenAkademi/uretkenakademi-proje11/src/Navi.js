import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";

function Navi() {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" dark>
          <Nav className="me-auto">
            <img
              alt="logo"
              src="/logo192.png"
              style={{
                height: 40,
                width: 40,
              }}
            />
            <NavLink href="#" className="text-light">
              Crypto Marketing
            </NavLink>
          </Nav>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navi;
