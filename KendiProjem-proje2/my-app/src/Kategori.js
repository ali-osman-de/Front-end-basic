import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Kategori extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.kategori.map((cat) => (
            <ListGroupItem key={cat.categoryId}>{cat.productName}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default Kategori;
