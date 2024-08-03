/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import slide6 from "./images/slide6.jpg";

export const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-3">
            <div className="frequent">About Us</div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="first-text text-white">
              <div>What is Skoda Autos?</div>
              <div>
                Skoda Autos is a global automotive brand, founded in 1948 in
                Czechoslovakia. Our mission is to create a world class,
                reliable, and affordable car brand that continues to inspire and
                drive people to buy, drive, and travel. Skoda Autos is also
                known as the Internet community and provides the ability to
                manage the Internet community and the Internet community at
                large and online platforms that provide the Internet community
                services and services to the Internet community find and hire
                the best Professionals anywhere in the world, from your
                computer, phone or tablet.
              </div>
   
            <div>
              If you're wondering why you can buy any product online with a
              single click but can't hire on spot a photographer, teacher,
              general contractor or any other professional offering services you
              are interested in, then StarOfService is the answer to your
              question. StarOfService's mission is to significantly improve
              everyone's access to professional services in their area, while
              supporting local professionals in growing their business.
            </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src={slide6} className="slide6" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};
