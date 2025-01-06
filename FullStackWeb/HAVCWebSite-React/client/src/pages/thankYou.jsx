// src/ThankYou.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const ThankYou = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Cooler Than You HVAC Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="bg-primary text-white text-center p-5">
        <Container>
          <h1>Thanks for Contacting Us!</h1>
          <p>You'll receive an email from us shortly with more details. If you don't get an email within one hour, call us at 123-456-7891.</p>
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

export default ThankYou;