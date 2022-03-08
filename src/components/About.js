import React from "react";
// import logo from './logo.jpeg';
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
      {/* <div
        className="about-right"
        style={{ maxWidth: "33.33%", backgroundColor: "black" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero
        distinctio quas, praesentium ullam, architecto, voluptate blanditiis
        magnam provident sequi veniam aut neque ducimus nostrum perferendis
        recusandae. Dolores, aut nulla.
      </div> */}
      {/* <div className="about-left col-md-6 col-lg-8">
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          accusamus eaque dolorem quae impedit vel earum quia amet commodi,
          maiores natus, quo est quos! Eligendi dolor fugiat perferendis tempora
          consectetur architecto. In officiis nobis, beatae modi harum nam
          consequatur minus quia fugit repellendus odio a. Necessitatibus
          dolorum fugit doloribus tenetur?
        </h4>
      </div>
      <div className="about-right card col-md-6 col-lg-4">
        <img className="card-img" src={MyPic} alt="MyPic" />
      </div> */}
    </div>
  );
};

export default About;
