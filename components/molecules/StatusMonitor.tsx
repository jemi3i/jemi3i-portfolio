import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../atoms/Text';

const StatusMonitor: React.FC = () => {
  return (
    <div className="flex items-center space-x-6 md:space-x-8">
      <div className="hidden lg:flex flex-col items-end border-r border-white/20 pr-6">
        <Text variant="mono" className="text-[9px] text-brand-white/80 font-medium">TUNIS // 36.8065° N</Text>
        <Text variant="mono" className="text-[9px] text-brand-white/80 font-medium">ESPRIT // TWIN 2026/2027</Text>
      </div>
      <Link 
        to="/contact" 
        className="flex items-center space-x-3 px-3 py-1.5 border border-white/10 hover:border-brand-red bg-brand-black/60 backdrop-blur-md transition-all group pointer-events-auto"
        title="View Availability & Contact Channels"
      >
        <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.9)]" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-brand-white/80 group-hover:text-brand-red transition-colors">
          PFE_READY // 2026-27
        </span>
      </Link>
    </div>
  );
};

export default StatusMonitor;
