import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://boiling-sands-56408.herokuapp.com/makeAdmin", {
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
        <div className="make-admin-form mx-auto mt-5">
          <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field "
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
