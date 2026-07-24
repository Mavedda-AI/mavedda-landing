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

        {/* Visual - Animated Marquee */}
        <div className="w-full max-w-5xl mx-auto my-8 overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 40s linear infinite;
            }
          `}</style>
          
          <div className="flex flex-col gap-8">
            {/* Row 1 */}
            <div className="flex w-[200%] animate-marquee">
              {[
                { name: 'Java', url: 'https://cdn.simpleicons.org/java' },
                { name: 'Spring', url: 'https://cdn.simpleicons.org/spring' },
                { name: 'JavaScript', url: 'https://cdn.simpleicons.org/javascript' },
                { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs' },
                { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript' },
                { name: 'React', url: 'https://cdn.simpleicons.org/react' },
                { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs' },
                { name: 'Python', url: 'https://cdn.simpleicons.org/python' },
                { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql' },
                // Duplicate for seamless loop
                { name: 'Java', url: 'https://cdn.simpleicons.org/java' },
                { name: 'Spring', url: 'https://cdn.simpleicons.org/spring' },
                { name: 'JavaScript', url: 'https://cdn.simpleicons.org/javascript' },
                { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs' },
                { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript' },
                { name: 'React', url: 'https://cdn.simpleicons.org/react' },
                { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs' },
                { name: 'Python', url: 'https://cdn.simpleicons.org/python' },
                { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql' }
              ].map((tech, i) => (
                <div key={i} className="flex-1 flex items-center justify-center px-4 md:px-8">
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1">
                      <img src={tech.url} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex w-[200%] animate-marquee-reverse">
              {[
                { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonaws' },
                { name: 'Terraform', url: 'https://cdn.simpleicons.org/terraform' },
                { name: 'Docker', url: 'https://cdn.simpleicons.org/docker' },
                { name: 'Kubernetes', url: 'https://cdn.simpleicons.org/kubernetes' },
                { name: 'App Store', url: 'https://cdn.simpleicons.org/apple' },
                { name: 'Play Store', url: 'https://cdn.simpleicons.org/googleplay' },
                { name: 'App Gallery', url: 'https://cdn.simpleicons.org/huawei' },
                { name: 'Redis', url: 'https://cdn.simpleicons.org/redis' },
                { name: 'Linux', url: 'https://cdn.simpleicons.org/linux' },
                // Duplicate for seamless loop
                { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonaws' },
                { name: 'Terraform', url: 'https://cdn.simpleicons.org/terraform' },
                { name: 'Docker', url: 'https://cdn.simpleicons.org/docker' },
                { name: 'Kubernetes', url: 'https://cdn.simpleicons.org/kubernetes' },
                { name: 'App Store', url: 'https://cdn.simpleicons.org/apple' },
                { name: 'Play Store', url: 'https://cdn.simpleicons.org/googleplay' },
                { name: 'App Gallery', url: 'https://cdn.simpleicons.org/huawei' },
                { name: 'Redis', url: 'https://cdn.simpleicons.org/redis' },
                { name: 'Linux', url: 'https://cdn.simpleicons.org/linux' }
              ].map((tech, i) => (
                <div key={i} className="flex-1 flex items-center justify-center px-4 md:px-8">
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1">
                      <img src={tech.url} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
