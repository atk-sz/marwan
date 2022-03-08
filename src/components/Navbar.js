import React, { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const openNav = () => {
    setShow(true);
  };

  const closeNav = () => {
    setShow(false);
  };

  return (
    <div className="navbar">
      {show ? (
        <div className="nav-page">
          <h1 className="close-btn" onClick={closeNav}>
            &times;
          </h1>
          <p>Home</p>
          <p>About me</p>
          <p>Social Media</p>
          <p>Feedback</p>
        </div>
      ) : (
        <nav id="nav-button" className="znav" onClick={openNav}>
          <div className="one-bar"></div>
          <div className="two-bar"></div>
          <div className="three-bar"></div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
