'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function ProjectSlider({ images, title, color, orientation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isPortrait = orientation === 'portrait';

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-slide optional, but maybe better not for now to avoid distraction

    if (!images || images.length === 0) return null;

    return (
        <div className={`${styles.bentoCard} ${styles.imageCard}`}>
            <div
                className={styles.imageWrapper}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    minHeight: isPortrait ? '540px' : '480px'
                }}
            >
                {images.map((img, index) => (
                    <div key={index} className={styles.slide}>
                        <Image
                            src={img}
                            alt={`${title} - image ${index + 1}`}
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="100vw"
                            priority={index === 0}
                        />
                        <div className={styles.imageOverlay} style={{ background: `linear-gradient(to top, var(--neutral-950), transparent 50%)` }}></div>
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <div className={styles.sliderNav}>
                        <button onClick={prevSlide} className={styles.navBtn} aria-label="Previous slide">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button onClick={nextSlide} className={styles.navBtn} aria-label="Next slide">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.sliderDots}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ''}`}
                                style={currentIndex === index ? { background: color } : {}}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
