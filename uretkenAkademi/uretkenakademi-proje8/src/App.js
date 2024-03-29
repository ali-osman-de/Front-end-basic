import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products";
import BasketCart from "./components/basket-cart";

function App() {
  return (
    <div className="App">
      <h1>Alışveriş Listem</h1>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/basket" element={<BasketCart />} />
      </Routes>
    </div>
  );
}

export default App;
