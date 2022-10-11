import React from "react";
import { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../utils/authcontext";
import Header from "../components/header";

const Login = () => {
  const [passVisible, setPassVisible] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const change = (e) => {
    setPassVisible(!passVisible);
    e.currentTarget.innerText = passVisible ? "visibility_off" : "visibility";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      console.log(emailRef.current.value, passRef.current.value);
      await login(emailRef.current.value, passRef.current.value);
      console.log("logged in");
      return <Navigate to="/" />;
    } catch {
      console.log("failed logging in");
      setError("Failed to Log in");
    }
    setLoading("false");
  };

  return (
    <>
      <Header/>
      <div className="content content-left"> 

        <form className="form-area form-login">
          <label>Your company email</label>
          <br />
          <input
            className="form-input"
            name="comp_email"
            type="text"
            placeholder="Company email"
            ref={emailRef}
            required
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <div className="password-field">
            <input
              required
              className="form-input password"
              name="comp_pass"
              type={passVisible ? "text" : "password"}
              placeholder="Password"
              ref={passRef}
            />
            <i className="material-icons eyeButton" onClick={change}>
              visibility_off
            </i>
          </div>
          <br />
          <p>
            <a href="#">Frogot Password?</a>
          </p>
          <div className="btn-container form-login">
            <Link className="btn-link" to="/signup">
              SIGN UP
            </Link>
            <button className="btn-next" type="submit" onClick={handleSubmit}>
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
