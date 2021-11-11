import React, { useEffect, useState } from "react";
import "./ManageProducts.css";
const ManageProducts = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    fetch("https://boiling-sands-56408.herokuapp.com/allCars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);

  // delet products

  const handleDeleteProduct = (id) => {
    const procedToDelet = window.confirm("Confirm Delet Order");
    if (procedToDelet) {
      fetch(`https://boiling-sands-56408.herokuapp.com/deleteProduct/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("Order Delet Successfully");
            const remainingProducts = allCars.filter(
              (products) => products._id !== id
            );
            setAllCars(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="manage-product">
      <div className="container mt-3">
        <div className="text-center mt-5 mb-5">
          <h1>Manage All Product Here</h1>
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
                    <button
                      onClick={() => handleDeleteProduct(cars._id)}
                      className="btn btn-primary py-1 px-4 fs-5 mt-2 "
                    >
                      Delete
                    </button>
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

export default ManageProducts;
