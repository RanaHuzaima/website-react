import React from "react";

const Card = () => {
  return (
    <>
      <div className="container-fluid px-5 main-card justify-content-md-around d-flex flex-row flex-wrap justify-content-center">
        <div className="d-flex flex-column  mb-5 bg-card card-width ">
          <div className=" text-center text-white p-4">
            <p className="display-2 lh-1">Basic</p>
            <p className="fw-bold display-1 lh-1">$50</p>
          </div>
          <div className="card-body text-center text-color p-5">
            <p className="fs-3">6 Pics Chiken</p>
            <p className="fs-3">6 Pics Chiken</p>
            <p className="fs-3">6 Pics Chiken</p>
            <div>
              <button className="p-3 fs-3 text-white btn-radius mt-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mb-5 bg-card card-width ">
          <div className=" text-center text-white p-4">
            <p className="display-2 lh-1">Basic</p>
            <p className="fw-bold display-1 lh-1">$80</p>
          </div>
          <div className="card-body text-center text-color p-5 fs-5">
            <p className="fs-3">6 Pics Chiken</p>
            <p className="fs-3">6 Pics Chiken</p>
            <p className="fs-3">6 Pics Chiken</p>
            <div>
              <button className="p-3 text-white btn-radius mt-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mb-5 bg-card card-width">
          <div className=" text-center text-white p-4">
            <p className="display-2 lh-1">Basic</p>
            <p className="fw-bold display-1 lh-1">$120</p>
          </div>
          <div className="card-body text-center text-color p-5 fs-5">
            <p className="fs-3">6 Pics Chiken</p>
            <p className="fs-3">6 Pics Chiken</p>
            <p className="fs-3">6 Pics Chiken</p>
            <div>
              <button className="p-3 text-white btn-radius mt-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
