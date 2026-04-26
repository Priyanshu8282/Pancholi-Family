import React from 'react';
import { motion } from 'framer-motion';

const FallingPetals = () => {
  const petals = Array.from({ length: 20 });
  return (
    <div className="petals-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
            opacity: 0
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
            opacity: [0, 0.8, 0.8, 0],
            x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          style={{ position: 'absolute', fontSize: Math.random() * 20 + 10 + 'px' }}
        >
          {i % 2 === 0 ? '🌸' : '🌼'}
        </motion.div>
      ))}
    </div>
  );
};

const SplashScreen = ({ onOpen }) => {
  return (
    <motion.div
      className="splash-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      <FallingPetals />

      <motion.div
        className="splash-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="card-inner-border">
          <motion.div
            className="ganesh-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ marginBottom: '1rem' }}
          >
            <img
              src="/ganesh_god.png"
              alt="Lord Ganesha"
              style={{
                width: '100%',
                maxWidth: '100px',
                height: 'auto',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))',
                mixBlendMode: 'multiply',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </motion.div>

          <div className="small-motif" style={{ marginBottom: '0.5rem' }}>
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10C10 10 10 0 20 0C30 0 30 10 40 10C30 10 30 20 20 20C10 20 10 10 0 10Z" fill="#D4AF37" opacity="0.6" />
            </svg>
          </div>

          <p className="event-label">Shubh Mundan Sanskar</p>
          <h1 className="serif-font">
            Pancholi Family
          </h1>
          <p className="invitation-subtitle">
            Heartily Invites You
          </p>

          <motion.button
            className="btn-open-invitation"
            onClick={onOpen}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(128, 0, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Open Invitation
          </motion.button>

          <motion.div
            className="small-footer-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '15px'
            }}
          >
            {[1, 2, 3].map((_, i) => (
              <motion.img
                key={i}
                src="/dol.png"
                alt="Dol"
                whileHover={{ scale: 1.2, rotate: 10 }}
                style={{
                  width: '30px',
                  height: 'auto',
                  opacity: 0.9,
                  cursor: 'pointer',
                  mixBlendMode: 'multiply'
                }}
              />
            ))}
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
