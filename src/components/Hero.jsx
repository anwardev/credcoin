import { motion } from 'framer-motion';
import credImage from "../assets/credimg.jpg" 

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Earn <span className="gradient-text">CredCoins</span> on Every Financial Move
          </h1>
          <p className="hero-subtitle">
            Get rewarded for bills, loans, and credit card payments
          </p>
          <div className="hero-buttons">
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Start Earning
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </motion.button>
          </div>
   
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <motion.img 
            src={credImage}
            alt="CredCoins" 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;