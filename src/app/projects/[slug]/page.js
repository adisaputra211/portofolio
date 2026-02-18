import { projects } from '@/data/projects';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ProjectSlider from './ProjectSlider';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className={styles.projectPage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className={styles.title}>Project Not Found</h1>
                    <Link href="/#projects" className={styles.backLink}>
                        &larr; Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className={styles.projectPage}>
            <div className="container">
                <nav className={styles.backNav}>
                    <Link href="/#projects" className={styles.backLink}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Projects
                    </Link>
                </nav>

                <div className={`${styles.bentoGrid} ${project.orientation === 'portrait' ? styles.portraitGrid : ''}`}>
                    {/* Header Card */}
                    <div className={`${styles.bentoCard} ${styles.headerCard}`}>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.shortDesc}>{project.description}</p>
                        <div className={styles.tagList}>
                            {project.tags.map((tag) => (
                                <span key={tag} className={styles.tag} style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Image Slider Card - Full Width landscape OR Left Column portrait */}
                    <ProjectSlider
                        images={project.images}
                        title={project.title}
                        color={project.color}
                        orientation={project.orientation}
                    />

                    {/* Details Card */}
                    <div className={`${styles.bentoCard} ${styles.detailsCard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox} style={{ color: project.color, background: `${project.color}15` }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Overview</h3>
                        </div>
                        <p className={styles.longDesc}>{project.longDescription || project.description}</p>
                    </div>

                    {/* Tech Stack Card */}
                    <div className={`${styles.bentoCard} ${styles.techCard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox} style={{ color: project.color, background: `${project.color}15` }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Tech Stack</h3>
                        </div>
                        <div className={styles.techGrid}>
                            {project.technologies ? (
                                project.technologies.map((tech, index) => (
                                    <span key={index} className={styles.techBadge}>
                                        {tech}
                                    </span>
                                ))
                            ) : (
                                project.tags.map((tag, index) => (
                                    <span key={index} className={styles.techBadge}>
                                        {tag}
                                    </span>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Features Card */}
                    {project.features && (
                        <div className={`${styles.bentoCard} ${styles.featuresCard}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox} style={{ color: project.color, background: `${project.color}15` }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                </div>
                                <h3 className={styles.cardTitle}>Key Features</h3>
                            </div>
                            <div className={styles.featuresGrid}>
                                {project.features.map((feature, index) => (
                                    <div key={index} className={styles.featureItem}>
                                        <svg className={styles.featureIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className={styles.featureText}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links Card */}
                    <div className={`${styles.bentoCard} ${styles.linksCard}`}>
                        <h3 className={styles.cardTitle} style={{ marginBottom: '8px' }}>Ready to see it?</h3>
                        <p style={{ color: 'var(--neutral-400)', fontSize: '0.9rem' }}>Explore the live project or source code.</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.visitBtn}
                        >
                            Visit Project
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
