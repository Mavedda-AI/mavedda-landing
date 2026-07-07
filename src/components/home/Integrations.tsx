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

        {/* Visual */}
        <div className="w-full max-w-4xl mx-auto my-4">
          <img 
            src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69f4da0a66a3c7c18ec0d702_gfx-integrations4.svg" 
            alt="Infographic illustrating a centralized integration platform" 
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* Action */}
        <div>
          <Link href="/integrations" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-black hover:shadow-lg transition-all">
            {t('integrations.button')}
          </Link>
        </div>

      </div>
    </section>
  );
};
