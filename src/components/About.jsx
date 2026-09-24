import React from 'react';
import { User, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const { personal, summary } = portfolioData;

  const keyPoints = [
    { title: 'Full-Stack SaaS Platforms', desc: 'Next.js App Router, Node/Express APIs, Prisma ORM & MySQL' },
    { title: 'Enterprise CRM Systems', desc: 'Secure role-based authentication, real-time analytics & client dashboards' },
    { title: 'Performance Optimization', desc: '40% page load speedups, clean responsive layouts & 99% uptime' },
    { title: 'Component-Driven UI/UX', desc: 'shadcn/ui, Tailwind CSS, accessibility & design systems' }
  ];

  return (
    <section id="about" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="app-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-tag">
            <User size={13} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering High-Performance <span className="text-gradient">Web Solutions</span>
          </h2>
          <p className="section-subtitle">
            A developer dedicated to building responsive, high-performance web applications and intuitive interfaces.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}
        >
          {/* Summary & Value Props */}
          <div
            className="glass-card"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Sparkles size={18} color="#6366f1" />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  Professional Summary
                </h3>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.94rem', marginBottom: '22px' }}>
                {summary}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                {keyPoints.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      background: 'var(--bg-pill)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                      <CheckCircle2 size={14} color="#10b981" />
                      <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-main)' }}>
                        {item.title}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button onClick={onOpenResume} className="btn-primary" style={{ flex: 1, minWidth: '150px', padding: '10px 16px' }}>
                <span>View Full Resume</span>
              </button>
              <a href="#contact" className="btn-secondary" style={{ flex: 1, minWidth: '150px', padding: '10px 16px' }}>
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Code Terminal */}
          <div
            className="glass-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Terminal Header */}
            <div
              style={{
                padding: '10px 16px',
                background: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ marginLeft: '8px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  devendra.config.ts
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#6366f1', fontFamily: 'var(--font-mono)' }}>
                TypeScript
              </span>
            </div>

            {/* Code Body */}
            <div
              className="font-mono"
              style={{
                padding: '20px',
                fontSize: '0.82rem',
                lineHeight: '1.65',
                color: '#e2e8f0',
                backgroundColor: 'var(--code-bg)',
                flex: 1,
                overflowX: 'auto'
              }}
            >
              <div>
                <span style={{ color: '#ec4899' }}>const </span>
                <span style={{ color: '#818cf8' }}>developer</span>
                <span style={{ color: '#cbd5e1' }}> = {'{'}</span>
              </div>

              <div style={{ paddingLeft: '16px' }}>
                <span style={{ color: '#38bdf8' }}>name</span>: <span style={{ color: '#34d399' }}>'{personal.name}'</span>,
              </div>
              <div style={{ paddingLeft: '16px' }}>
                <span style={{ color: '#38bdf8' }}>role</span>: <span style={{ color: '#34d399' }}>'Full Stack Developer'</span>,
              </div>
              <div style={{ paddingLeft: '16px' }}>
                <span style={{ color: '#38bdf8' }}>location</span>: <span style={{ color: '#34d399' }}>'Bareilly (U.P.), India'</span>,
              </div>
              <div style={{ paddingLeft: '16px' }}>
                <span style={{ color: '#38bdf8' }}>stack</span>: [
                <span style={{ color: '#34d399' }}>'React'</span>,{' '}
                <span style={{ color: '#34d399' }}>'Next.js'</span>,{' '}
                <span style={{ color: '#34d399' }}>'Node.js'</span>,{' '}
                <span style={{ color: '#34d399' }}>'TypeScript'</span>,{' '}
                <span style={{ color: '#34d399' }}>'Prisma'</span>,{' '}
                <span style={{ color: '#34d399' }}>'MySQL'</span>
                ],
              </div>
              <div style={{ paddingLeft: '16px' }}>
                <span style={{ color: '#38bdf8' }}>internship</span>: <span style={{ color: '#34d399' }}>'Oscorm Inc (Nov 2025 – May 2026)'</span>,
              </div>
              <div style={{ paddingLeft: '16px' }}>
                <span style={{ color: '#38bdf8' }}>passion</span>: <span style={{ color: '#a5b4fc' }}>'High-speed SaaS & clean UX architectures'</span>
              </div>
              <div>
                <span style={{ color: '#cbd5e1' }}>{'};'}</span>
              </div>

              <div style={{ marginTop: '12px', color: '#10b981' }}>
                // Ready for new challenges & full-stack development 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
