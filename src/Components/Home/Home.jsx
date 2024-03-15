import React from "react";
import "./Home.css"
import CustomButton from "../CustomButton/CustomButton";


const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <p>Established And Reputable</p>
        <h1>Computer Peripheral Repairs</h1>
        <CustomButton name={"Enquire Now"}/>
      </section>
    </div>
  );
};

export default Home;
