import React, { useState, useEffect } from "react";
import { Table, Alert } from "reactstrap";

function TableCoins() {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    try {
      const res = await fetch("https://data.binance.com/api/v3/ticker/24hr");
      const data = await res.json();
      setCoins(data);
    } catch (e) {
      alert("Api error");
    }
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <div>
      <h3 className="text-center display-5 ">Marketing<hr/></h3>
      <Table borderless>
        <thead>
          <tr className="text-center">
            <th>Symbol</th>
            <th>Price Change</th>
            <th>Price Change Percent</th>
            <th>Last Price</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((data) => (
            <tr key={data.name} className="text-center">
              <td>
                <Alert color="info"> {data.symbol}</Alert>
              </td>
              <td>
                <Alert color="primary">{data.priceChange}</Alert>
              </td>
              <td>
                <Alert color="danger">{data.priceChangePercent}</Alert>
              </td>
              <td>
                <Alert color="warning">{data.lastPrice}</Alert>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableCoins;
