import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';

// Sample properties list (replace with API fetch if needed)
const properties = [
  {
    id: 1,
    title: 'Luxury Villa',
    description: 'A beautiful luxury villa with ocean views.',
    price: '$1,200,000',
    image: 'https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
  },
  {
    id: 2,
    title: 'Modern Apartment',
    description: 'A spacious apartment in the city center.',
    price: '$850,000',
    image: 'https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1100',
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    description: 'A charming cottage in the countryside.',
    price: '$450,000',
    image: 'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg',
  },
  {
    id: 4,
    title: 'Beachfront Condo',
    description: 'A modern condo with direct beach access.',
    price: '$950,000',
    image: 'https://webberstudio.com/wp-content/uploads/2023/02/Stunning-House-Design.jpg',
  },
];

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from URL
  const navigate = useNavigate();

  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div style={{ marginBottom: '30px' }}>
        <Navbar />
        
    <div className="property-details-container">

      <img src={property.image} alt={property.title} className="property-details-image" />
      <h2 className="property-details-title">{property.title}</h2>
      <p className="property-details-description">{property.description}</p>
      <p className="property-details-price">{property.price}</p>
      
      <button className="book-now-button" onClick={() => navigate(`/book/${property.id}`)}>
        Book Now
      </button>
      
      <button className="make-payment-button" onClick={() => navigate(`/payment/${property.id}`)}>
        Make Payment
      </button>
    </div>
    </div>
  );
};

export default PropertyDetails;
