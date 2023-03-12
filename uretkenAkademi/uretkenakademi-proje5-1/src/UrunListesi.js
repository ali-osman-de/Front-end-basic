import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class UrunListesi extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.baslik.baslik}</h1>
        <h5>{this.props.seciliKategori}</h5>
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>In Pack</th>
              <th>Reorder Level</th>
            </tr>
          </thead>
          <tbody>
            {this.props.urunler.map((urun) => (
              <tr key={urun.id}>
                <th scope="row">{urun.id}</th>
                <td>{urun.productName}</td>
                <td>{urun.unitPrice}</td>
                <td>{urun.quantityPerUnit}</td>
                <td>{urun.ReorderLevel}</td>
                <td>
                  <Button
                    onClick={() => this.props.sepeteEkle(urun)}
                    color="info"
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UrunListesi;
