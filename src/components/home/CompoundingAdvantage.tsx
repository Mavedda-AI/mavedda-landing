import React from 'react';

export const CompoundingAdvantage = () => {
  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
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
      </div>
    </section>
  );
};
