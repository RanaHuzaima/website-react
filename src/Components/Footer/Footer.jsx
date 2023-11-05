import React from "react";

const Footer = () => {
  return (
    <>
      <div class="footer-section d-flex justify-content-center align-items-center flex-column p-5 text-white">
        <div>
          <img
            src="https://i.ibb.co/2drFwJ1/Healthy-Food-1-removebg-preview.png"
            alt="Healthy-Food-1-removebg-preview"
            class="footer-logo mb-3"
          />
        </div>
        <div class="text-center ">
          <p class="fs-1 fw-bold">AMERICAN FOOD</p>
          <p class="fs-2 fw-medium">The Best Taste Food</p>
        </div>
        <div class="fs-3 d-flex justify-content-center align-items-center gap-3 mb-4">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-whatsapp"></i>
        </div>
        <div class="fs-2 fw-medium">
          <p>yourwebsite.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
