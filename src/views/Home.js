import React from "react";
import { Navbar } from "../components";
// import { Header } from '../components';
import "./css/Home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home" id="home">
        <div className="content">
          <div className="name-tag">
            <h1 className="name">Mohammed Marwan</h1>
          </div>
          <div className="bio-tag">
            <h5 className="bio">One / Two / Poet</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
