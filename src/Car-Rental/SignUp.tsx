import React from "react";
import "./css/base/_Typography.scss";
import { TextField, Box, Button } from "@mui/material";

export const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-4">
            <div className="sign">Sign up with email</div>
            <Box
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Full Name"
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
                label="Password"
                id="fullWidth"
                type="Password"
                style={{ marginLeft: "45px", marginTop: "40px" }}
              />
              <Button
                variant="contained"
                fullWidth
                style={{
                  marginLeft: "45px",
                  height: "50px",
                  marginTop: "50px",
                  marginBottom: "46px",
                }}
              >
                Continue
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};