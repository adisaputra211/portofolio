'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './about.module.css';

const education = [
    {
        degree: 'S1 Teknologi Informasi',
        institution: 'Universitas Islam Negeri Walisongo Semarang',
        period: '2021 – 2025',
        description: 'Menyelesaikan studi Sarjana Komputer dengan fokus pada pengembangan perangkat lunak, sistem IoT, dan data analis.',
        icon: '🎓',
    },
    {
        degree: 'SMA / Sederajat',
        institution: 'SMA Negeri 1 Mertoyudan',
        period: '2017 – 2020',
        description: 'Jurusan Ilmu Pengetahuan Alam (IPA). Mempelajari dasar-dasar matematika, fisika, dan ilmu sains yang membentuk kemampuan analitis serta pemecahan masalah.',
        icon: '🏫',
    },
];

const experience = [
    {
        role: 'Data Entry and Web Development',
        company: 'Dinas Komunikasi dan Informatika Kota Magelang',
        period: 'Desember 2024 – Februari 2025',
        description: 'Mengembangkan dan memelihara aplikasi web internal menggunakan teknologi modern. Berkolaborasi dengan tim IT dalam pengembangan sistem informasi daerah.',
        tags: ['CodeIgniter', 'HTML', 'Tailwind CSS'],
        icon: '💼',
    },
    {
        role: 'Freelance',
        company: 'My Company',
        period: 'Agustus 2023 – Now',
        description: 'Melakukan instalasi ulang OS, troubleshooting, penggantian komponen laptop, dan perawatan perangkat untuk menjaga performa optimal.',
        tags: ['Hardware', 'OS', 'Troubleshooting'],
        icon: '💼',
    },
];

const skills = [
    { name: 'Frontend', items: ['Next.js', 'React', 'HTML/CSS', 'JavaScript'] },
    { name: 'IoT', items: ['Arduino', 'ESP32', 'Sensor Integration', 'WebSocket'] },
    { name: 'Hardware', items: ['Laptop Maintenance', 'Troubleshooting', 'Windows OS', 'Networking'] },
    { name: 'Tools', items: ['Git', 'VS Code', 'Figma', 'AI', 'SQL', 'Canva'] },
];

export default function AboutPage() {
    const revealRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );

        revealRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <main className={styles.page}>
            {/* Ambient background orbs */}
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.orb3} />

            {/* Back Button */}
            <div className={styles.backWrap}>
                <Link href="/?scroll=about" className={styles.backBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15,18 9,12 15,6" />
                    </svg>
                    Kembali
                </Link>
            </div>

            <div className={styles.container}>

                {/* ── HERO PROFILE ── */}
                <section className={`${styles.hero} ${styles.reveal}`} ref={addRef}>
                    <div className={styles.heroImage}>
                        <Image
                            src="/profil (2).jpeg"
                            alt="Profile Photo"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={styles.heroImageGlow} />
                    </div>
                    <div className={styles.heroInfo}>
                        <span className={styles.heroLabel}>About Me</span>
                        <h1 className={styles.heroName}>Adi Saputra</h1>
                        <p className={styles.heroTitle}>Bachelor of Computer Science · Web Developer · IoT Enthusiast</p>
                        <div className={styles.heroBadges}>
                            <span className={styles.badge}>🎓 S1 Teknologi Informasi</span>
                            <span className={styles.badge}>💼 Available for Hire</span>
                            <span className={styles.badge}>🌍 Magelang, Indonesia</span>
                        </div>
                        <p className={styles.heroBio}>
                            I&apos;m Bachelor of Computer Science with experience in web development,
                            IoT systems, and hardware support. Skilled in Next.js, basic backend frameworks,
                            and IoT integration, I enjoy building responsive and efficient digital solutions
                            that connect software and hardware technologies. My background in hardware support
                            gives me a strong foundation in troubleshooting, system diagnostics, and understanding
                            the physical layer of technology from component-level issues to full system integration.
                        </p>
                        <p className={styles.heroBio}>
                            Passionate about continuous learning and emerging technologies
                            particularly Artificial Intelligence I am committed to growing as a
                            developer in dynamic and innovative environments.
                        </p>
                        <p className={styles.heroBio}>
                            Beyond academic and project experience, I continuously explore Artificial
                            Intelligence and Large Language Model (LLM) concepts through self learning
                            and independent experimentation. I also have a growing interest in Data Analysis
                            and Quality Assurance, supported by basic SQL skills for data querying and analysis.
                            Additionally, I possess basic content editing skills that help me present technical
                            information clearly and effectively.
                        </p>
                        <div className={styles.heroContact}>
                            <a href="mailto:adisaputra1523@gmail.com" className={styles.contactChip}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,4 12,13 2,4" /></svg>
                                adisaputra1523@gmail.com
                            </a>
                            <a href="tel:+6285786303017" className={styles.contactChip}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                +62 857 8630 3017
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── SKILLS ── */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} ref={addRef}>
                        <span className={styles.sectionDot} />
                        Skills &amp; Technologies
                    </h2>
                    <div className={styles.skillsGrid}>
                        {skills.map((group, i) => (
                            <div
                                key={group.name}
                                className={`${styles.skillGroup} ${styles.reveal}`}
                                ref={addRef}
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <h3 className={styles.skillGroupName}>{group.name}</h3>
                                <div className={styles.skillTags}>
                                    {group.items.map((item) => (
                                        <span key={item} className={styles.skillTag}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── EDUCATION ── */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} ref={addRef}>
                        <span className={styles.sectionDot} />
                        Pendidikan
                    </h2>
                    <div className={styles.timeline}>
                        {education.map((edu, i) => (
                            <div
                                key={i}
                                className={`${styles.timelineItem} ${styles.reveal}`}
                                ref={addRef}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className={styles.timelineIcon}>{edu.icon}</div>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <div>
                                            <h3 className={styles.timelineTitle}>{edu.degree}</h3>
                                            <p className={styles.timelineSubtitle}>{edu.institution}</p>
                                        </div>
                                        <span className={styles.timelinePeriod}>{edu.period}</span>
                                    </div>
                                    <p className={styles.timelineDesc}>{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── EXPERIENCE ── */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} ref={addRef}>
                        <span className={styles.sectionDot} />
                        Pengalaman &amp; Magang
                    </h2>
                    <div className={styles.timeline}>
                        {experience.map((exp, i) => (
                            <div
                                key={i}
                                className={`${styles.timelineItem} ${styles.reveal}`}
                                ref={addRef}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className={styles.timelineIcon}>{exp.icon}</div>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <div>
                                            <h3 className={styles.timelineTitle}>{exp.role}</h3>
                                            <p className={styles.timelineSubtitle}>{exp.company}</p>
                                        </div>
                                        <span className={styles.timelinePeriod}>{exp.period}</span>
                                    </div>
                                    <p className={styles.timelineDesc}>{exp.description}</p>
                                    <div className={styles.expTags}>
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className={styles.expTag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
