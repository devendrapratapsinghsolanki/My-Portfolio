import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'var(--bg-header)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'background-color 0.25s, border-color 0.25s'
      }}
    >
      <div className="app-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ textDecoration: 'none' }}>
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#f43f5e' : 'var(--text-muted)',
                  background: isActive ? 'rgba(244, 63, 94, 0.1)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: ONLY ONE Resume button and Theme toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="desktop-nav">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={onOpenResume}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.84rem' }}
          >
            <Download size={15} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile top controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-toggle-btn">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
