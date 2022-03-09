import React from "react";
import "./css/Navbar.css";

const Navbar = ({
  show,
  openNav,
  closeNav,
  scrollToHome,
  scrollToAbout,
  scrollToSocial,
}) => {
  return (
    <div className="navbar">
      {show ? (
        <div className="nav-page">
          <h1 className="close-btn" onClick={closeNav}>
            &times;
          </h1>
          <p onClick={scrollToHome}>Home</p>
          <p onClick={scrollToAbout}>About me</p>
          <p onClick={scrollToSocial}>Social Media</p>
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
