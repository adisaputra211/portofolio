'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { scrollToSection } from './utils/navigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  useScrollAnimation();

  useEffect(() => {
    const scrollTarget = searchParams.get('scroll');
    if (scrollTarget) {
      // Small delay to ensure components are mounted
      const timer = setTimeout(() => {
        scrollToSection(scrollTarget);
        // Clean the URL without adding to history
        router.replace('/', { scroll: false });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
