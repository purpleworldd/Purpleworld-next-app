import React from "react";
import Link from "next/link";
const abtImg = "/assets/img/detail-img1.jpg";
const century_ply = "/assets/img/century_ply.png";
const hettich = "/assets/img/hettich.png";
const asianpaints = "/assets/img/asianpaints.png";
const bosch = "/assets/img/bosch.png";
const fabindia = "/assets/img/fabindia.png";
const gulmohar_lane = "/assets/img/gulmohar_lane.png";
const jaquar = "/assets/img/jaquar.png";
const philips = "/assets/img/philips.png";
const saint_gobain = "/assets/img/saint_gobain.png";
const siemens = "/assets/img/siemens.png";
import Process from "../components/process";
function Details() {
  return (
    <section id="details">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-xl-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="text-center p-3">Why Purple World?</h1>
            <p className="fs-4 p-3">
              Interior design will often embrace elements such as light, colour
              and the use of specific fabrics. At Purple World, we have moved
              past the notion of considering interiors to be just a decor
              addition to your home and entered a realm where we now understand
              how your home can be turned into an abode where you and your
              family does not just live; but are able to thrive, rejuvenate and
              eventually get in touch with their blissful self for a much more
              meaningful life. We understand you and your needs Understanding
              your personality, lifestyle, design preference and specific needs,
              we interpret your story and turn it to reality through design and
              delivery. We exceed expectations; our Designers &amp; Design
              Mentors with expertise strive for perfection at every step. More
              importantly, we use only the best Superior quality materials for
              the best design output and built with the best brand associations
              - Hettich, Havells, Saint Gobain, etc with a team ensuring special
              products at best prices.
            </p>
            <div className="text-center">
              <Link href="/contact">
                <button className="btn btn-outline-secondary btn-lg mb-5">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-12 col-xl-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={abtImg} className="w-100 h-100 img-fluid" alt="..." />
          </div>
        </div>
        <div>
          <Process />
        </div>
        <div className="container">
          <h1 className="text-center py-5">We work with the best</h1>
          <div className="row self-align-center">
            <div className="col-md-3 col-sm-6 col-6">
              <img src={century_ply} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img src={hettich} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img src={asianpaints} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img src={bosch} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img src={fabindia} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src={gulmohar_lane}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img src={jaquar} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img src={philips} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src={saint_gobain}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img src={siemens} width="200" alt="..." className="col-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
