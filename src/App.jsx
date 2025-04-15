import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import TransactionExamples from './components/TransactionExample';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero/>
      <HowItWorks />
      <Benefits />
      <TransactionExamples />
      {/* <Testimonials /> */}
      {/* <CTA /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;