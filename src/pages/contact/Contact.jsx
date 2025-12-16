import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    mobile: "",
    Description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const formEl = e.currentTarget;
    e.preventDefault();

    if (formEl.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/contact", {
        firstName: form.firstName,
        email: form.email,
        mobile: form.mobile,
        description: form.Description,
      });

      setSubmitted(true);
      setValidated(false);

      // reset form
      setForm({
        firstName: "",
        email: "",
        mobile: "",
        Description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <Container
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Row className="justify-content-center" style={{ width: "100%" }}>
        {/* LEFT SIDE – FORM */}
        <Col md={6}>
          <Card
            style={{
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #f0f0f0",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              height: "100%",
            }}
          >
            <Card.Body>
              <h4
                style={{
                  textAlign: "center",
                  color: "#ff5a3c",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Contact Us
              </h4>

              {submitted && (
                <Alert
                  variant="success"
                  onClose={() => setSubmitted(false)}
                  dismissible
                >
                  Form submitted successfully!
                </Alert>
              )}

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    First Name <span style={{ color: "#ff5a3c" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter your full name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    Email <span style={{ color: "#ff5a3c" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    Mobile No <span style={{ color: "#ff5a3c" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="Description"
                    placeholder="Enter your Message"
                    value={form.Description}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd",
                      height: "120px",
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#ff5a3c",
                    borderColor: "#ff5a3c",
                    padding: "14px",
                    fontSize: "1.1rem",
                    borderRadius: "8px",
                    fontWeight: "500",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT SIDE – CONTACT DETAILS */}
        <Col md={6}>
          <Card
            style={{
              padding: "30px",
              borderRadius: "12px",
              border: "1px solid #f0f0f0",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              height: "100%",
              background: "#fff",
            }}
          >
            <center>
              <h4
                style={{
                  color: "#1f3d7a",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Reach Us
              </h4>
            </center>

            <div style={{ marginBottom: "18px" }}>
              <h6 style={{ color: "#ff5a3c", fontWeight: "700" }}>
                📞 Call Us
              </h6>
              <p style={{ margin: 0, color: "#444" }}>+91 98765 43210</p>
              <p style={{ margin: 0, color: "#444" }}>040 4929 7462</p>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <h6 style={{ color: "#ff5a3c", fontWeight: "700" }}>📧 Email</h6>
              <p style={{ margin: 0, color: "#444" }}>support@example.com</p>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <h6 style={{ color: "#ff5a3c", fontWeight: "700" }}>
                📍 Address
              </h6>
              <p style={{ margin: 0, color: "#444" }}>
                Student Management System
                <br /> Hyderabad, Telangana
                <br /> India
              </p>
            </div>

            <div style={{ marginTop: "20px" }}>
              <h6 style={{ color: "#1f3d7a", fontWeight: "700" }}>
                Business Hours
              </h6>
              <p style={{ margin: 0, color: "#444" }}>
                Mon–Sat: 9:00 AM – 7:00 PM
              </p>
            </div>
            <br />

            <div
              style={{
                width: "100% ",
                height: "100px",
                paddingBottom: "56.25%",
                position: "relative",
              }}
            >
              <h6
                style={{ color: "#ff5a3c", fontWeight: "800", display: "flex" }}
              >
                📍 Location
              </h6>
              <iframe
                title="Our location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30445.414785019813!2d78.28275199999999!3d17.4751744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1764875529044!5m2!1sen!2sin"
                style={{
                  border: 0,
                  position: "absolute",
                  top: 50,
                  left: 0,
                  width: "100%",
                  height: "80%",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
