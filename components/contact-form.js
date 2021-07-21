import React, { useState } from "react";
function ContactForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
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

  function handleClick(event) {
    event.preventDefault();
    const newInput = {
      firstName: input.firstName,
      lastName: input.lastName,
      mobile: input.mobile,
      email: input.email,
      address: input.address,
      city: input.city,
      pin: input.pin,
    };
    console.log(newInput);
  }
  return (
    <form className="needs-validation" noValidate>
      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="firstName" className="form-label">
            First name <span className="text-danger">*</span>
          </label>
          <input
            onChange={handleChange}
            value={input.firstName}
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
          />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-12">
          <label htmlFor="lastName" className="form-label">
            Last name <span className="text-danger">*</span>
          </label>
          <input
            onChange={handleChange}
            value={input.lastName}
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>

        <div className="col-12">
          <label htmlFor="mobile" className="form-label">
            Mobile <span className="text-danger">*</span>
          </label>
          <div className="input-group has-validation">
            <input
              onChange={handleChange}
              value={input.mobile}
              type="text"
              className="form-control"
              id="mobile"
              name="mobile"
              placeholder="Mobile"
              required
            />
            <div className="invalid-feedback">Your Mobile is required.</div>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            onChange={handleChange}
            value={input.email}
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address <span className="text-muted">(Optional)</span>
          </label>
          <input
            onChange={handleChange}
            value={input.address}
            type="text"
            className="form-control"
            id="address"
            name="address"
          />
        </div>

        <div className="col-12">
          <label htmlFor="city" className="form-label">
            City <span className="text-danger">*</span>
          </label>
          <input
            onChange={handleChange}
            value={input.city}
            type="text"
            className="form-control"
            id="city"
            name="city"
            required
          />
          <div className="invalid-feedback">Please provide a valid City.</div>
        </div>

        <div className="col-12">
          <label htmlFor="pin" className="form-label">
            Pin Code <span className="text-danger">*</span>
          </label>
          <input
            onChange={handleChange}
            value={input.pin}
            type="text"
            className="form-control"
            id="pin"
            name="pin"
            required
          />
          <div className="invalid-feedback">Zip code required.</div>
        </div>
      </div>

      <div className="d-flex justify-content-center m-2">
        <button
          onClick={handleClick}
          className="btn btn-outline-danger rounded-pill btn-lg px-5 mt-3"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
