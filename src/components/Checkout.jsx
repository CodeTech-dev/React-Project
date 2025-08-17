import React, { useState } from 'react';
import '../styles/components/Checkout.css';

import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const { selectedPlan } = location.state || {}; // Get plan data from navigation

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

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Account Information
    createAccount: false,
    password: '',
    confirmPassword: '',
    
    // Billing Information
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: '',
    
    // Shipping Information
    sameAsBilling: true,
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: '',
    
    // Payment Information
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Coupon
    couponCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  const subtotal = planToDisplay.price;
  const tax = (subtotal * 0.08).toFixed(2);
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <h1>Checkout</h1>
        
        <form onSubmit={handleSubmit} className="checkout-form">
          {/* Plan Options Section */}
          <div className="checkout-section">
            <h2>Selected Plan</h2>
            <div className="plan-summary">
              <div className="plan-card">
                <h3>{planToDisplay.name}</h3>
                <div className="plan-price">
                  <span className="amount">₦{planToDisplay.price.toLocaleString('en-NG')}</span>
                  <span className="period">/{planToDisplay.period}</span>
                </div>
                <ul className="features">
                  {planToDisplay.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check checkmark"></i>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Rest of the form remains the same */}
          {/* Cart Information */}
          <div className="checkout-section">
            <h2>Order Summary</h2>
            <div className="cart-info">
              <div className="cart-item">
                <span>{planToDisplay.name}</span>
                <span>₦{planToDisplay.price.toLocaleString('en-NG')}</span>
              </div>
              <div className="cart-item">
                <span>Tax (8%)</span>
                <span>₦{tax}</span>
              </div>
              <div className="cart-total">
                <strong>Total</strong>
                <strong>₦{total}</strong>
              </div>
            </div>
          </div>

          {/* Coupon Section */}
          <div className="checkout-section">
            <h2>Apply Coupon</h2>
            <div className="coupon-section">
              <input
                type="text"
                name="couponCode"
                placeholder="Enter coupon code"
                value={formData.couponCode}
                onChange={handleInputChange}
                className="coupon-input"
              />
              <button type="button" className="coupon-button">Apply</button>
            </div>
          </div>

          {/* Personal Information */}
          <div className="checkout-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
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
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
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
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Account Information */}
          <div className="checkout-section">
            <h2>Account Information</h2>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="createAccount"
                  checked={formData.createAccount}
                  onChange={handleInputChange}
                />
                Create an account
              </label>
            </div>
            {formData.createAccount && (
              <>
                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required={formData.createAccount}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required={formData.createAccount}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
          </div>

          {/* Billing Information */}
          <div className="checkout-section">
            <h2>Billing Information</h2>
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
                <label htmlFor="billingState">State *</label>
                <input
                  type="text"
                  id="billingState"
                  name="billingState"
                  required
                  value={formData.billingState}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
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
              <div className="form-group">
                <label htmlFor="billingCountry">Country *</label>
                <select
                  id="billingCountry"
                  name="billingCountry"
                  required
                  value={formData.billingCountry}
                  onChange={handleInputChange}
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="checkout-section">
            <h2>Shipping Information</h2>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="sameAsBilling"
                  checked={formData.sameAsBilling}
                  onChange={handleInputChange}
                />
                Same as billing address
              </label>
            </div>
            {!formData.sameAsBilling && (
              <>
                <div className="form-group">
                  <label htmlFor="shippingAddress">Address *</label>
                  <input
                    type="text"
                    id="shippingAddress"
                    name="shippingAddress"
                    required
                    value={formData.shippingAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="shippingCity">City *</label>
                    <input
                      type="text"
                      id="shippingCity"
                      name="shippingCity"
                      required
                      value={formData.shippingCity}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="shippingState">State *</label>
                    <input
                      type="text"
                      id="shippingState"
                      name="shippingState"
                      required
                      value={formData.shippingState}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="shippingZip">ZIP Code *</label>
                    <input
                      type="text"
                      id="shippingZip"
                      name="shippingZip"
                      required
                      value={formData.shippingZip}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="shippingCountry">Country *</label>
                    <select
                      id="shippingCountry"
                      name="shippingCountry"
                      required
                      value={formData.shippingCountry}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Payment Information */}
          <div className="checkout-section">
            <h2>Payment Information</h2>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number *</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                required
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
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
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date *</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
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
                  placeholder="123"
                  required
                  value={formData.cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="checkout-section">
            <button type="submit" className="submit-button">
              Complete Purchase - ₦{total}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;