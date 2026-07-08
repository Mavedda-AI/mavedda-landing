import SlideButton from './SlideButton';

export default function Hero() {
  const baseItems = [
    { name: "SalutBabe", category: "Sosyal Platform", bg: "bg-bs-pink", id: 1 },
    { name: "GelKurye", category: "E-Ticaret & Lojistik", bg: "bg-bs-blue", id: 2 },
    { name: "IoT Platform", category: "Endüstriyel IoT", bg: "bg-bs-green", id: 3 },
    { name: "Roll Call Sys", category: "Eğitim Teknolojisi", bg: "bg-bs-purple", id: 4 },
    { name: "TFEncryption", category: "Siber Güvenlik", bg: "bg-bs-orange", id: 5 },
    { name: "Kripto Cüzdan", category: "Web3 & Fintech", bg: "bg-bs-yellow", id: 6 },
    { name: "B2B Cloud", category: "Kurumsal Çözümler", bg: "bg-bs-pink", id: 7 },
    { name: "SmartFit AI", category: "Sağlık Teknolojisi", bg: "bg-bs-green", id: 8 },
  ];
  
  const carouselItems = [...baseItems, ...baseItems.map(item => ({ ...item, id: item.id + 10 }))];

  return (
    <section className="relative flex min-h-screen flex-col bg-[#f0f0f0] overflow-hidden pt-[12vh] pb-12">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <div className="flex flex-col w-full px-4 relative z-10 md:max-w-[1200px] md:mx-auto md:px-8">
        {/* Main Heading */}
        <h1 className="text-left text-[48px] leading-[1.05] md:text-[84px] lg:text-[100px] tracking-[-0.04em] font-semibold font-sans max-w-[1000px]">
          <span className="text-[#999999]">Geleceği tasarla. </span>
          <span className="text-[#111111]">Bizimle </span>
          <br className="hidden md:block" />
          <span className="text-[#111111]">geliştir.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 md:mt-8 text-[16px] md:text-[20px] text-[#555555] font-sans max-w-[600px] leading-relaxed tracking-tight">
          Dünya standartlarında uzmanlığımızla, fikirlerinizi milyonlara ulaşan mobil uygulamalara, web platformlarına ve IoT sistemlerine dönüştürüyoruz.
        </p>

        {/* CTA Button */}
        <div className="mt-8 md:mt-10">
          <SlideButton text="Yolculuğa Başla" />
        </div>
      </div>

      {/* 3D Carousel Section */}
      <div 
        className="relative mt-20 md:mt-32 w-full h-[360px] flex justify-center pointer-events-none"
        style={{ 
          perspective: '1200px',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="carousel-track relative w-[260px] h-[300px] origin-center scale-[0.75] md:scale-100">
          {carouselItems.map((item, i) => {
            const angle = (i / carouselItems.length) * 360;
            return (
              <div
                key={item.id}
                className={`absolute inset-0 flex items-center justify-center p-6 rounded-[32px] text-center ${item.bg} shadow-lg`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(690px)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <span className="text-black text-sm font-bold uppercase tracking-wider opacity-90">{item.category}</span>
                  <span className="text-black text-3xl font-black tracking-tight">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce pointer-events-none z-10 text-black">
        <span className="text-sm tracking-widest uppercase mb-2 font-medium">Keşfet</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
