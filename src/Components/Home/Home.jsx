import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import CustomButton from "../CustomButton/CustomButton";

const Home = () => {

  const handleEnquiry = () => {
    const whatsappNumber = "+919993514123";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className="container">
      <section className="hero">
        <p>Established And Reputable</p>
        <h1>Computer Peripheral Repairs</h1>
        <div>
          <Button
          onClick={handleEnquiry}
            variant="contained"
            sx={{
              color: "#f5b921", // Text color
              backgroundColor: "#1f5156", // Background color
              "&:hover": {
                backgroundColor: "#153b40", // Darken background color on hover
              },
              borderRadius: "10px", // Adjust the border radius
              padding: "12px 24px", 
            }}
          >
            Enquiry nOW
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
