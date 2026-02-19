'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { handleNavigation } from '../utils/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
  ];

  const onNavLinkClick = (e, id) => {
    e.preventDefault();
    handleNavigation(router, pathname, id);
    setIsMobileOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo & Name */}
        <a
          href="/"
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(router, pathname, 'hero');
            setIsMobileOpen(false);
          }}
        >
          <div className={styles.logoIcon}>
            <Image
              src="/Logo.png"
              alt="Logo"
              width={33}
              height={33}
              className={styles.logoImg}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className={styles.navLink}
              onClick={(e) => onNavLinkClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`btn btn-primary ${styles.navCta}`}
            onClick={(e) => onNavLinkClick(e, 'contact')}
          >
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
              href={`#${link.id}`}
              className={styles.mobileLink}
              onClick={(e) => onNavLinkClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => onNavLinkClick(e, 'contact')}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
