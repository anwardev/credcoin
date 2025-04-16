import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/credifin.png"


const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialIconVariants = {
    hover: {
      y: -3,
      scale: 1.1,
      color: "#6C63FF"
    }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="footer-content" variants={containerVariants}>
          <motion.div
            className="logo"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="credifin" />

          </motion.div>

          <motion.div className="footer-links" variants={containerVariants}>
            <motion.div className="links-column" variants={itemVariants}>
              <h4>Company</h4>
              <ul>
                <motion.li variants={itemVariants}><a href="#">About Us</a></motion.li>
                <motion.li variants={itemVariants}><a href="#">Careers</a></motion.li>
                <motion.li variants={itemVariants}><a href="#">Blog</a></motion.li>
              </ul>
            </motion.div>

            <motion.div className="links-column" variants={itemVariants}>
              <h4>Legal</h4>
              <ul>
                <motion.li variants={itemVariants}><a href="#">Terms</a></motion.li>
                <motion.li variants={itemVariants}><a href="#">Privacy</a></motion.li>
                <motion.li variants={itemVariants}><a href="#">Security</a></motion.li>
              </ul>
            </motion.div>

            <motion.div className="links-column" variants={itemVariants}>
              <h4>Support</h4>
              <ul>
                <motion.li variants={itemVariants}><a href="#">Help Center</a></motion.li>
                <motion.li variants={itemVariants}><a href="#">Contact Us</a></motion.li>
                <motion.li variants={itemVariants}><a href="#">FAQs</a></motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>
            © {new Date().getFullYear()} CredFinance. All rights reserved.
          </motion.p>
          <motion.div className="social-icons">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                variants={itemVariants}
                whileHover={socialIconVariants}
              >
                <i className={`icon-${icon}`}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;