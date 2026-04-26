import React from 'react';
import { motion } from 'framer-motion';

const DevotionalSection = () => {
  return (
    <section className="devotional-section" style={{
      background: 'var(--bg-cream)',
      padding: '100px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
    }}>
      {/* Decorative floral background particles */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.1, fontSize: '3rem' }}>🌸</div>
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', opacity: 0.1, fontSize: '3rem' }}>🌼</div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Left: Ganesha */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ width: '250px', zIndex: 2 }}
        >
          <img 
            src="/ganesha-devotional.png" 
            alt="Lord Ganesha" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
              borderRadius: '20px'
            }} 
          />
          <p style={{ marginTop: '15px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '2px' }}>LORD GANESHA</p>
        </motion.div>

        {/* Center: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ flex: 1, minWidth: '320px', padding: '0 20px' }}
        >
          <motion.h2 
            className="script-font" 
            style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '1rem' }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            || Shri Ganeshay Namah ||
          </motion.h2>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '2rem' }}>
            <hr style={{ flex: 1, borderColor: 'var(--secondary)', opacity: 0.4 }} />
            <div style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}>⚜️</div>
            <hr style={{ flex: 1, borderColor: 'var(--secondary)', opacity: 0.4 }} />
          </div>

          <p className="serif-font" style={{ 
            fontSize: '1.6rem', 
            color: 'var(--text-dark)', 
            fontStyle: 'italic',
            lineHeight: 1.7,
            maxWidth: '650px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <span style={{ fontSize: '3rem', color: 'var(--secondary)', position: 'absolute', top: '-20px', left: '-20px', opacity: 0.3 }}>"</span>
            With the divine blessings of our deities, we cordially invite you to join us 
            as we celebrate the first auspicious step of our beloved son's journey. 
            Your presence will double our joy.
            <span style={{ fontSize: '3rem', color: 'var(--secondary)', position: 'absolute', bottom: '-40px', right: '-20px', opacity: 0.3 }}>"</span>
          </p>

          <div style={{ marginTop: '3.5rem' }}>
             <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
             >
               <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.6 }}>
                 <path d="M0 12C20 12 20 0 40 0C60 0 60 12 80 12C60 12 60 24 40 24C20 24 20 12 0 12Z" fill="var(--secondary)" />
               </svg>
             </motion.div>
          </div>
        </motion.div>

        {/* Right: Shri Nath Ji */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ width: '250px', zIndex: 2 }}
        >
          <img 
            src="/shrinathji-devotional.png" 
            alt="Shri Nath Ji" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
              borderRadius: '20px'
            }} 
          />
          <p style={{ marginTop: '15px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '2px' }}>SHRI NATH JI</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DevotionalSection;
