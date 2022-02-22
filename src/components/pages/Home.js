import React, { useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

export default function Home() {

  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
