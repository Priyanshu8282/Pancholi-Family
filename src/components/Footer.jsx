import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '40px 20px', 
      textAlign: 'center', 
      background: '#fcfaf5', 
      color: 'var(--text-dark)',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)'
    }}>
      <p className="script-font" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Save the Date</p>
      <p className="serif-font" style={{ fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '1px' }}>04th May 2026</p>
      
      <p style={{ fontSize: '1rem', color: 'var(--secondary)', marginBottom: '2rem', fontWeight: 600, letterSpacing: '2px' }}>
        Fatehnagar <span style={{ margin: '0 10px', opacity: 0.5 }}>•</span> Udaipur
      </p>

      <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
        Designed with <span style={{ color: '#e91e63' }}>❤️</span> from Pancholi Family
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '15px', 
        fontSize: '0.95rem',
        fontWeight: 700,
        color: '#333'
      }}>
        <span>Designed by</span>
        <a href="https://www.instagram.com/priyanshus8209_?igsh=dWxuYThjand0N3Mx" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#E4405F', textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          <span style={{ borderBottom: '1px solid #E4405F' }}>Priyanshu</span>
        </a>
        <span style={{ opacity: 0.3 }}>|</span>
        <a href="https://www.linkedin.com/in/priyanshu-sharma-642337245" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#0A66C2', textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          <span style={{ borderBottom: '1px solid #0A66C2' }}>Priyanshu</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
