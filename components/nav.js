import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img src="/assets/img/pw-logo.png" width="50px" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fs-5 fw-bold px-3">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <Link className="nav-link" href="/details">
                About
              </Link>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <Link className="nav-link" href="/image">
                Gallery
              </Link>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link href="/contact">
              <button className="btn btn-danger rounded-pill px-5">
                Let's get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
