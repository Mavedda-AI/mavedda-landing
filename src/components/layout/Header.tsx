"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/Button';
import {TopBanner} from './TopBanner';
import {MegaMenu} from './MegaMenu';
import {navigationData} from '@/lib/navigationData';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full flex flex-col z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <TopBanner />

      {/* Main Nav */}
      <div className="w-full bg-black/50 backdrop-blur-lg border-b border-white/10 text-white">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Using the Unframe Logo from the snippet */}
            <img 
              src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/66b4795caff3f505c5c51c6c_Unframe%20Logo%20-%20Refined%20Palette%201.svg" 
              alt="Unframe Logo" 
              className="h-7 w-auto"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navigationData.simpleLinks.map((link) => (
              <Link key={link.label} href={link.href} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
            
            {Object.entries(navigationData.megaMenus).map(([key, data]) => (
              <MegaMenu key={key} label={key} data={data} />
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="md">
              Let&apos;s connect
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
