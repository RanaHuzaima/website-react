import React from "react";
import "./Product_item.css";

const Product_item = ({ title, price, img }) => {
  return (
    <>
      <div className="container-fluid d-flex p-md-5 product-gap text-color flex-wrap ">
        <div>
          <div className="d-flex justify-content-between fw-bold product-title">
            <div>{title}</div>
            <div>{price}</div>
          </div>
          <p className="product-text">
            Lorem Ipsum available, but the majority have suffered alteration in
            <br />
            some form, by injected humour, or randomised words which don't
            <br />
            look even slightly believable. If you are going to use a passage
            <br />
            of Lorem Ipsum, you need to be sure
          </p>
          <div className="d-flex gap-1">
            <button className="p-3 text-white btn-radius ">BUY NOW</button>
          </div>
        </div>
        <div>
          <div className="product-img ">
            <img src={img} alt="chicken-leg-piece" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_item;
