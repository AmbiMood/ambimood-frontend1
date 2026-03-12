import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleBack}
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 32px',
        background: 'rgba(10,10,15,0.85)',
        border: '1px solid rgba(139,92,246,0.4)',
        borderRadius: '100px',
        color: 'rgba(196,181,253,0.9)',
        fontSize: '0.9rem',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: "'DM Sans', sans-serif",
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.1) inset',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        letterSpacing: '0.3px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(139,92,246,0.25)';
        e.currentTarget.style.borderColor = 'rgba(139,92,246,0.7)';
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.transform = 'translateX(-50%) translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(139,92,246,0.3), 0 0 0 1px rgba(139,92,246,0.2) inset';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(10,10,15,0.85)';
        e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)';
        e.currentTarget.style.color = 'rgba(196,181,253,0.9)';
        e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.1) inset';
      }}
    >
      {/* Arrow icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      Back to Home
    </button>
  );
};

export default BackButton;