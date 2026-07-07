"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/Button';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let isAnimating = false;

    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY <= 0 && e.deltaY > 0) {
        if (isVisible && !isAnimating) {
          e.preventDefault(); // Sayfanın kaymasını engelle
          setIsVisible(false);
          isAnimating = true;
          
          // Animasyon bitene kadar kaydırmayı engelle (300ms)
          setTimeout(() => {
            isAnimating = false;
          }, 300);
        } else if (isAnimating) {
          e.preventDefault();
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY <= 0) {
        const touchY = e.touches[0].clientY;
        if (touchStartY > touchY) { // Aşağı kaydırılıyor
          if (isVisible && !isAnimating) {
            e.preventDefault();
            setIsVisible(false);
            isAnimating = true;
            setTimeout(() => { isAnimating = false; }, 300);
          } else if (isAnimating) {
            e.preventDefault();
          }
        }
      }
    };

    const handleScroll = () => {
      if (window.scrollY <= 0 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <header 
      className={`w-full flex flex-col z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Top Banner */}
      <div className="w-full bg-[#111111] text-gray-300 py-2.5 px-4 text-xs sm:text-sm flex justify-center items-center gap-2 border-b border-[#222]">
        <span>Swish AI is now part of Unframe. Learn more about the acquisition.</span>
        <Link href="#" className="text-white hover:underline inline-flex items-center gap-1 font-medium">
          Learn more 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

      {/* Main Nav */}
      <div className="w-full bg-[#f6f6f6] text-black">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-heading text-2xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">U</span>
            nframe
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Platform', 'Industries', 'Resources', 'Company', 'Security'].map((item) => (
              <button key={item} className="flex items-center gap-1 hover:text-gray-600 transition-colors">
                {item}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="md">
              Let&apos;s connect
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
