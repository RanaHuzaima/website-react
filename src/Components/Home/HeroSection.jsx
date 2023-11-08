import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="herosection">
        <div className="container-fluid text-color p-md-5 py-5">
          <h1 className="fw-bold mb-0 display-1">AMERICAN FOOD</h1>
          <p className="display-3 fw-normal">The Best Taste Food</p>
          <div className="line mb-4"></div>
          <p className="mb-5 fs-3">
            Indulge in the diverse flavors of American <br /> cuisine, from
            juicy burgers and crispy fried <br /> chicken to comforting apple
            pie.
          </p>
          <div className="d-flex gap-1">
            <button className="p-3 text-white btn-radius ">ORDER NOW</button>
            <i className="bi bi-arrow-left fs-3 text-white btn-icon d-flex align-items-center justify-content-center"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
