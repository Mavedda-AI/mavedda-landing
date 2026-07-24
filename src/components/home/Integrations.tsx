'use client';

import React from 'react';
import Link from 'next/link';
import {useTranslation} from "@/hooks/useTranslation";

export const Integrations = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-[#f4f4f4] py-32 overflow-hidden border-y border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center gap-12">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-6 max-w-3xl">
          <div className="text-gray-500 font-semibold uppercase tracking-wide text-sm">{t('integrations.badge')}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {t('integrations.title1')}<br/>{t('integrations.title2')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            {t('integrations.desc')}
          </p>
        </div>

        {/* Visual - Node Graph */}
        <div className="w-full max-w-5xl mx-auto my-16 relative h-[500px] md:h-[600px]">
          
          {/* SVG Dotted Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {[
              { x: 25, y: 25 },
              { x: 40, y: 15 },
              { x: 20, y: 65 },
              { x: 10, y: 45 },
              { x: 35, y: 80 },
              { x: 60, y: 20 },
              { x: 80, y: 30 },
              { x: 85, y: 60 },
              { x: 70, y: 80 },
              { x: 55, y: 65 },
              { x: 45, y: 88 } // Flutter
            ].map((pos, i) => (
              <line 
                key={i} 
                x1="50%" 
                y1="50%" 
                x2={`${pos.x}%`} 
                y2={`${pos.y}%`} 
                stroke="#d1d5db" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
              />
            ))}
          </svg>

          {/* Central Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Subtle glow effect behind */}
            <div className="absolute inset-0 rounded-full bg-[#7800ff] blur-[30px] opacity-20 animate-pulse"></div>
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-xl border border-gray-100 z-10">
              <img src="/assets/logo/logo_mavedda_dd.svg" alt="Mavedda Core" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            </div>
          </div>

          {/* Orbiting Nodes */}
          {[
            { id: 1, name: 'Java', type: 'small', x: 25, y: 25, url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
            { id: 2, name: 'Spring', type: 'small', x: 40, y: 15, url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
            { id: 3, name: 'AWS', type: 'large', color: 'bg-[#ff9900]', x: 20, y: 65, url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { id: 4, name: 'Terraform', type: 'large', color: 'bg-[#5c4ee5]', x: 10, y: 45, url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg' },
            { id: 5, name: 'Docker', type: 'small', x: 35, y: 80, url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
            { id: 6, name: 'Node.js', type: 'small', x: 60, y: 20, url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
            { id: 7, name: 'JavaScript', type: 'large', color: 'bg-[#f7df1e]', x: 80, y: 30, url: 'https://cdn.simpleicons.org/javascript/000000' },
            { id: 8, name: 'App Store', type: 'small', x: 85, y: 60, url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg' },
            { id: 9, name: 'Play Store', type: 'large', color: 'bg-[#ff007f]', x: 70, y: 80, url: 'https://cdn.simpleicons.org/googleplay/ffffff' },
            { id: 10, name: 'App Gallery', type: 'small', x: 55, y: 65, url: 'https://cdn.simpleicons.org/huawei/000000' },
            { id: 11, name: 'Flutter', type: 'small', x: 45, y: 88, url: 'https://cdn.simpleicons.org/flutter/000000' },
          ].map((node) => (
            <div 
              key={node.id} 
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 ${node.type === 'large' ? `${node.color} w-28 h-28 md:w-32 md:h-32 text-white` : 'bg-white w-16 h-16 md:w-20 md:h-20 border border-gray-100'}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <img 
                src={node.url} 
                alt={node.name} 
                className={`object-contain ${node.type === 'large' ? 'w-10 h-10 md:w-12 md:h-12 brightness-0 invert' : 'w-8 h-8 md:w-10 md:h-10'} ${node.id === 7 ? 'brightness-0 invert-0' : ''}`} // Keep JS black text if background is yellow
              />
              {node.type === 'large' && (
                <span className={`text-[10px] md:text-xs font-semibold mt-2 ${node.id === 7 ? 'text-black' : 'text-white'}`}>{node.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Action */}
        <div>
          <Link href="/team" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-black hover:shadow-lg transition-all">
            {t('integrations.button')}
          </Link>
        </div>

      </div>
    </section>
  );
};
