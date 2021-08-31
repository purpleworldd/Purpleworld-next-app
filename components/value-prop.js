import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
function ValueProp() {
  return (
    <Container className="text-center" data-aos="fade-up">
      <h1 className="pt-5 fw-bold">Our Core</h1>
      <Row className="pb-5">
        <Col xs={4} className="d-flex justify-content-center">
          <Image
            fluid
            src="/assets/img/design.png"
            alt="..."
            className="align-self-center d-flex py-5 value-prop-image"
          />
        </Col>

        <Col xs={4} className="d-flex justify-content-center">
          <Image
            fluid
            src="/assets/img/trust.png"
            alt="..."
            className="align-self-center d-flex py-5 value-prop-image"
          />
        </Col>

        <Col xs={4} className="d-flex justify-content-center">
          <Image
            fluid
            src="/assets/img/tech.png"
            alt="..."
            className="d-flex align-self-center py-5 value-prop-image"
          />
        </Col>

        <Col xs={4}>
          <h3 className="d-none d-sm-block">DESIGN</h3>
          <h6 className="fw-bold d-block d-sm-none">DESIGN</h6>
          <p className="value-prop-text">
            Functionality and aesthetics are at core of our designs
          </p>
        </Col>
        <Col xs={4}>
          <h3 className="d-none d-sm-block">TRUST</h3>
          <h6 className="fw-bold d-block d-sm-none">TRUST</h6>
          <p className="value-prop-text">
            We have built trust by our transparent and ethical practices
          </p>
        </Col>

        <Col xs={4}>
          <h3 className="d-none d-sm-block">TECHNOLOGY</h3>
          <h6 className="fw-bold d-block d-sm-none">TECHNOLOGY</h6>
          <p className="value-prop-text">
            We use latest machinery and tools across processes for great finesse
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ValueProp;
