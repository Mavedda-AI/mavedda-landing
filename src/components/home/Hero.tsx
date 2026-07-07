import React from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/Button';

const EXTERNAL_LOGOS = [
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a3d57193f68110f0bde37f0_Q4%20Designs%20(1).png",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69de8fef8dc2b7910b55870f_freed-people.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69d953cca32ab48f84d91b25_Avison%20Young.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69d9535c8240ca3015040341_Acora.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd88fe5e73969379501382_MasterTel.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd63f9981fc259848e19aa_DG.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c6f49ef28bc2e597483_Nzz.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bc2b8dbd81a37afa88634f_Cushman.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c8a734dc85c8e7ef63e_Climb.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c906794dd4c7691bcb9_AST.avif",
  "https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c9545d050ae54e9713f_Armis.avif"
];

export const Hero = () => {
  const displayLogos = EXTERNAL_LOGOS;

  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-black text-white pt-32">
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
      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-center justify-start text-center px-6 pt-24 md:pt-36 flex-1">
        
        <h1 className="font-heading text-5xl md:text-[80px] font-bold tracking-tighter leading-[1.05] mb-8 text-white">
          Turn your most critical<br/>operations AI-native
        </h1>
        
        <p className="text-xl md:text-2xl font-semibold mb-8 text-white">
          Managed AI transformation tailored to how your enterprise operates
        </p>

        <p className="text-sm md:text-base text-white/90 font-medium mb-10 tracking-wide">
          No upfront cost. No FDE required. Full agent governance.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="primary" size="lg" className="min-w-[160px] bg-white text-black hover:bg-gray-100 rounded-full font-semibold">
            Let&apos;s connect
          </Button>
          <Button variant="outline" size="lg" className="min-w-[160px] border-[#444] text-white hover:bg-white/5 rounded-full font-semibold">
            See our customers
          </Button>
        </div>
      </div>

      {/* Logos Strip - Overlay at the absolute bottom of the hero */}
      {displayLogos.length > 0 && (
        <div className="absolute z-20 bottom-0 left-0 w-full py-10 overflow-hidden flex items-center">
          <div className="flex w-max animate-marquee hover:pause whitespace-nowrap">
            {/* Render the list twice for a seamless infinite loop */}
            {[...displayLogos, ...displayLogos].map((url, index) => {
              const filename = url.split('/').pop() || 'logo';
              const cleanName = decodeURIComponent(filename.split('.')[0].replace(/^.*?_/, ''));
              return (
                <div key={index} className="mx-8 md:mx-16 flex-shrink-0 flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <img 
                    src={url} 
                    alt={`Trusted by ${cleanName}`} 
                    className="object-contain h-10 w-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
