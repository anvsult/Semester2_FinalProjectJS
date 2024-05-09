import React from "react";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import UserIcon from "../assets/user-regular.svg";
import Logo from "../assets/pylearnLogo.png";

export default function BootsrapNavbar({ setPage }) {
  function handleLogOut() {
    sessionStorage.setItem("loggedIn", false);
    window.location.reload();
  }

  function handlePageChange(page) {
    sessionStorage.setItem("page", page);
    window.location.reload();
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand onClick={() => handlePageChange("home")} style={{cursor: "pointer"}}>
            <img
              src={Logo}
              alt="PyLearn Logo"
              width="60"
              height="60"
              className="d-inline-block align-top"
              style={{ padding: "0" }}
            />
          </Navbar.Brand>
          <Navbar.Brand onClick={() => handlePageChange("home")} style={{cursor: "pointer"}}>PyLearn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " >
            <Nav
              className="me-auto d-flex"
            >
              <Nav.Link onClick={() => handlePageChange("functions")}>
                Python functions
              </Nav.Link>
              <Nav.Link onClick={() => handlePageChange("loops")}>
                For loop
              </Nav.Link>
              <Nav.Link onClick={() => handlePageChange("datatypes")}>
                Data Types
              </Nav.Link>
              <Nav.Link onClick={() => handlePageChange("quiz")}>Quiz</Nav.Link>

            </Nav>
              <Navbar.Brand className="d-flex">
                <Navbar.Brand className="d-flex flex-column ">
                  <img
                    src={UserIcon}
                    alt="User Icon"
                    width="20"
                    height="20"
                    className="m-auto"
                  />
                  <Navbar.Text className="h6 p-0 m-0">
                    {sessionStorage.getItem("userName")}
                  </Navbar.Text>
                </Navbar.Brand>
                <Button
                  className="justify-content-end d-block"
                  onClick={() => handleLogOut()}
                >
                  Log Out
                </Button>
              </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}
