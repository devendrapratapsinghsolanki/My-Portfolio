import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-main)', overflowX: 'hidden' }}>
      {/* Background Particle Canvas */}
      <BackgroundCanvas theme={theme} />

      {/* Trailing Cursor for desktop */}
      <CustomCursor />

      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About onOpenResume={() => setIsResumeModalOpen(true)} />
        <Skills />
        <Experience />
        <Projects />
        <EducationCertifications />
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Exclusive Mobile Floating Bottom Bar */}
      <MobileBottomBar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
