import React, { useState } from 'react'

const Header = ({start, bar, logo2}) => {
  const [logo, setLogo] = useState(logo2)
  const [classname, setClassname] = useState(start)
  const [classname2, setClassname2] = useState(bar)
  const [barOpen, setBarOpen] = useState(false);
  const change = (e) => {
    setBarOpen(!barOpen);
    e.currentTarget.className = barOpen ? "ham-container" : "change";
  };
  return (
   <header className={"header " + (classname ? "signup" : "")}>
        <img
            style={{width: "64", height: "64"}}
            src={logo ? (require("../images/logo2.png")) :(require("../images/b&l 16x16.png")) }
            alt="logo"
          ></img>
        <div className="ham-container" onClick={change}>
            <div className={"bar1 " + (classname2 ? "white" : "")}></div>
            <div className={"bar2 " + (classname2 ? "white" : "")}></div>
            <div className={"bar3 " + (classname2 ? "white" : "")}></div>
          </div>  
        
    </header>
    
    
  )
}

export default Header