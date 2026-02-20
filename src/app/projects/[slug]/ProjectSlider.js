'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function ProjectSlider({ images, title, color, orientation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const openModal = () => {
        setIsModalOpen(true);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'unset';
        }
    };

    // Handle escape key and arrows to close/navigate modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;

            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, images.length]);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className={`${styles.bentoCard} ${styles.imageCard} animate-on-scroll delay-2`}>
                <div
                    className={styles.imageWrapper}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        minHeight: isPortrait ? '540px' : '480px',
                        cursor: 'zoom-in'
                    }}
                    onClick={openModal}
                    title="Click to enlarge"
                >
                    {images.map((img, index) => (
                        <div key={index} className={styles.slide}>
                            <Image
                                src={img}
                                alt={`${title} - image ${index + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                                priority={index === 0}
                            />
                            <div className={styles.imageOverlay} style={{ background: `linear-gradient(to top, var(--neutral-950), transparent 50%)` }}></div>
                        </div>
                    ))}
                </div>

                {images.length > 1 && (
                    <>
                        <div className={styles.sliderNav}>
                            <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className={styles.navBtn} aria-label="Previous slide">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className={styles.navBtn} aria-label="Next slide">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>

                        <div className={styles.sliderDots}>
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                                    className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ''}`}
                                    style={currentIndex === index ? { background: color } : {}}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Lightbox Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <button className={styles.closeModal} onClick={closeModal} aria-label="Close modal">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalImageWrapper}>
                            <Image
                                src={images[currentIndex]}
                                alt={`${title} zoomed - image ${currentIndex + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="95vw"
                                quality={100}
                                priority
                            />
                        </div>

                        {images.length > 1 && (
                            <>
                                <button className={`${styles.modalNavBtn} ${styles.modalPrev}`} onClick={prevSlide} aria-label="Previous image">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </button>
                                <button className={`${styles.modalNavBtn} ${styles.modalNext}`} onClick={nextSlide} aria-label="Next image">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>

                                <div className={styles.modalCounter}>
                                    {currentIndex + 1} / {images.length}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

