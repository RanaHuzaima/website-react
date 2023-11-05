import React from "react";

const HeroSection = () => {
  return (
    <>
      <div class="herosection text-color ">
        <div class="py-5">
          <h1 class="fw-bold mb-0 display-2">AMERICAN FOOD</h1>
          <p class="display-4 fw-normal">The Best Taste Food</p>
          <div class="line mb-4"></div>
          <p class="mb-5 fs-4">
            Lorem Ipsum available, but the majority have <br /> suffered
            alteration in some form, by injected <br /> humour, or randomised
            words
          </p>
          <div class="d-flex gap-1">
            <button class="p-3 text-white btn-radius ">ORDER NOW</button>
            <i class="bi bi-arrow-left fs-3 text-white btn-icon d-flex align-items-center justify-content-center"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
