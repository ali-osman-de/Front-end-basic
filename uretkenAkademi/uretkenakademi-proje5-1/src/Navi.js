import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import SepetOzeti from "./SepetOzeti";
import {Link} from "react-router-dom"

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="warning"
          light
          expand="lg"
          style={{
            marginBottom: "10px",
          }}
        >
          <NavbarBrand href="/">Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink>
              <Link to="/form">Form</Link>
              </NavLink>
              </NavItem>
              <NavItem><NavLink>
              <Link to="/form2">Form2</Link>
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <SepetOzeti
                sepettenCikar={this.props.sepettenCikar}
                sepet={this.props.sepet}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
