import React, { useEffect } from 'react';
import '../../../App.css';
import HeroSection from '../../HeroSection';

function Home () {
  return (
    <div className="home-page">
      <div className="home-container">
        <HeroSection />
      </div>
    </div>
  );
}

export default Home;