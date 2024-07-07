// src/components/Advertisements.js
import React, { useState, useEffect } from 'react';
import './Advertisements.css';

const ads = [
    { id: 1, image: '/ad1.png' },
    { id: 2, image: '/ad2.png' },
    { id: 3, image: '/ad3.png' }
];

const Advertisements = () => {
    const [currentAd, setCurrentAd] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentAd((currentAd + 1) % ads.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentAd]);

    return (
        <div className="advertisements">
            <img src={ads[currentAd].image} alt="Advertisement" />
        </div>
    );
}

export default Advertisements;
