import React from "react";
import "../styles/components/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Personal</a></li>
            <li><a href="#">Business</a></li>
            {/* <li><a href="#">FAQ</a></li> */}
            {/* <li><a href="#">Legal Information</a></li> */}
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Tech Support</h3>
          <p>
            TechCare provides industry-leading technical support services to home customers and small business clients with friendly and professional Nigerian-based technicians.
          </p>
          <p>
            Our team handles a wide array of tech issues and our home support plans are backed by a money-back guarantee to ensure customer satisfaction.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>
            <strong>Phone:</strong> +2348025691927
          </p>
          <p>
            <strong>Email:</strong> support@techcare.com
          </p>
          <p>
            <strong>Address:</strong> 750 Main St, Suite 706<br />
            Hartford, CT 06103
          </p>
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="copyright">
          © Copyright - 2025 TechCare. All Rights Reserved
        </div>
        {/* <div className="division">
          Tech to Us is a Division of Comprise, Inc
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;