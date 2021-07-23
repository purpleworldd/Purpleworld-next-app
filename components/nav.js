import React from "react";
import Link from "next/link";
import { Button, Image } from "react-bootstrap";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src="/assets/img/pw-logo.png" width="50px" alt="logo" />
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
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <Link href="/details">About</Link>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <Link href="/image">Gallery</Link>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div>
            <Link href="/contact">
              <Button variant="danger" className="rounded-pill px-5">
                Let&apos;s get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
