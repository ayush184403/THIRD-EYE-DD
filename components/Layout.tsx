
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PageType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [dots, setDots] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 6 + 4}px`,
      duration: `${Math.random() * 10 + 15}s`,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-primary text-white">
      {/* Parallax Background */}
      {dots.map(dot => (
        <div
          key={dot.id}
          className="parallax-dot animate-float opacity-20"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDuration: dot.duration,
          }}
        />
      ))}
      
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      
      <main className="flex-grow z-10 pt-0">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
