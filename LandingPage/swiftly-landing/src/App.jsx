import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import FeaturesSection from './components/FeaturesSection';
import DashboardPreview from './components/DashboardPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <FeaturesSection />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
