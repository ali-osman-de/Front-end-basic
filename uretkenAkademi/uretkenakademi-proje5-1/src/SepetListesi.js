import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class SepetListesi extends Component {
  sepetRender() {
    return <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th>Kategori Id</th>
                <th>Ürün İsmi</th>
                <th>Birim Fiyat</th>
                <th>Units in stock</th>
                <th>Adet</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {this.props.sepet.map((sepetUrun) =>(
                <tr key={sepetUrun.urun.id}>
                    <td>{sepetUrun.urun.id}</td>
                    <td>{sepetUrun.urun.categoryId}</td>
                    <td>{sepetUrun.urun.productName}</td>
                    <td>{sepetUrun.urun.unitPrice}</td>
                    <td>{sepetUrun.urun.unitsInStock}</td>
                    <td>{sepetUrun.urun.adet}</td>
                    <Button onClick={()=>this.props.sepettenCıkar(sepetUrun.urun)}>Sil</Button>
                </tr>
            ))}
        </tbody>
    </Table>;
  }
  render() {
    return <div>{this.sepetRender()}</div>;
  }
}

export default SepetListesi;
