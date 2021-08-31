import React, { useState } from "react";
import Link from "next/link";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
function NavBar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar bg="white" expand="lg" fixed="top" expanded={expanded}>
        <Container>
          <Navbar.Brand>
            <Link href="/" role="button">
              <Image src="/assets/img/mainlogo.png" width="50px" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="me-auto">
              <Link href="/" role="button">
                <div
                  onClick={() => setExpanded(false)}
                  role="button"
                  className="nav-item fs-5 px-3 py-2"
                >
                  HOME
                </div>
              </Link>

              <Link href="/details" role="button">
                <div
                  onClick={() => setExpanded(false)}
                  role="button"
                  className="nav-item fs-5 px-3 py-2"
                >
                  ABOUT{" "}
                </div>
              </Link>

              <Link href="/gallery" role="button">
                <div
                  onClick={() => setExpanded(false)}
                  role="button"
                  className="nav-item fs-5 px-3 py-2"
                >
                  GALLERY{" "}
                </div>
              </Link>
              <Link href="/contact" role="button">
                <div
                  onClick={() => setExpanded(false)}
                  role="button"
                  className="nav-item fs-5 px-3 py-2"
                >
                  CONTACT{" "}
                </div>
              </Link>
            </Nav>
            <div>
              <Link href="/contact">
                <Button
                  variant="danger"
                  className="rounded-pill px-5"
                  onClick={() => setExpanded(false)}
                >
                  Let&apos;s get started
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
