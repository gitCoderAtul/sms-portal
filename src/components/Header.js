import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" className="cyan">
    <Container>
      <Navbar.Brand href="#home">SMS-PORTAL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto custom-navbar">
          <Nav.Link href="#home">
             <Link to="/"> Home </Link>
            </Nav.Link>
          <Nav.Link href="#link">
          <Link to="/Add-library">  Add Library </Link>
           </Nav.Link>
          <Nav.Link href="#link">
          <Link to="/Add-group">   Add Group </Link>
            </Nav.Link>
            <Nav.Link href="#link">
          <Link to="/Add-message"> Add Message </Link>
            </Nav.Link>
          <Nav.Link href="#link">
          <Link to="/Add-contact"> Add Contact </Link>
            </Nav.Link>
         
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
