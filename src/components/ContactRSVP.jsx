import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Building2 } from 'lucide-react';

const ContactRSVP = () => {
  const familyContacts = [
    { name: 'Shriman Dalchand Ji Pancholi', relation: 'Preshak', phones: ['+91 97859 70840'] },
    { name: 'Ch. Harish Pancholi', relation: 'Preshak', phones: ['+91 98876 78068', '+91 89520 97199'] }
  ];

  const firmDetails = [
    { name: 'Balaji Nursing Home', location: 'Fatehnagar' },
    { name: 'Balaji Swimming Pool & Garden', location: 'Fatehnagar' }
  ];

  return (
    <section id="contact" style={{ padding: '30px 20px', background: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 700 }}
        >
          Get In Touch
        </motion.span>
        <h2 className="serif-font" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: 'var(--primary)', marginTop: '4px', marginBottom: '0' }}>
          Contact Details
        </h2>
        <div style={{ width: '50px', height: '2px', background: 'linear-gradient(to right, var(--secondary), transparent)', margin: '0.5rem auto' }}></div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Contact Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '20px', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.1)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '8px' }}>
              <Phone color="white" size={18} />
            </div>
            <h3 className="serif-font" style={{ color: 'var(--primary)', fontSize: '1.3rem' }}>Family Contacts</h3>
          </div>

          {familyContacts.map((contact, index) => (
            <div key={index} style={{ marginBottom: '1rem', paddingBottom: '6px', borderBottom: '1px dotted rgba(212, 175, 55, 0.2)' }}>
              <p style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '0.95rem', marginBottom: '1px' }}>{contact.name}</p>
              <p style={{ fontSize: '0.7rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{contact.relation}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {contact.phones.map((phone, pIdx) => (
                  <a key={pIdx} href={`tel:${phone.replace(/\s+/g, '')}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                    <Phone size={10} /> {phone}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Firm Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '20px', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.1)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <div style={{ background: 'var(--secondary)', padding: '6px', borderRadius: '8px' }}>
              <Building2 color="white" size={18} />
            </div>
            <h3 className="serif-font" style={{ color: 'var(--primary)', fontSize: '1.3rem' }}>Associated Firms</h3>
          </div>

          {firmDetails.map((firm, index) => (
            <div key={index} style={{ marginBottom: '1rem', paddingBottom: '6px', borderBottom: '1px dotted rgba(212, 175, 55, 0.2)' }}>
              <p style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '0.95rem' }}>{firm.name}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={10} /> {firm.location}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Venue & Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}
        >
          <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '50%', marginBottom: '0.6rem' }}>
            <MapPin color="var(--primary)" size={24} />
          </div>
          <h3 className="serif-font" style={{ color: 'var(--primary)', marginBottom: '0.6rem', fontSize: '1.3rem' }}>Venue Location</h3>
          <p className="serif-font" style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: 1.3 }}>
            Shri Kuneshwar Mahadev,<br />
            Farara, Rajsamand (Raj.)
          </p>

          <a
            href="https://www.google.com/maps/search/Kunteshwar+Mahadev+Mandir+Farara+Rajsamand"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '8px 25px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              boxShadow: '0 6px 12px rgba(128, 0, 0, 0.15)',
              transition: 'all 0.3s ease'
            }}
          >
            Get Directions
          </a>

          <div style={{ marginTop: '1rem' }}>
            <p className="script-font" style={{ fontSize: '1.4rem', color: 'var(--secondary)' }}>Join us with blessings!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactRSVP;
