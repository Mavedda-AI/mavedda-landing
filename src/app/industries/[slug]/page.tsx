import React from 'react';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import Link from 'next/link';

export default function IndustryPage({ params }: { params: { slug: string } }) {
  // Convert slug to a more readable format
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="flex min-h-screen flex-col w-full bg-black">
      <Header />
      <section className="relative w-full min-h-[70dvh] bg-black overflow-x-hidden pt-40 lg:pt-48 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl text-balance">
            <span className="bg-gradient-to-r from-[#00c5ea] to-[#7800ff] text-transparent bg-clip-text">
              {title}
            </span>
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-3xl text-balance">
            Discover our specialized AI and turnkey software solutions designed for the {title} industry.
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-20">
            <Link href="/demo" className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Contact Sales
            </Link>
            <Link href="/" className="bg-transparent text-white border border-gray-600 hover:border-gray-400 hover:bg-white/5 px-8 py-3 rounded-full font-semibold transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
