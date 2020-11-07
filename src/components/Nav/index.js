import React from "react";
import Rose from "../Nav/assets/rose.JPG"
import "./style.css"


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white">
      <img
        alt=""
        src={Rose}
        width="150"
        height="115"
      />
      <h3>N E G O C I O |  </h3>
      <h4>  we do things just a bit different.</h4>
    </nav>
  );
}

export default Nav;
