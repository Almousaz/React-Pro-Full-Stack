// src/ContactError.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const ContactError = () => {
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
          <h1>Contact Error</h1>
          <p>We were unable to process your request. Please give us a call at 123-456-7891, and one of our staff will assist you directly. Apologies for any inconvenience.</p>
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

export default ContactError;