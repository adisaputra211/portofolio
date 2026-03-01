import { projects } from '@/data/projects';
import styles from './page.module.css';
import Link from 'next/link';
import ProjectContent from './ProjectContent';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: `${project.title} - Adi Saputra Project`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Adi Saputra Portfolio`,
            description: project.description,
            images: project.images?.[0] ? [{ url: project.images[0] }] : [],
        },
    };
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
            <ProjectContent project={project} />
        </section>
    );
}
