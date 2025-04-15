import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Savings Boost',
      description: 'Redeem coins for cashback and discounts'
    },
    {
      icon: '📈',
      title: 'Credit Score',
      description: 'Improve your score with responsible behavior'
    },
    {
      icon: '⭐',
      title: 'Exclusive Perks',
      description: 'Access premium offers and VIP benefits'
    },
    {
      icon: '🔄',
      title: 'Flexible Redemption',
      description: 'Use coins across multiple reward categories'
    }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <h2 className="section-title">Why Earn CredCoins</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="benefit-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;