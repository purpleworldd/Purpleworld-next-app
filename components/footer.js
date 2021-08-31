import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md text-center p-3 align-self-center d-md-block d-none">
            <h4>Get in touch </h4>
            <br />
            <p>
              Whatsapp us
              <br />
              +91 9632287903
              <br />
              <br />
              Email Us
              <br />
              info@purpleworld.in
              <br />
              <br />
              Website
              <br />
              purpleworld.in
            </p>
          </div>
          <div className="d-md-none d-block text-center">
            <br />
            <Row>
              <Col className="align-self-center">
                <div className="col-md text-center align-self-center">
                  <h4>Get in touch </h4>
                  <br className="d-sm-block d-none" />
                  <p>
                    Whatsapp us
                    <br />
                    +91 9632287903
                    <br className="d-sm-block d-none" />
                    <br />
                    Email Us
                    <br />
                    info@purpleworld.in
                    <br />
                    Website
                    <br />
                    purpleworld.in
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
              </Col>
            </Row>
          </div>
          <div className="col-md align-self-center text-center p-3">
            <h4>Our Location </h4>
            <br className="d-sm-block d-none" />
            <p>
              Purple World
              <br />
              No 531, Amarjyothi, Intermediate Ring Rd, Vyalikaval HBCS Layout,
              Domlur, Bengaluru, Karnataka 560071
            </p>
            <br className="d-sm-block d-none" />
            <h4> Registered Office </h4>
            <br className="d-sm-block d-none" />
            <p>#34, BTM Residency, Phase 2, Yelanahalli, Bengaluru - 560068</p>
            <div className="d-block d-md-none">
              <h4 className="mb-3">Regional Offices:</h4>
              <div>Hyderabad | New Delhi | Kolkata | Pune</div>
            </div>
          </div>
          <div className="col-md align-self-center text-center">
            <h4>Consult our Advisor</h4>
            <div>
              <Link href="/contact">
                <button className="btn btn-outline-light rounded-pill px-5">
                  Contact
                </button>
              </Link>
            </div>
            <br />
            <h4>Services</h4>
            <div>
              Designing | Turnkey Projects | Modular Furniture | Renovations |
              Civil | Electrical | Plumbing | Flooring | Wall Finishes
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
            <h4 className="mb-3">Regional Offices:</h4>
            <div>Hyderabad | New Delhi | Kolkata | Pune</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="align-self-center text-center pb-3">
        Purple World &copy;All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
