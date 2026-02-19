'use client';

import { useEffect, Suspense } from 'react';
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

function ScrollHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTarget = searchParams.get('scroll');
    if (scrollTarget) {
      const timer = setTimeout(() => {
        scrollToSection(scrollTarget);
        router.replace('/', { scroll: false });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return null;
}

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
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
