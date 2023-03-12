import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategoriler: [
        { id: 1, KategoriIsim: "Bilgisayar" },
        { id: 2, KategoriIsim: "Laptop" },
        { id: 3, KategoriIsim: "CD" },
        { id: 4, KategoriIsim: "DVD" },
        { id: 5, KategoriIsim: "Television" },
      ],
    };
  }

  kategoriGetir() {
    fetch("http://localhost:3000/categories")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ kategoriler: data }));
  }

  componentDidMount() {
    this.kategoriGetir();
  }

  render() {
    return (
      <div>
        <h1>{this.props.baslik.baslik}</h1>
        <h5>{this.props.baslik.ilaveBilgi}</h5>
        <div>
          <p>
            The <code>numbered</code> prop can be used to opt into numbered list
            group items.
          </p>
          <ListGroup>
            {" "}
            {this.state.kategoriler.map((kategori) => (
              <ListGroupItem
                active={
                  kategori.categoryName === this.props.seciliKategori
                    ? true
                    : false
                }
                onClick={() => this.props.kategoriDegistir(kategori)}
                key={kategori.id}
              >
                {kategori.categoryName}
              </ListGroupItem>
            ))}
          </ListGroup>
          <h5>{this.props.seciliKategori}</h5>
        </div>
      </div>
    );
  }
}

export default Kategori;
