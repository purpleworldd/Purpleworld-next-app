import React from "react";
import { Image } from "react-bootstrap";
function ValueProp() {
  return (
    <section className="conatiner">
      <div className="container text-center" data-aos="fade-up">
        <div className="row py-5">
          <div className="col-md-4 px-5">
            <Image src="/assets/img/d.png" alt="..." />
            <h3>DESIGN</h3>
            <p>
              We design by combining the esthetics of the space, functional
              requirement by the client and consideration of durability
            </p>
          </div>
          <div className="col-md-4 px-5">
            <Image src="/assets/img/ch.png" alt="..." />
            <h3>TRUST</h3>
            <p>
              We are very transparent and ethical in all our interactions
              andpractice
            </p>
          </div>
          <div className="col-md-4 px-5">
            <Image src="/assets/img/tec.png" alt="..." />
            <h3>TECHNOLOGY</h3>
            <p>
              Our machines and design platform is the latest available in the
              market to providebest of the results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProp;
