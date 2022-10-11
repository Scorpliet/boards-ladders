import React, { useState } from "react";
import { motion } from "framer-motion";
const RoleDetails = ({ nextStep, handleChange, x, setX }) => {
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
        <label>Your Role</label>
        <br />
        <input
          list="role_select"
          className="form-input"
          name="role"
          type="text"
          required
          //  value={values.role}
          onChange={handleChange}
        />

        <datalist id="role_select">
          <option value={""} selected>
            Select
          </option>
          <option value="Company Director / Chairperson">
            Company Director / Chairperson
          </option>
          <option value="Company director-founder">
            Company director-founder
          </option>
          <option value="Company director- investor">
            Company director- investor
          </option>
          <option value="Company director- VC fund">
            Company director- VC fund
          </option>
          <option value="Venture capital / general partner">
            Venture capital / general partner
          </option>
          <option value="Venture capital / principal or other">
            Venture capital / principal or other
          </option>
          <option value="Venture capital / limited partner">
            Venture capital / limited partner
          </option>
          <option value="Director - accelerator or incubator">
            Director - accelerator or incubator
          </option>
          <option value={""}>Other (type in)</option>
        </datalist>

        <br />
        <div className="btn-container">
          <button className="btn-next">NEXT</button>
        </div>
      </form>
    </motion.div>
  );
};

export default RoleDetails;
