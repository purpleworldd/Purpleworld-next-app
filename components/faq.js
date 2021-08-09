import React from "react";
import { Container, Accordion } from "react-bootstrap";
import faqs from "../data/faq.json";

function FAQs() {
  return (
    <section>
      <Container>
        <h1
          className="text-center fw-bold p-3 mt-5 sec-head"
          data-aos="fade-up"
        >
          FAQs
        </h1>
        <Accordion data-aos="fade-up">
          {faqs.map((item, index) => (
            <Accordion.Item eventKey={`"${item.number}"`} key={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <br />
        <br />
      </Container>
    </section>
  );
}

export default FAQs;
