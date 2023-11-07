import React from "react";
import "../../App.css";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* Desktop Header Start */}
      <nav class="navbar navbar-expand-lg bg-color d-none d-sm-block">
        <div class="container-fluid">
          <div className="d-none d-sm-none d-md-block">
            <div className="border-bottom">
              <input
                type="search"
                placeholder="Search here"
                className="text-white"
              />
              <span id="search">
                <i className="bi bi-search text-white "></i>
              </span>
            </div>
          </div>
          <div>
            <a className="navbar-brand" href="#">
              <img
                src="https://i.ibb.co/2drFwJ1/Healthy-Food-1-removebg-preview.png"
                alt="Logo"
                width="50"
              />
            </a>
          </div>
          <div className="d-flex gap-4 d-none d-sm-none d-md-block">
            <div className="d-flex gap-2 text-white ">
              <a href="#" className="text-white text-decoration-none">
                Register
              </a>
              /
              <a href="#" className="text-white text-decoration-none">
                Login
              </a>
              <div className="d-flex gap-3">
                <i className="bi bi-heart gap-4 text-white"></i>
                <i className="bi bi-cart3 text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Desktop Header End */}
      {/* Mobile Header Start */}
      <nav class="navbar navbar-expand-lg bg-color d-block d-sm-none">
        <div class="container-fluid">
          <div>
            <a className="navbar-brand" href="#">
              <img
                src="https://i.ibb.co/2drFwJ1/Healthy-Food-1-removebg-preview.png"
                alt="Logo"
                width="50"
              />
            </a>
          </div>
          <button
            className="navbar-toggler fs-1 text-white border-white d-block d-sm-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-block d-sm-none">
              <ul className="me-auto mb-2 mb-lg-0 list-unstyled text-white text-center fs-2 cursor-pointer ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="d-flex gap-4 align-items-center justify-content-center fs-2">
                <div className="d-flex gap-1 text-white ">
                  <a href="#" className="text-white text-decoration-none">
                    Register
                  </a>
                  /
                  <a href="#" className="text-white text-decoration-none">
                    Login
                  </a>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-heart gap-4 text-white"></i>
                  <i className="bi bi-cart3 text-white"></i>
                </div>
              </div>
              <form
                className="d-flex align-items-center justify-content-center fs-2"
                role="search"
              >
                <div className="border-bottom">
                  <input
                    type="search"
                    placeholder="Search here"
                    className="text-white"
                  />
                  <span id="search">
                    <i className="bi bi-search text-white "></i>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Header End */}
    </>
  );
};

export default Header;
