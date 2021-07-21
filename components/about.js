import React from "react";
import Link from "next/link";
// import abtImg from "/assets/img/yellowroom.jpg";
function About() {
  return (
    <section id="about" className="container">
      <div className="row">
        <div className="col-12 col-lg-6" data-aos="fade-up">
          <h1 className="text-center p-3">Why Purple World?</h1>
          <div className="fs-5 p-3">
            <h4>Collaborative Consultant</h4>
            <p>
              Interior design will often embrace elements such as light, colour
              and the use of specific fabrics.
            </p>
            <h4>Great designs</h4>
            <p>
              {" "}
              At Purple World, we have moved past the notion of considering
              interiors to be just a decor addition to your home and entered a
              realm where we now understand how your home can be turned into an
              abode where you and your family does not just live; but are able
              to thrive, rejuvenate and eventually get in touch with their
              blissful self for a much more meaningful life.
            </p>
            <h4>Best Raw Materials</h4>
            <p>
              {" "}
              We understand you and your needs Understanding your personality,
              lifestyle, design preference and specific needs, we interpret your
              story and turn it to reality through design and delivery.
            </p>
            <h4>Finest Installation</h4>
            <p>
              {" "}
              We exceed expectations; our Designers &amp; Design Mentors with
              expertise strive for perfection at every step. More importantly,
              we use only the best Superior quality materials for the best
              design output and built with the best brand associations -
              Hettich, Havells, Saint Gobain, etc with a team ensuring special
              products at best prices.
            </p>
          </div>
          <div className="text-center">
            <Link href="/details">
              <button className="btn btn-outline-secondary btn-lg mb-5">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-6" data-aos="fade-up">
          <img
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
