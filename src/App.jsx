import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";


import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import CheckoutPage from "./components/Checkout";


function App() {
  return (
    <Router>
    <div className="app-container">  
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/pricinPage" element={<PricingPage />} /> */}
        <Route path="/checkoutPage" element={<CheckoutPage />} />
        </Routes>
      </main>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
