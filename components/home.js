import React from "react";
import Link from "next/link";
import { Carousel, Button, Container } from "react-bootstrap";
function Main() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Container fluid className="img-gradient" id="img-carousel-1" />
          <Carousel.Caption>
            <h1 className="fw-bolder">Purple World</h1>
            <p className="masthead-content">
              Consult Our Interior Design Advisor
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid className="img-gradient" id="img-carousel-2" />
          <Carousel.Caption>
            <h1 className="fw-bolder">Purple World</h1>
            <p className="masthead-content">
              Consult Our Interior Design Advisor
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid className="img-gradient" id="img-carousel-3" />
          <Carousel.Caption>
            <h1 className="fw-bolder">Purple World</h1>
            <p className="masthead-content">
              Consult Our Interior Design Advisor
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Main;
