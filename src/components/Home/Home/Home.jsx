import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../../Shared/Header/Header";
import "./Home.css";

const Home = () => {
  const [allCars, setAllCars] = useState([]);
  const feturedCars = allCars.slice(0, 6);
  useEffect(() => {
    fetch("http://localhost:5000/allCars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="container mt-3">
        <div className="text-center mt-5 mb-5">
          <h1>Fetured Cars</h1>
        </div>
        <div className="row">
          {feturedCars?.map((cars) => (
            <div key={cars._id} className="col-12 col-md-4 col-lg-4">
              <div className="p-3 m-2 car-div">
                <div>
                  <img className="img-fluid car-img" src={cars.img} alt="" />
                </div>
                <div>
                  <h3> {cars.title} </h3>
                  <p>{cars.description}</p>
                  <h4>Price: {cars.price}</h4>
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

export default Home;
