import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { Alert, Col, Form, Row } from "react-bootstrap";
import validator from "validator";

function ContactForm() {
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    locale: "+91",
    mobile: "",
    email: "",
    address: "",
    city: "",
    pin: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const customerRef = firebase.firestore().collection("Customers");

  function handleClick(event) {
    event.preventDefault();

    setSubmitAttempt(true);
    if (
      input.firstName &&
      input.lastName &&
      input.locale &&
      input.mobile &&
      input.email &&
      input.city &&
      input.pin
    )
      setValid(true);
    const newInput = {
      firstName: input.firstName,
      lastName: input.lastName,
      locale: input.locale,
      mobile: input.mobile,
      email: input.email,
      address: input.address,
      city: input.city,
      pin: input.pin,
    };
    setInput(newInput);
  }

  useEffect(() => {
    if (valid) {
      setLoading(true);
      customerRef
        .doc(uuidv4())
        .set(input)
        .then((resp) => {
          setSubmitAttempt(false);
          setSubmitted(true);
          setLoading(false);
          setInput({
            firstName: "",
            lastName: "",
            locale: "+91",
            mobile: "",
            email: "",
            address: "",
            city: "",
            pin: "",
          });
        });
    }
  }, [valid]);

  return (
    <form className="needs-validation" noValidate>
      <Alert
        show={submitted}
        variant="success"
        onClose={() => setSubmitted(false)}
        dismissible
      >
        <h6>Your details were submitted</h6>
      </Alert>
      <Row className="g-3">
        <Col xs={12}>
          <Form.Label>
            First name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={input.firstName}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
            isInvalid={submitAttempt && !input.firstName}
          />
          <Form.Control.Feedback type="invalid">
            Valid first name is required.
          </Form.Control.Feedback>
        </Col>

        <Col xs={12}>
          <Form.Label>
            Last name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={input.lastName}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
            isInvalid={submitAttempt && !input.lastName}
          />
          <Form.Control.Feedback type="invalid">
            Valid last name is required.
          </Form.Control.Feedback>
        </Col>

        <Col xs={12}>
          <Form.Label>
            Mobile <span className="text-danger">*</span>
          </Form.Label>
          <Row>
            <Col xs={3}>
              <Form.Control
                type="text"
                onChange={handleChange}
                value={input.locale}
                name="locale"
                required
              />
            </Col>
            <Col xs={9}>
              <Form.Control
                onChange={handleChange}
                value={input.mobile}
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Mobile"
                required
                isInvalid={
                  (submitAttempt && !input.mobile) ||
                  (input.mobile &&
                    !validator.isMobilePhone(input.locale + input.mobile))
                }
                isValid={validator.isMobilePhone(input.locale + input.mobile)}
              />
            </Col>
          </Row>
          <Form.Control.Feedback type="invalid">
            Your Mobile is required.
          </Form.Control.Feedback>
        </Col>

        <Col xs={12}>
          <Form.Label>
            Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={input.email}
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            isInvalid={
              (submitAttempt && !input.email) ||
              (input.email && !validator.isEmail(input.email))
            }
            isValid={validator.isEmail(input.email)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Col>

        <Col xs={12}>
          <Form.Label>
            Address <span className="text-muted">(Optional)</span>
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={input.address}
            type="text"
            id="address"
            name="address"
          />
        </Col>

        <Col xs={12}>
          <Form.Label>
            City <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={input.city}
            type="text"
            id="city"
            name="city"
            required
            isInvalid={submitAttempt && !input.city}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid City.
          </Form.Control.Feedback>
        </Col>

        <Col xs={12}>
          <Form.Label>
            Pin Code <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={input.pin}
            type="text"
            id="pin"
            name="pin"
            required
            isInvalid={
              (submitAttempt && !input.pin) ||
              (input.pin && !validator.isPostalCode(input.pin, "IN"))
            }
            isValid={validator.isPostalCode(input.pin, "IN")}
          />
          <Form.Control.Feedback type="invalid">
            Zip code required.
          </Form.Control.Feedback>
        </Col>
      </Row>

      <div className="d-flex justify-content-center m-2">
        <button
          onClick={handleClick}
          className="btn btn-outline-danger rounded-pill btn-lg px-5 mt-3"
          type="submit"
        >
          {loading ? "Loading" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
