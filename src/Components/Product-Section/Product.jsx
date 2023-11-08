import React from "react";

const Product = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-center product-gap text-color mb-5 flex-wrap ">
        <div>
          <div class="d-flex justify-content-between fw-bold product-title">
            <div>Peanut butter</div>
            <div>$45</div>
          </div>
          <p class="product-text">
            Lorem Ipsum available, but the majority have suffered alteration in
            <br />
            some form, by injected humour, or randomised words which don't
            <br />
            look even slightly believable. If you are going to use a passage
            <br />
            of Lorem Ipsum, you need to be sure
          </p>
          <div class="d-flex gap-1">
            <button class="p-3 text-white btn-radius ">BUY NOW</button>
          </div>
        </div>
        <div>
          <div class="product-img">
            <img
              src="https://www.seekpng.com/png/full/11-113394_cooked-chicken-png-transparent-image-chicken-leg-piece.png"
              alt="chicken-leg-piece"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
