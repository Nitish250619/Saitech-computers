import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import Services from "../../Components/Services/Services";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Videos from "../../Components/Videos/Videos";
import Testimonials from "../../Components/Testimonials/Testimonials";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import MainGallery from "../../Components/MainGallery/MainGallery";
import MapIntegrate from "../../Components/MapIntegrate/MapIntegrate";
import { ReactComponent as    WhatsappIcon } from "../../Assets/whatsapp.svg";
import "./LandingPage.css"

const LandingPage = () => {
  const whatsappNumber = "123456789";

  const handleWhatsAppClick = () => {
    console.log("WhatsApp icon clicked!");
  };


  return (
    <div className="landing-container">
        <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon
          onClick={handleWhatsAppClick}
          className="whatsapp-icon"
        />
      </a>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="gallery">
        <MainGallery />
      </div>
      <div id="videos">
        <Videos />
      </div>
      <div id="testimonial">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div id="map">
        <MapIntegrate />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
