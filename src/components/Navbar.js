// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { ShoppingCart, Favorite, AccountCircle, Help } from '@mui/icons-material';

const Navbar = ({ user }) => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="Company Logo" />
                <span>Pharmacy</span>
            </div>
            <div className="user-profile">
                <div className="icons">
                    <ShoppingCart />
                    <Favorite />
                    <AccountCircle />
                    <Help />
                </div>
                <h4>{user.name}</h4>
                <img src={user.imageUrl} alt="User" className="user-image" />
            </div>
        </div>
    );
}

export default Navbar;
