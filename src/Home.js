import './style.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const Home = () => {
  const navigate = useNavigate(); // Declare useNavigate

  const handleViewMore = (propertyId) => {
    navigate(`/properties/${propertyId}`); // Navigate to a specific property
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/book">Book</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li className="float-right"><Link to="/profile">Ayushma Chhetri</Link></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Find Your Dream Home</h1>
          <p>Explore our latest properties</p>
          <button 
            type="button" 
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
            <div className="property-card">
              <img src="https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="Cadogan" />
              <h3>Cadogan</h3>
              <p>$200,000.00</p>
              <button onClick={() => handleViewMore('cadogan')}>View More</button>
            </div>
            <div className="property-card">
              <img src="https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1100" alt="Milverton" />
              <h3>Milverton</h3>
              <p>$400,000.00</p>
              <button onClick={() => handleViewMore('milverton')}>View More</button>
            </div>
            <div className="property-card">
              <img src="https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg" alt="Colony" />
              <h3>Colony</h3>
              <p>$700,000.00</p>
              <button onClick={() => handleViewMore('colony')}>View More</button>
            </div>
          </div>
        </section>

        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum, quam euismod sagittis bibendum, 
            augue nisi faucibus arcu, nec ultrices elit sem ac justo. We pride ourselves on connecting people with their 
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
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2024 Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
