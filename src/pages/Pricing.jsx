import '../styles/pages/Pricing.css';

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

const PricingPage = () => {
  const navigate = useNavigate(); // Add navigation hook

  const homePlans = [
    {
      id: 1,
      name: "Basic",
      price: 44950,
      period: "per month",
      features: [
        "Basic hardware troubleshooting",
        "Email support",
        "24/7 online knowledge base",
        "1 device support"
      ]
    },
    {
      id: 2,
      name: "Standard",
      price: 79950,
      period: "per month",
      features: [
        "All Basic features",
        "Remote software support",
        "Priority email support",
        "Up to 3 devices",
        "Monthly system checkup"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Premium",
      price: 122450,
      period: "per month",
      features: [
        "All Standard features",
        "24/7 phone support",
        "On-site visits (if needed)",
        "Unlimited devices",
        "Personal IT consultant",
        "Emergency support"
      ]
    }
  ];

  const businessPlan = {
    id: 4,
    name: "Business Plan",
    price: 308450,
    period: "per month",
    features: [
      "All Premium features",
      "Dedicated account manager",
      "24/7 priority phone support",
      "Unlimited devices & users",
      "Network monitoring",
      "Regular security audits",
      "Custom reporting",
      "SLA guarantee"
    ]
  };

  // Function to handle plan selection
  const handleSelectPlan = (plan) => {
    // Navigate to checkout with plan data
    navigate('/checkoutPage', { state: { selectedPlan: plan } });
  };

  return (
    <div className="pricing-container">
      <h1>Pick Your Plan</h1>
      <p className="subtitle">Choose the perfect tech support solution for your needs</p>

      <div className="plans-section">
        <div className="plan-category">
          <h2>Home Plans</h2>
          <div className="plans-grid">
            {homePlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`plan-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">₦{plan.price.toLocaleString('en-NG')}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check checkmark"></i>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="select-btn"
                  onClick={() => handleSelectPlan(plan)} // Add click handler
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="plan-category">
          <h2>Business Plan</h2>
          <div className="plans-grid">
            <div className="plan-card business">
              <h3>{businessPlan.name}</h3>
              <div className="price">
                <span className="amount">₦{businessPlan.price.toLocaleString('en-NG')}</span>
                <span className="period">/{businessPlan.period}</span>
              </div>
              <ul className="features">
                {businessPlan.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check checkmark"></i>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="select-btn business-btn"

                onClick={() => handleSelectPlan(businessPlan)} // Add click handler
              >
                Get Business Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;