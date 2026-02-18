'use client';

import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Frontend',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        skills: [
            { name: 'React / Next.js', level: 80 },
            { name: 'TypeScript', level: 80 },
            { name: 'HTML5 / CSS', level: 90 },
            { name: 'JavaScript', level: 80 },
        ],
    },
    {
        title: 'IoT',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        skills: [
            { name: 'ESP32', level: 90 },
            { name: 'WebSocket', level: 80 },
            { name: 'Sensor Integration', level: 85 },
            { name: 'Embedded Programming (C/C++)', level: 80 },
        ],
    },
    {
        title: 'Tools & Others',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Canva', level: 90 },
            { name: 'Cloudflared', level: 88 },
            { name: 'ArduinoIDE', level: 90 },
        ],
    },
];

const techLogos = [
    'React', 'Next.js', 'JavaScript', 'TypeScript',
    'Python', 'ArduinoIDE', 'Git', 'Cloudflared',
    'Ms.Office', 'Canva', 'IoT', 'VS Code', 'ESP32', 'Artifact Intelligent',
    'SQL', 'Editing',
];

export default function Skills() {
    return (
        <section id="skills" className={`section ${styles.skills}`}>
            {/* Background decoration */}
            <div className={styles.bgGrid}></div>

            <div className="container">
                <div className="section-header">
                    <span className="section-label animate-on-scroll">My Expertise</span>
                    <h2 className="section-title animate-on-scroll delay-1">Skills & Technologies</h2>
                    <p className="section-subtitle animate-on-scroll delay-2">
                        Technologies I work with to bring ideas to life
                    </p>
                </div>

                <div className={styles.categories}>
                    {skillCategories.map((cat, catIdx) => (
                        <div
                            key={cat.title}
                            className={`${styles.category} glass-card animate-on-scroll delay-${catIdx + 1}`}
                        >
                            <div className={styles.catHeader}>
                                <div className={styles.catIcon}>{cat.icon}</div>
                                <h3 className={styles.catTitle}>{cat.title}</h3>
                            </div>
                            <div className={styles.skillsList}>
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className={styles.skillItem}>
                                        <div className={styles.skillInfo}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillLevel}>{skill.level}%</span>
                                        </div>
                                        <div className={styles.progressBar}>
                                            <div
                                                className={styles.progressFill}
                                                style={{ '--target-width': `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Marquee */}
                <div className={`${styles.marqueeContainer} animate-on-scroll delay-4`}>
                    <div className={styles.marquee}>
                        <div className={styles.marqueeTrack}>
                            {[...techLogos, ...techLogos].map((tech, i) => (
                                <span key={i} className={styles.techBadge}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
