import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md text-center p-3 align-self-center d-md-block d-none">
            <h4 className="py-2">Get in touch </h4>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} />
              &nbsp; Whatsapp
              <br />
              +91 9632287903
              <br />
              <br />
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; Email Us
              <br />
              info@purpleworld.in
            </p>
          </div>
          <div className="d-md-none d-block text-center">
            <br />
            <Row>
              <Col className="align-self-center">
                <div className="col-md text-center align-self-center">
                  <h4 className="pb-2">Get in touch </h4>
                  <p>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    &nbsp; Whatsapp
                    <br />
                    +91 9632287903
                    <br className="d-sm-block d-none" />
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp; Email Us
                    <br />
                    info@purpleworld.in
                  </p>
                </div>
              </Col>
              <Col className="align-self-center">
                <h3 className="mb-3">Links</h3>
                <div>
                  <Link className="footer-links" href="/">
                    Home
                  </Link>
                </div>
                <div>
                  <Link className="footer-links" href="/details">
                    About
                  </Link>
                </div>
                <div>
                  <Link className="footer-links" href="/gallery">
                    Gallery
                  </Link>
                </div>
                <div>
                  <Link className="footer-links" href="/contact">
                    Contact
                  </Link>
                </div>
                <br />
              </Col>
            </Row>
          </div>
          <div className="col-md align-self-center text-center p-3">
            <h4>Visit Us </h4>
            <p>
              No 531, Amarjyothi, Intermediate Ring Rd, Vyalikaval HBCS Layout,
              Domlur, Bengaluru, Karnataka 560071
            </p>
            <div className="d-block">
              <h4 className="mb-3">Cities we serve:</h4>
              <div>Bengaluru | Hyderabad | New Delhi | Kolkata | Pune</div>
            </div>
          </div>
          <div className="col-md text-center p-3 align-self-center d-md-block d-none">
            <h3 className="mb-3">Links</h3>

            <div>
              <Link className="footer-links" href="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="footer-links" href="/details">
                About
              </Link>
            </div>
            <div>
              <Link className="footer-links" href="/gallery">
                Gallery
              </Link>
            </div>
            <div>
              <Link className="footer-links" href="/contact">
                Contact
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
      <hr />
      <div className="align-self-center text-center pb-3">
        Purple World Designtech Private Limited&copy; All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
