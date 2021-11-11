import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./PlaceOrder.css";
import Header from "../Shared/Header/Header";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/allCars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  // post orders database
  const onSubmit = (data) => {
    data.status = "Pending";
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product Placed");
          reset();
        }
      });
  };
  return (
    <>
      <Header></Header>
      <div className="container mt-5">
        <div className="text-center">
          <h3>Your Details Please</h3>
        </div>
        <div className=" p-2 d-flex justify-content-center align-items-center order-container">
          <div className="text-center w-75 order-container ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                value={car?.title}
                {...register("title")}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                defaultValue={user.displayName}
                placeholder="enter your name"
                {...register("name")}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                value={user.email}
                {...register("email")}
                placeholder="enter your email"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("mobile")}
                placeholder="enter your mobile no"
                className="p-2 m-2 w-100"
                required
              />
              <br />
              <input
                {...register("address")}
                placeholder="enter your address"
                className="p-2 m-2 w-100"
                required
              />
              <br />
              <input
                type="submit"
                value="Place Your Order Please"
                className="btn btn-danger mt-3 w-50 mx-auto order-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
