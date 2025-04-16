import React from "react";
import { motion } from 'framer-motion';
import { FaCoins, FaCreditCard, FaGift } from "react-icons/fa";


const HowItWorks = () => {

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 0.8 }
    }
  };

  const steps = [
    {
      icon: <FaCreditCard size={40} style={{ color: '#3B82F6' }} />,
      title: 'Make Transactions',
      description: 'Pay credit card bills, loans, or utility payments'
    },
    {
      icon: <FaCoins size={40} style={{ color: '#ffbe00' }} />,
      title: 'Earn CredCoins',
      description: 'Automatically receive coins for responsible behavior'
    },
    {
      icon: <FaGift size={40} style={{ color: '#ff3f00' }} />,
      title: 'Redeem Rewards',
      description: 'Exchange coins for cashback, discounts & exclusive perks'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How CredCoins Work</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="step-number">{index + 1}</div>
            </motion.div>
          ))}
          <div className="connector-line"></div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;


