import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div>
      <section className="services container" id="services">
        <h1 className="heading">
          our <span>services</span>
        </h1>

        <div className="box-container row  g-5">
          <div className="box col-12 col-md-4 col-lg-4">
            <i className="fas fa-car"></i>
            <h3>car selling</h3>
            <p>
              On services including engine repair & replacement, steering system
              & more! Come In Today! Free Alignment Check.
            </p>
          </div>

          <div className="box col-12 col-md-4 col-lg-4 ">
            <i className="fas fa-tools"></i>
            <h3>parts repair</h3>
            <p>
              On services including engine repair & replacement, steering system
              & more! Come In Today! Free Alignment Check.
            </p>
          </div>

          <div className="box col-12 col-md-4 col-lg-4 ">
            <i className="fas fa-car-crash"></i>
            <h3>car insurance</h3>
            <p>
              On services including engine repair & replacement, steering system
              & more! Come In Today! Free Alignment Check.
            </p>
          </div>

          <div className="box col-12 col-md-4 col-lg-4 ">
            <i className="fas fa-car-battery"></i>
            <h3>battery replacement</h3>
            <p>
              On services including engine repair & replacement, steering system
              & more! Come In Today! Free Alignment Check.
            </p>
          </div>

          <div className="box col-12 col-md-4 col-lg-4 ">
            <i className="fas fa-gas-pump"></i>
            <h3>oil change</h3>
            <p>
              On services including engine repair & replacement, steering system
              & more! Come In Today! Free Alignment Check.
            </p>
          </div>

          <div className="box col-12 col-md-4 col-lg-4 ">
            <i className="fas fa-headset"></i>
            <h3>24/7 support</h3>
            <p>
              On services including engine repair & replacement, steering system
              & more! Come In Today! Free Alignment Check.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
