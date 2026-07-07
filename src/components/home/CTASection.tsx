import React from 'react';
import Link from 'next/link';

export const CTASection = () => {
  return (
    <section className="w-full relative overflow-hidden bg-black border-t border-white/5">
      
      {/* Background Image - Left aligned with fade out */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <div className="absolute left-0 top-0 w-full lg:w-[65%] h-full">
          <img 
            src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69f47187219545bf5410b5e4_bg-hero-home-2c.webp" 
            alt="CTA Background" 
            className="w-full h-full object-cover object-left opacity-70"
          />
          {/* Gradients to blend the image seamlessly into the black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center">
        
        {/* Spacer for the image on desktop */}
        <div className="w-full lg:w-[45%] hidden lg:block"></div>
        
        {/* Content Side */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left gap-6 pl-0 lg:pl-12">
          <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Bring AI into your<br/>operations. Fast.
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-lg font-medium leading-relaxed">
            Tell us your hardest, highest-stakes operational challenge. We’ll provide a production-grade AI solution in days. Within weeks, see business impact.
          </p>
          
          <div className="mt-4">
            <Link href="/demo" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-100 hover:scale-105 transition-all">
              Let's connect
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};
