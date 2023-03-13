import { Container, Row, Col } from "reactstrap";
import Kategori from "./Kategori";
import Navi from "./Navi";
import UrunListesi from "./UrunListesi";
import React, { Component } from "react";
import alertify from "alertifyjs";

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
    alertify.success(urun.productName + " Sepete Eklendi",2);
  };

  sepettenCıkar = (urun) => {
    let kalanUrunler = this.state.sepet.filter((s) => s.urun.id !== urun.id);
    this.setState({ sepet: kalanUrunler });
    alertify.warning(urun.productName + " Sepetten Çıkarıldı",2);
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
            <Col xs="6">
              <Kategori
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                baslik={KategoriBaslik}
              />
            </Col>
            <Col xs="6">
              <UrunListesi
                sepeteEkle={this.sepeteEkle}
                urunler={this.state.urunler}
                seciliKategori={this.state.seciliKategori}
                baslik={UrunListesiBaslik}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
