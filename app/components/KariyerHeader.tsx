"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface KariyerHeaderProps {
  backLink: string;
  backText?: string;
}

export default function KariyerHeader({ backLink, backText }: KariyerHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="w-full py-6 px-6 md:px-8 flex justify-between items-center bg-[#f7f7f7] sticky top-0 z-40">
        {backText ? (
          <Link href={backLink} className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-medium">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {backText}
          </Link>
        ) : (
          <Link href={backLink} className="text-2xl md:text-3xl font-medium tracking-tighter text-black">
            Mavedda
          </Link>
        )}
        <button className="p-2 text-black hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      {/* Fullscreen Black Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] text-white z-50 flex flex-col animate-in fade-in duration-200">
          <header className="w-full py-6 px-6 md:px-8 flex justify-between items-center">
            <Link href="/" className="text-2xl md:text-3xl font-medium tracking-tighter" onClick={() => setMenuOpen(false)}>
              Mavedda
            </Link>
            <button className="p-2 hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </header>
          <div className="flex-1 flex flex-col items-center justify-center gap-10 pb-20">
            <Link href="/" className="text-[32px] md:text-[40px] tracking-tight hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
              Hakkımızda
            </Link>
            <Link href="/" className="text-[32px] md:text-[40px] tracking-tight hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
              Kariyer
            </Link>
            <Link href="/" className="text-[32px] md:text-[40px] tracking-tight hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
              Etkinlikler
            </Link>
            <Link href="/kariyer" className="text-[32px] md:text-[40px] tracking-tight underline underline-offset-8" onClick={() => setMenuOpen(false)}>
              İş İlanları
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
