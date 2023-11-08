import React from "react";

const Card = () => {
  return (
    <>
      <div className="container-fluid px-5 main-card justify-content-md-between d-flex flex-row flex-wrap">
        <div className="d-flex flex-column  mb-3">
          <div className="card-title text-center text-white p-4 fs-1">
            <p className="fs-1 lh-1">Basic</p>
            <p className="fw-bold lh-1">$50</p>
          </div>
          <div className="card-body text-center text-color p-5 fs-5">
            <p>6 Pics Chiken</p>
            <p>6 Pics Chiken</p>
            <p>6 Pics Chiken</p>
            <div>
              <button className="p-3 text-white btn-radius mt-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mb-3">
          <div className="card-title text-center text-white p-4 fs-1">
            <p className="fs-1 lh-1">Basic</p>
            <p className="fw-bold lh-1">$50</p>
          </div>
          <div className="card-body text-center text-color p-5 fs-5">
            <p>6 Pics Chiken</p>
            <p>6 Pics Chiken</p>
            <p>6 Pics Chiken</p>
            <div>
              <button className="p-3 text-white btn-radius mt-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mb-3">
          <div className="card-title text-center text-white p-4 fs-1">
            <p className="fs-1 lh-1">Basic</p>
            <p className="fw-bold lh-1">$50</p>
          </div>
          <div className="card-body text-center text-color p-5 fs-5">
            <p>6 Pics Chiken</p>
            <p>6 Pics Chiken</p>
            <p>6 Pics Chiken</p>
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
