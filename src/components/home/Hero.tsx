import React from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/Button';
import fs from 'fs';
import path from 'path';

// Helper to get logos at build time
const getLogos = () => {
  try {
    const logosDir = path.join(process.cwd(), 'public/assets/trusted-logo');
    if (fs.existsSync(logosDir)) {
      const files = fs.readdirSync(logosDir);
      // Ensure we match png, jpg, jpeg, svg, AND webp
      return files.filter(file => /\.(jpe?g|png|webp|svg)(\.webp)?$/i.test(file));
    }
  } catch (error) {
    console.error("Error reading logos directory", error);
  }
  return [];
};

export const Hero = () => {
  const localLogos = getLogos();
  const displayLogos = localLogos.length > 0 
    ? localLogos.map(file => `/assets/trusted-logo/${file}`)
    : [];

  return (
    <section className="relative w-full h-screen flex flex-col justify-start overflow-hidden bg-[#0a0a0a] text-white">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-center text-center px-6 pt-[120px] md:pt-[160px]">
        
        <h1 className="font-heading text-[56px] md:text-[80px] font-bold tracking-tighter leading-[1.05] mb-6 text-white">
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
            {/* Render the list multiple times to guarantee wide screen coverage */}
            {Array(12).fill(displayLogos).flat().map((file, index) => {
              const filename = file.split('/').pop() || 'logo';
              const cleanName = decodeURIComponent(filename.split('.')[0].replace(/^.*?_/, ''));
              return (
                <div key={index} className="mx-8 md:mx-16 flex-shrink-0 flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <img 
                    src={file} 
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
