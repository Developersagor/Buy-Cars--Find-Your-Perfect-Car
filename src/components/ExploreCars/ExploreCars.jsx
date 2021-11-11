import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import "./ExploreCars.css";

const ExploreCars = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);
  return (
    <div className="explore-car">
      <Header></Header>
      <div className="container mt-3">
        <div className="text-center mt-5 mb-5">
          <h1>Explore Our All Cars Here</h1>
        </div>
        <div className="row">
          {allCars?.map((cars) => (
            <div key={cars._id} className="col-12 col-md-4 col-lg-4 ">
              <div className="p-3 m-2 car-div">
                <div>
                  <img className="img-fluid car-img" src={cars.img} alt="" />
                </div>
                <div>
                  <h3> {cars.title} </h3>
                  <p className="text-right">{cars.description}</p>
                  <h4>{cars.price}</h4>
                  <div className="text-center">
                    <Link to={`/placeOrder/${cars._id}`}>
                      <button className="btn btn-danger py-1 px-4 fs-5 mt-2 ">
                        Buy Car
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCars;

// https://i.ibb.co/h1fw5g7/vehicle-1.png
// https://i.ibb.co/JCSxy26/vehicle-3.png
// https://i.ibb.co/JCjFjfK/vehicle-4.png
