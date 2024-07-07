// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-left">
                    <img src="/logo.png" alt="Company Logo" className="logo" />
                    <h4>Healthcare Company</h4>
                    <ul className="social-media">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="footer-section">
                        <h4>Contact Information</h4>
                        <p>Address: 123 Health St, Wellness City</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@healthcare.com</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-section newsletter">
                        <h4>Newsletter Signup</h4>
                        <form action="#">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
