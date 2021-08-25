import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md text-center p-3 align-self-center">
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
            </p>
          </div>
          <div className="col-md align-self-center text-center p-3">
            <h4>Our Location </h4>
            <br />
            <p>
              Purple World
              <br />
              No 531, Amarjyothi, Intermediate Ring Rd, Vyalikaval HBCS Layout,
              Domlur, Bengaluru, Karnataka 560071
            </p>
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
          </div>
          <div className="col-md text-center p-3 align-self-center">
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
              <Link className="footer-links" href="/image">
                Services
              </Link>
            </div>
            <div>
              <Link className="footer-links" href="/contact">
                Contact
              </Link>
            </div>
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
