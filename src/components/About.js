import React from "react";
import MyPic from "../assests/hokkah.jpg";
import "./css/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-wrap">
        <div className="about-left">
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, non
            earum recusandae error voluptate voluptatibus alias quas voluptatum
            id, tempora ratione nam magni vero repellendus dolores nihil
            provident. Ex nesciunt vel odit rem, ad asperiores aliquid obcaecati
            ipsam totam adipisci! Nihil nemo culpa deserunt fugiat ad, quam,
            reiciendis perferendis laborum aspernatur, repellat ea harum ex!
          </h4>
        </div>
        <div className="about-right">
          <img className="card-img" src={MyPic} alt="MyPic" />
        </div>
      </div>
    </div>
  );
};

export default About;
