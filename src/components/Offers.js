// src/components/Offers.js
import React from 'react';
import './Offers.css';

const offers = [
    { id: 1, text: 'Buy 1 Get 1 Free on select items!', imageUrl: '/offer1.png' },
    { id: 2, text: '20% off on all vitamins and supplements!', imageUrl: '/offer2.png' },
    { id: 3, text: 'Free home delivery for orders above $50!', imageUrl: '/offer3.png' }
];

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-container">
                {offers.map(offer => (
                    <div key={offer.id} className="offer">
                        <img src={offer.imageUrl} alt={offer.text} />
                        <p>{offer.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Offers;
