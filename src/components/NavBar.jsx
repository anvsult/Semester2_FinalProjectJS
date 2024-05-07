import React from 'react';
import { Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserIcon from '../assets/user-regular.svg';
import Logo from '../assets/pylearnLogo.png';

export default function BootsrapNavbar({setPage}) {

  function handleLogOut() {
    sessionStorage.setItem("loggedIn", false);
    window.location.reload();
  }

  function handlePageChange(page){
    sessionStorage.setItem('page', page);
    window.location.reload();
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            alt="PyLearn Logo"
            width="60"
            height="60"
            className="d-inline-block align-top"

            style={{ padding: '0' }}
          />
          
        </Navbar.Brand>
        <Navbar.Brand href="/">PyLearn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: '100px' }}>
            <Nav.Link onClick={() => handlePageChange("functions")}>Python functions</Nav.Link>
            <Nav.Link onClick={() => handlePageChange("loops")}>For loop</Nav.Link>
            <Nav.Link onClick={() => handlePageChange("datatypes")}>Data Types</Nav.Link>

          </Nav>
            <Navbar.Brand className="d-flex flex-column ">
            <img 
            src={UserIcon} alt="User Icon" 
            width="20"
            height="20"
            className="m-auto"
            />
            <Navbar.Text className="h6 p-0 m-0">
            {sessionStorage.getItem("userName") }
            </Navbar.Text>
            </Navbar.Brand>
            <Button className="justify-content-end d-block" onClick={()=>handleLogOut()}>Log Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

