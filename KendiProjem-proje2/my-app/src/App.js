import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import UrunListesi from "./UrunListesi";
import Kategori from "./Kategori";

class App extends Component {
  state = {
    urunler: [],
    kategoriler: [],
  };

  kategoriGetir() {
    fetch("https://localhost:7059/api/products/getall")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ kategoriler: data["data"] }));
  }

  urunGetir() {
    fetch("https://localhost:7059/api/products/getall")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ urunler: data["data"] }));
  }

  componentDidMount() {
    this.urunGetir();
    this.kategoriGetir();
  }

  render() {
    return (
      <div>
        <Navi />

        <Container>
          <Row
            style={{
              marginTop: "20px",
            }}
          >
            <Col xs="3">
              <Kategori kategori={this.state.kategoriler} />
            </Col>

            <Col xs="3">
              <UrunListesi urunler={this.state.urunler}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
