import React from "react";
import { Image } from "react-bootstrap";

function Service() {
  return (
    <section className="container">
      <h1 className="text-center p-3 mt-5 sec-head">Our Services</h1>
      <div className="row">
        <div
          className="col-lg-4 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/design1.jpg" alt="..." className="w-100" />
          <br />
          <br />
          <h4>Designing</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className="col-lg-4 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/design2.jpg" alt="..." className="w-100" />
          <br />
          <br />
          <h4>Turnkey Projects</h4>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div
          className="col-lg-4 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <Image
            src="/assets/img/modular-furniture.jpg"
            alt="..."
            className="w-100"
          />
          <br />
          <br />
          <h4>Modular Furniture</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/civil-work.png" alt="..." />
          <br />
          <h4>Civil Work</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/electrical.png" alt="..." />
          <br />
          <h4>Electrical</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/painting.png" alt="..." />
          <br />
          <h4>Painting</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/false-ceiling.png" alt="..." />
          <br />
          <h4>False Ceiling</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/plumbing.png" alt="..." />
          <br />
          <h4>Plumbing</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/flooring.png" alt="..." />
          <br />
          <h4>Floor and wall tiling</h4>
        </div>
      </div>
    </section>
  );
}

export default Service;
