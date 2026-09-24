import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Mail, Sparkles, Check, Code2, Database } from 'lucide-react';
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
                padding: '4px 14px',
                borderRadius: '9999px',
                background: 'rgba(201, 173, 167, 0.15)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '18px'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#C9ADA7',
                  boxShadow: '0 0 8px #C9ADA7'
                }}
              />
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-main)', letterSpacing: '0.02em' }}>
                {personal.availability}
              </span>
            </div>

            {/* Main Name & Title */}
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 2.85rem)',
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
                gap: '8px',
                minHeight: '38px',
                marginBottom: '16px'
              }}
            >
              <span style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: '500' }}>I am a</span>
              <span
                className="text-gradient-cyan font-mono"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  borderRight: '2px solid #C9ADA7',
                  paddingRight: '4px'
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
                <span>Explore Projects</span>
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
                style={{ textDecoration: 'none', padding: '6px 14px' }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="badge-tech"
                style={{ textDecoration: 'none', padding: '6px 14px' }}
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
                {copiedEmail ? <Check size={14} color="#C9ADA7" /> : <Mail size={14} />}
                <span>{copiedEmail ? 'Copied!' : personal.email}</span>
              </button>
            </div>
          </div>

          {/* Right: Circular Urban Chic Glowing Profile */}
          <div className="hero-profile-container" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', width: '280px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Outer Decorative Gradient Ring (Moody Twilight & Almond Glow) */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-14px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(74, 78, 105, 0.5) 0%, rgba(201, 173, 167, 0.5) 100%)',
                  filter: 'blur(12px)',
                  opacity: 0.85,
                  zIndex: 0
                }}
              />

              {/* Glowing Avatar Border Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  padding: '5px',
                  background: 'linear-gradient(135deg, #4A4E69 0%, #C9ADA7 50%, #9A8C98 100%)',
                  boxShadow: '0 12px 35px rgba(34, 34, 59, 0.45)',
                  zIndex: 1
                }}
              >
                {/* Profile Image */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
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
                      objectPosition: 'center 15%'
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge 1: Next.js & React */}
              <div
                className="desktop-only-badge"
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-28px',
                  padding: '7px 12px',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-hover)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 2
                }}
              >
                <Code2 size={15} color="#C9ADA7" />
                <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  Next.js & React
                </span>
              </div>

              {/* Floating Badge 2: PostgreSQL / Prisma */}
              <div
                className="desktop-only-badge"
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-24px',
                  padding: '7px 12px',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-hover)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 2
                }}
              >
                <Database size={15} color="#9A8C98" />
                <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  PostgreSQL & Prisma
                </span>
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
