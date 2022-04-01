import React from "react";
import "./IndexPage.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./images/logo.png";
import { HashLink as Link } from "react-router-hash-link";

export const Header = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand>
                  <Link to="/#top">
                    <img src={logo} className="image" />
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  style={{ color: "#5ea4b1", backgroundColor: "#5ea4b1" }}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link className="home">
                      {" "}
                      <Link to="/#top" className="About">
                        Home
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link className="home">
                      {" "}
                      <Link to="/#About" className="About">
                        About Us
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link className="home">
                      {" "}
                      <Link to="/#ContactUs" className="About">
                        Contact Us
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link className="home">
                      {" "}
                      <Link to="/#FAQs" className="About">
                        FAQs
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link className="Login-Nav">
                      {" "}
                      <Link to="/Login" className="Login">
                        Login / Sign Up
                      </Link>{" "}
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
  );
};
