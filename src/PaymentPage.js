import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; // Import CSS file

const PaymentPage = () => {
  const { id } = useParams();

  return (
    <div className="payment-container">
      <h2 className="payment-title">Secure Payment</h2>
      <p className="payment-subtitle">Complete your payment for property ID: <strong>{id}</strong></p>

      <form className="payment-form">
        <label className="form-label">Cardholder Name:</label>
        <input type="text" className="form-input" required placeholder="Enter cardholder name" />

        <label className="form-label">Card Number:</label>
        <input type="text" className="form-input" required placeholder="1234 5678 9012 3456" maxLength="16" />

        <div className="payment-row">
          <div className="payment-column">
            <label className="form-label">Expiration Date:</label>
            <input type="text" className="form-input" required placeholder="MM/YY" maxLength="5" />
          </div>
          <div className="payment-column">
            <label className="form-label">CVV:</label>
            <input type="text" className="form-input" required placeholder="123" maxLength="3" />
          </div>
        </div>

        <label className="form-label">Billing Address:</label>
        <input type="text" className="form-input" required placeholder="Enter billing address" />

        <button type="submit" className="payment-button">Proceed to Pay</button>
      </form>
    </div>
  );
};

export default PaymentPage;
