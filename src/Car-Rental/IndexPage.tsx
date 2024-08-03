/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./IndexPage.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

export const IndexPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand>
                  <Link to="/">
                    <img src={logo} className="image"  alt="image" />
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
                      <Link to="/" className="About">
                        Home
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link className="home">
                      {" "}
                      <Link to="/About" className="About">
                        About Us
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link className="home">
                      {" "}
                      <Link to="/ContactUs" className="About">
                        Contact Us
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link className="home">
                      {" "}
                      <Link to="/SignUp" className="About">
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
    </>
  );
};
