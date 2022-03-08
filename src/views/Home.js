import React from "react";
import { About, Landing, Navbar } from "../components";
// import { Header } from '../components';
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
    </div>
  );
};

export default Home;
