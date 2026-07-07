import React from 'react';
import {Button} from '@/components/ui/Button';

export const CompoundingAdvantage = () => {
  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Content: Text and Image */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4">
              <div className="text-gray-500 font-semibold uppercase tracking-wide text-sm">The compounding advantage</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Value compounds with <span className="bg-gradient-to-r from-[#00c5ea] via-[#7800ff] to-[#ff9600] text-transparent bg-clip-text">every use case</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Most AI tools deliver diminishing returns. Unframe delivers compounding ones. Your first solution goes live in days. By your fifth, deployment takes hours.
            </p>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 shrink-0 mt-1">
                <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 24C18.8513 24 24 18.8513 24 12.5C24 6.14873 18.8513 1 12.5 1C6.14873 1 1 6.14873 1 12.5C1 18.8513 6.14873 24 12.5 24Z" fill="white" stroke="#E1E1E1" strokeWidth="2"/>
                  <path d="M17.5 9.5L10.625 16.375L7.5 13.25" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-lg text-gray-700">
                Incremental solutions take less time, and perform better because the foundation keeps getting stronger.
              </p>
            </div>

            <div className="mt-8 relative p-6 bg-gray-50 border-l-4 border-[#00c5ea] rounded-r-xl">
              <p className="text-lg font-bold text-gray-900">
                Why do 96% of customers expand to more and more use cases? Because it works -without locking them in.
              </p>
            </div>
          </div>

          {/* Visual Side */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] aspect-[4/3]">
              <img 
                src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69f3e6a93fbdd9b364232a20_1613b8719c5ff4b0c1a3a95876eaa3e1_Value%20compounds%20with%20every%20use%20case.svg" 
                alt="Value compounds with every use case diagram" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* Pricing Table Section */}
        <div className="mt-32 pt-16 border-t border-gray-100">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Flexible plans for AI builders</h3>
            <p className="text-gray-500 mt-6 text-lg md:text-xl">
              From integrating robust API models to fully custom turnkey AI software, we scale with your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Starter Plan */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-2">API Access</h4>
              <p className="text-gray-500 text-sm mb-6 h-10">Essential API access to our pre-trained AI models.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">$499</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Access to base AI models
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Up to 100,000 requests/mo
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Standard API documentation
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Community support
                </li>
              </ul>
              <Button className="w-full bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 py-6 rounded-xl font-semibold">
                Get Started
              </Button>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="flex flex-col bg-black rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00c5ea] to-[#7800ff] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                Most Popular
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Custom Model</h4>
              <p className="text-gray-400 text-sm mb-6 h-10">Fine-tuned models tailored to your specific operations.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$2,499</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-[#00c5ea] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Custom fine-tuning on your data
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-[#00c5ea] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Unlimited requests & usage
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-[#00c5ea] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Dedicated inference compute
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-[#00c5ea] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Priority technical support
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-gray-200 py-6 rounded-xl font-semibold">
                Start Building
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Turnkey System</h4>
              <p className="text-gray-500 text-sm mb-6 h-10">End-to-end custom software and AI integration.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Custom</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Full stack web & mobile development
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  On-premise or VPC deployment
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Full intellectual property transfer
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  24/7 Enterprise SLA
                </li>
              </ul>
              <Button className="w-full bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 py-6 rounded-xl font-semibold">
                Contact Sales
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
