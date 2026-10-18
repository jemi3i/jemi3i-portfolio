
import React from 'react';

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  variant?: 'hero' | 'title' | 'body' | 'label' | 'mono' | 'editorial' | 'massive';
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ as: Component = 'p', variant = 'body', children, className = '' }) => {
  const styles = {
    massive: 'text-[15vw] md:text-[22vw] font-display font-black uppercase leading-[0.75] tracking-brutal',
    hero: 'text-7xl md:text-[10vw] font-display font-black uppercase leading-[0.8] tracking-brutal',
    title: 'text-2xl md:text-5xl font-display font-bold uppercase tracking-tight',
    body: 'text-sm md:text-base font-sans tracking-tight leading-relaxed text-brand-white/60 font-light',
    label: 'text-[9px] md:text-[11px] uppercase tracking-technical font-mono font-medium text-brand-red',
    mono: 'font-mono text-[10px] uppercase tracking-widest text-brand-white/40',
    editorial: 'italic font-display text-4xl md:text-7xl lowercase tracking-tighter leading-[0.9]'
  };

  return <Component className={`${styles[variant]} ${className}`}>{children}</Component>;
};

export default Text;
