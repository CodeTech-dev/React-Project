import React from "react";
import "../styles/components/Steps.css"

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <p className="subtitle">For personal or small business use</p>

      <div className="steps-container">
        <div className="step-card">
          <img
            src="https://www.techtous.com/wp-content/uploads/2024/05/how-it-works-image1.jpg"
            alt="Pick a plan"
            className="step-icon"
            style={{ animation: "fadeInLeft 1s ease-in-out" }}
          />
          <h3>Pick a plan</h3>
          <p>
            that meets your needs and budget – Home or business!
          </p>
        </div>

        <div className="step-card">
          <img
            src="https://www.techtous.com/wp-content/uploads/2024/05/how-it-works-image2.jpg"
            alt="Explain your issue"
            className="step-icon"
            style={{ animation: "fadeInUp 1s ease-in-out" }}
          />
          <h3>Explain your issue</h3>
          <p>
            to us. We deal with it all!
          </p>
        </div>

        <div className="step-card">
          <img
            src="https://www.techtous.com/wp-content/uploads/2024/05/how-it-works-image3.jpg"
            alt="Get assistance"
            className="step-icon"
            style={{ animation: "fadeInRight 1s ease-in-out" }}
          />
          <h3>Get assistance</h3>
          <p>
            from a Technician, with no jargon.
          </p>
        </div>

        <div className="step-card">
          <img
            src="https://www.techtous.com/wp-content/uploads/2024/05/how-it-works-image4.jpg"
            alt="Use your device"
            className="step-icon"
            style={{ animation: "fadeInDown 1s ease-in-out" }}
          />
          <h3>Use your device</h3>
          <p>
            again, problem-free.
          </p>
        </div>
      </div>

      <p className="additional-info">
        Our plans come with unlimited support for one computer (but you can add more
        computers if you need to!) and as many secondary devices as you’d like. That
        includes tablets, smartphones, wireless routers, even those finicky printers.
        PC or Mac, Android or Apple, we support it all.
      </p>

      <div className="cta-container">
        <button className="cta-button">Ready To See Plans?</button>
      </div>
    </section>
  );
};

export default HowItWorks;