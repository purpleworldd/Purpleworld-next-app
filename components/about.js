import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
function About() {
  return (
    <section id="about" className="container">
      <div className="row">
        <div className="col-12 col-lg-6" data-aos="fade-up">
          <h1 className="text-center p-3 fw-bold">Why Purple World?</h1>
          <div className="fs-5 p-3">
            <h4 className="fw-bold">Collaborative Design Partners</h4>
            <p>
              We have moved past the notion of considering interiors to be just
              a decor addition to your home and entered a realm where we now
              understand how your home can be turned into an abode where you and
              your family does not just live; but are able to thrive, rejuvenate
              and eventually get in touch with their blissful self for a much
              more meaningful life.
            </p>
            <h4 className="fw-bold">Best Raw Materials</h4>
            <p>
              {" "}
              We work with industry leaders as their preferred partners. This
              helps us procure the best material at the right price which helps
              us keep our offerings competitive.
            </p>
            <h4 className="fw-bold">Finest Installation</h4>
            <p>
              {" "}
              Our installation and execution team focuses on craftsmanship in
              every job they do. Each one has more than 5 years of experience.
            </p>
          </div>
          {/* <div className="text-center">
            <Link href="/details">
              <button className="btn btn-outline-secondary btn-lg mb-5">
                Learn More
              </button>
            </Link>
          </div> */}
        </div>
        <div className="col-12 col-lg-6" data-aos="fade-up">
          <Image
            src="/assets/img/yellowroom.jpg"
            className="w-100 h-100 img-fluid shadow"
            alt="..."
          />
        </div>
      </div>
    </section>
  );
}

export default About;
