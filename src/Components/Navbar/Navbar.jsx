import React from "react";
import "../../App.css";

const Navbar = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center py-3 px-5 gap-5 fs-4">
        <a href="#" class="text-color text-decoration-none fw-medium">
          HOME
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium">
          ABOUT US
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium">
          SERVICE
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium">
          PRICING
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium">
          BLOG
        </a>
        <a href="#" class="text-color text-decoration-none fw-medium">
          CONTACT
        </a>
      </div>
    </>
  );
};

export default Navbar;
