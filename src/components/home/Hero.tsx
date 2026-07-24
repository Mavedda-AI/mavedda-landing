'use client';

import React from 'react';
import {useTranslation} from "@/hooks/useTranslation";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full min-h-[100dvh] bg-black overflow-x-hidden pt-40 lg:pt-48 flex flex-col pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Headlines */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl text-balance">
          {t('hero.title1')} <span className="bg-gradient-to-r from-[#00c5ea] to-[#7800ff] text-transparent bg-clip-text">{t('hero.title2')}</span>
        </h1>
        
        <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-3xl text-balance">
          {t('hero.subtitle')}
        </h3>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-20">
          <a href="/contact" className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            {t('hero.buttonPrimary')}
          </a>
          <a href="/customers" className="bg-transparent text-white border border-gray-600 hover:border-gray-400 hover:bg-white/5 px-8 py-3 rounded-full font-semibold transition-all">
            {t('hero.buttonSecondary')}
          </a>
        </div>
      </div>

      {/* Hero Background Image with glowing cube */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-0 pointer-events-none flex justify-center items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        <img 
          src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69f47187219545bf5410b5e4_bg-hero-home-2c.webp" 
          alt="Glowing Cube on Mountains" 
          className="w-full object-cover opacity-90 h-[50vh] md:h-auto object-bottom"
        />
      </div>

      {/* Marquee Section (Absolute at bottom of Hero) */}
      <div className="absolute bottom-6 left-0 w-full pt-10 pb-2 overflow-hidden z-30">
        {/* Gradient overlays for marquee */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-40 pointer-events-none"></div>
        
        {/* Marquee track */}
        <div className="flex w-max animate-marquee">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8">
            <img src="/assets/trusted-logo/logo-lebara.svg" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
            <img src="/assets/trusted-logo/logo-onder.webp" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Onder" />
            <img src="/assets/trusted-logo/logo-salutbabe.png" className="h-16 opacity-50 grayscale brightness-0 invert hover:grayscale-0 hover:opacity-100 transition-all" alt="Salutbabe" />
            <img src="/assets/trusted-logo/logo-byst.webp" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Byst" />
            <img src="/assets/trusted-logo/logo-yst.png" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Yst" />
            
            <img src="/assets/trusted-logo/logo-lebara.svg" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
            <img src="/assets/trusted-logo/logo-onder.webp" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Onder" />
            <img src="/assets/trusted-logo/logo-salutbabe.png" className="h-16 opacity-50 grayscale brightness-0 invert hover:grayscale-0 hover:opacity-100 transition-all" alt="Salutbabe" />
            <img src="/assets/trusted-logo/logo-byst.webp" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Byst" />
            <img src="/assets/trusted-logo/logo-yst.png" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Yst" />
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex items-center gap-16 px-8">
            <img src="/assets/trusted-logo/logo-lebara.svg" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
            <img src="/assets/trusted-logo/logo-onder.webp" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Onder" />
            <img src="/assets/trusted-logo/logo-salutbabe.png" className="h-16 opacity-50 grayscale brightness-0 invert hover:grayscale-0 hover:opacity-100 transition-all" alt="Salutbabe" />
            <img src="/assets/trusted-logo/logo-byst.webp" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Byst" />
            <img src="/assets/trusted-logo/logo-yst.png" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Yst" />
            
            <img src="/assets/trusted-logo/logo-lebara.svg" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
            <img src="/assets/trusted-logo/logo-onder.webp" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Onder" />
            <img src="/assets/trusted-logo/logo-salutbabe.png" className="h-16 opacity-50 grayscale brightness-0 invert hover:grayscale-0 hover:opacity-100 transition-all" alt="Salutbabe" />
            <img src="/assets/trusted-logo/logo-byst.webp" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Byst" />
            <img src="/assets/trusted-logo/logo-yst.png" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Yst" />
          </div>
        </div>
      </div>
    </section>
  );
};
