import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <Container fluid className="contact">
  <div className="flex-row">
    <br />
    <br />
    <br />
    <br />
    <h2 className="contact-title">Reach Out</h2>
  </div>

  <Row>
    <Col md={6}>
      <div className="contact-info">
        {/* Contact information */}
        <div>
          <h3>Hello {userName}</h3>
          <p>Want to get into contact?</p>
          <address>
            Fort Lauderdale, Fl <br />
            P: (631) 559-0345
            <br />
            E:{" "}
            <a href="mailto://bsaglimb@gmail.com">
              Bsaglimb@gmail.com
            </a>
          </address>
          <p>
            <strong>I'd love to hear your feedback!</strong>
          </p>
        </div>
      </div>
    </Col>

    <Col md={6}>
      {/* Contact form section */}
      <div className="contact-form">
        <h3>Contact Me</h3>
        <form className="form">
          {/* Form inputs */}
        </form>
      </div>
    </Col>
  </Row>

  {/* Error message */}
  {errorMessage && (
    <div>
      <p className="error-text">{errorMessage}</p>
    </div>
  )}
</Container>
  );
}