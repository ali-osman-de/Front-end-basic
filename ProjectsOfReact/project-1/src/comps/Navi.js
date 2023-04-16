import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Navi() {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="container offset-2">
          <img
            alt="logo"
            src="/logo.svg"
            style={{
              height: 30,
              width: 40,
            }}
          />
          <NavbarBrand className="ms-3 fw-light fs-5" href="/">
            GlobalWeather
          </NavbarBrand>
          <NavbarBrand
            className="ms-3 fw-normal"
            style={{
              fontSize: "14px",
            }}
          >
            Kayseri, Kayseri 11
          </NavbarBrand>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navi;
