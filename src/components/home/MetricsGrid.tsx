import React from 'react';
import Link from 'next/link';
import {useTranslation} from "@/hooks/useTranslation";

const INDUSTRIES = [
  { name: 'Financial Services', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebeb7b8eb1e055d094a_industry-finance.svg', href: '/industries/financial-services' },
  { name: 'Healthcare', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebe4c63a40e833e94d2_industry-med.svg', href: '/industries/life-sciences' },
  { name: 'Retail', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebe1794be61bfd122d9_industry-retail.svg', href: '/industries/retail' },
  { name: 'Manufacturing', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebe643eedcede3e82e6_industry-industrial.svg', href: '/industries/industrial' },
  { name: 'Real Estate', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebe772e43a7ac370d24_industry-realestate.svg', href: '/industries/real-estate' },
];

export const MetricsGrid = () => {
  const { t } = useTranslation();

  const METRICS = [
    { value: t('metrics.item1.value'), label: t('metrics.item1.label'), desc: t('metrics.item1.desc') },
    { value: t('metrics.item2.value'), label: t('metrics.item2.label'), desc: t('metrics.item2.desc') },
    { value: t('metrics.item3.value'), label: t('metrics.item3.label'), desc: t('metrics.item3.desc') },
    { value: t('metrics.item4.value'), label: t('metrics.item4.label'), desc: t('metrics.item4.desc') }
  ];

  return (
    <section className="w-full bg-[#fafafa] py-24 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
        
        {/* Top Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{t('metrics.title')}</h2>
        </div>

        {/* Industries */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <Link key={i} href={ind.href} className="group flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors hover:shadow-sm">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2 group-hover:bg-gray-100 transition-colors">
                <img src={ind.icon} alt={ind.name} className="w-full h-full object-contain" />
              </div>
              <div className="font-semibold text-gray-900">{ind.name}</div>
            </Link>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, i) => (
            <div key={i} className="flex flex-col justify-between p-8 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors hover:shadow-md min-h-[220px]">
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2 text-gray-900">
                  <h3 className="text-5xl md:text-6xl font-bold tracking-tighter">{metric.value}</h3>
                </div>
                <div className="text-lg font-bold text-gray-900 mt-2">{metric.label}</div>
                <p className="text-md text-gray-600 mt-1">{metric.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Spacer */}
        <div className="hidden"></div>

      </div>
    </section>
  );
};
