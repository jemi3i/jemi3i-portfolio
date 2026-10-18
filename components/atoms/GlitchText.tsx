import React from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'div';
}

const GlitchText: React.FC<GlitchTextProps> = ({ children, className = '', as: Component = 'div' }) => {
  return (
    <Component className={`relative group inline-block select-none ${className}`}>
      {/* Primary Base Text — Always crisp, stable, and clearly legible without vibration */}
      <span className="relative z-10 block uppercase font-display font-black tracking-brutal leading-[inherit]">
        {children}
      </span>
      {/* Subtle Red Chromatic Displacement — Controlled 1px offset, temporary keyframes */}
      <span 
        aria-hidden="true"
        className="absolute inset-0 text-brand-red opacity-0 animate-glitch-subtle group-hover:animate-glitch-burst group-hover:opacity-75 motion-reduce:hidden z-0 translate-x-[1px] translate-y-[-0.5px] pointer-events-none select-none uppercase font-display font-black tracking-brutal leading-[inherit]"
      >
        {children}
      </span>
      {/* Subtle Cyan Chromatic Displacement — Controlled 1px offset, temporary keyframes */}
      <span 
        aria-hidden="true"
        className="absolute inset-0 text-[#00E5FF] opacity-0 animate-glitch-subtle group-hover:animate-glitch-burst group-hover:opacity-65 motion-reduce:hidden z-0 translate-x-[-1px] translate-y-[0.5px] pointer-events-none select-none uppercase font-display font-black tracking-brutal leading-[inherit]"
      >
        {children}
      </span>
    </Component>
  );
};

export default GlitchText;
