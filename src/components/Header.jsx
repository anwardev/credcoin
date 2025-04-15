// components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/credifin.png"


const Header = () => {
    return (
        <motion.header
            className="header"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="credifin" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#how-it-works">How it Works</a></li>
                        <li><a href="#benefits">Benefits</a></li>
                        <li><a href="#rewards">Rewards</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </nav>
                <button className="btn login-btn">Login</button>
            </div>
        </motion.header>

    );
};

export default Header;