import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="container ">
          <div className="row footer-container ">
            <div className="col-lg-4">
              <div>
                <div className="w-50 mx-auto footer-content ">
                  <h3>SHOWROOM</h3> <hr />
                  <h6>789 Main rd, Anytown, CA 12345 USA</h6>
                  <h6>+1 800 789 0000</h6>
                  <h6>example@gmail.com</h6>
                  <h6>Mon – Fri : 09am to 06pm</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-50 mx-auto footer-content ">
                <h3>Company</h3> <hr />
                <h6>About Us</h6>
                <h6>Careers</h6>
                <h6>Blog</h6>
                <h6>Magazine</h6>
                <h6>Gift Cards</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-50  mx-auto footer-content ">
                <h3>INFORMATION</h3> <hr />
                <h6>Site Map</h6>
                <h6>My account</h6>
                <h6>Discount</h6>
                <h6>Return Policy</h6>
                <h6></h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
