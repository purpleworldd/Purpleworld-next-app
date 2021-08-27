import React from "react";
import ContactForm from "./contact-form";
function Contact() {
  return (
    <section id="contact">
      <h1 className="text-center fw-bold pt-5 my-5 sec-head">Contact</h1>
      <div className="bg-grade">
        <div className="row">
          <div
            className="col-sm-5 col-12 align-self-center bg-white-a m-sm-5 p-sm-5 p-5 mt-5 shadow-lg round-edge"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1>Let&apos;s get started</h1>
            <ContactForm />
          </div>
          <div className="col-sm-5 col-12 align-self-center">
            <h1
              className="text-center text-white mt-5 mb-5 d-none d-sm-block"
              data-aos="fade"
            >
              Consult Our Design Advisor
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
