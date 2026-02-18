'use client';

import styles from './Projects.module.css';
import Image from 'next/image';

import { projects } from '@/data/projects';


export default function Projects() {
    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label animate-on-scroll">My Work</span>
                    <h2 className="section-title animate-on-scroll delay-1">Featured Projects</h2>
                    <p className="section-subtitle animate-on-scroll delay-2">
                        A collection of projects that showcase my skills and creativity
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, idx) => (
                        <a
                            key={project.title}
                            href={`/projects/${project.slug}`}
                            className={`${styles.card} animate-on-scroll delay-${(idx % 3) + 1}`}
                        >
                            {/* Color accent */}
                            <div
                                className={styles.cardAccent}
                                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}
                            ></div>
                            <div
                                className={styles.cardGlow}
                                style={{ '--glow-color': project.color }}
                            ></div>

                            {/* Image placeholder */}
                            <div className={styles.cardImage} style={{ borderColor: `${project.color}30` }}>
                                {project.images && project.images.length > 0 ? (
                                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                ) : (
                                    <div className={styles.imagePlaceholder}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.5" opacity="0.4">
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                            <line x1="8" y1="21" x2="16" y2="21" />
                                            <line x1="12" y1="17" x2="12" y2="21" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={styles.tag}
                                            style={{ borderColor: `${project.color}30`, color: project.color }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.cardFooter}>
                                <span className={styles.viewProject} style={{ color: project.color }}>
                                    View Project
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12,5 19,12 12,19" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
