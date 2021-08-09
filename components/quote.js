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
        <Col md={6} xs={12} data-aos="fade-up">
          <Card>
            <Card.Img variant="top" src="/assets/bedroom_d/bd10.jpg" />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">Swift</Card.Title>
              <Card.Text>Try our express service</Card.Text>
              <Link href="/swift">
                <Button variant="outline-secondary">Learn More </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xs={12} data-aos="fade-up">
          <Card>
            <Card.Img variant="top" src="/assets/bedroom_d/bd13.jpg" />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">Ornate</Card.Title>
              <Card.Text>Try our Lavish service</Card.Text>
              <Link href="/ornate">
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
