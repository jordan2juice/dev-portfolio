"use client";

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Jordan Toujouse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./page.jsx">Home</Nav.Link>
            <Nav.Link href="./contact">Contact</Nav.Link>
            <Nav.Link href="">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
