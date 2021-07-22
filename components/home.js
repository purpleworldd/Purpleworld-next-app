import React from "react";
import Link from "next/link";
import { Carousel, Button } from "react-bootstrap";
function Main() {
  return (
    <>
      <section>
        <Carousel>
          <Carousel.Item>
            <div className="img-gradient" id="img-carousel-1" />
            <Carousel.Caption>
              <h1 className="fw-bolder">Purple World</h1>
              <p>Consult Our Interior Design Advisor</p>
              <Link href="/contact">
                <Button variant="danger" className="rounded-pill fw-bold px-4">
                  Consult our designer
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-gradient" id="img-carousel-2" />
            <Carousel.Caption>
              <h1 className="fw-bolder">Purple World</h1>
              <p>Consult Our Interior Design Advisor</p>
              <Link href="/contact">
                <Button variant="danger" className="rounded-pill fw-bold px-4">
                  Consult our designer
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-gradient" id="img-carousel-3" />
            <Carousel.Caption>
              <h1 className="fw-bolder">Purple World</h1>
              <p>Consult Our Interior Design Advisor</p>
              <Link href="/contact">
                <Button variant="danger" className="rounded-pill fw-bold px-4">
                  Consult our designer
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

export default Main;
