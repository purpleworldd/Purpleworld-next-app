import Head from "next/head";
import Main from "../components/home";
import ValueProp from "../components/value-prop";
import About from "../components/about";
import Gallery from "../components/gallery";
import Service from "../components/service";
import Testimonials from "../components/testimonials";
import FAQs from "../components/faq";
import Contact from "../components/contact";
import Quote from "../components/quote";
import { Alert, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to PurpleWorld</title>
      </Head>
      <Main />
      <div>
        <Alert variant="primary" className="px-5 text-center">
          <Carousel indicators={false} controls={false}>
            <Carousel.Item className="promo text-black" interval={2500}>
              <Carousel.Caption
                className="align-middle"
                style={{ bottom: "0 !important", top: "1.25rem" }}
              >
                <h3 className="fw-bold text-dark promo-type">
                  Visit us for free design consultation
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="promo text-black" interval={2500}>
              <Carousel.Caption
                className="align-middle"
                style={{ bottom: "0 !important", top: "1.25rem" }}
              >
                <h3 className="fw-bold text-dark promo-type">
                  Book before 15th October to get complimentary Lounger Sofa
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="promo text-black" interval={2500}>
              <Carousel.Caption
                className="align-middle"
                style={{ bottom: "0 !important", top: "1.25rem" }}
              >
                <h3 className="fw-bold text-dark promo-type">
                  Price Match Guarantee
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Alert>
      </div>
      <ValueProp />
      <Quote />
      <About />
      <Gallery />
      <Service />
      <Container>
        <br />
        <br />
        <br />
        <Row className="justify-content-center align-items-center">
          <Col
            md={4}
            xs={5}
            className="text-center display-5 d-none d-sm-flex fw-bold"
            data-aos="fade-up"
          >
            250+ homes decorated
          </Col>
          <Col
            md={4}
            xs={5}
            className="text-center h3 d-flex d-sm-none fw-bold"
            data-aos="fade-up"
          >
            250+ homes decorated
          </Col>
          <Col md={8} xs={7} className="text-center" data-aos="fade-up">
            <Image
              fluid
              src="/assets/livingRoom_d/lr08.jpg"
              alt="..."
              className="shadow"
            />
          </Col>
        </Row>
      </Container>
      {/* <FAQs /> */}
      <Testimonials />
      <Contact />
    </div>
  );
}
