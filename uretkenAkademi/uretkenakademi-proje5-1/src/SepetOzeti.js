import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Badge,
} from "reactstrap";

class SepetOzeti extends Component {
  BosSepet() {
    return (
      <div>
        <DropdownToggle nav>Sepet Boş</DropdownToggle>
      </div>
    );
  }
  SepetOzeti() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Sepet
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.sepet.map((SepetUyesi) => (
              <DropdownItem key={SepetUyesi.urun.id}>
                <Badge color="danger" onClick={()=>this.props.sepettenCikar((SepetUyesi.urun))}>X</Badge>
                {SepetUyesi.urun.productName} - 
                <Badge color="info">{SepetUyesi.adet}</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.sepet.length > 0 ? (
          this.SepetOzeti()
        ) : (
          <div>{this.BosSepet()}</div>
        )}
      </div>
    );
  }
}

export default SepetOzeti;
