import React, { useState, useEffect } from 'react';
import { Home, FolderGit2, Briefcase, Mail, FileDown, Sparkles } from 'lucide-react';

export default function MobileBottomBar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

  const items = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'experience', label: 'Work', icon: Briefcase, href: '#experience' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ];

  return (
    <nav
      className="mobile-bottom-bar"
      style={{
        position: 'fixed',
        bottom: '12px',
        left: '14px',
        right: '14px',
        height: '62px',
        backgroundColor: 'var(--bottom-bar-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid var(--border-hover)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(16, 185, 129, 0.15)',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 8px',
        zIndex: 9999
      }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              padding: '6px 12px',
              borderRadius: '12px',
              color: isActive ? '#10b981' : 'var(--text-muted)',
              background: isActive ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
              textDecoration: 'none',
              fontSize: '0.68rem',
              fontWeight: isActive ? '700' : '500',
              transition: 'all 0.15s ease'
            }}
          >
            <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
            <span>{item.label}</span>
          </a>
        );
      })}

      {/* Quick Resume trigger on bottom bar */}
      <button
        onClick={onOpenResume}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          padding: '6px 12px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
          color: '#ffffff',
          border: 'none',
          fontSize: '0.68rem',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(16, 185, 129, 0.4)'
        }}
        title="Download Resume"
      >
        <FileDown size={17} />
        <span>Resume</span>
      </button>
    </nav>
  );
}
