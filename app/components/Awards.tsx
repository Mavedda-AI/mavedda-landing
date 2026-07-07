import React from "react";

export default function Awards() {
  return (
    <section className="w-full bg-[#d4ff8f] py-20 md:py-32 text-black flex flex-col items-center">
      
      {/* Agency Metrics Section (Replacing fake certificates) */}
      <div className="flex flex-col items-center mb-16 md:mb-24">
        {/* Top Metric Cards */}
        <div className="flex -space-x-4 mb-8">
          {[
            { value: "15+", label: "Başarılı Proje" },
            { value: "100K+", label: "Aktif Kullanıcı" },
            { value: "%98", label: "Memnuniyet" }
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`w-32 h-40 rounded-xl flex flex-col items-center justify-center p-4 text-center shadow-xl transform ${i === 1 ? '-translate-y-4 z-20' : 'z-10'}`}
              style={{
                background: 'linear-gradient(135deg, #2a3a8c 0%, #1a255c 100%)',
                color: 'white'
              }}
            >
              <div className="text-[#d4ff8f] font-black text-3xl md:text-4xl leading-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold opacity-90 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
        <h3 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-16 text-center">
          Küresel Çapta Yarattığımız Etki
        </h3>

        {/* Bottom Metric Cards */}
        <div className="flex -space-x-2 mb-8">
          {[
            { value: "Uçtan Uca", label: "Tasarım" },
            { value: "Sıfır", label: "Gecikme" },
            { value: "360°", label: "Ölçekleme" }
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`w-28 h-32 rounded-xl flex flex-col items-center justify-center p-3 text-center shadow-lg transform ${i === 1 ? '-translate-y-2 z-20' : 'z-10'} ${i === 0 ? '-rotate-3' : i === 2 ? 'rotate-3' : ''}`}
              style={{
                background: 'linear-gradient(135deg, #2a3a8c 0%, #1a255c 100%)',
                color: 'white'
              }}
            >
              <div className="text-[#d4ff8f] font-black text-xl leading-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
        <h3 className="text-[32px] md:text-[40px] font-medium tracking-tight text-center">
          Kusursuz Ürün Standartları
        </h3>
      </div>

      {/* Glassdoor Review Section Container */}
      <div className="w-full max-w-[800px] px-4 md:px-6 relative z-0 flex flex-col items-center">
        
        {/* Massive Fading White Background */}
        <div 
          className="absolute top-0 left-4 right-4 md:left-6 md:right-6 h-[600px] bg-white rounded-t-[40px] z-0"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 w-full flex flex-col items-center pt-16 md:pt-24">
          <div className="flex items-start justify-center mb-4">
            <span className="text-[120px] md:text-[180px] font-medium leading-[0.8] tracking-[-0.05em]">4.9</span>
            <span className="text-[40px] md:text-[60px] font-medium mt-2 md:mt-4 ml-1">/5</span>
          </div>
          <div className="text-[50px] md:text-[70px] font-black tracking-[-0.08em] leading-none mb-12 md:mb-20 transform scale-y-110">
            'MAVEDDA'
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-10 w-full px-4 mb-24">
            {/* First Quote (Inside White Pill with Shadow) */}
            <div className="bg-white rounded-[40px] px-8 py-8 md:py-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center max-w-[500px] w-full">
              <div className="flex gap-2 text-[#00a82d] mb-4">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[20px] md:text-[24px] font-bold tracking-tight leading-tight text-center text-black">
                "Her açıdan ideal bir teknoloji şirketi."
              </p>
            </div>

            {/* Second Quote (Text on Green Background) */}
            <div className="flex flex-col items-center opacity-70 mt-2">
              <div className="flex gap-1 text-[#00a82d] mb-3">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[18px] md:text-[20px] font-bold tracking-tight text-[#1a3a1a]">
                "Hayatımın fırsatı."
              </p>
            </div>

            {/* Third Quote (Faded Text on Green Background) */}
            <div className="flex flex-col items-center opacity-30 mt-2">
              <p className="text-[18px] md:text-[20px] font-bold tracking-tight text-[#1a3a1a]">
                "Her alanda olağanüstü yetenekler."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="-mt-20 z-10 relative">
        <a 
          href="/kariyer"
          className="inline-block bg-black text-white px-10 py-[18px] rounded-[100px] text-[18px] md:text-[22px] font-medium border-[3px] border-black hover:bg-transparent hover:text-black focus:outline-none outline-none focus:ring-0 transition-all duration-300 shadow-2xl whitespace-nowrap"
        >
          Açık pozisyonları gör ve başvur
        </a>
      </div>
      
    </section>
  );
}
