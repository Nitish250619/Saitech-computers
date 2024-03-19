import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="conatct-wrapper">
      <h2 className="contact">Contact Us</h2>
      <div className="contact-us-container">
        <div className="contact_container">
          <div className="hero">
            <h2>OUR INFORMATION</h2>
          </div>
          <div className="contact-information">
            <div className="total-address">
              <div className="office-address">
                <h4>Office Address</h4>
                <p>UG-12, Riddhi Siddhi Tower, 151 RNT Marg, Near LIC Chawani Road, Indore, Madhya Pradesh, 452001</p>
              </div>
              <div className="call-us">
                <h4>Call us</h4>
                <p><a href="tel:(+91) 9993514123">(+91) 9993514123</a></p>
              </div>
            </div>

            <div className="rest">
              <div className="general-enq">
                <h3>Email Us At</h3>
                <p><a href="mailto:mail@saitechcomputers.com">mail@saitechcomputers.com</a></p>
              </div>
              <div className="our-timing">
                <h3>Our timing</h3>
                <p>10:30 am–7:30 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
