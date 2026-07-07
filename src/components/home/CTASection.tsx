import React from 'react';
import Link from 'next/link';

export const CTASection = () => {
  return (
    <section className="w-full relative overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69f47187219545bf5410b5e4_bg-hero-home-2c.webp" 
          alt="CTA Background" 
          className="w-full h-full object-cover object-center opacity-70"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-40 flex flex-col items-center text-center gap-8 mt-[10vh]">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Bring AI into your operations. Fast.
        </h2>
        
        <p className="text-xl text-white/90 max-w-2xl font-medium">
          Tell us your hardest, highest-stakes operational challenge. We’ll provide a production-grade AI solution in days. Within weeks, see business impact.
        </p>
        
        <div className="mt-4">
          <Link href="/demo" className="inline-flex items-center justify-center px-10 py-5 text-base font-semibold text-black bg-white rounded-full hover:bg-gray-100 hover:shadow-xl transition-all">
            Let's connect
          </Link>
        </div>
      </div>

    </section>
  );
};
