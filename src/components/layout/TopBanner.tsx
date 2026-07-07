import React from 'react';
import Link from 'next/link';

export const TopBanner = () => {
  return (
    <div className="w-full bg-[#111111] text-gray-300 py-2.5 px-4 text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-2 border-b border-[#222] overflow-hidden">
      
      {/* Desktop Text */}
      <span className="hidden sm:inline">Anneden anneye güvenle. Salutbabe yayında</span>
      
      {/* Mobile Marquee Text */}
      <div className="flex sm:hidden w-full overflow-hidden">
        <div className="flex w-max animate-marquee" style={{ animationDuration: '10s' }}>
          <span className="px-8 whitespace-nowrap">Anneden anneye güvenle. Salutbabe yayında</span>
          <span className="px-8 whitespace-nowrap">Anneden anneye güvenle. Salutbabe yayında</span>
          <span className="px-8 whitespace-nowrap">Anneden anneye güvenle. Salutbabe yayında</span>
          <span className="px-8 whitespace-nowrap">Anneden anneye güvenle. Salutbabe yayında</span>
        </div>
      </div>

      {/* Action Link */}
      <Link 
        href="https://salutbabe.com/download" 
        className="font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-1"
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
};
