import React from "react";
import "./css/base/_Typography.scss";

export const FAQs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-3">
            <div className="frequent">Frequently Asked Questions</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-1">
            <div className="what">What is Skoda Autos?</div>
            <div>
              Skoda Autos was Officially launched in November 2013 and based in
              Paris, France, StarOfService is a trusted platform on which you
              can search, find and hire the best Professionals anywhere in the
              world, from your computer, phone or tablet.
            </div>
            <div className="what">Why did you pick these websites?</div>
            <div>
              We try to provide a handful of resources to help with projects but
              there will always be an unforeseen challenge. This is where the
              learning really begins. We recommend troubleshooting these
              obstacles yourself or asking others for help. (Google is your
              friend)
            </div>
            <div className="what">Can I use these in my portfolio?</div>
            <div className="last">
              If you do decide to use these projects for a portfolio piece,
              please make it known that it is "unofficial". We would challenge
              you to make these projects your own by using your choice of
              colors, content, and images. These are practice projects and any
              and all materials owned by companies and individuals whose
              websites are featured on Frontend Practice are meant for practice
              purposes only.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
