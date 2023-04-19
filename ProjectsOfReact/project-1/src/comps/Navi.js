import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import SearchBar from "./SearchBar";

function Navi() {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand className="d-flex align-items-center container offset-2">
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
            href="/"
            style={{
              fontSize: "14px",
            }}
          >
            Kayseri, Kayseri 11°<small className="fw-lighter">c</small>
          </NavbarBrand>
          <NavbarBrand className="mx-auto">
            <SearchBar />
          </NavbarBrand>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navi;
