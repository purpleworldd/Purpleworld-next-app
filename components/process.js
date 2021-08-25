import React, { useState, useEffect } from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";

const signup = "/assets/steps/signup1.png";
const visualize = "/assets/steps/visualize1.png";
const plan = "/assets/steps/plan1.png";
const site = "/assets/steps/site1.png";
const factory = "/assets/steps/factory1.png";
const install = "/assets/steps/install21.png";
const finish = "/assets/steps/finish.png";

function Process() {
  const [fade, setFade] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const steparray = [signup, visualize, plan, site, factory, install, finish];
  const headarray = [
    "SIGN UP",
    "THE VISUALIZATION",
    "LETS PLAN",
    "BEGINING",
    "MATERIALS",
    "INSTALLATION",
    "FINISHING",
  ];
  const descriptionarray = [
    "Signup to get in touch with us",
    "Start designing visuality with your designer. Pay 5% of approx investment",
    "Get defaulted design. Pay 45% of planned investment",
    "Start site work. Pay 40% of planned investment",
    "Get factory delivery",
    "Installation begins. Pay the remaining 5%",
    "Handover",
  ];
  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentImage((prevCurrentImage) =>
        prevCurrentImage === 6 ? 0 : prevCurrentImage + 1
      );
      if (fade) {
        document.getElementById("animate-steps").classList.add("toggleIn");
        document.getElementById("animate-steps").classList.remove("toggleOut");
      } else {
        document.getElementById("animate-steps").classList.add("toggleOut");
        document.getElementById("animate-steps").classList.remove("toggleIn");
      }
      setFade(!fade);
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  }, [currentImage, fade]);

  function makeButton(index) {
    return (
      <div
        className="row text-center slider-button justify-content-center"
        key={index}
      >
        <div
          className={
            currentImage >= index
              ? "slider-number-active py-1 text-center align-items-center justify-content-center"
              : "slider-number text-center"
          }
          onClick={() => {
            setCurrentImage(index);
            if (fade) {
              document
                .getElementById("animate-steps")
                .classList.add("toggleIn");
              document
                .getElementById("animate-steps")
                .classList.remove("toggleOut");
            } else {
              document
                .getElementById("animate-steps")
                .classList.add("toggleOut");
              document
                .getElementById("animate-steps")
                .classList.remove("toggleIn");
            }
            setFade(!fade);
          }}
        >
          {index + 1}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center fw-bold p-5">Lets start the journey </h1>
      <div className="">
        <Row className="justify-content-center">
          <Col lg={1} xs={2} className="justify-content-center slider">
            <Row className="text-center justify-content-center">
              {[...Array(7)].map((item, index) => makeButton(index))}
            </Row>
          </Col>
          <Col
            md={6}
            xs={10}
            className="text-center align-self-center"
            id="animate-steps"
          >
            <Steps
              heading={headarray[currentImage]}
              description={descriptionarray[currentImage]}
              illustration={steparray[currentImage]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Process;

function Steps({ heading, description, illustration }) {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{description}</p>
      <div className="illustration-img">
        <Image
          src={illustration}
          alt="step illustration"
          height="100%"
          width="100%"
          className="img-fluid illustration-img-img"
        />
      </div>
    </div>
  );
}
