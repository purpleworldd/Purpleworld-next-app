import React from "react";
import { Image } from "react-bootstrap";

function Service() {
  return (
    <section className="container">
      <h1 className="text-center fw-bold p-3 mt-5 sec-head">Our Services</h1>
      <div className="row">
        <div
          className="col-lg-3 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/design1.jpg" alt="..." className="w-100" />
          <br />
          <br />
          <h4 className="fw-bold">Designing</h4>
          <p>
            Our Design Partners are experts in converting your imaginations in
            workable designs. You will get what you visualize.
          </p>
        </div>
        <div
          className="col-lg-3 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/design2.jpg" alt="..." className="w-100" />
          <br />
          <br />
          <h4 className="fw-bold">Turnkey Projects</h4>
          <p>
            Together the Operations team has experience of more than 1000+
            houses and 200+ years
          </p>
        </div>
        <div
          className="col-lg-3 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <Image
            src="/assets/img/modular-furniture.jpg"
            alt="..."
            className="w-100"
          />
          <br />
          <br />
          <h4 className="fw-bold">Modular Furniture</h4>
          <p>
            Our State of the art manufacturing facility has the most advanced
            machineries and stringent quality checks. We offer a 5 years
            warranty on all the products.
          </p>
        </div>
        <div
          className="col-lg-3 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <Image
            src="/assets/img/modular-furniture.jpg"
            alt="..."
            className="w-100"
          />
          <br />
          <br />
          <h4 className="fw-bold">Renovations</h4>
          <p>
            We are happy to renovate your home or any part of it. You can enjoy
            your new home in quickest time.
          </p>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/civil-work.png" alt="..." />
          <br />
          <h4 className="fw-bold">Civil Work</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/electrical.png" alt="..." />
          <br />
          <h4 className="fw-bold">Electrical</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/painting.png" alt="..." />
          <br />
          <h4 className="fw-bold">Painting</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/false-ceiling.png" alt="..." />
          <br />
          <h4 className="fw-bold">False Ceiling</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/plumbing.png" alt="..." />
          <br />
          <h4 className="fw-bold">Plumbing</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <Image src="/assets/img/flooring.png" alt="..." />
          <br />
          <h4 className="fw-bold">Floor and wall tiling</h4>
        </div>
      </div>
    </section>
  );
}

export default Service;
