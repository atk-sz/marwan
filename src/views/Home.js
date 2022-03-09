import React, { useRef, useState } from "react";
import { About, Landing, Navbar, SocialMedia } from "../components";
// import { Header } from '../components';
import "./css/Home.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const home = useRef(null);
  const about = useRef(null);
  const social = useRef(null);

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

  const scrollToSocial = () => {
    social.current.scrollIntoView();
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
        scrollToSocial={scrollToSocial}
      />
      <Landing home={home} />
      <About about={about} />
      <SocialMedia social={social} />
    </div>
  );
};

export default Home;
