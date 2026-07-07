"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from '@/hooks/useTranslation';

export const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Smart Header Scroll Logic
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Lock body scroll ONLY when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Handle Desktop scroll wheel
    const handleWheel = (e: WheelEvent) => {
      if (!isHidden && window.scrollY <= 0 && e.deltaY > 0) {
        setIsHidden(true);
      }
    };

    // Handle Mobile touch
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isHidden && window.scrollY <= 0) {
        const currentY = e.touches[0].clientY;
        if (startY - currentY > 10) { // Swiped up (scrolling down)
          setIsHidden(true);
        }
      }
    };

    // Handle regular scroll logic for when body is unlocked
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      // If user naturally scrolls back to absolute top, show header
      if (currentScrollY <= 0) {
        setIsHidden(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHidden]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex flex-col transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Announcement Banner */}
      <div className="bg-[#111] text-white text-sm font-medium py-2 px-4 flex items-center justify-center gap-3">
        <span>{t('announcement.text')}</span>
        <a 
          href="https://salutbabe.com/download" 
          className="flex items-center gap-1 hover:text-gray-300 transition-colors"
        >
          <span className="underline decoration-1 underline-offset-4">{t('announcement.button')}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L20 12M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#f8f9fa] border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/">
            <img src="/assets/logo/logo_mavedda.svg" alt="Mavedda Logo" className="h-9 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800">
          <div className="relative group cursor-pointer" onMouseEnter={() => setActiveDropdown('platform')} onMouseLeave={() => setActiveDropdown(null)}>
            <div className="flex items-center gap-1 hover:text-black transition-colors">
              Platform
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            {/* Simple Dropdown placeholder */}
            {activeDropdown === 'platform' && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl rounded-xl p-4 border border-gray-100 flex flex-col gap-3">
                <Link href="#" className="hover:text-blue-600">Business Outcomes</Link>
                <Link href="#" className="hover:text-blue-600">Agentic Workforce</Link>
                <Link href="#" className="hover:text-blue-600">Data Processing</Link>
              </div>
            )}
          </div>

          <div className="relative group cursor-pointer" onMouseEnter={() => setActiveDropdown('industries')} onMouseLeave={() => setActiveDropdown(null)}>
            <div className="flex items-center gap-1 hover:text-black transition-colors">
              Industries
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative group cursor-pointer" onMouseEnter={() => setActiveDropdown('resources')} onMouseLeave={() => setActiveDropdown(null)}>
            <div className="flex items-center gap-1 hover:text-black transition-colors">
              Resources
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative group cursor-pointer" onMouseEnter={() => setActiveDropdown('company')} onMouseLeave={() => setActiveDropdown(null)}>
            <div className="flex items-center gap-1 hover:text-black transition-colors">
              Company
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <Link href="/security" className="hover:text-black transition-colors">Security</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link href="/demo" className="bg-[#2d3136] hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
            Let&#39;s connect
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100 flex flex-col px-6 py-4 gap-4">
          <Link href="#" className="font-medium text-gray-800">Platform</Link>
          <Link href="#" className="font-medium text-gray-800">Industries</Link>
          <Link href="#" className="font-medium text-gray-800">Resources</Link>
          <Link href="#" className="font-medium text-gray-800">Company</Link>
          <Link href="/security" className="font-medium text-gray-800">Security</Link>
          <Link href="/demo" className="bg-[#2d3136] text-white text-center py-3 rounded-full font-semibold mt-2">
            Let&#39;s connect
          </Link>
        </div>
      )}
    </header>
  );
};
