import React from "react";
import "../Car-Rental/css/Layout/_Footer.scss";
import "./css/Component/_buttons.scss";
import { Link } from "react-router-dom";
import FormikContainer from "./Component/FormikContainer";

export const Login = () => {
  return (
    <>
      <div className="container" id="Login">
        <div className="row">
          <div className="col-md-5 offset-md-4">
            <div className="enter-phone" style={{ marginTop: "10px" }}>
              Enter your Phone number or Email to continue
            </div>
            <div>
            <FormikContainer />
                <div
                  style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                  }}
                >
                  Don't have an account yet?{" "}
                  <span>
                    <Link to="/SignUp">Sign in</Link>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};