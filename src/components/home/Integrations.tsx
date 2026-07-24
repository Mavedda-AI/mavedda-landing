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

        {/* Visual - Technology Grid */}
        <div className="w-full max-w-5xl mx-auto my-12">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { name: 'Java', url: 'https://cdn.simpleicons.org/java/666666' },
              { name: 'Spring', url: 'https://cdn.simpleicons.org/spring/666666' },
              { name: 'JavaScript', url: 'https://cdn.simpleicons.org/javascript/666666' },
              { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/666666' },
              { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/666666' },
              { name: 'React', url: 'https://cdn.simpleicons.org/react/666666' },
              { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/666666' },
              { name: 'Python', url: 'https://cdn.simpleicons.org/python/666666' },
              { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/666666' },
              { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonaws/666666' },
              { name: 'Terraform', url: 'https://cdn.simpleicons.org/terraform/666666' },
              { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/666666' },
              { name: 'Kubernetes', url: 'https://cdn.simpleicons.org/kubernetes/666666' },
              { name: 'App Store', url: 'https://cdn.simpleicons.org/apple/666666' },
              { name: 'Play Store', url: 'https://cdn.simpleicons.org/googleplay/666666' },
              { name: 'App Gallery', url: 'https://cdn.simpleicons.org/huawei/666666' },
              { name: 'Redis', url: 'https://cdn.simpleicons.org/redis/666666' },
              { name: 'Linux', url: 'https://cdn.simpleicons.org/linux/666666' }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 w-24 h-24 md:w-28 md:h-28 group">
                <img 
                  src={tech.url} 
                  alt={tech.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
                />
                <span className="text-[10px] md:text-xs text-gray-500 mt-2 font-medium group-hover:text-gray-900 transition-colors text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
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
