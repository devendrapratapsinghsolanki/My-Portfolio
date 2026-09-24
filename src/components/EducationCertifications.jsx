import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCertifications() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="app-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-tag">
            <GraduationCap size={13} />
            <span>Academic & Accreditations</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in Computer Science engineering and verified industrial technical certifications.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Education */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4f46e5'
                }}
              >
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-main)' }}>
                  Education
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Computer Science & Engineering</span>
              </div>
            </div>

            {education.map((edu, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)' }}>
                      {edu.degree}
                    </h4>
                    <p style={{ color: '#4f46e5', fontWeight: '600', fontSize: '0.88rem' }}>
                      {edu.institution}
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {edu.location}
                    </p>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 8px',
                        borderRadius: '9999px',
                        background: 'var(--bg-pill)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-muted)',
                        fontSize: '0.76rem',
                        fontWeight: '600'
                      }}
                    >
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                    <div style={{ marginTop: '4px', fontSize: '0.88rem', fontWeight: '800', color: '#10b981' }}>
                      {edu.score}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <CheckCircle2 size={14} color="#4f46e5" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}
              >
                <Award size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-main)' }}>
                  Certifications
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Verified Credentials</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    background: 'var(--bg-pill)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '3px' }}>
                    {cert.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: '#4f46e5', fontWeight: '600' }}>
                    {cert.category} • <span style={{ color: 'var(--text-muted)' }}>{cert.issuer}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
