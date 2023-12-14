// ProductList.js
import React from "react";
import "./App.css";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>По вашему запросу ничего не найдено</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="product-description-property">{product.description} </p>
          <p className="product-color-property">
            <p> Цвет:</p> {product.color}{" "}
          </p>
          <p className="product-category-property">
            <p> Категория:</p> {product.category}{" "}
          </p>
          <p className="product-price-property">
            <p>Цена:</p> {product.price}{" "}
          </p>
          <p className="product-rating-property">
            <p> Рейтинг:</p> {product.rating}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductList);
