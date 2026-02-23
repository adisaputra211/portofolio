'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = { retrigger: true }) {
    const observerRef = useRef(null);

    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        // Skip animation on mobile for better performance
        if (window.innerWidth < 768) {
            elements.forEach((el) => el.classList.add('visible'));
            return;
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else if (options.retrigger) {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);
}
