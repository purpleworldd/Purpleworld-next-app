import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import testimonialData from "../data/testimonials.json";

function Testimonials() {
  const [fade, setFade] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentImage((prevCurrentImage) =>
        prevCurrentImage === 9 ? 0 : prevCurrentImage + 1
      );
      if (fade) {
        document.getElementById("test").classList.add("toggleIn");
        document.getElementById("test").classList.remove("toggleOut");
      } else {
        document.getElementById("test").classList.add("toggleOut");
        document.getElementById("test").classList.remove("toggleIn");
      }
      setFade(!fade);
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  }, [currentImage, fade]);
  return (
    <section>
      <div className="testimonial">
        <h1 className="text-center fw-bold p-3 mt-5 sec-head">Testimonials</h1>
        <div className="container" data-aos="fade-up">
          <div className="card">
            <div className="row justify-content-center">
              <div className="carousel-control-prev">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="fa-4x"
                  onClick={() => {
                    currentImage > 0
                      ? setCurrentImage(currentImage - 1)
                      : setCurrentImage(9);
                    if (fade) {
                      document.getElementById("test").classList.add("toggleIn");
                      document
                        .getElementById("test")
                        .classList.remove("toggleOut");
                    } else {
                      document
                        .getElementById("test")
                        .classList.add("toggleOut");
                      document
                        .getElementById("test")
                        .classList.remove("toggleIn");
                    }
                    setFade(!fade);
                  }}
                />
              </div>
              <div className="col-md-8 col-12 text-center align-self-center">
                <div className="pt-3" id="test">
                  <Image
                    src={testimonialData[currentImage].image}
                    alt="current"
                    className="align-self-center testimonial-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      {testimonialData[currentImage].name}
                    </h5>
                    <p className="card-text">
                      {testimonialData[currentImage].text}
                    </p>
                  </div>
                </div>
                <div className="carousel-control-next">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="fa-4x"
                    onClick={() => {
                      currentImage < 9
                        ? setCurrentImage(currentImage + 1)
                        : setCurrentImage(0);
                      if (fade) {
                        document
                          .getElementById("test")
                          .classList.add("toggleIn");
                        document
                          .getElementById("test")
                          .classList.remove("toggleOut");
                      } else {
                        document
                          .getElementById("test")
                          .classList.add("toggleOut");
                        document
                          .getElementById("test")
                          .classList.remove("toggleIn");
                      }
                      setFade(!fade);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
