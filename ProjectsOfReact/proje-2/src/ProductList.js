import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  Button,
  CardTitle,
} from "reactstrap";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h5>{this.props.currentCategory}</h5>
        {this.props.products.map((product) => (
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />

            <CardBody key={product.id}>
              <CardTitle tag="h5">{product.productName}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {product.Category.CategoryName}
              </CardSubtitle>
              <CardText>{product.Category.Description}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default ProductList;
