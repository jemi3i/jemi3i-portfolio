
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-10 py-5 font-mono text-xs uppercase tracking-technical transition-all duration-500 relative overflow-hidden group active:scale-[0.98] inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-white hover:text-black',
    outline: 'border border-brand-white/20 text-brand-white hover:border-brand-red hover:text-brand-red',
    ghost: 'text-brand-white p-0 hover:text-brand-red after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-red after:transition-all hover:after:w-full'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
