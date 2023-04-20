import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function HeadHeader() {
  return (
    <div>
      <Nav
        className="container offset-2 mt-1"
        style={{
          fontSize: "14px",
        }}
        pills
      >
        <NavItem className="ms-2">
          <NavLink href="#" className="text-secondary fw-light">
            TODAY
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-secondary fw-light">
            HOURLY
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-secondary fw-light">
            DAILY
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-secondary fw-light">
            MONTHLY
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-secondary fw-light">
            AIR QUALITY
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-secondary fw-light">
            RADAR
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-secondary fw-light">
            MINUTECAST
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-secondary fw-light">
            HEALTH & ACTIVITIES
          </NavLink>
        </NavItem>
      </Nav>
      <hr className="mt-1" />
    </div>
  );
}

export default HeadHeader;
