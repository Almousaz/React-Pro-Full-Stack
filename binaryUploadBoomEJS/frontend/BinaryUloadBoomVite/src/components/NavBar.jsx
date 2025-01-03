import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/">
        Binary Upload Boom Vite
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/postdetailpage">
            Create Post
          </Nav.Link>
            <Nav.Link as={Link} to="/userprofile">
                Profile 
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
                Login 
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
                Sign up 
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
