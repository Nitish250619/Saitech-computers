import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import PrivacyPolicy from '../../Pages/PrivacyPolicy/PrivacyPolicy';

const Routings = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    
  );
};

export default Routings;
