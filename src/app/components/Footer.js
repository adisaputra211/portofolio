'use client';

import { useRouter, usePathname } from 'next/navigation';
import { handleNavigation } from '../utils/navigation';
import styles from './Footer.module.css';

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    const onFooterLinkClick = (e, id) => {
        e.preventDefault();
        handleNavigation(router, pathname, id);
    };

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.left}>
                    <a
                        href="/"
                        className={styles.brand}
                        onClick={(e) => onFooterLinkClick(e, 'hero')}
                    >
                        <div className={styles.logoIcon}>
                            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                                <defs>
                                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                                <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="url(#footerLogoGrad)" strokeWidth="2" fill="none" />
                                <circle cx="14" cy="14" r="3" fill="url(#footerLogoGrad)" />
                            </svg>
                        </div>
                        <span className={styles.brandName}>Portfolio</span>
                    </a>
                    <p className={styles.tagline}>Building the future, one line of code at a time.</p>
                </div>

                <div className={styles.links}>
                    <a href="#about" onClick={(e) => onFooterLinkClick(e, 'about')}>About</a>
                    <a href="#skills" onClick={(e) => onFooterLinkClick(e, 'skills')}>Skills</a>
                    <a href="#projects" onClick={(e) => onFooterLinkClick(e, 'projects')}>Projects</a>
                    <a href="#contact" onClick={(e) => onFooterLinkClick(e, 'contact')}>Contact</a>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    <p className={styles.credit}>Designed & Built with 💙</p>
                </div>
            </div>
        </footer>
    );
}
