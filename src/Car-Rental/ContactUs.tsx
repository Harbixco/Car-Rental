/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import customercare from "./images/customercare.png";
import "./css/base/_Typography.scss";
import { TextField, Box, Button } from "@mui/material";

export const ContactUs = () => {
  return (
    <div
      style={{
        backgroundColor: "#5ea4b1",
      }}
    >
      <div className="container-fluid" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="col-md-3 offset-md-4">
            <div className="contactus">Contact Us</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={customercare}
            className="slide6"
            />
          </div>
          <div className="col-md-4  offset-md-3 " style={{ marginTop: "10px" }}>
            <Box
              sx={{
              }}
            >
              <TextField
                fullWidth
                label="Username"
                id="fullWidth"
                type="text"
                style={{ marginLeft: "45px", marginTop: "40px" }}
              />
              <TextField
                fullWidth
                label="Email"
                id="fullWidth"
                type="text"
                style={{ marginLeft: "45px", marginTop: "40px" }}
              />
              <TextField
                fullWidth
                label="Message"
                type="Textfield"
                style={{
                  marginLeft: "45px",
                  marginTop: "40px",
                  height: "50px",
                }}
              />
              <Button
                variant="contained"
                fullWidth
                style={{
                  marginLeft: "45px",
                  height: "50px",
                  marginTop: "50px",
                  marginBottom: "46px",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                Submit
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
