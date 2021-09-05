import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../components/contact";
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
      <Container>
        <br />
        <br />
        <br />
        <h1 className="fw-bold text-center display-4 pt-3 pb-5">
          Custom Service: Ornate
        </h1>
        <Row>
          <Col sm={4} xs={12} className="text-center h5">
            <Image src={selfpace} alt="delivery" height={200} width={200} />
            <br />
            Design at your own pace
          </Col>
          <Col sm={4} xs={12} className="text-center h5">
            <Image src={blueprint} alt="delivery" height={200} width={200} />
            <br />
            Everything customized for you
          </Col>
          <Col sm={4} xs={12} className="text-center h5">
            <Image src={assist} alt="delivery" height={200} width={200} />
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
