import Head from "next/head";
import {
  faHouseDamage,
  faDraftingCompass,
  faTrash,
  faObjectUngroup,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../components/contact";
import Main from "../components/home";
import Process from "../components/process";

function Makeover() {
  return (
    <>
      <Head>
        <title>Makeover | PurpleWorld</title>
      </Head>
      <Main />
      <Container>
        <br />
        <br />
        <br />
        <h1 className="fw-bold text-center">Renovation Service: Makeover</h1>
        <Row className="justify-content-between">
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faHouseDamage}
              size="10x"
              className="py-4"
            />
            <br />
            Removal of existing facilities/ items
          </Col>
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faTrash}
              size="10x"
              className="py-4"
            />
            <br />
            Debris removal
          </Col>
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faObjectUngroup}
              size="10x"
              className="py-4"
            />
            <br />
            New Design
          </Col>
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faHandsHelping}
              size="10x"
              className="py-4"
            />
            <br />
            Assistance in procuring suitable items
          </Col>
          <Col lg={2} sm={6} xs={12} className="text-center h5">
            <FontAwesomeIcon
              color="#0275d8"
              icon={faDraftingCompass}
              size="10x"
              className="py-4"
            />
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
