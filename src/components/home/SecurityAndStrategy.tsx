import React from 'react';
import Link from 'next/link';
import {useTranslation} from "@/hooks/useTranslation";

export const SecuritySection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#0a0a0a]">
      {/* Security Section */}
      <section className="w-full py-32 overflow-hidden border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Visual Side */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-80 mix-blend-screen drop-shadow-[0_0_50px_rgba(120,0,255,0.4)]">
                <img 
                  src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69fa69412396e66e3bc18544_lock%201.svg" 
                  alt="Enterprise Security Lock" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4">
                <div className="text-[#00c5ea] font-semibold uppercase tracking-wide text-sm">{t('security.badge')}</div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  {t('security.title1')} <span className="text-[#00c5ea]">{t('security.title2')}</span>
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                {t('security.desc')}
              </p>

              <div>
                <Link href="/security" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 hover:shadow-lg transition-all mt-4">
                  {t('security.button')}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export const StrategySection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#0a0a0a]">
      {/* AI Strategy Section */}
      <section className="w-full py-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {t('strategy.title1')}<br/>
            <span className="bg-gradient-to-r from-[#00c5ea] via-[#7800ff] to-[#ff9600] text-transparent bg-clip-text">{t('strategy.title2')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mt-4">
            {t('strategy.desc')}
          </p>
        </div>
      </section>
    </div>
  );
};
