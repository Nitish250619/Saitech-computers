import React from 'react';
import { motion } from 'framer-motion';
import "./ServiceCard.css";
// import CustomButton from '../CustomButton/CustomButton';

const ServiceCard = ({ service , handleOpen }) => {
  const { img, title, description } = service;

  const handleClick = () => {
    handleOpen(title)
  }

  return (
    <div className='card-wrapper'>
      <div className='maincard'>
      <img src={img} alt={title} />
      <motion.h5 
        className='title'
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
      </div>
      
      <div className='button'>
      {/* <CustomButton handleOpen={handleClick} name="Enquire Now"  />  */}
      </div>
      
    </div>
  );
};

export default ServiceCard;
