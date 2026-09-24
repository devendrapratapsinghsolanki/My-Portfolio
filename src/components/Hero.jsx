import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Mail, Sparkles, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const fullText = personal.roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, personal.roles]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '88vh',
        paddingTop: '115px',
        paddingBottom: '60px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="app-container" style={{ width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Left: Hero Info */}
          <div>
            {/* Status Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '16px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981'
                }}
              />
              <span style={{ fontSize: '0.78rem', fontWeight: '600', color: '#10b981' }}>
                {personal.availability}
              </span>
            </div>

            {/* Main Name & Title */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: '800',
                lineHeight: '1.15',
                color: 'var(--text-main)',
                marginBottom: '10px',
                letterSpacing: '-0.02em'
              }}
            >
              Hi, I'm <br />
              <span className="text-gradient">{personal.name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                minHeight: '36px',
                marginBottom: '16px'
              }}
            >
              <span style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: '500' }}>I am a</span>
              <span
                className="text-gradient-cyan font-mono"
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRight: '2px solid #4f46e5',
                  paddingRight: '3px'
                }}
              >
                {currentText}
              </span>
            </div>

            {/* Tagline / Pitch */}
            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-muted)',
                lineHeight: '1.65',
                marginBottom: '28px',
                maxWidth: '540px'
              }}
            >
              {personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div
              className="mobile-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '30px'
              }}
            >
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <button onClick={onOpenResume} className="btn-cyan">
                <Download size={16} />
                <span>Resume (PDF)</span>
              </button>

              <a href="#contact" className="btn-secondary">
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '10px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="badge-tech"
                style={{ textDecoration: 'none', padding: '6px 12px' }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="badge-tech"
                style={{ textDecoration: 'none', padding: '6px 12px' }}
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="badge-tech"
                style={{ cursor: 'pointer', background: 'transparent' }}
                title="Click to copy email"
              >
                {copiedEmail ? <Check size={14} color="#10b981" /> : <Mail size={14} />}
                <span>{copiedEmail ? 'Copied!' : personal.email}</span>
              </button>
            </div>
          </div>

          {/* Right: Profile Picture / Mobile Avatar */}
          <div className="hero-profile-container">
            <div
              className="glass-card"
              style={{
                padding: '14px',
                borderRadius: '20px',
                maxWidth: '340px',
                width: '100%'
              }}
            >
              <div
                className="hero-profile-avatar"
                style={{
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  aspectRatio: '4/4.8',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <img
                  src={personal.image}
                  alt={personal.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 6px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    {personal.shortName}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {personal.title}
                  </div>
                </div>
                <div className="badge-live">Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            marginTop: '50px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px'
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '16px',
                textAlign: 'center'
              }}
            >
              <div
                className="text-gradient"
                style={{
                  fontSize: '1.65rem',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  marginBottom: '2px'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
