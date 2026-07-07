import React from 'react';
import Link from 'next/link';

const INDUSTRIES = [
  { name: 'Financial Services', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebeb7b8eb1e055d094a_industry-finance.svg', href: '/industries/financial-services' },
  { name: 'Healthcare', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebe4c63a40e833e94d2_industry-med.svg', href: '/industries/life-sciences' },
  { name: 'Retail', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebe1794be61bfd122d9_industry-retail.svg', href: '/industries/retail' },
  { name: 'Manufacturing', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebe643eedcede3e82e6_industry-industrial.svg', href: '/industries/industrial' },
  { name: 'Real Estate', icon: 'https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/6a09bebe772e43a7ac370d24_industry-realestate.svg', href: '/industries/real-estate' },
];

const METRICS = [
  { value: '40', unit: '%', direction: 'lower', desc: 'record storage and retrieval cost', industry: 'Global bank', href: '/customer-stories/ai-native-document-processing-solution' },
  { value: '1B', unit: '+', prefix: '$', direction: 'growth', desc: 'capacity unlocked without adding headcount', industry: 'Leading CRE firm', href: '/customer-stories/ai-driven-automation-solution' },
  { value: '30', unit: '%', direction: 'reduction', desc: 'in supply-driven stock outs', industry: 'F500 Manufacturer', href: '/customer-stories/supplier-commitment-intelligence' },
];

const IMPACT_AREAS = [
  { title: 'Unstructured Data', desc: 'where context and accuracy are critical.' },
  { title: 'Cross-system workflows', desc: 'spanning multiple systems, CRMs, data lakes, and proprietary tools.' },
  { title: 'Fragmented data', desc: 'structured and unstructured, across diverse internal and external sources.' },
  { title: 'Operational experiences', desc: 'that eliminate complexity and meet teams where they work.' },
];

export const MetricsGrid = () => {
  return (
    <section className="w-full bg-[#fafafa] py-24 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
        
        {/* Top Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Proven outcomes across industries</h2>
          <p className="text-lg text-gray-600">Every industry operates differently. Unframe delivers AI for the workflows and systems that matter most to you.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METRICS.map((metric, i) => (
            <Link key={i} href={metric.href} className="flex flex-col justify-between p-8 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors hover:shadow-md min-h-[280px]">
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2 text-gray-900">
                  {metric.prefix && <span className="text-3xl font-medium">{metric.prefix}</span>}
                  <h3 className="text-6xl md:text-7xl font-bold tracking-tighter">{metric.value}</h3>
                  {metric.unit && <span className="text-3xl font-medium">{metric.unit}</span>}
                  <span className="text-lg text-gray-500 font-medium ml-2">{metric.direction}</span>
                </div>
                <p className="text-xl text-gray-700 font-medium">{metric.desc}</p>
              </div>
              
              <div className="flex flex-col gap-3 mt-8">
                <div className="h-1 w-full bg-gradient-to-r from-[#00c5ea] via-[#7800ff] to-[#ff9600] rounded-full"></div>
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{metric.industry}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-1/4">
            <h2 className="text-2xl font-bold text-gray-900">Where AI makes the biggest impact</h2>
          </div>
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_AREAS.map((area, i) => (
              <div key={i} className="flex flex-col gap-2">
                <strong className="text-gray-900 text-lg">{area.title}</strong>
                <p className="text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
