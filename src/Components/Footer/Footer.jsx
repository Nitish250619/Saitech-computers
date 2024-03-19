import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const [click, setClick] = useState(false);

  const handleClick = (id) => {
    if (id == null) {
      setClick(!click);
    } else {
      setClick(!click);
      const aboutSection = document.getElementById(id);
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <footer className="container-footer">
       <div className="footer">
        <div className="useful-links">
          <h4>USEFUL LINKS</h4>
          <ul className="list">
            <li className="list-item" ><Link to={"/privacy-policy"}>PRIVACY POLICY</Link></li>
            <li className="list-item" ><Link onClick={() => {
                  handleClick("services");
                }} >SERVICES</Link></li>
            <li className="list-item" ><Link onClick={() => {
                  handleClick("gallery");
                }} >GALLERY</Link></li>
            <li className="list-item" ><Link onClick={() => {
                  handleClick("testimonial");
                }} >TESTIMONIALS</Link></li>
          </ul>
        </div>
        <div className="nav-section">
          <ul className="list">
            <li className="list-item" ><Link onClick={() => {
                  handleClick("home");
                }} >HOME</Link></li>
            <li className="list-item" ><Link onClick={() => {
                  handleClick("about");
                }} >ABOUT US</Link></li>
            <li className="list-item" ><Link onClick={() => {
                  handleClick("contact");
                }} >CONTACT US</Link></li>
          </ul>
        </div>
        <div className="contact1">
          <h4>CONTACT</h4>
          <p className="contacts2">09993514123</p>
          <p className="contacts2">www.saitechcomputers.com</p>
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
