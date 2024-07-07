// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Advertisements from './components/Advertisements';
import Offers from './components/Offers';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const user = {
    name: 'John Doe',
    imageUrl: '/user.png'
  };

  const [location, setLocation] = useState('Loading...');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(data => {
            setLocation(`${data.city}, ${data.countryName}`);
          })
          .catch(error => {
            console.error('Error fetching location:', error);
            setLocation('Location unavailable');
          });
      },
      error => {
        console.error('Error getting location:', error);
        setLocation('Location unavailable');
      }
    );
  }, []);

  return (
    <div className="app">
      <Navbar user={user} />
      <div className="user-info">
        <h1>{user.name}</h1>
        <div className="location">{location}</div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>
          <div className="filter-section">
            <h3>Filter</h3>
            <div className="filter-option">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="all">All</option>
                <option value="medicines">Medicines</option>
                <option value="supplements">Supplements</option>
                <option value="personal-care">Personal Care</option>
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="price-range">Price Range</label>
              <select id="price-range" name="price-range">
                <option value="all">All</option>
                <option value="0-10">$0 - $10</option>
                <option value="10-20">$10 - $20</option>
                <option value="20-50">$20 - $50</option>
                <option value="50+">$50+</option>
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="rating">Rating</label>
              <select id="rating" name="rating">
                <option value="all">All</option>
                <option value="4-5">4 - 5 stars</option>
                <option value="3-4">3 - 4 stars</option>
                <option value="2-3">2 - 3 stars</option>
                <option value="1-2">1 - 2 stars</option>
              </select>
            </div>
            <button className="apply-filters-button">Apply Filters</button>
          </div>
        </div>
        <div className="main-content">
          <Advertisements />
          <Offers />
          <Categories />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
