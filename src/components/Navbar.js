import React from "react";
import logo from "../images/icon.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-dark text-light">
      <div className="navbar-brand">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <span className="ml-2">ImageCover</span>
      </div>
    </nav>
  );
};

export default Navbar;
