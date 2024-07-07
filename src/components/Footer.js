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
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
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
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-of-service">Terms of Service</a></li>
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
