import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./AddReview.css";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("https://boiling-sands-56408.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Review Added");
          reset();
        }
      });
  };
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Add Review</h1>
      </div>
      <div className="text-center main-add-div d-flex mx-auto">
        <form
          className="mx-auto add-review-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="input-field w-75"
            name="name"
            defaultValue={user.displayName}
            type="text"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          <br />
          <input
            className="input-field w-75 my-3"
            name="email"
            value={user?.email}
            type="email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="input-field w-75 mb-3"
            name="rating"
            placeholder="0-5"
            {...register("rating", { required: true })}
          />

          <br />
          <textarea
            className="input-field w-75 mb-3"
            name="comments"
            placeholder="Your comments"
            {...register("comments", { required: true })}
          />
          <br />
          <input
            className="submit-btn btn btn-danger mt-3"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
