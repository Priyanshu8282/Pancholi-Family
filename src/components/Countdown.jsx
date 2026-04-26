import React from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

const CountdownComponent = ({ targetDate }) => {
  const date = new Date(targetDate || '2026-05-04T09:00:00');

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}
        >
          ✨ The Celebration has Begun! ✨
        </motion.div>
      );
    } else {
      const units = [
        { label: 'Days', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Seconds', value: seconds }
      ];

      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          flexWrap: 'wrap',
          marginTop: '20px' 
        }}>
          {units.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'white',
                padding: '8px 6px',
                borderRadius: '10px',
                minWidth: '60px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                textAlign: 'center',
                border: '1px solid rgba(212, 175, 55, 0.12)'
              }}
            >
              <div style={{ 
                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', 
                fontWeight: 700, 
                color: 'var(--primary)', 
                fontFamily: 'Cormorant Garamond, serif',
                lineHeight: 1
              }}>
                {item.value.toString().padStart(2, '0')}
              </div>
              <div style={{ 
                fontSize: '0.55rem', 
                textTransform: 'uppercase', 
                color: 'var(--text-light)', 
                letterSpacing: '1px',
                marginTop: '2px',
                fontWeight: 600
              }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="countdown-wrapper" style={{ padding: '20px' }}>
      <Countdown date={date} renderer={renderer} />
    </div>
  );
};

export default CountdownComponent;
