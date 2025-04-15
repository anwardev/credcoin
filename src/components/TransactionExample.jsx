// components/TransactionExamples.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TransactionExamples = () => {
  const [activeTab, setActiveTab] = useState(0);

  const transactionTypes = [
    {
      name: 'Credit Card Payments',
      examples: [
        { amount: '₹1000', coins: '10', description: 'per ₹1000 credit card payment' },
        { amount: 'On-time', coins: '5', description: 'bonus for timely payment' },
      ],
    },
    {
      name: 'Loan EMIs',
      examples: [
        { amount: 'On-time EMI', coins: '15', description: 'per on-time EMI payment' },
        { amount: 'Early EMI', coins: '20', description: 'bonus for early payment' },
      ],
    },
    {
      name: 'Utility Bills',
      examples: [
        { amount: '₹500', coins: '5', description: 'per ₹500 utility bill payment' },
        { amount: 'Auto-pay', coins: '3', description: 'bonus for auto-pay setup' },
      ],
    },
  ];
  

  return (
    <section className="transaction-examples">
      <div className="container">
        <h2 className="section-title">Earn More With Every Transaction</h2>
        {/* Tab Buttons */}
        <div className="tab-buttons">
          {transactionTypes.map((type, index) => (
            <button
              key={index}
              className={`btn btn-secondary ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {type.name}
            </button>
          ))}

        </div>
        {/* Examples Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="examples-container"
          >
            {transactionTypes[activeTab].examples.map((example, index) => (
              <div key={index} className="example-card">
                <div className="coin-amount">
                  <span className="coins">{example.coins}</span>
                  <span className="coin-label">CredCoins</span>
                </div>
                <div className="example-details">
                  <p className="amount">{example.amount}</p>
                  <p className="description">{example.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TransactionExamples;