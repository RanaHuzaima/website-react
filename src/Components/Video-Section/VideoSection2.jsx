import React from "react";
import "./VideoSection.css";

const VideoSection2 = () => {
  return (
    <>
      <div class="container-fluid d-flex gap-video text-color p-0 p-md-5 main">
        <div class="position-relative">
          <div class="video-border"></div>
          <div class="color d-flex justify-content-end"></div>
          <iframe
            src="https://www.youtube-nocookie.com/embed/kMnaNYZTIS4?si=I1za6VrkrcZ9nQhw&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="mt-4">
          <p class="display-3 fw-bold">
            Let food be the medicine medicine by thy food.
          </p>
          <p class="fs-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliiss
            fafkshd impedit atq Alias impedit atque et corrupti optio
            consequatur ullam impedit atq Alias impedit atque et corrupti optio
            consequatur ullam impedit atq Aliiss fafkshd dolores quos nobis?
            Maxime.
          </p>
          <p class="fs-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliiss
            fafkshd impedit atq Alias impedit atque et corrupti optio.
          </p>
          <div class="d-flex gap-1">
            <button class="p-3 text-white btn-radius ">READ MORE</button>
            <i class="bi bi-arrow-left fs-3 text-white btn-icon d-flex align-items-center justify-content-center"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection2;
