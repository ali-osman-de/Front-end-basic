import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategoriler: [
        { KategoriId: 1, KategoriIsim: "Computer", ilaveBilgi: "Kategori 1" },
        { KategoriId: 2, KategoriIsim: "Laptops", ilaveBilgi: "Kategori 2" },
        { KategoriId: 3, KategoriIsim: "Phone", ilaveBilgi: "Kategori 3" },
        { KategoriId: 4, KategoriIsim: "CD", ilaveBilgi: "Kategori 4" },
        { KategoriId: 5, KategoriIsim: "DVD", ilaveBilgi: "Kategori 5" },
        { KategoriId: 6, KategoriIsim: "Telephone", ilaveBilgi: "Kategori 6" },
      ],
    };
  }


  render() {
    return (
      <div>
        <h1>{this.props.baslik.baslik}</h1>
        <h6>{this.props.baslik.ilaveBilgi}</h6>
        <div>
          <p>
            The <code>numbered</code> prop can be used to opt into numbered list
            group items.
          </p>
          <ListGroup>
            {this.state.kategoriler.map((kategori) => (
              <ListGroupItem
                onClick={() => this.props.kategoriDegistir(kategori)}
                key={kategori.KategoriId}
              >
                {kategori.KategoriIsim}
              </ListGroupItem>
            ))}
          </ListGroup>
          <h4>{this.props.seciliKategori}</h4>
        </div>
      </div>
    );
  }
}

export default Kategori;
