import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
function ValueProp() {
  return (
    <Container className="text-center" data-aos="fade-up">
      <Row className="py-5">
        <Col xs={4}>
          <Image fluid src="/assets/img/d.png" alt="..." />
        </Col>

        <Col xs={4}>
          <Image fluid src="/assets/img/ch.png" alt="..." />
        </Col>

        <Col xs={4}>
          <Image fluid src="/assets/img/tec.png" alt="..." />
        </Col>

        <Col xs={4}>
          <h3 className="d-none d-sm-block">DESIGN</h3>
          <h6 className="d-block d-sm-none">DESIGN</h6>
          <p>
            We design by combining the esthetics of the space, functional
            requirement by the client and consideration of durability
          </p>
        </Col>
        <Col xs={4}>
          <h3 className="d-none d-sm-block">TRUST</h3>
          <h6 className="d-block d-sm-none">TRUST</h6>
          <p>
            We are very transparent and ethical in all our interactions
            andpractice
          </p>
        </Col>

        <Col xs={4}>
          <h3 className="d-none d-sm-block">TECHNOLOGY</h3>
          <h6 className="d-block d-sm-none">TECHNOLOGY</h6>
          <p>
            Our machines and design platform is the latest available in the
            market to providebest of the results
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ValueProp;
