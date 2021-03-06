import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/home-img.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <div className=" container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <section className="home">
              <h3 className="home-parallax">Find Your Car</h3>
              <img className="home-parallax" src={bannerImg} alt="" />
              <Link to="/explore">
                <button className="banner-btn home-parallax">
                  Explore Cars
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
