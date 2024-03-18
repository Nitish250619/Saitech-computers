import React from "react";
import "./Testimonials.css";
import TestimonialImage from "../../Assets/Testimonial/Testmonial-Image.png";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="container-testimonial">
      <div className="testimonials-wrapper">
        <div className="image-wrapper">
          <img src={TestimonialImage} alt="Testmonial-Image" />
        </div>
        <div className="slider">
          <TestimonialSlider/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
