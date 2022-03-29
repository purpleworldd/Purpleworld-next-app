import React from "react";
import Link from "next/link";
import { Carousel, Button, Container } from "react-bootstrap";
function Main() {
  return (
    <>
      <Carousel className="mt-5">
        <Carousel.Item>
          <Container fluid className="img-gradient" id="img-carousel-1" />
          <Carousel.Caption>
            <h1 className="fw-bolder pw-head">Purple World</h1>
            <p className="masthead-content">
              Visit us for free design consultation
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid className="img-gradient" id="img-carousel-2" />
          <Carousel.Caption>
            <h1 className="fw-bolder pw-head">Purple World</h1>
            <p className="masthead-content">Consult Our Design Advisor</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid className="img-gradient" id="img-carousel-3" />
          <Carousel.Caption>
            <h1 className="fw-bolder pw-head">Purple World</h1>
            <p className="masthead-content">
              Book now to get complimentary Lounger Sofa
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid className="img-gradient" id="img-carousel-4" />
          <Carousel.Caption>
            <h1 className="fw-bolder pw-head">Purple World</h1>
            <p className="masthead-content">Consult Our Design Advisor</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid className="img-gradient" id="img-carousel-5" />
          <Carousel.Caption>
            <h1 className="fw-bolder pw-head">Purple World</h1>
            <p className="masthead-content">Price Match Guarantee</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Main;
