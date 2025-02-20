import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './contact';
import Properties from './properties';
import PropertyDetails from './PropertyDetails';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import Register from './Register';
import Login from './Login';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} /> 
      <Route path="/book/:id" element={<BookingPage />} />
      <Route path="/payment/:id" element={<PaymentPage />} />
    </Routes>
  );
};

export default App;
