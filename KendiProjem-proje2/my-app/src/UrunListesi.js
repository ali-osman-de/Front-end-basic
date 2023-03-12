import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

class Kategori extends Component {
  render() {
    return (
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        {this.props.urunler.map((cat) => (
          <Card>
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody key={cat.productId}>
              <CardTitle tag="h5">{cat.productName}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                unitsInStock: {cat.unitsInStock}
              </CardSubtitle>
              <Button>{cat.unitPrice}</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default Kategori;
