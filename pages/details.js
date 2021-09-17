import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Image } from "react-bootstrap";
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
const ebco = "/assets/img/ebco.png";
const aristo = "/assets/img/aristo.png";
const centuryLaminates = "/assets/img/century-laminates.png";
const greenlam = "/assets/img/greenlam.png";
const merino = "/assets/img/mernino.png";
const greenply = "/assets/img/greenply.png";
const hafele = "/assets/img/hafele.svg";
import Process from "../components/process";
function Details() {
  return (
    <section id="details">
      <Head>
        <title>About | PurpleWorld</title>
      </Head>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 col-lg-6" data-aos="fade-up">
            <h1 className="text-center p-3 fw-bold rem-2">Why Purple World?</h1>
            <div className="fs-5 p-3">
              <h4>Collaborative Design Partners</h4>
              <p className="rem-1">
                We have moved past the notion of considering interiors to be
                just a decor addition to your home and entered a realm where we
                now understand how your home can be turned into an abode where
                you and your family does not just live; but are able to thrive,
                rejuvenate and eventually get in touch with their blissful self
                for a much more meaningful life.
              </p>
              <h4>Best Raw Materials</h4>
              <p className="rem-1">
                {" "}
                We work with industry leaders as their preferred partners. This
                helps us procure the best material at the right price which
                helps us keep our offerings competitive.
              </p>
              <h4>Finest Installation</h4>
              <p className="rem-1">
                {" "}
                Our installation and execution team focuses on craftsmanship in
                every job they do. Each one has more than 5 years of experience.
              </p>
              <h4>5 Years Warranty</h4>
              <p className="rem-1">
                {" "}
                All our products come with 5 years warranty against
                manufacturing defect.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-up">
            <Image
              src={abtImg}
              className="w-100 h-100 img-fluid shadow"
              alt="..."
            />
          </div>
        </div>
        <div>
          <Process />
        </div>
        <div className="container">
          <h1 className="text-center py-5">We work with the best</h1>
          <div className="row self-align-center align-items-center">
            <div className="col-md-3 col-sm-6 col-6">
              <Image
                src={century_ply}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={hettich} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image
                src={asianpaints}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={bosch} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={fabindia} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image
                src={gulmohar_lane}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={jaquar} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={philips} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image
                src={saint_gobain}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={siemens} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={hafele} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={ebco} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={aristo} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image
                src={centuryLaminates}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={greenlam} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={merino} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <Image src={greenply} width="200" alt="..." className="col-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
