import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Headlines */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl text-balance">
          Turn your most critical operations AI-native
        </h1>
        
        <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-3xl text-balance">
          Managed AI transformation tailored to how your enterprise operates
        </h3>
        
        {/* Features list */}
        <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-400 mb-12">
          <span>No upfront cost.</span>
          <span className="w-1 h-1 rounded-full bg-gray-500"></span>
          <span>No FDE required.</span>
          <span className="w-1 h-1 rounded-full bg-gray-500"></span>
          <span>Full agent governance.</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-20">
          <a href="/demo" className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Let&#39;s connect
          </a>
          <a href="/customers" className="bg-transparent text-white border border-gray-600 hover:border-gray-400 hover:bg-white/5 px-8 py-3 rounded-full font-semibold transition-all">
            See our customers
          </a>
        </div>
      </div>

      {/* Hero Background Image with glowing cube */}
      <div className="relative w-full max-w-[1440px] mx-auto mt-[-100px] md:mt-[-150px] lg:mt-[-250px] z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        <img 
          src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69f47187219545bf5410b5e4_bg-hero-home-2c.webp" 
          alt="Glowing Cube on Mountains" 
          className="w-full object-cover opacity-90"
        />
      </div>

      {/* Marquee Section */}
      <div className="relative w-full border-t border-gray-900 bg-black py-10 overflow-hidden mt-[-2px]">
        {/* Gradient overlays for marquee */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee track */}
        <div className="flex w-max animate-marquee">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8">
            <img src="/assets/trusted-logo/Lebara-logo.svg" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
            <img src="/assets/trusted-logo/logo-onder.png.webp" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Onder" />
            <img src="/assets/trusted-logo/logo-white.png" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Mavedda" />
            <img src="/assets/trusted-logo/Lebara-logo.svg" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
            <img src="/assets/trusted-logo/logo-onder.png.webp" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Onder" />
            <img src="/assets/trusted-logo/logo-white.png" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Mavedda" />
            <img src="/assets/trusted-logo/Lebara-logo.svg" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex items-center gap-16 px-8">
            <img src="/assets/trusted-logo/Lebara-logo.svg" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
            <img src="/assets/trusted-logo/logo-onder.png.webp" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Onder" />
            <img src="/assets/trusted-logo/logo-white.png" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Mavedda" />
            <img src="/assets/trusted-logo/Lebara-logo.svg" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
            <img src="/assets/trusted-logo/logo-onder.png.webp" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Onder" />
            <img src="/assets/trusted-logo/logo-white.png" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Mavedda" />
            <img src="/assets/trusted-logo/Lebara-logo.svg" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Lebara" />
          </div>
        </div>
      </div>
    </section>
  );
};
