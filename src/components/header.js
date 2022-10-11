import React, { useState } from "react";
import SideMenu from "./sideMenu";
import { useAuth } from "../utils/authcontext";


const Header = ({ transparent, white_bar, logo2 }) => {
  const {logout} = useAuth();
  const logo = logo2
  const [barOpen, setBarOpen] = useState(false);
  const change = (e) => {
    setBarOpen(!barOpen);
    e.currentTarget.className = barOpen ? "ham-container" : "change";
  };
  return (
    <header className={"header " + (transparent ? "signup" : "")}>
      <img
        style={{ width: "64", height: "64" }}
        src={
          logo
            ? require("../images/logo2.png")
            : require("../images/b&l 16x16.png")
        }
        alt="logo"
      ></img>
      <div className="ham-container" onClick={change}>
        <div className={"bar1 " + (white_bar ? "white" : "")}></div>
        <div className={"bar2 " + (white_bar ? "white" : "")}></div>
        <div className={"bar3 " + (white_bar ? "white" : "")}></div>
      </div>
      <div className={barOpen ? "side-menu show-sidebar" : "side-menu"}>
        <div style={{ width: "100%" }}>
          <button style={{ borderRadius: "0", width:"100%" }} onClick={logout} className="btn-doc btn-down">
            LOG OUT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
