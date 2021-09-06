import React, { useState, useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import testimonialData from "../data/testimonials.json";

function Testimonials() {
  const [fade, setFade] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const n = testimonialData.length;
  return (
    <section>
      <div className="testimonial">
        <h1 className="text-center fw-bold p-3 mt-5 sec-head">Testimonials</h1>
        <Carousel>
          {testimonialData.map((item, index) => (
            <Carousel.Item
              className="testimonial text-dark"
              key={index}
              interval={2500}
            >
              <Carousel.Caption
                className="px-3"
                style={{ bottom: "0 !important", top: "1.25rem" }}
              >
                <h3 className="fw-bold text-dark">{item.name}</h3>
                <p className="feedback text-dark">{item.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
