import React, { useRef, useState } from "react";
import { About, Landing, Navbar } from "../components";
// import { Header } from '../components';
import "./css/Home.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const home = useRef(null);
  const about = useRef(null);

  const openNav = () => {
    setShow(true);
  };

  const closeNav = () => {
    setShow(false);
  };

  const scrollToHome = () => {
    home.current.scrollIntoView();
    setShow(false);
  };

  const scrollToAbout = () => {
    about.current.scrollIntoView();
    setShow(false);
  };

  return (
    <div>
      <Navbar
        show={show}
        openNav={openNav}
        closeNav={closeNav}
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
      />
      <Landing home={home} />
      <About about={about} />
    </div>
  );
};

export default Home;
