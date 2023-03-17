import { Container, Row, Col } from "reactstrap";
import Kategori from "./Kategori";
import Navi from "./Navi";
import UrunListesi from "./UrunListesi";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import SepetListesi from "./SepetListesi";
import FormDemo from "./FormDemo";
import FormDemo2 from "./FormDemo2";

class App extends Component {
  state = {
    seciliKategori: "",
    urunler: [],
    sepet: [],
  };

  kategoriDegistir = (kategori) => {
    this.setState({
      seciliKategori: kategori.categoryName,
    });
  };

  urunGetir() {
    fetch("http://localhost:3000/products")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ urunler: data }));
  }

  sepeteEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    var urunEklendi = yeniUrun.find((s) => s.urun.id === urun.id);
    if (urunEklendi) {
      urunEklendi.adet += 1;
    } else {
      yeniUrun.push({ urun: urun, adet: 1 });
    }

    this.setState({ sepet: yeniUrun });
    alertify.success(urun.productName + " Sepete Eklendi", 2);
  };

  sepettenCıkar = (urun) => {
    let kalanUrunler = this.state.sepet.filter((s) => s.urun.id !== urun.id);
    this.setState({ sepet: kalanUrunler });
    alertify.error(urun.productName + " Sepetten Çıkarıldı", 2);
  };

  componentDidMount() {
    this.urunGetir();
  }

  render() {
    let KategoriBaslik = {
      baslik: "Kategori",
      ilaveBilgi: "Kategori İlave Bilgi",
    };

    let UrunListesiBaslik = {
      baslik: "Ürün Listesi",
      ilaveBilgi: "Ürün Listesi İlave Bilgi",
    };
    return (
      <div>
        <Navi sepettenCikar={this.sepettenCıkar} sepet={this.state.sepet} />
        <Container>
          <Row>
            <Col xs="3">
              <Kategori
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                baslik={KategoriBaslik}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <UrunListesi
                      sepeteEkle={this.sepeteEkle}
                      urunler={this.state.urunler}
                      seciliKategori={this.state.seciliKategori}
                      baslik={UrunListesiBaslik}
                    />
                  }
                />
                <Route
                  path="/sepet"
                  element={
                    <SepetListesi
                      sepet={this.state.sepet}
                      sepettenCıkar={this.sepettenCıkar}
                    />
                  }
                />
                <Route path="/form" element={<FormDemo />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
