import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Testimonials.css";
import TestimonialImage from "../../Assets/Testimonial/Testmonial-Image.png";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="container-testimonial">
      <div className="testimonials-wrapper">
        
        <motion.div
          className="image-wrapper"
          initial={{ y: 1000, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 2, delay: 0.5 }}
        >
          <img src={TestimonialImage} alt="Testmonial-Image" />
        </motion.div>
        <div className="slider">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
