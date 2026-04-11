'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Simple heuristic: if scrolled past 50vh, assume dark mode
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isDark ? 'text-cyan-400' : 'text-[#1A2B3C]';
  const bgColor = isDark ? 'bg-[#0A0A0A]/80' : 'bg-[#F0EAD6]/80';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${bgColor} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className={`font-headline font-bold tracking-tighter text-xl ${textColor}`}>
          SYS.SayanRay
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center space-x-8 font-mono text-xs uppercase tracking-widest ${textColor}`}>
          <a href="#boot" className="hover:opacity-70 transition-opacity">Boot</a>
          <a href="#profile" className="hover:opacity-70 transition-opacity">Profile</a>
          <a href="#education" className="hover:opacity-70 transition-opacity">Education</a>
          <a href="#skills" className="hover:opacity-70 transition-opacity">Skills</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className={`md:hidden p-2 ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-16 left-0 w-full ${bgColor} backdrop-blur-md border-t border-current/10`}>
          <div className={`flex flex-col items-center py-8 space-y-6 font-mono text-sm uppercase tracking-widest ${textColor}`}>
            <a href="#boot" onClick={() => setIsOpen(false)}>Boot</a>
            <a href="#profile" onClick={() => setIsOpen(false)}>Profile</a>
            <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
