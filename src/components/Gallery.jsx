import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/image-1.png', title: 'Auspicious Beginning' },
  { src: '/image-2.png', title: 'Divine Blessings' },
  { src: '/image-3.png', title: 'Soulful Melodies' },
  { src: '/image-4.png', title: 'Sacred Rituals' },
  { src: '/image-5.png', title: 'Celebratory Feast' },
  { src: '/image-6.png', title: 'Pure Joy' }
];

const Gallery = () => {
  return (
    <section id="gallery" style={{ 
      padding: '100px 20px', 
      background: 'linear-gradient(to bottom, #fcfaf5, #fffbf2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-50px',
        opacity: 0.05,
        pointerEvents: 'none'
      }}>
        <img src="/ganesh_god.png" alt="" style={{ width: '300px' }} />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '5px', fontSize: '0.9rem', fontWeight: 700, display: 'block', marginBottom: '10px' }}
        >
          Capturing Moments
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="serif-font" 
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--primary)', marginTop: '0' }}
        >
          ✨ Photo Gallery ✨
        </motion.h2>
        <div style={{ 
          width: '80px', 
          height: '2px', 
          background: 'var(--secondary)', 
          margin: '20px auto',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--bg-cream)',
            padding: '0 5px',
            fontSize: '12px'
          }}>🌸</div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              background: 'white',
              padding: '12px',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '4/5',
              position: 'relative'
            }}>
              <motion.img 
                src={img.src} 
                alt={img.title} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '30px 20px 20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                color: 'white'
              }}>
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ornament at bottom */}
      <div style={{ textAlign: 'center', marginTop: '60px', opacity: 0.3 }}>
        <img src="/dol.png" alt="" style={{ width: '50px', filter: 'grayscale(100%)' }} />
      </div>
    </section>
  );
};

export default Gallery;
