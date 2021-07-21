import React from "react";
import Link from "next/link";
function Main() {
  return (
    <section id="home">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-gradient" id="img-carousel-1">
              <div className="carousel-caption d-block fw-bolder">
                <h1 className="fw-bolder">Purple World</h1>
                <p>Consult Our Interior Design Advisor</p>
                <Link href="/contact">
                  <button className="btn btn-danger rounded-pill fw-bold px-4 pb-2">
                    Consult our designer
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-gradient" id="img-carousel-2"></div>
            <div className="carousel-caption d-block fw-bolder">
              <h1 className="fw-bolder">Purple World</h1>
              <p>Consult Our Interior Design Advisor</p>
              <Link href="/contact">
                <button className="btn btn-danger rounded-pill fw-bold px-4">
                  Consult our designer
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-gradient" id="img-carousel-3"></div>
            <div className="carousel-caption d-block fw-bolder">
              <h1 className="fw-bolder">Purple World</h1>
              <p>Consult Our Interior Design Advisor</p>
              <Link href="/contact">
                <button className="btn btn-danger rounded-pill fw-bold px-4">
                  Consult our designer
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Main;
