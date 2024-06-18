// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;