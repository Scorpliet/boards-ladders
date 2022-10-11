import React, { useState } from "react";
import { motion } from "framer-motion";
const CompDetails = ({ store, handleChange,x,setX }) => {
  const [passVisible, setPassVisible] = useState(false);

  const change = (e) => {
    setPassVisible(!passVisible);
    e.currentTarget.innerText = passVisible ? "visibility_off" : "visibility";
  };

  const Continue = (e) => {
    setX(1000);
    e.preventDefault();
    store();
  };

  return (
    <motion.div
      className="content"
      initial={{ x: x, opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <form className="form-area" onSubmit={Continue}>
        <label>Your company email</label>
        <br />
        <input
          className="form-input"
          name="comp_email"
          type="text"
          placeholder="johndoe@company.com"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label>Set up your password</label>
        <br />
        <div className="password-field">
          <input
            required
            className="form-input password"
            name="comp_pass"
            type={passVisible ? "text" : "password"}
            placeholder="••••••••"
            onChange={handleChange}
          />
          <i className="material-icons eyeButton" onClick={change}>
            visibility_off
          </i>
        </div>
        <br />
        <br />
        <label>Confirm your password</label>
        <div className="password-field">
          <input
            required
            className="form-input password"
            name="pass_confirm"
            type={passVisible ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
          />
          <i className="material-icons eyeButton" onClick={change}>
            visibility_off
          </i>
        </div>
        <br />
        <p>
          By submitting the form, you agree to our{" "}
          <a href="#">terms of service.</a>
        </p>
        <div className="btn-container">
          <button id="" className="btn-next">
            NEXT
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default CompDetails;
