import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-between py-3 px-5 bg-color text-white">
        <div class="border-bottom">
          <input type="search" placeholder="Search here" class="text-white" />
          <span id="search">
            <i class="bi bi-search "></i>
          </span>
        </div>
        <div>
          <img
            src="https://i.ibb.co/2drFwJ1/Healthy-Food-1-removebg-preview.png"
            alt="Healthy-Food-1-removebg-preview"
          />
        </div>
        <div class="d-flex gap-4">
          <div class="d-flex gap-1 ">
            <a href="#" class="text-white text-decoration-none">
              Register
            </a>
            /
            <a href="#" class="text-white text-decoration-none">
              Login
            </a>
          </div>
          <div class="d-flex gap-3">
            <i class="bi bi-heart gap-4"></i>
            <i class="bi bi-cart3"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
