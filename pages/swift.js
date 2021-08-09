import Head from "next/head";
import {
  faCalendarCheck,
  faDraftingCompass,
  faIndustry,
  faObjectUngroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../components/contact";
import Main from "../components/home";
import Process from "../components/process";

function Swift() {
  return (
    <>
      <Head>
        <title>Swift | PurpleWorld</title>
      </Head>
      <Main />
      <Container>
        <br />
        <br />
        <br />
        <h1 className="fw-bold text-center">Express Service: Swift</h1>
        <Row>
          <Col lg={3} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faCalendarCheck}
              size="10x"
              className="py-4"
            />
            <br />
            40 days delivery guaranteed
          </Col>
          <Col lg={3} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faIndustry}
              size="10x"
              className="py-4"
            />
            <br />
            Best Material used in modular furniture
          </Col>
          <Col lg={3} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faObjectUngroup}
              size="10x"
              className="py-4"
            />
            <br />
            Contemporary Designs
          </Col>
          <Col lg={3} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faDraftingCompass}
              size="10x"
              className="py-4"
            />
            <br />
            Quick access to Designer and Catalogues for faster design closure.
          </Col>
        </Row>
      </Container>
      <Process />
      <Contact />
    </>
  );
}

export default Swift;
