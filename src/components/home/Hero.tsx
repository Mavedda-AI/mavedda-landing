import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full bg-[#111] overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
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
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <a href="/demo" className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Let&#39;s connect
          </a>
          <a href="/customers" className="bg-transparent text-white border border-gray-600 hover:border-gray-400 hover:bg-white/5 px-8 py-3 rounded-full font-semibold transition-all">
            See our customers
          </a>
        </div>
      </div>

      {/* Hero Background Image with glowing cube */}
      <div className="relative w-full max-w-7xl mx-auto mt-[-100px] md:mt-[-150px] lg:mt-[-250px] z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10 h-full w-full"></div>
        <img 
          src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69f47187219545bf5410b5e4_bg-hero-home-2c.webp" 
          alt="Glowing Cube on Mountains" 
          className="w-full object-cover opacity-80"
        />
      </div>

      {/* Marquee Section */}
      <div className="relative w-full border-t border-gray-800 bg-[#111] py-10 overflow-hidden">
        {/* Gradient overlays for marquee */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee track */}
        <div className="flex w-max animate-marquee">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8">
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a3d57193f68110f0bde37f0_Q4%20Designs%20(1).png" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69de8fef8dc2b7910b55870f_freed-people.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69d953cca32ab48f84d91b25_Avison%20Young.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69d9535c8240ca3015040341_Acora.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd88fe5e73969379501382_MasterTel.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd63f9981fc259848e19aa_DG.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c6f49ef28bc2e597483_Nzz.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex items-center gap-16 px-8">
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a3d57193f68110f0bde37f0_Q4%20Designs%20(1).png" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69de8fef8dc2b7910b55870f_freed-people.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69d953cca32ab48f84d91b25_Avison%20Young.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69d9535c8240ca3015040341_Acora.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd88fe5e73969379501382_MasterTel.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd63f9981fc259848e19aa_DG.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            <img src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c6f49ef28bc2e597483_Nzz.avif" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
