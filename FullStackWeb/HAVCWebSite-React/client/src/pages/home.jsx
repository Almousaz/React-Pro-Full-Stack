import React, { useState } from 'react';
import { Navbar, Nav, Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // State for form data and submission status
  const [scheduleData, setScheduleData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes for both forms
  const handleInputChange = (event, formType) => {
    const { name, value } = event.target;
    formType === 'schedule'
      ? setScheduleData({ ...scheduleData, [name]: value })
      : setQuoteData({ ...quoteData, [name]: value });
  };

  // Handle schedule service form submission
  const handleScheduleService = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Simulate API request for scheduling
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = Math.random() > 0.5; // Random success or failure
          isSuccess ? resolve({ status: 200 }) : reject({ message: 'Failed to schedule service.' });
        }, 1000);
      });

      if (response.status === 200) {
        navigate('/thank-you');
      }
    } catch (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
      navigate('/contact-error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle request quote form submission
  const handleRequestQuote = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Simulate API request for quote
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = Math.random() > 0.5; // Random success or failure
          isSuccess ? resolve({ status: 200 }) : reject({ message: 'Failed to request a quote.' });
        }, 1000);
      });

      if (response.status === 200) {
        navigate('/thank-you');
      }
    } catch (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Cooler Than You HVAC Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#forms">Schedule & Quote</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="bg-primary text-white text-center p-5">
        <Container>
          <h1>Welcome to Cooler Than You HVAC Company</h1>
          <p>Your trusted solution for heating, ventilation, and air conditioning.</p>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="p-5">
        <Container>
          <h2 className="text-center">Our Services</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Air Conditioning Repair</Card.Title>
                  <Card.Text>Fast and reliable AC repair to keep you cool.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Heating Installation</Card.Title>
                  <Card.Text>Get your home ready for the winter with our expert heating installations.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Maintenance Services</Card.Title>
                  <Card.Text>Keep your HVAC system running smoothly with regular maintenance.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule and Request Quote Section */}
      <section id="forms" className="bg-light p-5">
        <Container>
          <h2 className="text-center">Schedule a Service or Request a Quote</h2>
          <div className="row mt-4">
            {/* Schedule Service Form */}
            <div className="col-md-6">
              <h4>Schedule a Service</h4>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              <Form className="mt-3" onSubmit={handleScheduleService}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={scheduleData.name}
                    onChange={(e) => handleInputChange(e, 'schedule')}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={scheduleData.email}
                    onChange={(e) => handleInputChange(e, 'schedule')}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={scheduleData.phone}
                    onChange={(e) => handleInputChange(e, 'schedule')}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="date">
                  <Form.Label>Select Date and Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="date"
                    value={scheduleData.date}
                    onChange={(e) => handleInputChange(e, 'schedule')}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Schedule Service'}
                </Button>
              </Form>
            </div>

            {/* Request a Quote Form */}
            <div className="col-md-6">
              <h4>Request a Quote</h4>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              <Form className="mt-3" onSubmit={handleRequestQuote}>
                <Form.Group className="mb-3" controlId="quoteName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={quoteData.name}
                    onChange={(e) => handleInputChange(e, 'quote')}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quoteEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={quoteData.email}
                    onChange={(e) => handleInputChange(e, 'quote')}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="service">
                  <Form.Label>Service Needed</Form.Label>
                  <Form.Control
                    type="text"
                    name="service"
                    value={quoteData.service}
                    onChange={(e) => handleInputChange(e, 'quote')}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={quoteData.message}
                    onChange={(e) => handleInputChange(e, 'quote')}
                    rows={4}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Request Quote'}
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-dark text-white text-center p-4">
        <Container>
          <p>Cooler Than You HVAC Company | Phone: 123-456-7890 | Email: contact@coolerthanyou.com</p>
          <p>&copy; 2024 Cooler Than You HVAC Company. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
