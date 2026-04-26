import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Events from './components/Events';
import ContactRSVP from './components/ContactRSVP';
import SplashScreen from './components/SplashScreen';
import DevotionalSection from './components/DevotionalSection';
import AboutCeremony from './components/AboutCeremony';
import EventDetails from './pages/EventDetails';
import ComplimentsSection from './components/ComplimentsSection';
import BackgroundMusic from './components/BackgroundMusic';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    if (isOpen) {
      setTimeout(() => {
        document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
      }, 100);
    }

    return () => observer.disconnect();
  }, [isOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const HomePage = () => (
    <div className="mandala-bg">
      <Navbar />
      <Hero />
      
      {/* Countdown Section */}
      <section style={{ 
        padding: '15px 20px', 
        background: 'linear-gradient(to bottom, transparent, #fcfaf5)', 
        textAlign: 'center',
        marginTop: '-35px',
        position: 'relative',
        zIndex: 15
      }}>
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          background: 'rgba(255, 255, 255, 0.8)', 
          backdropFilter: 'blur(10px)', 
          padding: '15px 20px', 
          borderRadius: '25px',
          boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
          border: '1px solid rgba(212, 175, 55, 0.15)'
        }}>
          <h2 className="script-font" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.2rem' }}>Celebration Begins In</h2>
          <Countdown targetDate="2026-05-04T06:15:00" />
        </div>
      </section>

      <DevotionalSection />
      <AboutCeremony />
      <Events />
      <ComplimentsSection />
      <ContactRSVP />
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {!isOpen ? (
        <SplashScreen key="splash" onOpen={() => setIsOpen(true)} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <BackgroundMusic isOpen={isOpen} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:eventId" element={<EventDetails />} />
          </Routes>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
