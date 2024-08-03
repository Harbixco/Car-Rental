/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../Car-Rental/css/Layout/_Footer.scss";
import { HashLink as Link } from "react-router-hash-link";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import logo from "./images/logo.png";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <div className="footer first-container">
              {" "}
              <img src={logo} className="image" alt="image" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer first-container first-text  text">PRODUCT</div>
            <div>
              <Button>
                <Link to="/#" className="first-text  text">
                  Rent Car
                </Link>
              </Button>
            </div>
            <div>
              <Button>
                <Link to="/#" className="first-text  text">
                  Hire a Driver
                </Link>
              </Button>
            </div>
            <div>
              <Button>
                <Link to="/#" className="first-text  text">
                  Order Uber
                </Link>
              </Button>
            </div>
            <div>
              <Button>
                <Link to="/#" className="first-text  text">
                  Home
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer first-container first-text  text">CONTACT US</div>
            <div className="contact">
              <div>
                <Icon
                  icon="ant-design:home-outlined"
                  className="home-outlined"
                />
              </div>
              <div className="home-outlined ">
                28b, Lekki Phase 1, Lagos, Nigeria
              </div>
            </div>
            <div className="contact">
              <div>
                <Icon icon="akar-icons:envelope" className="home-outlined" />
              </div>
              <div className="home-outlined">info@agbajeabiodunkay.com</div>
            </div>

            <div className="contact">
              <div>
                <Icon icon="fluent:call-20-regular" className="home-outlined" />
              </div>
              <div className="home-outlined">+2349039415354</div>
            </div>

            <div className="contact">
              <div>
                <Icon icon="cil:fax" className="home-outlined" />
              </div>
              <div className="home-outlined">+2347062273771</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
