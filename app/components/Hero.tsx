export default function Hero() {
  const baseItems = [
    { name: "SalutBabe", bg: "bg-bs-pink", id: 1 },
    { name: "Kripto App", bg: "bg-bs-blue", id: 2 },
    { name: "SmartFit AI", bg: "bg-bs-green", id: 3 },
    { name: "B2B Cloud", bg: "bg-bs-purple", id: 4 },
    { name: "Finans Portalı", bg: "bg-bs-orange", id: 5 },
    { name: "Oyun Stüdyosu", bg: "bg-bs-yellow", id: 6 },
  ];
  
  const carouselItems = [...baseItems, ...baseItems.map(item => ({ ...item, id: item.id + 10 }))];

  return (
    <section className="relative flex min-h-screen flex-col bg-black overflow-hidden pt-[18vh]">
      {/* Ensure animation works by injecting styles directly */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spinCarousel {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
        .carousel-track {
          animation: spinCarousel 40s linear infinite;
          transform-style: preserve-3d;
        }
      `}} />

      <div className="flex flex-col items-center justify-start w-full relative z-10">
        <h1 className="px-4 text-center text-[38px] leading-[1.05] text-white md:px-0 md:text-[58px] lg:text-[64px] tracking-tight font-medium">
          Geleceğin <br />
          teknolojilerini <br />
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4">
            <em className="font-serif tracking-tighter text-[#72E5FF] italic text-[1.25em] font-light">tasarlıyor</em>
            <span>ve</span>
            <em className="font-serif tracking-tighter text-[#D3EFAB] italic text-[1.25em] font-light">geliştiriyoruz</em>
          </div>
        </h1>
      </div>

      {/* 3D Carousel Section */}
      <div 
        className="absolute bottom-0 md:-bottom-20 left-0 right-0 h-[400px] md:h-[500px] flex justify-center pointer-events-none"
        style={{ 
          perspective: '1000px',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="carousel-track relative w-[280px] h-[340px] md:w-[380px] md:h-[400px] origin-center mt-10 md:mt-0 scale-[0.8] md:scale-100">
          {carouselItems.map((item, i) => {
            const angle = (i / carouselItems.length) * 360;
            return (
              <div
                key={item.id}
                className={`absolute inset-0 flex items-center justify-center p-8 rounded-[32px] md:rounded-[40px] text-4xl md:text-5xl font-bold tracking-tight text-black text-center ${item.bg}`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(700px)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <div className="relative z-10">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce pointer-events-none z-10">
        <span className="text-sm tracking-widest uppercase mb-2">Keşfet</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
