'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function ProjectSlider({ images, title, color, orientation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const isPortrait = orientation === 'portrait';

    const goToSlide = useCallback((index) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 400);
    }, [isTransitioning, currentIndex]);

    const nextSlide = useCallback(() => {
        goToSlide(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, [currentIndex, images.length, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }, [currentIndex, images.length, goToSlide]);

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

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isModalOpen) closeModal();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, nextSlide, prevSlide]);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className={`${styles.bentoCard} ${styles.imageCard} animate-on-scroll delay-2`}>
                {/* Main Image Display */}
                <div className={styles.galleryMain}>
                    <div
                        className={styles.mainImageContainer}
                        onClick={openModal}
                        title="Click to enlarge"
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`${styles.mainSlide} ${currentIndex === index ? styles.mainSlideActive : ''}`}
                            >
                                <Image
                                    src={img}
                                    alt={`${title} - image ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                                    priority={index === 0}
                                />
                            </div>
                        ))}

                        {/* Image counter badge */}
                        <div className={styles.imageCounter}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            {currentIndex + 1} / {images.length}
                        </div>

                        {/* Zoom hint */}
                        <div className={styles.zoomHint}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                        </div>

                        {/* Nav arrows on main image */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                    className={`${styles.galleryNavBtn} ${styles.galleryPrev}`}
                                    aria-label="Previous slide"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                    className={`${styles.galleryNavBtn} ${styles.galleryNext}`}
                                    aria-label="Next slide"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div className={`${styles.thumbnailStrip} animate-on-scroll delay-3`}>
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`${styles.thumbnail} ${currentIndex === index ? styles.thumbnailActive : ''}`}
                                style={currentIndex === index ? { borderColor: color, boxShadow: `0 0 12px ${color}30` } : {}}
                                aria-label={`View image ${index + 1}`}
                            >
                                <Image
                                    src={img}
                                    alt={`${title} thumbnail ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="100px"
                                />
                                {currentIndex === index && (
                                    <div className={styles.thumbnailGlow} style={{ background: `${color}20` }}></div>
                                )}
                            </button>
                        ))}
                    </div>
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
