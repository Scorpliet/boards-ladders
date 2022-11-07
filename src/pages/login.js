import React from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authcontext";
import Header from "../components/header";

const Login = () => {
  const navigate = useNavigate();
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
      
    } catch {
      console.log("failed logging in");
      setError("Failed to Log in");
    }
    setLoading("false");
    navigate("/")
  };

  return (
    <>
      <Header/>
      <div className="content content-left"> 
        <form className="form-area form-login">
          <div style={{minWidth:"690px", margin:"auto"}}>

          <label>Your email</label>
          <br />
          <input
            className="form-input"
            style={{minWidth:"100%"}}
            name="comp_email"
            type="text"
            placeholder="your@email.com"
            ref={emailRef}
            required
            />
          </div>
          <br />
          <br />
          <div style={{minWidth:"690px", margin:"auto"}}>
          <label>Password</label>
          <br />
          <div className="password-field">
            <input
              required
              style={{minWidth:"690px"}}
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
          </div>
          <br />
          <br/>
          <p>
            <a href="#">Forgot Password?</a>
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
