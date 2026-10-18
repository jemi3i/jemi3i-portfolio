
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ to, children }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        font-display text-sm font-bold uppercase tracking-widest transition-colors
        ${isActive ? 'text-brand-red' : 'text-brand-white hover:text-brand-red'}
      `}
    >
      {children}
    </NavLink>
  );
};

export default NavbarLink;
