import React, { useState } from 'react';
import '../styles/components/Checkout.css';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const { selectedPlan } = location.state || {};

  // Default plan if none selected (fallback)
  const defaultPlan = {
    name: "Premium Plan",
    price: 79,
    period: "per month",
    features: [
      "All Standard features",
      "24/7 phone support",
      "On-site visits (if needed)",
      "Unlimited devices",
      "Personal IT consultant"
    ]
  };

  // Use passed plan or default
  const planToDisplay = selectedPlan || defaultPlan;

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    billingAddress: '',
    billingCity: '',
    billingZip: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        billingAddress: '',
        billingCity: '',
        billingZip: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
      });
    }, 3000);
  };

  const subtotal = planToDisplay.price;
  const tax = (subtotal * 0.08).toFixed(2);
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <h1>Checkout</h1>
        
        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="step" onClick={() => setCurrentStep(1)}>
            <div className={`step-circle ${currentStep >= 1 ? 'active' : ''}`}>
              {currentStep > 1 ? <i className="fas fa-check"></i> : '1'}
            </div>
            <span className={currentStep >= 1 ? 'active' : ''}>Delivery</span>
          </div>
          
          <div className="step-line"></div>
          
          <div className="step" onClick={() => currentStep > 1 && setCurrentStep(2)}>
            <div className={`step-circle ${currentStep >= 2 ? 'active' : ''}`}>
              {currentStep > 2 ? <i className="fas fa-check"></i> : '2'}
            </div>
            <span className={currentStep >= 2 ? 'active' : ''}>Confirmation</span>
          </div>
          
          <div className="step-line"></div>
          
          <div className="step" onClick={() => currentStep > 2 && setCurrentStep(3)}>
            <div className={`step-circle ${currentStep >= 3 ? 'active' : ''}`}>
              {currentStep > 3 ? <i className="fas fa-check"></i> : '3'}
            </div>
            <span className={currentStep >= 3 ? 'active' : ''}>Payment</span>
          </div>
          
          <div className="step-line"></div>
          
          <div className="step" onClick={() => currentStep > 3 && setCurrentStep(4)}>
            <div className={`step-circle ${currentStep >= 4 ? 'active' : ''}`}>
              {currentStep > 4 ? <i className="fas fa-check"></i> : '4'}
            </div>
            <span className={currentStep >= 4 ? 'active' : ''}>Finish</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="step-content">
          {currentStep === 1 && (
            <div className="step-section">
              <h2>Delivery Information</h2>
              
              <div className="form-group">
                <label htmlFor="firstName">Full Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="billingAddress">Address *</label>
                <input
                  type="text"
                  id="billingAddress"
                  name="billingAddress"
                  required
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="billingCity">City *</label>
                  <input
                    type="text"
                    id="billingCity"
                    name="billingCity"
                    required
                    value={formData.billingCity}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="billingZip">ZIP Code *</label>
                  <input
                    type="text"
                    id="billingZip"
                    name="billingZip"
                    required
                    value={formData.billingZip}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step-section">
              <h2>Order Summary</h2>
              
              <div className="order-summary">
                <div className="summary-item">
                  <span>{planToDisplay.name}</span>
                  <span>₦{planToDisplay.price.toLocaleString('en-NG')}</span>
                </div>
                <div className="summary-item">
                  <span>Tax (8%)</span>
                  <span>₦{tax}</span>
                </div>
                <div className="summary-item total">
                  <strong>Total:</strong>
                  <strong>₦{total}</strong>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="step-section">
              <h2>Payment Method</h2>
              
              <div className="payment-options">
                <div className="payment-option">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    checked={selectedPayment === 'credit'}
                    onChange={() => handlePaymentSelect('credit')}
                  />
                  <label htmlFor="creditCard">
                    <div className="card-logos">
                      <i className="fab fa-cc-visa"></i>
                      <i className="fab fa-cc-mastercard"></i>
                    </div>
                    <div className="payment-details">
                      <span>Pay with credit card</span>
                    </div>
                  </label>
                </div>
              </div>
              
              {selectedPayment === 'credit' && (
                <div className="credit-card-form">
                  <div className="form-group">
                    <label htmlFor="cardName">Name on Card *</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      required
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number *</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      required
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiryDate">Expiry Date *</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        required
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="cvv">CVV *</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        required
                        value={formData.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 4 && (
            <div className="step-section">
              {isSubmitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h2>Order Complete!</h2>
                  <p>Thank you for your purchase.</p>
                </div>
              ) : (
                <>
                  <h2>Complete Purchase</h2>
                  <p>Review your order and complete the payment</p>
                  
                  <div className="final-summary">
                    <div className="summary-item">
                      <span>Total Amount:</span>
                      <span className="amount">₦{total}</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <button type="submit" className="submit-button">
                      Pay Now - ₦{total}
                    </button>
                  </form>
                </>
              )}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="step-navigation">
          {currentStep > 1 && (
            <button 
              className="back-button"
              onClick={handlePrevStep}
            >
              Back
            </button>
          )}
          
          {currentStep < 4 && (
            <button 
              className="next-button"
              onClick={handleNextStep}
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;