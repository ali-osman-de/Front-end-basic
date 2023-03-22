import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="ui equal width grid" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards" style={{
                height: '500px',
                width: '250px'
            }}>
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} style={{
                    height: '100%',
                    width: '100%'
                  }} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return <>{renderList}</>;
  };

export default ProductComponent;
