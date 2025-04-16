import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import TransactionExamples from './components/TransactionExample';
import Testimonials from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero/>
      <HowItWorks />
      <Benefits />
      <TransactionExamples />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;