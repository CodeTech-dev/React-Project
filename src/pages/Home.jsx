import { Link } from "react-router-dom";

import React from "react";
import "../styles/pages/Home.css"
import CustomerCare1 from "../../src/assets/hero-image-2-removebg.png"
import HowItWorks from "../components/Steps";
import Testimonials from "../components/TestimonialCard";

const Home = () => {
    return(
    <div className = "home-section">
        <div className="hero-container">
        <div className="hero-content">
            <h1>Reliable Tech Support for<br /> Your Devices and Networks.</h1>
            <p>
                We help you to set up, secure and troubleshoot your home and business devices, apps, and software.
            </p>
            <p>Let us help you today.</p>
            <Link to ="/pricing" className="button">Get Started</Link>
        </div>
        <div className= "hero-image">
            <img src= {CustomerCare1} alt="" />
        </div>
        </div>
        
            <HowItWorks /> 
            <Testimonials />
    </div>
    );
};

export default Home;