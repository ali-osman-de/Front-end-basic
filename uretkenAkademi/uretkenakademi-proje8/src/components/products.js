import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBasket } from "../redux/action/index.action";
import "./products.css";

const Products = (props) => {
  return (
    <div>
      <h2>
        <span>Alınacaklar Listem</span>
        <br></br>
        <Link className="link" to="/basket">
          Sepet Özeti &#10095;
        </Link>
      </h2>
      {props.productList.map((product) => (
        <div className="product">
          <img src={product.image} alt={product.name} />
          <div>
            <h4>{product.name}</h4>
            <p>{product.price}₺</p>
            <button
              className="general"
              onClick={() => props.addBasket(product)}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};

export default connect(mapStateToProps, { addBasket })(Products);
