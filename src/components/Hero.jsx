import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  // Array for falling petals
  const petals = Array.from({ length: 20 });

  return (
    <section className="hero" style={{
      position: 'relative',
      height: 'calc(100vh - 80px)',
      minHeight: '700px',
      width: '100vw',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '60px 20px',
      overflow: 'hidden',
      background: '#000',
      margin: 0
    }}>
      {/* Background Image - Full Width Banner */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <img
          src="/hero-bg.png"
          alt="Mundan Ceremony Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.6) 100%)'
        }}></div>
      </div>

      {/* Falling Petals */}
      <div className="petals-container" style={{ zIndex: 5 }}>
        {petals.map((_, i) => (
          <motion.div
            key={i}
            className="petal"
            initial={{
              top: '-10%',
              left: `${Math.random() * 100}%`,
              opacity: 0,
              rotate: 0
            }}
            animate={{
              top: '110%',
              left: `${(Math.random() * 100) + (Math.random() * 20 - 10)}%`,
              opacity: [0, 0.8, 0.8, 0],
              rotate: 360
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: "linear"
            }}
            style={{ fontSize: `${1 + Math.random()}rem`, color: i % 2 === 0 ? '#ffb7c5' : '#fff' }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-content"
        style={{
          textAlign: 'center',
          zIndex: 10,
          maxWidth: '1200px',
          width: '100%',
          padding: '20px',
          color: 'white',
          position: 'relative'
        }}
      >
        {/* Top Ornament */}
        <div className="hero-ornament" style={{ marginBottom: '1.5rem' }}>
          <hr style={{ borderColor: 'var(--secondary)', opacity: 0.8 }} />
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.span>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            letterSpacing: '5px',
            fontWeight: 700,
            textTransform: 'uppercase',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
            color: 'var(--secondary)',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            Shubh Mundan Sanskar
          </span>
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>✨</motion.span>
          <hr style={{ borderColor: 'var(--secondary)', opacity: 0.8 }} />
        </div>

        <h4 className="serif-font" style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          marginBottom: '0.5rem',
          color: '#fff',
          fontWeight: 400,
          letterSpacing: '2px',
          textShadow: '0 2px 8px rgba(0,0,0,0.8)'
        }}>
          Mundan Ceremony of
        </h4>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontSize: 'clamp(4rem, 18vw, 9rem)',
            color: 'var(--secondary)',
            marginBottom: '0',
            lineHeight: 0.85,
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            filter: 'drop-shadow(0 5px 20px rgba(0,0,0,0.8))'
          }}
        >
          Praneet
        </motion.h1>

        <p className="script-font" style={{
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          color: '#fff',
          marginTop: '-5px',
          marginBottom: '2rem',
          textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
          fontWeight: 500
        }}>
          (Laddu)
        </p>

        {/* Info Grid */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="hero-info-grid" style={{
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            padding: '12px 35px',
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '25px',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <div className="hero-info-item">
              <Calendar size={20} color="var(--secondary)" />
              <span style={{ color: '#fff', fontWeight: 600, fontSize: 'clamp(0.8rem, 2vw, 1.1rem)' }}>MONDAY, 04 MAY 2026</span>
            </div>
            <div className="info-divider" style={{ width: '1px', background: 'rgba(212, 175, 55, 0.4)', height: '20px' }}></div>
            <div className="hero-info-item">
              <MapPin size={20} color="var(--secondary)" />
              <span style={{ color: '#fff', fontWeight: 600, fontSize: 'clamp(0.8rem, 2vw, 1.1rem)' }}>Shri Kuneshwar Mahadev, Farara</span>
            </div>
          </div>
        </div>

        <p className="serif-font" style={{
          fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)',
          color: '#fff',
          letterSpacing: '3px',
          fontWeight: 500,
          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          background: 'rgba(0,0,0,0.2)',
          display: 'inline-block',
          padding: '5px 20px',
          borderRadius: '10px'
        }}>
          ✨ Pancholi Family warmly invites you ✨
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .hero { padding: 40px 15px !important; min-height: 600px !important; }
          .hero-ornament hr { width: 30px !important; }
          .hero-ornament span { letter-spacing: 2px !important; font-size: 0.8rem !important; }
          .info-divider { display: none !important; }
          .hero-info-grid { flex-direction: column; gap: 8px !important; border-radius: 15px !important; padding: 12px 20px !important; width: 90% !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
