import React from "react";

function FAQs() {
  return (
    <section>
      <div className="container">
        <h1 className="text-center p-3 mt-5 sec-head">FAQs</h1>
        <div className="faq-card mx-sm-5 mx-3">
          <br />
          <a
            data-bs-toggle="collapse"
            href="#collapseExample1"
            className="faq-question"
          >
            <h3>The is a general question?</h3>
          </a>
          <div className="collapse" id="collapseExample1">
            <div className="card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <br />
          <a
            data-bs-toggle="collapse"
            href="#collapseExample2"
            className="faq-question"
          >
            <h3>The is a general question?</h3>
          </a>
          <div className="collapse" id="collapseExample2">
            <div className="card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <br />
          <a
            data-bs-toggle="collapse"
            href="#collapseExample3"
            className="faq-question"
          >
            <h3>The is a general question?</h3>
          </a>
          <div className="collapse" id="collapseExample3">
            <div className="card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <br />
          <a
            data-bs-toggle="collapse"
            href="#collapseExample4"
            className="faq-question"
          >
            <h3>The is a general question?</h3>
          </a>
          <div className="collapse" id="collapseExample4">
            <div className="card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <br />
          <a
            data-bs-toggle="collapse"
            href="#collapseExample5"
            className="faq-question"
          >
            <h3>The is a general question?</h3>
          </a>
          <div className="collapse" id="collapseExample5">
            <div className="card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
}

export default FAQs;
