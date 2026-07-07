import React from 'react';
import Link from 'next/link';

const PLATFORM_LAYERS = [
  { title: 'Agent Orchestrator', desc: 'Coordinated execution with built-in guardrails and observability' },
  { title: 'Knowledge Fabric', desc: 'Fragmented enterprise data transformed into AI-ready context' },
  { title: 'AI-Native Data Warehouse', desc: 'A continuously synchronized foundation that unifies enterprise data across systems, applications, and APIs' },
  { title: 'Building Blocks', desc: 'Feature-rich modular building blocks at the core of mission-critical AI' },
];

export const PlatformOverview = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <div className="text-[#00c5ea] font-semibold tracking-wide uppercase text-sm">Unframe AI OS</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The open platform powering every AI win</h2>
          <p className="text-lg md:text-xl text-gray-400 mt-2">
            Every solution runs on Unframe's OS purpose-built to deliver production-grade AI securely, at scale, and alongside your existing AI program.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Side (Lottie / Image placeholder) */}
          <div className="flex-1 w-full aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 flex items-center justify-center relative overflow-hidden shadow-2xl">
            {/* Ambient glows to mimic the visual */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7800ff] via-transparent to-transparent blur-3xl"></div>
            <div className="absolute w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-96 h-96 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="relative z-10 text-gray-500 font-mono text-sm">[Platform Visualization]</div>
          </div>

          {/* Layers Side */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            {PLATFORM_LAYERS.map((layer, i) => (
              <div key={i} className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#00c5ea] transition-colors">{layer.title}</h3>
                <p className="text-gray-400">{layer.desc}</p>
              </div>
            ))}
            
            <div className="pt-4">
              <Link href="/platform" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-transparent border border-white/20 rounded-full hover:bg-white/10 transition-all">
                Explore the Platform
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
