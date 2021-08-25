import Head from "next/head";
import Image from "next/image";
import {
  faCalendar,
  faEdit,
  faObjectGroup,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../components/contact";
import Main from "../components/home";
import Process from "../components/process";

const selfpace = "/assets/img/selfpace.jpg";
const blueprint = "/assets/img/blueprint.jpg";
const assist = "/assets/img/assist.jpg";

function Ornate() {
  return (
    <>
      <Head>
        <title>Ornate | PurpleWorld</title>
      </Head>
      <Main />
      <Container>
        <br />
        <br />
        <br />
        <h1 className="fw-bold text-center">Lavish Service: Ornate</h1>
        <Row>
          <Col sm={4} xs={12} className="text-center h5">
            <Image src={selfpace} alt="delivery" height={200} width={200} />
            {/* <FontAwesomeIcon
              color="#0275d8"
              icon={faCalendar}
              size="10x"
              className="py-4"
            /> */}
            <br />
            Design at your own pace
          </Col>
          <Col sm={4} xs={12} className="text-center h5">
            <Image src={blueprint} alt="delivery" height={200} width={200} />
            {/* <FontAwesomeIcon
              color="#0275d8"
              icon={faEdit}
              size="10x"
              className="py-4"
            /> */}
            <br />
            Everything customized for you
          </Col>
          <Col sm={4} xs={12} className="text-center h5">
            <Image src={assist} alt="delivery" height={200} width={200} />
            {/* <FontAwesomeIcon
              color="#0275d8"
              icon={faObjectGroup}
              size="10x"
              className="py-4"
            /> */}
            <br />
            Design Partner assistance in furniture and furnishing{" "}
          </Col>
        </Row>
      </Container>
      <Process />
      <Contact />
    </>
  );
}

export default Ornate;
