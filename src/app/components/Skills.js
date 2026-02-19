'use client';

import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Frontend',
        color: '#3b82f6', // Blue
        size: 'span3', // 2 in row (3+3=6)
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
        ),
        skills: ['React / Next.js', 'TypeScript', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        color: '#10b981', // Green
        size: 'span3',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 17L10 11L4 5" />
                <rect x="12" y="19" width="8" height="2" />
            </svg>
        ),
        skills: ['FastAPI', 'Python', 'SQL', 'SQLite', 'Flask'],
    },
    {
        title: 'IoT & System',
        color: '#a855f7', // Purple
        size: 'span2', // 3 in row (2+2+2=6)
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <circle cx="6" cy="6" r="1" />
                <circle cx="6" cy="18" r="1" />
            </svg>
        ),
        skills: ['ESP32', 'WebSocket', 'Sensor Integration', 'Arduino', 'Troubleshooting'],
    },
    {
        title: 'Creative Design',
        color: '#f97316', // Orange
        size: 'span2',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            </svg>
        ),
        skills: ['Canva', 'Banner Design', 'Content Editing', 'Adobe Premiere', 'Filmora'],
    },
    {
        title: 'DevOps & Tools',
        color: '#64748b', // Slate
        size: 'span2',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v10l4.5 4.5" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        skills: ['Git / GitHub', 'Cloudflared', 'Expo Go', 'Vercel', 'VS Code'],
    },
    {
        title: 'Hardware & IT Support',
        color: '#ec4899', // Pink
        size: 'span3', // 2 in row
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="2" y1="20" x2="22" y2="20" />
                <line x1="12" y1="17" x2="12" y2="20" />
            </svg>
        ),
        skills: ['Hardware Troubleshooting', 'OS Installation', 'Laptop Maintenance', 'Networking'],
    },
    {
        title: 'Artificial Intelligence',
        color: '#06b6d4', // Cyan
        size: 'span3',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                <path d="M12 12L2.69 7" />
                <path d="M12 12l5.63 8" />
            </svg>
        ),
        skills: ['Machine Learning', 'LLM Prompting', 'Data Analysis', 'AI Integration'],
    },
];

const techLogos = [
    'React', 'Next.js', 'JavaScript', 'TypeScript',
    'Python', 'ArduinoIDE', 'Git', 'Cloudflared',
    'SQL', 'Canva', 'IoT', 'ESP32', 'Expo Go',
    'AI', 'LLM', 'Analysis', 'Quality Assurance', 'Os Installation', 'Hardware Troubleshooting'
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
                            className={`${styles.category} ${styles[cat.size]} glass-card animate-on-scroll delay-${catIdx + 1}`}
                            style={{ '--accent-color': cat.color }}
                        >
                            <div className={styles.catHeader}>
                                <div className={styles.catIcon}>{cat.icon}</div>
                                <h3 className={styles.catTitle}>{cat.title}</h3>
                            </div>
                            <div className={styles.skillsList}>
                                {cat.skills.map((skill) => (
                                    <div key={skill} className={styles.skillBadge}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                            {/* Decorative glow */}
                            <div className={styles.cardGlow}></div>
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
