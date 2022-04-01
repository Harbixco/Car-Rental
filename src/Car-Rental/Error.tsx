import React from "react";
import "./css/base/_Typography.scss";

export const Error = () => {
  return (
    <>
      <div className="container-fluid error-div">
        <div className="row">
          <div className="col-md-4 offset-md-5">
            <div className="error">
              ERROR 404!
            </div>
            <div className="sorry">SORRY, PAGE NOT FOUND!</div>
          </div>
        </div>
      </div>
    </>
  );
};
