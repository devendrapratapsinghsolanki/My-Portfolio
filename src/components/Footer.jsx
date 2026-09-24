import React from 'react';
import { ArrowUp, Download } from 'lucide-react';
import Logo from './Logo';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-header)',
        padding: '44px 0 24px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="app-container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '28px'
          }}
        >
          <Logo />

          {/* Nav links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
            <a href="#about" style={{ color: 'var(--text-muted)', fontSize: '0.84rem', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-muted)', fontSize: '0.84rem', textDecoration: 'none' }}>Skills</a>
            <a href="#experience" style={{ color: 'var(--text-muted)', fontSize: '0.84rem', textDecoration: 'none' }}>Experience</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', fontSize: '0.84rem', textDecoration: 'none' }}>Projects</a>
            <a href="#education" style={{ color: 'var(--text-muted)', fontSize: '0.84rem', textDecoration: 'none' }}>Education</a>
            <a href="#contact" style={{ color: 'var(--text-muted)', fontSize: '0.84rem', textDecoration: 'none' }}>Contact</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={onOpenResume}
              className="btn-cyan"
              style={{ padding: '7px 14px', fontSize: '0.82rem' }}
            >
              <Download size={14} />
              <span>Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              className="theme-toggle-btn"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div
          style={{
            paddingTop: '18px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.78rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}
          </div>
          <div>
            Built with React & Vite
          </div>
        </div>
      </div>
    </footer>
  );
}
