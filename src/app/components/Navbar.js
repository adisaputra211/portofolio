'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo & Name */}
        <a href="#hero" className={styles.brand} onClick={handleLinkClick}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none" />
              <path d="M14 8L20 11V17L14 20L8 17V11L14 8Z" fill="url(#logoGrad)" opacity="0.5" />
              <circle cx="14" cy="14" r="3" fill="url(#logoGrad)" />
            </svg>
          </div>
          <span className={styles.brandName}>Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className={`btn btn-primary ${styles.navCta}`}>
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.hamburger} ${isMobileOpen ? styles.active : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileLink}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
