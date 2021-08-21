import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
function ValueProp() {
  return (
    <Container className="text-center" data-aos="fade-up">
      <h1 className="pt-5 fw-bold">Our Core</h1>
      <Row className="py-5">
        <Col xs={4}>
          <Image fluid src="/assets/img/design.png" alt="..." />
        </Col>

        <Col xs={4}>
          <Image fluid src="/assets/img/trust.png" alt="..." />
        </Col>

        <Col xs={4}>
          <Image fluid src="/assets/img/tech.png" alt="..." className="h-100" />
        </Col>

        <Col xs={4}>
          <h3 className="d-none d-sm-block">DESIGN</h3>
          <h6 className="d-block d-sm-none">DESIGN</h6>
          <p>Functionality and esthetics are at core of our Designs</p>
        </Col>
        <Col xs={4}>
          <h3 className="d-none d-sm-block">TRUST</h3>
          <h6 className="d-block d-sm-none">TRUST</h6>
          <p>We have built trust by Our transparent and ethical practices</p>
        </Col>

        <Col xs={4}>
          <h3 className="d-none d-sm-block">TECHNOLOGY</h3>
          <h6 className="d-block d-sm-none">TECHNOLOGY</h6>
          <p>
            We use latest Machinery and tools across processes for great finesse
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ValueProp;
