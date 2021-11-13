import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../Shared/Header/Header";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, handleLogin, handleEmail, handlePassword } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const GoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <>
      <Header></Header>
      <div className="text-center mt-5 form ">
        <div className="login-form">
          <h1 className="form-title">PLEASE LOGIN</h1>
          <form onSubmit={handleLogin} className="form-container">
            <input
              onBlur={handleEmail}
              type="email"
              placeholder="Your Email"
              required
            />
            <br />
            <input
              onBlur={handlePassword}
              type="password"
              placeholder="Your Password"
              required
            />
            <input type="submit" value="Login" className="form-login-btn" />
          </form>
          <div>
            <h3>Or Login With</h3>
            <div>
              <button className="sing-in-btn" onClick={GoogleLogin}>
                Google
              </button>

              <h3 className="pb-5">
                Don't Have An Account <Link to="/register">Create One</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
