'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label animate-on-scroll">Get To Know Me</span>
                    <h2 className="section-title animate-on-scroll delay-1">About Me</h2>
                </div>

                <div className={styles.content}>
                    {/* Profile Visual */}
                    <div className={`${styles.profileCard} animate-on-scroll delay-1`}>
                        <div className={styles.profileFrame}>
                            <div className={styles.profileImage}>
                                <Image
                                    src="/Profil2.png"
                                    alt="Profile Photo"
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                    priority
                                />
                            </div>
                            <div className={styles.profileRing}></div>
                        </div>
                        <div className={styles.experienceBadge}>
                            <span className={styles.expNumber}>1</span>
                            <span className={styles.expLabel}>Years of<br />Experience</span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className={styles.info}>
                        <div className={`${styles.infoGrid} animate-on-scroll delay-2`}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                        <line x1="8" y1="21" x2="16" y2="21" />
                                        <line x1="12" y1="17" x2="12" y2="21" />
                                    </svg>
                                </div>
                                <h4>Frontend</h4>
                                <p>Building responsive, interactive, and accessible user interfaces.</p>
                            </div>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="16,18 22,12 16,6" />
                                        <polyline points="8,6 2,12 8,18" />
                                    </svg>
                                </div>
                                <h4>IoT</h4>
                                <p>Building intelligent IoT solutions through sensor integration and web-driven monitoring systems.</p>
                            </div>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                    </svg>
                                </div>
                                <h4>Hardware</h4>
                                <p>Experienced in laptop hardware maintenance, troubleshooting, and Windows OS installation.</p>
                            </div>
                        </div>

                        <p className={`${styles.bio} animate-on-scroll delay-3`}>
                            I&apos;m Bachelor of Computer Science with experience in web development,
                            IoT systems, and hardware support. Skilled in Next.js, basic backend frameworks,
                            and IoT integration, I enjoy building responsive and efficient digital solutions
                            that connect software and hardware technologies. My background in hardware support
                            gives me a strong foundation in troubleshooting, system diagnostics, and understanding
                            the physical layer of technology from component level issues to full system integration.
                        </p>
                        <p className={`${styles.bio} animate-on-scroll delay-3`}>
                            Passionate about continuous learning and emerging technologies
                            particularly Artificial Intelligence I am committed to growing as a
                            developer in dynamic and innovative environments.
                        </p>
                        <p className={`${styles.bio} animate-on-scroll delay-4`}>
                            Beyond academic and project experience, I continuously explore Artificial
                            Intelligence and Large Language Model (LLM) concepts through self learning
                            and independent experimentation. I also have a growing interest in Data Analysis
                            and Quality Assurance, supported by basic SQL skills for data querying and analysis.
                            Additionally, I possess basic content editing skills that help me present technical
                            information clearly and effectively.
                        </p>

                        <div className={`${styles.highlights} animate-on-scroll delay-5`}>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>🎓</span>
                                <span>Computer Science Graduate</span>
                            </div>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>💼</span>
                                <span>Available for Freelance</span>
                            </div>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>🌍</span>
                                <span>Remote & On site Work Ready</span>
                            </div>
                        </div>

                        <div className={`${styles.moreWrap} animate-on-scroll delay-6`}>
                            <Link href="/about" className={styles.moreBtn}>
                                <span>More About Me</span>
                                <svg className={styles.arrowIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12,5 19,12 12,19" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
