import React from 'react';
import Link from 'next/link';

export const TopBanner = () => {
  return (
    <div className="w-full bg-[#111111] text-gray-300 py-2.5 px-4 text-xs sm:text-sm flex justify-center items-center gap-2 border-b border-[#222]">
      <span>Anneden anneye güvenle. Salutbabe yayında</span>
      <Link 
        href="https://salutbabe.com/download" 
        className="font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-1 ml-1"
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
};
