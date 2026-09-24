import React, { useState } from 'react';
import { Download, Copy, Check, X, FileText, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const { personal, summary, experience, projects, education, certifications } = portfolioData;

  if (!isOpen) return null;

  const triggerDownload = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });

    const link = document.createElement('a');
    link.href = personal.resumePdf;
    link.download = 'Devendra_Pratap_Singh_Solanki_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyText = () => {
    const textResume = `
${personal.name}
${personal.title}
Phone: ${personal.phone} | Email: ${personal.email} | Portfolio: ${personal.portfolioUrl}
GitHub: ${personal.github} | LinkedIn: ${personal.linkedin}

PROFESSIONAL SUMMARY
${summary}

KEY SKILLS
Languages: HTML, CSS, JavaScript, TypeScript, Python
Frontend: React.js, Next.js, Tailwind CSS, Responsive Web Design, REST API Integration
Backend & Database: Node.js, Express.js, Prisma ORM, MySQL, MongoDB
Tools & Practices: Git, GitHub, Postman, JWT Authentication, Vercel, Performance Optimization

EXPERIENCE
${experience.map(e => `${e.role} — ${e.company} (${e.period})\n${e.achievements.map(a => `• ${a}`).join('\n')}`).join('\n\n')}

PROJECTS
${projects.map(p => `${p.title}\nTech: ${p.techStack.join(', ')}\n${p.highlights.map(h => `• ${h}`).join('\n')}`).join('\n\n')}

EDUCATION
${education.map(ed => `${ed.degree} (${ed.period})\n${ed.institution} — ${ed.score}`).join('\n')}

CERTIFICATIONS & ACHIEVEMENTS
${certifications.map(c => `• ${c.title}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(3, 7, 18, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-hover)',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '14px 20px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-header)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} color="#4f46e5" />
            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>
              Resume Preview — {personal.name}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleCopyText}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 12px',
                borderRadius: '8px',
                background: 'var(--bg-pill)',
                border: '1px solid var(--border-subtle)',
                color: copied ? '#10b981' : 'var(--text-main)',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={triggerDownload}
              className="btn-cyan"
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div
          style={{
            padding: '24px',
            overflowY: 'auto',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            backgroundColor: 'var(--bg-main)'
          }}
        >
          {/* Header info */}
          <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '2px' }}>
              {personal.name}
            </h1>
            <h2 style={{ fontSize: '1rem', fontWeight: '600', color: '#4f46e5', marginBottom: '8px' }}>
              {personal.title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              <span>{personal.phone}</span>
              <span>•</span>
              <a href={`mailto:${personal.email}`} style={{ color: '#0284c7', textDecoration: 'none' }}>{personal.email}</a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: '#4f46e5', textDecoration: 'none' }}>LinkedIn</a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: '#4f46e5', textDecoration: 'none' }}>GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '0.86rem' }}>{summary}</p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px' }}>
              Experience
            </h3>
            {experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>{exp.role} — <span style={{ color: '#4f46e5' }}>{exp.company}</span></strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} style={{ fontSize: '0.84rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px' }}>
              Featured Projects
            </h3>
            {projects.map((proj, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>{proj.title}</strong>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.76rem', color: '#10b981', textDecoration: 'none' }}>Live Site</a>
                  )}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#4f46e5', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  {proj.techStack.join(' • ')}
                </div>
                <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ fontSize: '0.84rem' }}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '6px' }}>
                Education
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} style={{ fontSize: '0.84rem' }}>
                  <strong style={{ color: 'var(--text-main)' }}>{edu.degree}</strong>
                  <div>{edu.institution}</div>
                  <div style={{ color: '#10b981', fontWeight: '600' }}>{edu.score} ({edu.period})</div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '6px' }}>
                Certifications
              </h3>
              {certifications.map((c, idx) => (
                <div key={idx} style={{ fontSize: '0.82rem', marginBottom: '4px' }}>
                  • {c.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
