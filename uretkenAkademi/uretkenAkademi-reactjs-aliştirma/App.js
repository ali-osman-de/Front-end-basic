import React, { Component } from "react";
import Navigate from "./Navigate";
import UrunListesi from "./UrunListesi";
import Kategori from "./Kategori";
import { Container, Col, Row } from "reactstrap";

class App extends Component {
  state = {
    seciliKategori: "",
  };

  kategoriDegistir = (kategori) => {
    this.setState({
      seciliKategori: kategori.KategoriIsim,
    });
  };

  render() {
    // let BaslikKategori = "Kategori";
    // let BaslikUrunListesi = "Ürün Listesi";
    let bilgiKategori = {
      baslik: "Kategori",
      ilaveBilgi: "Kategori Bilgi",
      baslik2: "Ürün Listesi",
      ilaveBilgi2: "Ürün Bilgisi",
    };
    return (
      <div>
        <Navigate />
        <Container>
          <Row>
            <Col xs="6">
              <Kategori
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                baslik={bilgiKategori}
              />
            </Col>
            <Col xs="6">
              <UrunListesi title={bilgiKategori} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
