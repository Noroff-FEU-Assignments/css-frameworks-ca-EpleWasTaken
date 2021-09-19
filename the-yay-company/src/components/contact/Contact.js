import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function getForm() {
  return (
    <>
      <div className="container">
        <div className="contact__container">
          <div className="contact__contact">
            <li>
              <i class="fas fa-envelope fa-fw"></i>
              <p>hello@yay.com</p>
            </li>
            <li>
              <i class="fas fa-phone fa-fw"></i>
              <p>123 456 7890</p>
            </li>
            <li>
              <i class="fas fa-map-marker-alt fa-fw"></i>
              <p>123 Some Street Somewhere Some City 10000</p>
            </li>
          </div>
          <div className="form__container">
            <h2 className="form__header">Submit your details</h2>
            <div className="form__width">
              <Form className="form__form">
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2" className="form__email">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Website
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" />
                    <div className="website__placeholder">
                      <p>https://</p>
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Message
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      as="textarea"
                      rows={6}
                      className="contact__message"
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Allow us to sell your personal details to whomever we want"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="form__submit"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default getForm;
