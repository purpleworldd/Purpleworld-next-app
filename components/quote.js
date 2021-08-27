import Link from "next/link";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Quote() {
  return (
    <Container className="mb-5 pb-3">
      <h1 className="fw-bold text-center">Choose your service type</h1>
      <br />
      <br />
      <Row className="justify-content-center">
        <Col md={4} xs={12} data-aos="fade-up">
          <Card className="shadow">
            <Card.Img variant="top" src="/assets/livingRoom_d/lr03.jpg" />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">Swift</Card.Title>
              <Card.Text>Express service</Card.Text>
              <Link href="/swift">
                <Button variant="outline-secondary">Learn More </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} data-aos="fade-up">
          <Card className="shadow">
            <Card.Img variant="top" src="/assets/livingRoom_d/lr05.jpg" />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">Ornate</Card.Title>
              <Card.Text>Lavish service</Card.Text>
              <Link href="/ornate">
                <Button variant="outline-secondary">Learn More </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} data-aos="fade-up">
          <Card className="shadow">
            <Card.Img variant="top" src="/assets/bedroom_d/bd20.jpg" />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">Makeover</Card.Title>
              <Card.Text>Renovation service</Card.Text>
              <Link href="/makeover">
                <Button variant="outline-secondary">Learn More </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Quote;
