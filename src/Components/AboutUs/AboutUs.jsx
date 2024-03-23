import React from "react";
import "./AboutUs.css";
import About_img from "../../Assets/About_img.jpg.jpeg";

const AboutUs = () => {
  return (
    <>
      <div class="flex-container">
        <div className="item1">
          <img className="image" src={About_img} alt="" />
        </div>
        <div className="item2">
          <div className="insde">
            <span className="heading">About Us</span>
            <p className="text">
              Welcome to Saitech Computers, a renowned name located at UG-12,
              Riddhi Siddhi Tower, 151 RNT Marg, Near LIC Chawani Road, Indore,
              Madhya Pradesh, 452001. We pride ourselves on being a premier
              provider of swift and reliable computer peripheral repair services
              to our esteemed clients. At Saitech Computers, we boast a
              dedicated team of seasoned professionals committed to delivering
              unparalleled services with unmatched efficiency. Our experts are
              adept at resolving issues promptly, ensuring minimal downtime and
              maximum satisfaction for our valued customers. Choose Saitech
              Computers for all your computer peripheral repair needs, and
              experience the difference that quality service and expertise can
              make. Join our ever-growing family of satisfied customers and let
              us exceed your expectations every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
