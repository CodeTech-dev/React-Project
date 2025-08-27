import React from 'react';
import "../styles/pages/Services.css"
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate();

  const handlePlanSelect = (planType) => {
    // Navigate to pricing page with plan type information
    navigate('/pricing', { state: { planType } });
  };
  
  return (
    <div className="service-page">
      <header className="page-header">
        <div className="service-container">
          <h1>Our Service Plans</h1>
          <p>Comprehensive solutions tailored for your needs - whether for your home or business</p>
        </div>
      </header>
      
      <div className="service-container">
        <section className="service-plan home-plan">
          <div className="content">
            <i className="fas fa-home icon"></i>
            <h1>Home Plan</h1>
            <p>Our Home Plan is designed to provide comprehensive solutions for your residential needs. Whether you're looking to enhance your digital life at home,improve security, or upgrade your home network, we've got you covered.</p>
            
            <p>This plan includes regular maintenance checks, priority support, and exclusive access to our network of trusted home service professionals. We understand that your home is your sanctuary, and we're committed to giving you the best digital experience.</p>
            
            <ul className="features">
              <li>Device Setup & Configuration</li>
              <li>Basic Troubleshooting</li>
              <li>Virus and Malware Removal</li>
              <li> CLoud Backup Assistance</li>
              <li>Smart Home Support</li>
              <li> Quarterly Device Maintenance</li>
            </ul>
            <a href="#" className="btn">Build your plan</a>
          </div>
          <div className="image">
            <img 
              src="https://images.unsplash.com/photo-1584098854719-1fb56eb9a5a1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Modern Home" 
            />
          </div>
        </section>
        
        {/* Business Plan Section */}
        <section className="service-plan business-plan">
          <div className="content">
            <i className="fas fa-building icon"></i>
            <h1>Business Plan</h1>
            <p>Our Business Plan is crafted for enterprises seeking reliable and scalable solutions. From small startups to large corporations, we provide services that support your business operations and growth objectives.</p>
            <p>This comprehensive plan includes dedicated account management, customized service scheduling, and advanced analytics to help you make informed decisions. Our team understands the unique challenges businesses face and delivers solutions that drive efficiency.</p>
            
            <ul className="features">
              <li>Priority Support</li>
              <li>Employee Training</li>
              <li>Business Email Setup & Management</li>
              <li>Data Backup & Recovery</li>
              <li>Cybersecurity Solutions</li>
            </ul>
            
            <a href="#" className="btn">Build your plan</a>
          </div>
          <div className="image">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Business Office" 
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;