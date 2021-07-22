import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const refreshPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md text-center p-3 align-self-center">
            <h4>Get in touch </h4>
            <br />
            <p>
              Call us
              <br />
              +91 9999 999 999
              <br />
              <br />
              Email Us
              <br />
              info@purpleworld.com
            </p>
          </div>
          <div className="col-md align-self-center">
            <div className="text-center p-3">
              <h4 className="py-3">Follow Us </h4>
              <div className="row">
                <div className="col">
                  <a href="/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="col">
                  <a href="/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
                <div className="col">
                  <a href="/" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md align-self-center text-center p-3">
            <h4>Our Location </h4>
            <br />
            <p>
              Purple World
              <br />
              5th Main Road, Sector 7, HSR Layout, Bangalore – 560102.
            </p>
          </div>
          <div className="col-md align-self-center text-center">
            <h4>Consult our Advisor</h4>
            <div>
              <Link href="/contact" onClick={refreshPage}>
                <button className="btn btn-outline-light rounded-pill px-5">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md text-center p-3 align-self-center">
            <h3 className="mb-3">Links</h3>
            <div>
              <Link className="footer-links" href="/" onClick={refreshPage}>
                Home
              </Link>
            </div>
            <div>
              <Link
                className="footer-links"
                href="/details"
                onClick={refreshPage}
              >
                About
              </Link>
            </div>
            <div>
              <Link
                className="footer-links"
                href="/image"
                onClick={refreshPage}
              >
                Services
              </Link>
            </div>
            {/* <div>
              <Link className="footer-links" href="/faq" onClick={refreshPage}>
                FAQs
              </Link>
            </div> */}
            <div>
              <Link
                className="footer-links"
                href="/contact"
                onClick={refreshPage}
              >
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
