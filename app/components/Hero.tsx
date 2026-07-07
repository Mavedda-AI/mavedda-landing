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
    <section className="relative flex min-h-screen flex-col bg-black overflow-hidden pt-[18vh] pb-12">
      <div className="flex flex-col items-center justify-start w-full relative z-10">
        <h1 className="px-4 text-center text-[38px] leading-[1.05] text-white md:px-0 md:text-[58px] lg:text-[64px] tracking-tight font-medium">
          Geleceğin <br />
          teknolojilerini <br />
          <div className="mt-4 flex flex-wrap items-baseline justify-center gap-x-3 md:gap-x-4">
            <em className="font-serif tracking-tighter text-[#72E5FF] italic text-[1.1em] font-light">tasarlıyor</em>
            <span>ve</span>
            <em className="font-serif tracking-tighter text-[#D3EFAB] italic text-[1.1em] font-light">geliştiriyoruz</em>
          </div>
        </h1>
      </div>

      {/* 3D Carousel Section */}
      <div 
        className="relative mt-24 md:mt-40 w-full h-[360px] flex justify-center pointer-events-none"
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
                className={`absolute inset-0 flex items-center justify-center p-6 rounded-[32px] text-center ${item.bg}`}
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
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce pointer-events-none z-10">
        <span className="text-sm tracking-widest uppercase mb-2">Keşfet</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
