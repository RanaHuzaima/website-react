import React from "react";

const VideoSection2 = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-center gap-video text-color mt-5 ">
        <div>
          <div class="line2"></div>
          <div class="color"></div>
          <iframe
            width="520"
            height="390"
            src="https://www.youtube-nocookie.com/embed/kMnaNYZTIS4?si=I1za6VrkrcZ9nQhw&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <p class="display-3 fw-medium">
            Let food be thy medicine <br /> medicine by thy food.
          </p>
          <p class="fs-5 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliiss
            fafkshd impedit atq
            <br /> Alias impedit atque et corrupti optio consequatur ullam
            impedit atq Aliiss fafkshd <br /> Alias impedit atque et corrupti
            optio consequatur ullam impedit atq Aliiss fafkshd
            <br /> dolores quos nobis? Maxime.
          </p>
          <p class="fs-5 text-color ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliiss
            fafkshd impedit atq
            <br /> Alias impedit atque et corrupti optio.
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
