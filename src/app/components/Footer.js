'use client';

import Image from 'next/image';
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
                            <Image
                                src="/Logo.png"
                                alt="Logo"
                                width={28}
                                height={28}
                                className={styles.logoImg}
                            />
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
