// src/components/Categories.js
import React from 'react';
import './Categories.css';
import { ShoppingCart, Favorite } from '@mui/icons-material';

const categories = [
    { id: 1, name: 'Medicines', imageUrl: '/category1.png' },
    { id: 2, name: 'Health Supplements', imageUrl: '/category2.png' },
    { id: 3, name: 'Personal Care', imageUrl: '/category3.png' }
    // Add more categories here
];

const items = [
    { id: 1, name: 'Pain Reliever', price: '$10', expiryDate: '12/2023', imageUrl: '/item1.png' },
    { id: 2, name: 'Vitamin C', price: '$15', expiryDate: '01/2024', imageUrl: '/item2.png' },
    { id: 3, name: 'Face Wash', price: '$8', expiryDate: '11/2023', imageUrl: '/item3.png' }
    // Add more items here
];

const Categories = () => {
    return (
        <div className="categories">
            <h2>Categories</h2>
            <div className="category-slider">
                {categories.map(category => (
                    <div key={category.id} className="category">
                        <img src={category.imageUrl} alt={category.name} className="category-image" />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
            <h2>Items</h2>
            <div className="items">
                {items.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.imageUrl} alt={item.name} className="item-image" />
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}</p>
                        <p>Expiry Date: {item.expiryDate}</p>
                        <div className="item-actions">
                            <ShoppingCart className="item-icon cart-icon" />
                            <Favorite className="item-icon wishlist-icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
