import "./App.css";
import React from "react";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExploreCars from "./components/ExploreCars/ExploreCars";
import AddProduct from "./components/Add Product/AddProduct";
import Footer from "./components/Shared/Footer/Footer";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/explore">
              <ExploreCars></ExploreCars>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
