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
              We, dummy company, situated at area, city, state, are a leading
              name engaged in &nbsp; &nbsp;&nbsp; providing prompt & efficient computer peripheral
              repairing service to our clients. We have a team of expert
              professionals that offer fast-paced and reliable services as and
              when needed. We have gained the trust of all our vast clientele
              and ensure that we leave no stone unturned while providing our
              integrated solutions to each one of them. Our customers queries
              and troubles are of top priority and we do everything from our end
              to solve them at the earliest.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;