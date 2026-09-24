import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, CheckCircle2, 
  ArrowUpRight, X, Eye, Zap, Layers 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="app-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">
            <FolderGit2 size={13} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Engineering <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Authentic platforms, SaaS architectures, and enterprise systems built with modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px'
              }}
            >
              <div>
                {/* Category & Status Pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}
                >
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: 'var(--bg-pill)',
                      border: '1px solid var(--border-subtle)',
                      color: '#4f46e5',
                      fontSize: '0.74rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em'
                    }}
                  >
                    {project.category}
                  </span>

                  {project.isLive ? (
                    <div className="badge-live">Live</div>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '600',
                        color: '#f59e0b',
                        background: 'rgba(245, 158, 11, 0.1)',
                        padding: '3px 8px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(245, 158, 11, 0.25)'
                      }}
                    >
                      In Progress
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: '800',
                    color: 'var(--text-main)',
                    lineHeight: '1.3',
                    marginBottom: '8px'
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    lineHeight: '1.55',
                    marginBottom: '16px'
                  }}
                >
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div
                    style={{
                      padding: '6px 10px',
                      borderRadius: '8px',
                      background: 'var(--bg-pill)',
                      border: '1px solid var(--border-subtle)',
                      color: '#4f46e5',
                      fontSize: '0.76rem',
                      fontWeight: '600',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <Zap size={13} />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tech Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5px',
                    marginBottom: '20px'
                  }}
                >
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  gap: '8px'
                }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '7px 12px',
                    borderRadius: '8px',
                    background: 'var(--bg-pill)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <Eye size={14} />
                  <span>Architecture</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: '7px 12px',
                        borderRadius: '8px',
                        background: 'var(--bg-pill)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--text-main)',
                        textDecoration: 'none',
                        fontSize: '0.82rem',
                        fontWeight: '600'
                      }}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-cyan"
                      style={{ padding: '7px 14px', fontSize: '0.82rem' }}
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
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
            onClick={() => setSelectedProject(null)}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '680px',
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
                  padding: '16px 20px',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-header)'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#4f46e5', fontWeight: '700', textTransform: 'uppercase' }}>
                    {selectedProject.category}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-main)' }}>
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div style={{ padding: '24px', overflowY: 'auto' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '20px' }}>
                  {selectedProject.description}
                </p>

                <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
                  Engineering Highlights & Features
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {selectedProject.highlights.map((h, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={15} color="#10b981" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: '1.55' }}>
                        {h}
                      </p>
                    </div>
                  ))}
                </div>

                <h4 style={{ fontSize: '0.82rem', fontWeight: '700', color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Technology Stack
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {selectedProject.techStack.map((t, idx) => (
                    <span key={idx} className="badge-tech">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: '14px 20px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '10px',
                  background: 'var(--bg-header)'
                }}
              >
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                  >
                    <GithubIcon size={14} />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cyan"
                    style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
