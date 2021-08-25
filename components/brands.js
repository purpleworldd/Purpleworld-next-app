import React from "react";
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

function Brands() {
  return (
    <>
      <div className="container">
        <h1 className="text-center py-5">We work with the best</h1>
        <div className="row self-align-center align-items-center">
          <div className="col-md-3 col-sm-6 col-6">
            <Image src={century_ply} width="200" alt="..." className="col-12" />
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <Image src={hettich} width="200" alt="..." className="col-12" />
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <Image src={asianpaints} width="200" alt="..." className="col-12" />
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
    </>
  );
}

export default Brands;
