import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TestimonialSlider.css";
import DashImage from "../../Assets/Testimonial/44C1F9747041CA4B168997F90C_1668058522096.png";

const testimonials = [
  {
    name: "Neha Mishra",
    comment:
      "We are absolutely satisfied by their work. They are excellent in what they do and how they repair.",
  },
  {
    name: "Sheetal Mishra",
    comment:
      "They have all reliable workers and their employees are very prompt.",
  },
  {
    name: "Om Singh",
    comment:
      "They provide round the clock service for all the computer and laptop repairing service.",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <AnimatePresence mode="wait">
        <div className="slider-content">
          <motion.h2
            key={testimonials[index].name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span>
              <img className="dash-image" src={DashImage} alt="Dash" />
            </span>
            {testimonials[index].name}
          </motion.h2>
          <motion.p
            key={testimonials[index].comment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials[index].comment}
          </motion.p>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlider;
