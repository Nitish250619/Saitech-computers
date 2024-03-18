import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="container-footer">
       <div className="footer">
        <div className="useful-links">
          <h4>USEFUL LINKS</h4>
          <ul className="list">
            <li className="list-item" ><a href="#">PRIVACY POLICY</a></li>
            <li className="list-item" ><a href="#">SERVICES</a></li>
            <li className="list-item" ><a href="#">GALLERY</a></li>
            <li className="list-item" ><a href="#">TESTIMONIALS</a></li>
          </ul>
        </div>
        <div className="nav-section">
          <ul className="list">
            <li className="list-item" ><a href="#">HOME</a></li>
            <li className="list-item" ><a href="#">ABOUT US</a></li>
            <li className="list-item" ><a href="#">VIDEOS</a></li>
            <li className="list-item" ><a href="#">CONTACT US</a></li>
          </ul>
        </div>
        <div className="contact1">
          <h4>CONTACT</h4>
          <p className="contacts2">6354528565</p>
          <p className="contacts2">sample@gmail.com</p>
        </div>
        <div className="connect">
          <h4>CONNECT</h4>
          <div className="social-links">
          <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>

          </div>
          
        </div>
        
       </div>
       <div className="rights">
          <p>© Copyrights 2024.Saitech Computers.All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
