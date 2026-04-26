import React from 'react';
import { motion } from 'framer-motion';

const AboutCeremony = () => {
  return (
    <section id="about" className="about-ceremony" style={{
      padding: '100px 20px',
      background: '#fff',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Subtle background motif */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-10%',
        transform: 'translateY(-50%)',
        fontSize: '20rem',
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        🕉️
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '80px',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Left Side: Image with decorative frame */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ 
            flex: '1', 
            minWidth: '320px',
            position: 'relative'
          }}
        >
          {/* Decorative Frame Elements */}
          <div style={{
            position: 'absolute',
            top: '-25px',
            left: '-25px',
            width: '100px',
            height: '100px',
            borderTop: '4px solid var(--secondary)',
            borderLeft: '4px solid var(--secondary)',
            borderRadius: '15px 0 0 0'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-25px',
            right: '-25px',
            width: '100px',
            height: '100px',
            borderBottom: '4px solid var(--secondary)',
            borderRight: '4px solid var(--secondary)',
            borderRadius: '0 0 15px 0'
          }}></div>

          <div style={{
            padding: '15px',
            background: '#fcfaf5',
            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
            borderRadius: '20px',
            transform: 'rotate(-2deg)'
          }}>
            <img 
              src="/about-baby.png" 
              alt="Mundan Ceremony Baby" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '12px',
                display: 'block'
              }} 
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ flex: '1.2', minWidth: '320px' }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              color: 'var(--secondary)', 
              textTransform: 'uppercase', 
              letterSpacing: '6px', 
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'block',
              marginBottom: '20px'
            }}
          >
            A Sacred Beginning
          </motion.span>

          <h2 className="serif-font" style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
            color: 'var(--primary)', 
            marginBottom: '2rem',
            lineHeight: 1.1,
            fontWeight: 700
          }}>
            ✨ About the Ceremony ✨
          </h2>
          
          <div style={{ 
            width: '60px', 
            height: '3px', 
            background: 'linear-gradient(to right, var(--secondary), transparent)', 
            marginBottom: '2.5rem' 
          }}></div>

          <h3 className="script-font" style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}>
            Praneet (Laddu)
          </h3>

          <p className="serif-font" style={{ 
            fontSize: '1.45rem', 
            lineHeight: 1.9, 
            color: 'var(--text-dark)', 
            marginBottom: '2.5rem',
            fontWeight: 500,
            textAlign: 'left'
          }}>
            Mundan Sanskar is a sacred Hindu ritual that marks a child’s first haircut, symbolizing purity and a fresh beginning. This beautiful tradition is celebrated with love, blessings, and family togetherness.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ height: '1px', flex: 1, background: 'rgba(212, 175, 55, 0.2)' }}></div>
            <p className="script-font" style={{ fontSize: '2.8rem', color: 'var(--secondary)' }}>
              Love & Blessings
            </p>
            <div style={{ height: '1px', flex: 1, background: 'rgba(212, 175, 55, 0.2)' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCeremony;
