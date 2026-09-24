import React from 'react';

export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Sleek Geometric Icon Badge */}
      <div
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: '800',
          fontSize: '1rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.05em',
          boxShadow: '0 4px 12px rgba(79, 70, 229, 0.35)'
        }}
      >
        {'<D/>'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--text-main)', lineHeight: '1.2' }}>
          Devendra <span style={{ color: '#6366f1' }}>Pratap</span>
        </span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: '600' }}>
          Full-Stack Dev
        </span>
      </div>
    </div>
  );
}
