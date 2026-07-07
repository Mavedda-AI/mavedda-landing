"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import {MegaMenuSection} from '@/lib/navigationData';

interface MegaMenuProps {
  label: string;
  data: MegaMenuSection;
}

export const MegaMenu = ({ label, data }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-[#222] hover:text-black transition-colors"
      >
        {label}
        <svg 
          width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M1 1L5 5L9 1"/>
        </svg>
      </button>

      {/* Dropdown Panel */}
      <div 
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-[#111111] border border-[#222] rounded-xl shadow-2xl overflow-hidden min-w-[600px] max-w-[800px] flex text-left">
          
          {/* Main Columns Container */}
          <div className="flex-1 flex p-6 gap-8">
            {data.columns.map((col, idx) => (
              <div key={idx} className="flex-1">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">{col.title}</h3>
                <ul className="space-y-1">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link 
                        href={item.href}
                        className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-all group/item"
                      >
                        <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-gray-400 group-hover/item:text-white group-hover/item:border-[#555] transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-medium text-sm">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Optional Footer/Side Quote (like Unframe's Platform menu) */}
          {data.footer && (
            <div className="w-[280px] bg-[#1a1a1a] border-l border-[#222] p-8 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {data.footer.description}
                </p>
                <div className="text-white font-semibold text-lg leading-tight">
                  {data.footer.title}
                </div>
              </div>
              
              <Link 
                href={data.footer.ctaHref}
                className="mt-8 flex items-center justify-between group/cta text-sm font-semibold text-white hover:text-gray-300 transition-colors"
              >
                <span>{data.footer.ctaText}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/cta:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
