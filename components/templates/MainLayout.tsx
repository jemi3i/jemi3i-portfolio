import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import ScanlineOverlay from '../atoms/ScanlineOverlay';
import SideLabel from '../atoms/SideLabel';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative bg-brand-black text-brand-white selection:bg-brand-red selection:text-white">
      <ScanlineOverlay />
      
      {/* Ambient Framing */}
      <SideLabel text="JEMI3I // ESPRIT_TWIN_2026-27" position="left" />
      <SideLabel text="MARWEN_JEMAI // SOLIDARITY_TECH" position="right" />

      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
