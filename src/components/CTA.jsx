import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(108, 99, 255, 0.3)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        yoyoDuration: 0.6
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section 
      className="cta-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>
          Ready to Start Earning CredCoins?
        </motion.h2>
        <motion.p variants={itemVariants}>
          Join thousands of members who are getting rewarded for their financial responsibility.
        </motion.p>
        <motion.button
          className="btn btn-primary"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        //   variants={buttonVariants}
        >
          Start Earning Today
        </motion.button>
        <motion.p 
          className="disclaimer"
          variants={itemVariants}
        >
          *CredFinance is a registered NBFC. CredCoins rewards program is subject to terms and conditions.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CTA;