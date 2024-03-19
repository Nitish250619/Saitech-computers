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
                <p>area, city, landmark, pincode wegfiugfrigsfigfoiguefig</p>
              </div>
              <div className="call-us">
                <h4>call us</h4>
                <p>++654654</p>
              </div>
            </div>

            <div className="rest">
              <div className="general-enq">
                <h3>General Enquiry</h3>
                <p>++654654</p>
              </div>
              <div className="our-timing">
                <h3>our timing</h3>
                <p>++654654</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
