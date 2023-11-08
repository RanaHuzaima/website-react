import React from "react";
import "./VideoSection.css";
const Video_Section = () => {
  return (
    <>
      <div className="container-fluid d-flex gap-video text-color main p-md-5">
        <div>
          <p className="display-3 fw-bold">
            Let food be the medicine medicine by thy food.
          </p>
          <p className="fs-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliiss
            fafkshd impedit atq Alias impedit atque et corrupti optio
            consequatur ullam impedit atq Alias impedit atque et corrupti optio
            consequatur ullam impedit atq Aliiss fafkshd dolores quos nobis?
            Maxime.
          </p>
          <p className="fs-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliiss
            fafkshd impedit atq Alias impedit atque et corrupti optio.
          </p>
          <div className="d-flex gap-1">
            <button className="p-3 text-white btn-radius ">READ MORE</button>
            <i className="bi bi-arrow-left fs-3 text-white btn-icon d-flex align-items-center justify-content-center"></i>
          </div>
        </div>
        <div className="position-relative video-div">
          <div className="video-border"></div>
          <div className="color d-flex justify-content-end"></div>
          <iframe
            src="https://www.youtube-nocookie.com/embed/kMnaNYZTIS4?si=I1za6VrkrcZ9nQhw&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video_Section;
