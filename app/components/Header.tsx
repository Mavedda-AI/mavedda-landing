"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import QuoteModal from './QuoteModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-teklif-modal', handleOpenModal);
    return () => window.removeEventListener('open-teklif-modal', handleOpenModal);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-[26px] font-medium tracking-tight text-white flex items-center">
            Mavedda
          </Link>
          <nav className="flex gap-8 text-sm font-medium text-white/70">
            <Link href="#hizmetler" className="hover:text-white transition-colors">Neler Yapıyoruz?</Link>
            <Link href="#projeler" className="hover:text-white transition-colors">Projelerimiz</Link>
            <Link href="#iletisim" className="hover:text-white transition-colors">İletişim</Link>
          </nav>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-1.5 rounded-full bg-white text-black font-semibold text-[14px] hover:bg-gray-200 transition-colors"
          >
            Teklif al
          </button>
        </div>
      </header>

      {/* Mobile Header (Floating Pill) */}
      {!isMobileMenuOpen && (
        <header className="fixed top-4 left-4 right-4 z-40 md:hidden">
          <div className="bg-white rounded-[24px] h-[48px] flex items-center justify-between px-2 shadow-lg relative">
            {/* Logo & Tagline */}
            <Link href="/" className="h-full flex items-center z-10 pl-3 gap-1.5 sm:gap-2">
              <img 
                src="/logo-black-mavedda.png" 
                alt="Mavedda" 
                className="h-[26px] w-auto object-contain"
              />
              <div className="h-[18px] w-[1.5px] bg-gray-300/60 rounded-full mt-[2px]"></div>
              <span className="font-sans text-[12px] sm:text-[13px] text-[#8a8a8a] tracking-tight font-medium mt-[2px]">
                Tech hub
              </span>
            </Link>

            {/* Hamburger Icon */}
            <button 
              className="w-12 h-full flex flex-col items-center justify-center gap-[4px] mr-0.5 z-10"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <div className="w-[30px] h-[4px] bg-black rounded-full" />
              <div className="w-[30px] h-[4px] bg-black rounded-full" />
            </button>
          </div>
        </header>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative mt-4 mx-4 bg-white rounded-[32px] p-5 shadow-2xl flex flex-col gap-8 animate-in fade-in slide-in-from-top-8 duration-300">
            {/* Top bar */}
            <div className="flex items-center justify-between px-1">
              {/* Left pill / Logo */}
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="h-[36px] flex items-center justify-center pl-2">
                <img 
                  src="/logo-black-mavedda.png" 
                  alt="Mavedda" 
                  className="h-[28px] w-auto object-contain"
                />
              </Link>
              
              {/* Close button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 border-[3px] border-black flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 px-3 mt-2">
              <Link href="#hizmetler" onClick={() => setIsMobileMenuOpen(false)} className="text-[#666666] hover:text-black transition-colors text-[24px] font-medium tracking-tight">Neler Yapıyoruz?</Link>
              <Link href="#projeler" onClick={() => setIsMobileMenuOpen(false)} className="text-[#666666] hover:text-black transition-colors text-[24px] font-medium tracking-tight">Projelerimiz</Link>
              <Link href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-[#666666] hover:text-black transition-colors text-[24px] font-medium tracking-tight">İletişim</Link>
            </nav>

            {/* CTA */}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-2 w-full bg-[#1c1c1c] text-white rounded-[24px] h-[72px] flex items-center p-2 hover:bg-black transition-colors group"
            >
              <div className="w-14 h-14 bg-[#2a2a2a] rounded-[20px] flex items-center justify-center shrink-0 group-hover:bg-[#333333] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M5 12h14"></path>
                   <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <span className="flex-1 text-center font-medium mr-14 text-[17px]">Teklif al</span>
            </button>
          </div>
        </div>
      )}

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
