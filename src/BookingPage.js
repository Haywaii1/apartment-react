import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; // Import CSS file

const BookingPage = () => {
  const { id } = useParams();

  return (
    <div className="booking-container">
      <h2 className="booking-title">Book Your Property</h2>
      <p className="booking-subtitle">You are booking property ID: <strong>{id}</strong></p>

      <form className="booking-form">
        <label className="form-label">Full Name:</label>
        <input type="text" className="form-input" required placeholder="Enter your name" />

        <label className="form-label">Email:</label>
        <input type="email" className="form-input" required placeholder="Enter your email" />

        <label className="form-label">Phone Number:</label>
        <input type="tel" className="form-input" required placeholder="Enter your phone number" />

        <label className="form-label">Preferred Date:</label>
        <input type="date" className="form-input" required />

        <label className="form-label">Special Requests:</label>
        <textarea className="form-textarea" rows="4" placeholder="Any additional requests"></textarea>

        <button type="submit" className="booking-button">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
