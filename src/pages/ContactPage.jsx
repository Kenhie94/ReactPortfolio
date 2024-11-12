import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the textarea is empty
    if (message.trim() === "") {
      setError("Please enter a message before submitting.");
      return;
    }

    // Clear any previous errors and submit the form
    setError("");
    alert("Form submitted successfully!");

    // Reset the form if needed
    setMessage("");
  };

  return (
    <div>
      <div className="d-flex p-2 justify-content-center">
        <h1>Contact Me</h1>
      </div>
      <div className="formStyle">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formName"
              aria-describedby="formName"
              placeholder="Jane Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              aria-describedby="emailHelp"
              placeholder="janedoe@example.com"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="formMessage" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="formMessage"
              rows="5"
              placeholder="Get in contact with me!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {error && <div className="text-danger mt-1">{error}</div>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
