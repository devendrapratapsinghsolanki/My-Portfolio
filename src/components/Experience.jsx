import React from 'react';
import { Briefcase, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  const keyMetrics = [
    { title: '40% Page Load Speedup', desc: 'Next.js & Tailwind CSS optimization on fintech borrowing platform' },
    { title: '+30% Client Engagement', desc: 'Designed modular CRM dashboard with reusable UI components' },
    { title: '99% Application Uptime', desc: 'Scalable backend MERN architecture and REST API database connectivity' }
  ];

  return (
    <section id="experience" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="app-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-tag">
            <Briefcase size={13} />
            <span>Work History</span>
          </div>
          <h2 className="section-title">
            Internship & <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development experience building production fintech, CRM, and web solutions.
          </p>
        </div>

        {/* Experience Card */}
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '16px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '2px' }}>
                    {exp.role}
                  </h3>
                  <span style={{ fontSize: '0.95rem', color: '#4f46e5', fontWeight: '600' }}>
                    {exp.company}
                  </span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    background: 'var(--bg-pill)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                >
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Metrics */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '10px',
                  marginBottom: '20px'
                }}
              >
                {keyMetrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      background: 'var(--bg-pill)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                      <TrendingUp size={14} color="#10b981" />
                      <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>
                        {metric.title}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      {metric.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullet points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {exp.achievements.map((item, aIdx) => (
                  <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#10b981" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.55' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="badge-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
