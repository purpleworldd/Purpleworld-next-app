import Head from "next/head";
import Main from "../components/home";
import ValueProp from "../components/value-prop";
import About from "../components/about";
import Gallery from "../components/gallery";
import Service from "../components/service";
import Testimonials from "../components/testimonials";
import FAQs from "../components/faq";
import Contact from "../components/contact";
import Quote from "../components/quote";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to PurpleWorld</title>
      </Head>
      <Main />
      <ValueProp />
      <Quote />
      <About />
      <Gallery />
      <Service />
      <Container>
        <br />
        <br />
        <br />
        <Row className="justify-content-center align-items-center">
          <Col
            md={4}
            xs={5}
            className="text-center display-5 d-none d-sm-flex"
            data-aos="fade-up"
          >
            250+ homes decorated
          </Col>
          <Col
            md={4}
            xs={5}
            className="text-center h3 d-flex d-sm-none"
            data-aos="fade-up"
          >
            250+ homes decorated
          </Col>
          <Col md={8} xs={7} className="text-center" data-aos="fade-up">
            <Image fluid src="/assets/livingRoom_d/lr08.jpg" alt="..." />
          </Col>
        </Row>
      </Container>
      {/* <FAQs /> */}
      <Testimonials />
      <Contact />
    </div>
  );
}
