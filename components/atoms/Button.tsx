import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ButtonStyles {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = ButtonStyles & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never })
  | (LinkProps & { href?: never })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: never })
);

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-10 py-5 font-mono text-xs uppercase tracking-technical transition-all duration-500 relative overflow-hidden group active:scale-[0.98] inline-flex items-center justify-center text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-white';
  
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-white hover:text-black',
    outline: 'border border-brand-white/20 text-brand-white hover:border-brand-red hover:text-brand-red',
    ghost: 'text-brand-white p-0 hover:text-brand-red after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-red after:transition-all hover:after:w-full'
  };

  const styles = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
  const content = <span className="relative z-10">{children}</span>;

  if ('to' in props && props.to !== undefined) {
    return <Link {...props as LinkProps} className={styles}>{content}</Link>;
  }

  if ('href' in props && props.href !== undefined) {
    return <a {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>} className={styles}>{content}</a>;
  }

  return (
    <button type="button" {...props as React.ButtonHTMLAttributes<HTMLButtonElement>} className={styles}>
      {content}
    </button>
  );
};

export default Button;
