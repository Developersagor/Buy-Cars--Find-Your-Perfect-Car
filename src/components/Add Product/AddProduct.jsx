import React from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://boiling-sands-56408.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Car successfully added");
          reset();
        }
      });
  };

  return (
    <div className="add-product">
      <div>
        <h1 className="mt-5 text-center text-danger">Please Add Product</h1>
        <div className=" p-2 d-flex justify-content-center align-items-center">
          <div className="text-center w-25 form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("title")}
                placeholder="enter title"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("description", { required: true })}
                placeholder="enter description"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("price", { required: true })}
                placeholder="enter price"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("img", { required: true })}
                placeholder="enter image link"
                className="p-2 m-2 w-100"
              />

              <br />
              <input type="submit" className="btn btn-danger w-50 mx-auto" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
