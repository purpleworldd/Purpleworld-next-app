import React, { useState, useEffect } from "react";

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
  return (
    <div className="container">
      <h1 className="text-center p-5">Lets start the journey </h1>
      <div className="">
        <div className="row justify-content-center">
          <div className="col-md-2 col-2  justify-content-center slider">
            <div className="row text-center my-lg-5 my-sm-4 my-3 px-1">
              <button
                className={
                  currentImage >= 0
                    ? "slider-number-active text-center"
                    : "slider-number text-center"
                }
                onClick={() => {
                  setCurrentImage(0);
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
                1
              </button>
            </div>
            <div className="row text-center my-lg-5 my-sm-4 my-3 px-1">
              <button
                className={
                  currentImage >= 1
                    ? "slider-number-active text-center"
                    : "slider-number text-center"
                }
                onClick={() => {
                  setCurrentImage(1);
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
                2
              </button>
            </div>
            <div className="row text-center my-lg-5 my-sm-4 my-3 px-1">
              <button
                className={
                  currentImage >= 2
                    ? "slider-number-active text-center"
                    : "slider-number text-center"
                }
                onClick={() => {
                  setCurrentImage(2);
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
                3
              </button>
            </div>
            <div className="row text-center my-lg-5 my-sm-4 my-3 px-1">
              <button
                className={
                  currentImage >= 3
                    ? "slider-number-active text-center"
                    : "slider-number text-center"
                }
                onClick={() => {
                  setCurrentImage(3);
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
                4
              </button>
            </div>
            <div className="row text-center my-lg-5 my-sm-4 my-3 px-1">
              <button
                className={
                  currentImage >= 4
                    ? "slider-number-active text-center"
                    : "slider-number text-center"
                }
                onClick={() => {
                  setCurrentImage(4);
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
                5
              </button>
            </div>
            <div className="row text-center my-lg-5 my-sm-4 my-3 px-1">
              <button
                className={
                  currentImage >= 5
                    ? "slider-number-active text-center"
                    : "slider-number text-center"
                }
                onClick={() => {
                  setCurrentImage(5);
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
                6
              </button>
            </div>
            <div className="row text-center my-lg-5 my-sm-4 my-3 px-1">
              <button
                className={
                  currentImage >= 6
                    ? "slider-number-active text-center"
                    : "slider-number text-center"
                }
                onClick={() => {
                  setCurrentImage(6);
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
                7
              </button>
            </div>
          </div>
          <div
            className="col-md-6 col-10 text-center align-self-center"
            id="animate-steps"
          >
            <Steps
              heading={headarray[currentImage]}
              description={descriptionarray[currentImage]}
              illustration={steparray[currentImage]}
            />
          </div>
        </div>
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
        <img
          src={illustration}
          alt="step illustration"
          className="img-fluid illustration-img-img"
        />
      </div>
    </div>
  );
}
