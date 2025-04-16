import React from 'react';
import { motion } from 'framer-motion';
import { GiChart, GiMoneyStack, GiStarsStack } from 'react-icons/gi';
import { MdCached } from 'react-icons/md';

const Benefits = () => {
  const benefits = [
    {
      icon: <GiMoneyStack size={40} style={{ color: '#3066ff' }}  />,
      title: 'Savings Boost',
      description: 'Redeem coins for cashback and discounts'
    },
    {
      icon: <GiChart size={40} style={{ color: '#2d3748' }} />,
      title: 'Credit Score',
      description: 'Improve your score with responsible behavior'
    },
    {
      icon: <GiStarsStack size={40} style={{ color: '#ffbe00' }} />,
      title: 'Exclusive Perks',
      description: 'Access premium offers and VIP benefits'
    },
    {
      icon: <MdCached size={40} style={{ color: '#3066ff' }} />,
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