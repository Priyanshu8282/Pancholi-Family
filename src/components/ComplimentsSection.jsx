import React from 'react';
import { motion } from 'framer-motion';

const ComplimentsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="family" className="compliments-section" style={{ 
      padding: '100px 20px', 
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #fff, #fcfaf5)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          fontSize: '15rem',
          opacity: 0.03,
          zIndex: 0
        }}
      >
        🌸
      </motion.div>
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          fontSize: '15rem',
          opacity: 0.03,
          zIndex: 0
        }}
      >
        🌼
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <motion.h2 
          variants={itemVariants}
          className="serif-font" 
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            color: 'var(--primary)', 
            marginBottom: '3rem',
            position: 'relative',
            display: 'inline-block'
          }}
        >
          With Best Compliments
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ 
              height: '2px', 
              background: 'var(--secondary)', 
              position: 'absolute', 
              bottom: '-10px', 
              left: 0 
            }} 
          />
        </motion.h2>

        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          padding: '60px 40px',
          borderRadius: '30px',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
          position: 'relative'
        }}>
          {/* Ornate corners */}
          <div style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '1.5rem', opacity: 0.4 }}>✨</div>
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '1.5rem', opacity: 0.4 }}>✨</div>
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', fontSize: '1.5rem', opacity: 0.4 }}>✨</div>
          <div style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '1.5rem', opacity: 0.4 }}>✨</div>

          <motion.div variants={itemVariants}>
            <p className="script-font" style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
              Pancholi Family
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-light)', 
              letterSpacing: '3px', 
              textTransform: 'uppercase',
              marginBottom: '3rem'
            }}>
              Fatehnagar, Udaipur
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <motion.div variants={itemVariants}>
              <h3 style={{ 
                color: 'var(--primary)', 
                marginBottom: '1.5rem', 
                fontSize: '1.4rem',
                borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                paddingBottom: '10px',
                display: 'inline-block'
              }}>
                Preshak
              </h3>
              <div style={{ lineHeight: 2, fontSize: '1.1rem' }}>
                <p>Shriman Dalchand Ji Pancholi</p>
                <p>Ch. Harish Pancholi</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 style={{ 
                color: 'var(--primary)', 
                marginBottom: '1.5rem', 
                fontSize: '1.4rem',
                borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                paddingBottom: '10px',
                display: 'inline-block'
              }}>
                Nanihal Paksh
              </h3>
              <div style={{ lineHeight: 2, fontSize: '1.1rem' }}>
                <p>Shriman Ladulal Ji Upadhyay</p>
                <p>Ch. Prakash Chand Ji</p>
                <p>Ch. Atuleet Upadhyay (Bhilwara)</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ marginTop: '40px' }}
        >
          <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
            <path d="M0 10C25 10 25 0 50 0C75 0 75 10 100 10C75 10 75 20 50 20C25 20 25 10 0 10Z" fill="var(--secondary)" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ComplimentsSection;
