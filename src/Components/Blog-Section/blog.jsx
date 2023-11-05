import React from "react";

const Blog = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-center p-5 flex-column">
        <div class="d-flex align-items-center justify-content-center">
          <p class="display-1 fw-medium text-color text-opacity">BLOG</p>
          <p class="position-absolute display-6 fw-bold text-color ">BLOG</p>
        </div>
        <p class="text-center text-color fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore
          obcaecati <br /> id repudiandae animi dolor quo.
        </p>
      </div>
      <div class="d-flex align-items-center justify-content-center mb-5 ">
        <div class="blog-box"></div>
        <div class="blog-box1 p-4 text-color">
          <p class="fs-3 fw-bold">Eat food. Not too much mostly plants.</p>
          <p class="fs-5">
            Lorem Ipsum available, but the <br />
            majority have suffered alteration <br /> some form, by injected
            humour <br />
            randomised words.
          </p>
          <div>
            <button class="p-3 text-white btn-radius ">READ MORE</button>
          </div>
        </div>
        <div class="blog-box"></div>
      </div>
    </>
  );
};

export default Blog;
