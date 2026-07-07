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
      return files.filter(file => /\.(jpe?g|png|webp|svg)$/i.test(file));
    }
  } catch (error) {
    console.error("Error reading logos directory", error);
  }
  return [];
};

export const Hero = () => {
  const logos = getLogos();

  // If no image files found, we can optionally use our placeholders, 
  // but for the marquee to work perfectly with images we map them.
  // We duplicate the array to create a seamless infinite loop.
  const displayLogos = logos.length > 0 ? logos : [];

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

      {/* Logos Strip - Overlay at the absolute bottom of the hero */}
      {displayLogos.length > 0 && (
        <div className="absolute z-20 bottom-0 left-0 w-full py-10 overflow-hidden flex items-center">
          <div className="flex w-max animate-marquee hover:pause whitespace-nowrap">
            {/* Render the list twice for a seamless infinite loop */}
            {[...displayLogos, ...displayLogos].map((file, index) => (
              <div key={index} className="mx-8 md:mx-16 flex-shrink-0 flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src={`/assets/trusted-logo/${file}`} 
                  alt={`Trusted by ${file.split('.')[0]}`} 
                  width={120} 
                  height={40} 
                  className="object-contain h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
