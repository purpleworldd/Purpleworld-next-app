import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../components/contact";
import Process from "../components/process";

const finishing = "/assets/img/finishing.jpg";
const debris = "/assets/img/debris.jpg";
const removal = "/assets/img/removal.jpg";
const newdesign = "/assets/img/newdesign.jpg";
const procure = "/assets/img/procure.jpg";

function Makeover() {
  return (
    <>
      <Head>
        <title>Makeover | PurpleWorld</title>
      </Head>
      <Container>
        <br />
        <br />
        <br />
        <h1 className="fw-bold text-center display-4 pt-3 pb-5">
          Renovation Service: Makeover
        </h1>
        <Row className="justify-content-between">
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <Image src={removal} alt="delivery" height={200} width={200} />
            <br />
            Removal of existing facilities/ items
          </Col>
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <Image src={debris} alt="delivery" height={200} width={200} />
            <br />
            Debris removal
          </Col>
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <Image src={newdesign} alt="delivery" height={200} width={200} />
            <br />
            New Design
          </Col>
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <Image src={procure} alt="delivery" height={200} width={200} />
            <br />
            Assistance in procuring suitable items
          </Col>
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <Image src={finishing} alt="delivery" height={200} width={200} />
            <br />
            Execution as per design
          </Col>
        </Row>
      </Container>
      <Process />
      <Contact />
    </>
  );
}

export default Makeover;
