import React from 'react';
import "./NavBar.css"
import { Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BootsrapNavbar() {
  function handleLogOut() {
    sessionStorage.setItem("loggedIn", false);
    window.location.reload();
  }
  // }
//   return (
//     <nav className="navbar">
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//         <li><Button onClick={()=>handleLogOut()}>Log Out</Button></li>
//       </ul>
//     </nav>
//   );
// }


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">PyLearn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Functions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">How to define a function</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">How to call a function</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Overview</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Loops" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">For loop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">While loop</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Overview</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button onClick={()=>handleLogOut()}>Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

