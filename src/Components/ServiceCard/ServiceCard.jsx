import React from 'react';
import { motion } from 'framer-motion';
import "./ServiceCard.css";
import CustomButton from '../CustomButton/CustomButton';

const ServiceCard = ({ service }) => {
  const { img, title, description } = service;

  return (
    <div className='card-wrapper'>
      <img src={img} alt={title} />
      <motion.h5 
        initial={{ opacity: 0, y: 90 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        whileHover={{ scale: 1.1 }} 
      >
        {title}
      </motion.h5>
      <motion.p 
        initial={{ opacity: 0, y: 90 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        whileHover={{ scale: 1.05 }} 
      >
        {description}
      </motion.p>
      <CustomButton name="Enquire Now" /> 
    </div>
  );
};

export default ServiceCard;
