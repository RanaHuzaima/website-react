import React from "react";
import Product_item from "./Product_item";

const Product = (props) => {
  return (
    <>
      {props.product.map(product => <Product_item title={product.title} price={product.price} img={product.img} />)}
    </>
  );
};

export default Product;
