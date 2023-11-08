import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center px-5 flex-column">
        <div className="d-flex align-items-center justify-content-center">
          <p className="display-1 fw-medium text-color text-opacity">BLOG</p>
          <p className="position-absolute display-6 fw-bold text-color ">
            BLOG
          </p>
        </div>
        <p className="text-center text-color fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore
          obcaecati <br /> id repudiandae animi dolor quo.
        </p>
      </div>
      <div className="container-fluid px-5 d-flex flex-wrap justify-content-between mt-5 ">
        <div className="blog-box"></div>
        <div className="blog-box1 p-4 text-color mb-5">
          <p className="fs-3 fw-bold">Eat food. Not too much mostly plants.</p>
          <p className="fs-5">
            Lorem Ipsum available, but the <br />
            majority have suffered alteration <br /> some form, by injected
            humour <br />
            randomised words.
          </p>
          <div>
            <button className="p-3 text-white btn-radius ">READ MORE</button>
          </div>
        </div>
        <div className="blog-box mb-5"></div>
      </div>
    </>
  );
};

export default Blog;
