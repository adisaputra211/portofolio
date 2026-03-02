import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { handleNavigation } from '../utils/navigation';
import styles from './Hero.module.css';

export default function Hero() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section id="hero" className={`section section-first ${styles.hero}`}>
            {/* Animated background elements */}
            <div className={styles.bgOrbs}>
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
                <div className={styles.orb3}></div>
            </div>

            {/* Floating particles */}
            <div className={styles.particles}>
                {isMounted && [...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.particle}
                        style={{
                            '--dx': `${(Math.random() - 0.5) * 300}px`,
                            '--dy': `${-Math.random() * 400 - 100}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 6}s`,
                            animationDuration: `${4 + Math.random() * 4}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className={`container ${styles.heroContent}`}>
                <div className={styles.textContent}>
                    <div className={`${styles.greeting} animate-on-scroll`}>
                        <span className={styles.wave}>👋</span>
                        Hello, I&apos;m
                    </div>

                    <h1 className={`${styles.name} animate-on-scroll delay-1`}>
                        Adi <span className="gradient-text">Saputra</span>
                    </h1>

                    <p className={`${styles.tagline} animate-on-scroll delay-2`}>
                        Adi Saputra Web Developer | Bachelor of Computer Science | IoT Enthusiast
                    </p>

                    <p className={`${styles.description} animate-on-scroll delay-3`}>
                        I build responsive web applications and integrate hardware and
                        software solutions to create practical and innovative digital systems,
                        while also exploring data analysis and quality assurance.
                    </p>

                    <div className={`${styles.actions} animate-on-scroll delay-4`}>
                        <a
                            href="#projects"
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(router, pathname, 'projects');
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-outline"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(router, pathname, 'contact');
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Contact Me
                        </a>
                    </div>

                    <div className={`${styles.stats} animate-on-scroll delay-4`}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>1</span>
                            <span className={styles.statLabel}>Years Exp.</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>Web & IoT</span>
                            <span className={styles.statLabel}>Projects</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>Hardware & IT Support</span>
                            <span className={styles.statLabel}>Experience</span>
                        </div>
                    </div>
                </div>

                {/* Decorative graphic */}
                <div className={`${styles.heroVisual} animate-on-scroll delay-2`}>
                    <div className={styles.codeWindow}>
                        <div className={styles.windowBar}>
                            <span className={styles.dot} style={{ background: '#ef4444' }}></span>
                            <span className={styles.dot} style={{ background: '#f59e0b' }}></span>
                            <span className={styles.dot} style={{ background: '#22c55e' }}></span>
                        </div>
                        <div className={styles.codeBlock}>
                            <code>
                                <span className={styles.keyword}>const</span>{' '}
                                <span className={styles.variable}>developer</span> = {'{'}<br />
                                {'  '}<span className={styles.prop}>name</span>:{' '}
                                <span className={styles.string}>&quot;Adi&quot;</span>,<br />
                                {'  '}<span className={styles.prop}>skills</span>:{' '}
                                <span className={styles.string}>[&quot;React&quot;, &quot;Next&quot;]</span>,<br />
                                {'  '}<span className={styles.prop}>passion</span>:{' '}
                                <span className={styles.string}>&quot;Building&quot;</span>,<br />
                                {'  '}<span className={styles.prop}>status</span>:{' '}
                                <span className={styles.string}>&quot;Available&quot;</span><br />
                                {'}'};
                            </code>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}
