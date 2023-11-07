import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="text-center gap-4 py-3 px-5 fs-3 gap-4 d-none d-sm-block navbar">
        <a href="#" class="text-color text-decoration-none fw-medium me-3">
          HOME
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium me-3 ">
          ABOUT US
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium me-3 ">
          SERVICE
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium me-3 ">
          PRICING
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium me-3 ">
          BLOG
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium ">
          CONTACT
        </a>
      </div>
    </>
  );
};

export default Navbar;
