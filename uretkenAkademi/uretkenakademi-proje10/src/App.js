import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
