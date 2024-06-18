// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import '../styles/global.css';


const HomePage = () => {
  const cards = [
    {
      imageUrl: 'https://example.com/image1.jpg',
      title: 'Card 1',
      description: 'This is the first card.'
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      title: 'Card 2',
      description: 'This is the second card.'
    },
    {
      imageUrl: 'https://example.com/image3.jpg',
      title: 'Card 3',
      description: 'This is the third card.'
    }
  ];

  return (
    <div>
      <Header />
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;