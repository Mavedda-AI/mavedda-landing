'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';

function TechCard({ tech }: { tech: any }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative flex-1 rounded-[40px] bg-[#050505] border border-white/5 overflow-hidden flex flex-col items-center pt-16 md:pt-24 text-center min-h-[500px] md:min-h-[600px] group cursor-pointer transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
    >
      {/* Dynamic Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 rounded-[40px] z-20"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="px-6 md:px-8 z-30 relative w-full text-center">
        <h3 className="font-serif text-[40px] lg:text-[48px] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 font-normal mb-3 md:mb-4 tracking-tight drop-shadow-sm">
          {tech.name}
        </h3>
        <p className="text-[#666666] text-[16px] md:text-[17px] w-full mx-auto leading-relaxed group-hover:text-white/80 transition-colors duration-700">
          {tech.description}
        </p>
      </div>
      
      <div className="mt-6 md:mt-8 w-full h-[220px] md:h-[260px] relative opacity-70 group-hover:opacity-100 transition-all duration-[1200ms] ease-out">
        {/* Seamless Blend Masks */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #050505 0%, transparent 20%, transparent 80%, #050505 100%)'
          }}
        />
        
        {/* Ambient Glow that activates on hover */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-[1500ms] z-0"></div>
        
        <Image
          src={tech.image}
          alt={tech.name}
          fill
          className="object-contain object-bottom mix-blend-screen scale-[1.1] group-hover:scale-[1.15] transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-10 relative"
        />
      </div>
    </div>
  );
}

export default function Technologies() {
  const techs = [
    {
      name: "Vision",
      description: "Kullanıcı yaşam boyu değeri (LTV) ve davranış tahminleme motoru.",
      image: "/images/tech/vision.jpg",
    },
    {
      name: "Aether",
      description: "Çok kanallı, sıfır gecikmeli global ödeme yönetimi ve entegrasyon altyapısı.",
      image: "/images/tech/aether.jpg",
    },
    {
      name: "Pulse",
      description: "Yüksek hassasiyetli pazarlama ilişkilendirme (attribution) ve veri analitiği ağı.",
      image: "/images/tech/pulse.jpg",
    },
    {
      name: "Fortis",
      description: "Çoklu varlık (multi-asset) güvenli erişim kontrolü ve IAM mimarisi.",
      image: "/images/tech/fortis.jpg",
    },
    {
      name: "Matrix",
      description: "Doğrulanmış yüksek dönüşümlü UX kalıplarının otomatik yayılım ağı.",
      image: "/images/tech/matrix.jpg",
    },
    {
      name: "Nova",
      description: "Yüksek ölçekli eşzamanlı veri akışı ve işleme motoru.",
      image: "/images/tech/nova.jpg",
    }
  ];

  return (
    <section className="w-full bg-[#111111] py-20 md:py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-10 text-center text-[36px] md:text-[64px] font-medium tracking-tight text-white md:mb-20">
          Özel Teknolojilerimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {techs.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </div>

        {/* And many more divider */}
        <div className="mt-16 md:mt-24 flex items-center justify-center gap-6 md:gap-8">
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-white/20"></div>
          <span className="text-[20px] md:text-[24px] font-medium tracking-tight text-white/40">
            Ve çok daha fazlası
          </span>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-white/20"></div>
        </div>
      </div>
    </section>
  );
}
