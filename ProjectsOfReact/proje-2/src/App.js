import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";

import React, { Component } from "react";

class App extends Component {
  state = {
    currentCategory: "",
    products: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  };

  

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    const chunkSize = Math.ceil(products.length / 3);


    return (
      <div>
        <Navi />
        <Container>
          <Row>
            <Col xs="3">
              <CategoryList
                info={categoryInfo}
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col xs="9">
              <Row xs="3">
                <ProductList
                  products={this.state.products}
                  currentCategory={this.state.currentCategory}
                  info={productInfo}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
