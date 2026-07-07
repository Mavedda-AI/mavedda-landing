import React from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/Button';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-between overflow-hidden bg-black text-white pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/background/hero_background.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-bottom opacity-80"
          sizes="100vw"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-center justify-center text-center px-6 mt-12 md:mt-24 flex-1">
        
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Turn your most critical<br/>operations AI-native
        </h1>
        
        <p className="text-xl md:text-2xl font-medium mb-8 text-gray-200">
          Managed AI transformation tailored to how your enterprise operates
        </p>

        <p className="text-sm md:text-base text-gray-400 font-medium mb-10 tracking-wide">
          No upfront cost. No FDE required. Full agent governance.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="primary" size="lg" className="min-w-[160px]">
            Let&apos;s connect
          </Button>
          <Button variant="outline" size="lg" className="min-w-[160px] border-[#444] hover:bg-white/5">
            See our customers
          </Button>
        </div>
      </div>

      {/* Logos Strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm py-6">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-6 overflow-hidden opacity-70 grayscale">
          {/* Logo Placeholders matching the screenshot */}
          <div className="text-sm font-bold tracking-widest uppercase">Avison<br/>Young</div>
          <div className="flex items-center gap-2 text-xl font-semibold"><div className="w-4 h-4 bg-white rotate-45"></div>acora</div>
          <div className="text-xs font-bold uppercase">Mast</div>
          <div className="text-lg font-bold italic">erTel USA</div>
          <div className="text-3xl font-serif tracking-widest">NZZ</div>
          <div className="text-sm tracking-[0.2em] uppercase">Dorothy Gaynor</div>
          <div className="text-xs font-bold leading-tight">Cushman &<br/>Wakefield</div>
          <div className="text-2xl font-black">CLIMB</div>
          <div className="text-xl font-bold italic">AST</div>
          <div className="text-lg font-bold flex items-center"><div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-[12px] border-b-white rotate-90 mr-1"></div>ARMIS</div>
        </div>
      </div>
    </section>
  );
};
