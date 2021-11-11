import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  // cancel orders
  const handleDeleteProduct = (id) => {
    const procedToDelet = window.confirm("Confirm Delet Order");
    if (procedToDelet) {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("Order Delet Successfully");
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        });
    }
  };

  const myOrder = myOrders.filter((order) => order.email === user.email);
  return (
    <div className="myOrder-div">
      <div className="container mt-5 order-container">
        <div className="text-center mb-5">
          <h2>Your Orders</h2>
        </div>
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th>Order No</th>
              <th>Name</th>
              <th>Car Name</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          {myOrder?.map((odr, index) => (
            <tbody key={odr._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{odr.name}</td>
                <td>{odr.title}</td>
                <td>{odr.status}</td>
                <td>
                  <button
                    className="btn bg-danger text-white delet-btn mx-auto ms-3"
                    onClick={() => handleDeleteProduct(odr._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;
