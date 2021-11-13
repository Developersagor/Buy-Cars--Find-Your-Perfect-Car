import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../../Shared/Header/Header";
import "./Home.css";
import Review from "../Review/Review";
import Service from "../Service/Service";

const Home = () => {
  const [allCars, setAllCars] = useState([]);
  const feturedCars = allCars.slice(0, 6);
  useEffect(() => {
    fetch("https://boiling-sands-56408.herokuapp.com/allCars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="container mt-5">
        <h1 className="heading">
          Fetured <span>Cars</span>
        </h1>
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
      <Service></Service>
      <Review></Review>
    </div>
  );
};

export default Home;
