import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'VINAYAK STHAPANA', path: '/event/vinayak-sthapana' },
    { name: 'BHAJAN SANDHYA', path: '/event/bhajan-sandhya' },
    { name: 'MUNDAN SANSKAR', path: '/event/mundan-sanskar' },
    { name: 'SNEH BHOJ', path: '/event/sneh-bhoj' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '15px 40px' : '20px 60px',
        backgroundColor: 'rgba(255, 251, 242, 0.98)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="nav-logo" style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: '1.8rem', 
            fontWeight: 700,
            color: 'var(--primary)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textShadow: (!isScrolled && isHomePage) ? '0 2px 10px rgba(255,255,255,0.5)' : 'none',
            transition: 'font-size 0.3s ease'
          }}>
            Pancholi Family
          </div>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '35px' }} className="desktop-menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--secondary)' : 'var(--text-dark)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  fontFamily: "'Montserrat', sans-serif",
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  letterSpacing: '1.5px',
                  paddingBottom: '5px',
                  textShadow: (!isScrolled && isHomePage) ? '0 2px 10px rgba(0,0,0,0.5)' : 'none'
                }}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--secondary)',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            cursor: 'pointer', 
            color: 'var(--primary)',
            display: 'none',
            zIndex: 1001
          }}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(255, 251, 242, 0.98)',
              backdropFilter: 'blur(15px)',
              zIndex: 999,
              padding: '40px 20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              textAlign: 'center'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === link.path ? 'var(--secondary)' : 'var(--text-dark)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '2px'
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          nav { padding: 10px 20px !important; }
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
          .nav-logo { font-size: 1.5rem !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
