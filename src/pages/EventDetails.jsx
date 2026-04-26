import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import Navbar from '../components/Navbar';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';

const eventData = {
  'vinayak-sthapana': {
    title: 'Vinayak Sthapana',
    date: '2026-04-30T14:00:00',
    dateText: 'Thursday, 30 April 2026',
    time: '02:00 PM Onwards',
    location: 'Nij Awas, Fatehnagar',
    description: 'The auspicious beginning of the ceremony with the installation of Lord Ganesha, seeking his divine blessings for the journey ahead.',
    image: '/event-vinayak.png'
  },
  'bhajan-sandhya': {
    title: 'Bhajan Sandhya',
    date: '2026-05-03T20:00:00',
    dateText: 'Sunday, 03 May 2026',
    time: '08:00 PM Onwards',
    location: 'Shri Kuneshwar Mahadev, Farara',
    description: 'A spiritual evening filled with devotional melodies and bhajans (Ratri Jagaran) to celebrate the divine presence and family togetherness.',
    image: '/event-bhajan.png'
  },
  'mundan-sanskar': {
    title: 'Mundan Sanskar',
    date: '2026-05-04T06:15:00',
    dateText: 'Monday, 04 May 2026',
    time: '06:15 AM',
    location: 'Shri Kuneshwar Mahadev, Farara',
    description: 'The main ceremony of Praneet (Laddu) - a sacred ritual marking his first haircut and symbolizing purity and a fresh start.',
    image: '/event-mundan.png'
  },
  'sneh-bhoj': {
    title: 'Sneh Bhoj',
    date: '2026-05-04T09:00:00',
    dateText: 'Monday, 04 May 2026',
    time: '09:00 AM Onwards',
    location: 'Shri Kuneshwar Mahadev, Farara',
    description: 'A celebratory community feast to share joy and seek blessings from all our loved ones after the main ceremony.',
    image: '/event-bhoj.png'
  }
};

const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventData[eventId];

  if (!event) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h2>Event not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="event-page" style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>
      <Navbar />

      {/* Event Hero */}
      <section className="event-hero" style={{
        height: '60vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <img
            src={event.banner || event.image}
            alt={event.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2))'
          }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 1, textAlign: 'center', color: 'white' }}
        >
          <h1 className="serif-font" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
            {event.title}
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
            <hr style={{ width: '50px', borderColor: 'var(--secondary)' }} />
            <span style={{ color: 'var(--secondary)' }}>✨</span>
            <hr style={{ width: '50px', borderColor: 'var(--secondary)' }} />
          </div>
        </motion.div>
      </section>

      {/* Event Content */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', textDecoration: 'none', marginBottom: '40px', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: 1, minWidth: '280px' }}
          >
            <img
              src={event.image}
              alt={event.title}
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: 1.2, minWidth: '320px' }}
          >
            <h2 className="serif-font" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Details</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ background: 'rgba(128, 0, 0, 0.1)', padding: '12px', borderRadius: '50%' }}>
                  <Calendar size={24} color="var(--primary)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase' }}>Date</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{event.dateText}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ background: 'rgba(128, 0, 0, 0.1)', padding: '12px', borderRadius: '50%' }}>
                  <Clock size={24} color="var(--primary)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase' }}>Time</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{event.time}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ background: 'rgba(128, 0, 0, 0.1)', padding: '12px', borderRadius: '50%' }}>
                  <MapPin size={24} color="var(--primary)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{event.location}</p>
                </div>
              </div>
            </div>

            <p className="serif-font" style={{ fontSize: '1.3rem', marginTop: '40px', lineHeight: 1.8, color: 'var(--text-dark)', opacity: 0.8 }}>
              {event.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: 'rgba(128, 0, 0, 0.03)', textAlign: 'center' }}>
        <h2 className="script-font" style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', color: 'var(--primary)', marginBottom: '2rem' }}>Counting Down to the Celebration</h2>
        <Countdown targetDate={event.date} />
      </section>
    </div>
  );
};

export default EventDetails;
