import React from 'react';

interface SideLabelProps {
  text: string;
  position?: 'left' | 'right';
}

const SideLabel: React.FC<SideLabelProps> = ({ text, position = 'left' }) => {
  return (
    <div 
      className={`fixed top-1/2 -translate-y-1/2 z-30 hidden 2xl:block pointer-events-none select-none ${
        position === 'left' ? 'left-6' : 'right-6'
      }`}
      aria-hidden="true"
    >
      <span className={`block font-mono text-[9px] uppercase tracking-technical text-brand-white/20 vertical-rl transform ${
        position === 'left' ? 'rotate-180' : ''
      }`}>
        {text}
      </span>
    </div>
  );
};

export default SideLabel;
