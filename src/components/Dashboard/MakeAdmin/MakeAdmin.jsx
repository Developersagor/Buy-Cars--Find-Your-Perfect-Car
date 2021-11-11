import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="make-admin">
      <div className="container text-center mt-5">
        <h2>Please Add Email For Make Admin</h2>
        <div className="w-50 mx-auto mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field w-50"
              name="email"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <br />

            <input
              className="submit-btn btn btn-primary mt-3"
              type="submit"
              value="Make As Admin"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
