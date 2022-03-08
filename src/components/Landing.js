import React from "react";
import "./css/Landing.css";

const Landing = ({ home }) => {
  return (
    <div ref={home} className="home" id="home">
      <div className="content">
        <div className="name-tag">
          <h1 className="name">Mohammed Marwan</h1>
        </div>
        <div className="bio-tag">
          <h5 className="bio">One / Two / Poet</h5>
        </div>
      </div>
    </div>
  );
};

export default Landing;
