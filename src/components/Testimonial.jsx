// components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import { img } from 'framer-motion/client';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Credit Card User',
      quote: 'Earned 2,500 CredCoins in 3 months! Redeemed them for flight discounts.',
      avatar: (img2)
    },
    {
      name: 'Priya Patel',
      role: 'Loan Customer',
      quote: 'The bonus coins for early EMI payments helped improve my credit score significantly.',
      avatar: (img1)
    },
    {
      name: 'Vikram Mehta',
      role: 'Premium Member',
      quote: 'Exclusive perks for high coin holders are amazing. Got VIP lounge access at airports.',
      avatar: (img3)
    }
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Members Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              variants={cardVariants}
            >
              <div className="testimonial-content">
                <motion.p 
                  className="quote"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonial.quote}"
                </motion.p>
                <div className="user-info">
                  <motion.img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="avatar"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                  />
                  <motion.div
                    initial={{ x: 10 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4>{testimonial.name}</h4>
                    <p className="role">{testimonial.role}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;