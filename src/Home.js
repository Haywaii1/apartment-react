import './style.css';
import React from 'react';
import {  useNavigate } from 'react-router-dom'; 
import Navbar from './Navbar';
import ChatBox from './Chatbox'; // Import the ChatBox component

const Home = () => {
  const navigate = useNavigate(); // Declare useNavigate

  const handleViewMore = (propertyId) => {
    navigate(`/properties/${propertyId}`); // Navigate to the PropertyDetails page
  };

  const properties = [
    {
      id: 1,
      title: 'Luxury Villa',
      price: '$1,200,000',
      image: 'https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
    },
    {
      id: 2,
      title: 'Modern Apartment',
      price: '$850,000',
      image: 'https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1100',
    },
    {
      id: 3,
      title: 'Cozy Cottage',
      price: '$450,000',
      image: 'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg',
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <header className="header">        
          <div className="hero" style={{ color: "white" }}>
            <h1>Find Your Dream Home</h1>
            <p>Explore our latest properties</p>
            <button 
              type="button" 
              style={{ background: "#007BFF" }}
              className="view-properties-button" 
              onClick={() => navigate('/properties')}>
              View Properties
            </button>
          </div>
        </header>

        <main className="main-content">
          <section className="featured-properties">
            <h2>Featured Properties</h2>
            <div className="property-list">
              {properties.map((property) => (
                <div key={property.id} className="property-card">
                  <img src={property.image} alt={property.title} />
                  <h3>{property.title}</h3>
                  <p>{property.price}</p>
                  <button onClick={() => handleViewMore(property.id)} className='home-view-more' >View More</button>
                </div>
              ))}
            </div>
          </section>

          <section className="about-us">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum, quam euismod sagittis bibendum,<br /> 
              augue nisi faucibus arcu, nec ultrices elit sem ac justo. We pride ourselves on connecting people <br />with their 
              dream homes and ensuring the process is seamless and enjoyable.
            </p>
          </section>

          <section className="contact-us">
            <h2>Contact Us</h2>
            <form action="#" method="POST">
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <textarea name="message" rows="5" placeholder="Message" required></textarea>
              <button type="submit" style={{ background: "#007BFF" }}>Send Message</button>
            </form>
          </section>

          <div>
            <ChatBox /> {/* Floating Chat Box */}
        </div>


        </main>

        <footer>
          <p>© 2024 Real Estate. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
