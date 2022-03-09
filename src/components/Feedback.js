import React from "react";
import QRCode from "../assests/QR.jpg";
import "./css/Feedback.css";

const Feedback = ({ feedback }) => {
  return (
    <div ref={feedback} id="feedback">
      <div className="container">
        <div className="feedback-left">
          <h4>Follow me or text me on...</h4>
          <div className="feedback-left-top">
            <div className="instagram-div">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="facebook-div">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <div className="twitter-div">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="linkedin-div">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="youtube-div">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="feedback-left-bottom">
            <div className="gmail-div">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i class="fa-solid fa-envelope-open-text"></i>
                </p>
                <p>mohammed.marwan.125@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="feedback-right">
          <h3>Thank You</h3>
          <img className="qr-code" src={QRCode} alt="UPI QR-Code" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
