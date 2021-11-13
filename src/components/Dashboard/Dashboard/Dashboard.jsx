import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import AddReview from "../AddReview/AddReview";
import "./Dashboard.css";
import AddProduct from "../../Add Product/AddProduct";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const { user, logOut } = useAuth();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://boiling-sands-56408.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  return (
    <div>
      <div className="topbar">
        <Navbar sticky="top" collapseOnSelect expand="lg" className="dashboard">
          <Container>
            <Navbar.Brand className="dash-name">Dashboard</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end nav-items">
              <Nav.Link as={Link} className="text-white" to="/home">
                Home
              </Nav.Link>

              {isAdmin ? (
                <>
                  {" "}
                  <Nav.Link
                    as={Link}
                    className="text-white"
                    to={`${url}/addProduct`}
                  >
                    Add Product
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="text-white"
                    to={`${url}/manageOrders`}
                  >
                    Manage Orders
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="text-white"
                    to={`${url}/manageProducts`}
                  >
                    Manage Products
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="text-white"
                    to={`${url}/makeAdmin`}
                  >
                    Make Admin
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} className="text-white" to={url}>
                    Pay
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    className="text-white"
                    to={`${url}/myOrders`}
                  >
                    My Orders
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="text-white"
                    to={`${url}/review`}
                  >
                    Review
                  </Nav.Link>
                </>
              )}

              {user?.email ? (
                <Button onClick={logOut} className="text-white btn btn-danger">
                  Logout
                </Button>
              ) : (
                <Nav.Link
                  as={Link}
                  className="text-white btn btn-danger"
                  to="/login"
                >
                  Login
                </Nav.Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <div className="container">
          <Switch>
            <Route exact path={path}>
              <Pay></Pay>
            </Route>
            <Route exact path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path={`${path}/review`}>
              <AddReview></AddReview>
            </Route>
            <Route exact path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route exact path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
            </Route>
            <Route exact path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
