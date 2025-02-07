import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import TrustedSection from './components/TrustedSection';
import FeaturedJobs from './components/FeaturedJobs';
import CategoriesSection from './components/CategoriesSection';
import BlogSection from './components/BlogSection';
import ReviewSection from './components/ReviewSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <FeaturedJobs />
      <CategoriesSection />
      <BlogSection />
      <ReviewSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
