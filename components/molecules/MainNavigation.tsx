import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../constants';
import { getNavigationCurrent } from '../../utils/navigation';

const MainNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center space-x-8 md:space-x-12" aria-label="Main Navigation">
      {NAVIGATION_LINKS.map((item) => {
        const isActive = location.pathname === item.path || 
          (item.path === '/projects' && location.pathname.startsWith('/project/'));

        return (
          <Link 
            key={item.name} 
            to={item.path} 
            aria-current={getNavigationCurrent(location.pathname, item.path)}
            className="group relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
          >
            <span className={`font-mono text-[11px] tracking-widest uppercase transition-colors duration-300 ${
              isActive ? 'text-brand-red font-bold' : 'text-brand-white/80 group-hover:text-brand-white'
            }`}>
              {item.name}
            </span>
            <div 
              className={`absolute -bottom-1 left-0 w-full h-[1px] bg-brand-red transition-transform duration-300 origin-left ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNavigation;
