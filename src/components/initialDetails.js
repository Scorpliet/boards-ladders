import React, { useState } from "react";
import { motion } from "framer-motion";
const InitialDetails = ({ nextStep, handleChange, x, setX }) => {
 
  const Continue = (e) => {
    e.preventDefault();
    setX(150);
    nextStep();
  };

  return (
    <motion.div
      className="content"
      initial={{ x: x, opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <form className="form-area" onSubmit={Continue}>
        <label>Company</label>
        <br />
        <input
          id="compName"
          name="comp_name"
          className="form-input"
          type="text"
          placeholder="Company name"
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Investor Type</label>
        <br />
        <select
          id="compName"
          name="investor_type"
          className="form-input"
          type="text"
          required
          onChange={handleChange}
        >
          <option value={""} hidden>
            Select
          </option>
          <option value="Investor 1">Investor 1</option>
          <option value="Investor 2">Investor 2</option>
          <option value="Investor 3">Investor 3</option>
        </select>
        <br />
        <div className="btn-container">
          <button className="btn-next gradient-box">NEXT</button>
        </div>
      </form>
    </motion.div>
  );
};

export default InitialDetails;
