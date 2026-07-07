"use client";

import Link from 'next/link';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-[26px] font-medium tracking-tight text-white flex items-center">
            Mavedda
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
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

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
