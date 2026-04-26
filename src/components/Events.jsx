import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ChevronRight, Clock } from 'lucide-react';

const events = [
  {
    id: 'vinayak-sthapana',
    title: 'Vinayak Sthapana',
    date: 'APR 30',
    fullDate: 'Thursday, 30 April 2026',
    time: '02:00 PM Onwards',
    location: 'Fatehnagar',
    image: '/event-vinayak.png'
  },
  {
    id: 'bhajan-sandhya',
    title: 'Bhajan Sandhya',
    date: 'MAY 03',
    fullDate: 'Sunday, 03 May 2026',
    time: '08:00 PM Onwards',
    location: 'Farara',
    image: '/event-bhajan.png'
  },
  {
    id: 'mundan-sanskar',
    title: 'Mundan Sanskar',
    date: 'MAY 04',
    fullDate: 'Monday, 04 May 2026',
    time: '06:15 AM',
    location: 'Farara',
    image: '/event-mundan.png'
  },
  {
    id: 'sneh-bhoj',
    title: 'Sneh Bhoj',
    date: 'MAY 04',
    fullDate: 'Monday, 04 May 2026',
    time: '09:00 AM Onwards',
    location: 'Farara',
    image: '/event-bhoj.png'
  }
];

const Events = () => {
  return (
    <section id="events" className="events-section" style={{ padding: '100px 20px', background: 'var(--bg-cream)' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '5px', fontSize: '0.9rem', fontWeight: 700 }}>Celebrate With Us</span>
        <h2 className="serif-font" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--primary)', marginTop: '10px' }}>✨ Auspicious Events ✨</h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        maxWidth: '1400px', 
        margin: '0 auto' 
      }}>
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(212, 175, 55, 0.1)'
            }}
          >
            {/* Image Container */}
            <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
              <img 
                src={event.image} 
                alt={event.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 40%)'
              }}></div>
              
              {/* Floating Date Badge */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: 'var(--primary)',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(128, 0, 0, 0.3)',
                zIndex: 2
              }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, margin: 0 }}>{event.date.split(' ')[0]}</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>{event.date.split(' ')[1]}</p>
              </div>
            </div>

            {/* Content Container */}
            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 className="serif-font" style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '15px' }}>{event.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  <Calendar size={16} color="var(--secondary)" />
                  <span>{event.fullDate}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  <Clock size={16} color="var(--secondary)" />
                  <span>{event.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  <MapPin size={16} color="var(--secondary)" />
                  <span>{event.location}</span>
                </div>
              </div>

              <Link 
                to={`/event/${event.id}`} 
                style={{ 
                  marginTop: 'auto',
                  textDecoration: 'none', 
                  color: 'var(--primary)', 
                  fontWeight: 700, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '5px',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}
              >
                View Details <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 1200px) {
          .events-section > div:last-child {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Events;
