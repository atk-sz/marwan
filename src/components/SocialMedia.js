import React from "react";
import { Link } from "react-router-dom";
import "./css/SocialMedia.css";

const SocialMedia = ({ social }) => {
  return (
    <div ref={social} className="media" id="media">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3">
            <div className="media-click">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="media-click">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="media-click">
              <a
                href="mailto:max.mustermann@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          {/* <div className="col-md-3 col-sm-3">
            <div className="media-click">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div> */}
          <div className="col-md-3 col-sm-3">
            <div className="media-click">
              <Link
                to="javascript:void(0)"
                onClick={() => (window.location = "mailto:yourmail@gmail.com")}
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
