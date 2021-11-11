import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrder.css";

const ManageOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("https://boiling-sands-56408.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  // update orders
  const handleUpdate = (id) => {
    const procedToUpdate = window.confirm("Confirm Update Status");
    if (procedToUpdate) {
      fetch(`https://boiling-sands-56408.herokuapp.com/orders/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Order Approved");
            window.location.reload(false);
          }
        });
    }
  };
  return (
    <div className="manage-order">
      <div className="container manage-order-container">
        <div className="text-center">
          <h2 className="p-2">Manage All Orders</h2>
          <Table className="table2" striped bordered hover>
            <thead>
              <tr>
                <th>Order No</th>
                <th>Name</th>
                <th>Car Name</th>
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            {myOrders?.map((odr, index) => (
              <tbody key={odr._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{odr.name}</td>
                  <td>{odr.title}</td>
                  <td>{odr.status}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(odr._id)}
                      className="btn bg-danger update-btn text-white mx-auto"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
