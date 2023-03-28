import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';

export default function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Color Picker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink>
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
