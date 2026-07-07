import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    // --- Orijinal Projeler ---
    {
      name: "SalutBabe",
      category: "Mobil Uygulama",
      colorClass: "bg-bs-pink",
      shadowColor: "#FFE3E3",
      date: "2024",
      image: "/images/projects/salutbabe-v3.jpg",
      bullets: [
        "Sıfırdan Native iOS ve Android mimarisi",
        "Karmaşık pazar yeri operasyonlarının dijitalleşmesi"
      ]
    },
    {
      name: "Fintech App",
      category: "Web3 Cüzdan",
      colorClass: "bg-bs-blue",
      shadowColor: "#72E5FF",
      date: "2023",
      image: "/images/projects/fintech-v3.jpg",
      bullets: [
        "Blockchain ve Web3 entegrasyonu",
        "Milyonlarca anlık işlemi kaldıran altyapı"
      ]
    },
    {
      name: "SmartFit AI",
      category: "Sağlık Teknolojisi",
      colorClass: "bg-bs-green",
      shadowColor: "#D3EFAB",
      date: "2023",
      image: "/images/projects/smartfit-v4.jpg",
      bullets: [
        "Yapay zeka tabanlı kişiselleştirilmiş koçluk",
        "Gerçek zamanlı sağlık verisi analizi"
      ]
    },
    {
      name: "B2B Cloud ERP",
      category: "Kurumsal Yazılım",
      colorClass: "bg-bs-purple",
      shadowColor: "#5867ED",
      date: "2022",
      image: "/images/projects/erp-v3.jpg",
      bullets: [
        "Küresel tedarik zinciri için devasa veri yönetimi",
        "Kurumsal şirketler için operasyonel maliyet düşüşü"
      ]
    },
    // --- hidirektor.dev'den Gelen Gerçek Projeler ---
    {
      name: "Class Roll Call",
      category: "Web & Mobil",
      colorClass: "bg-bs-pink",
      shadowColor: "#FFE3E3",
      date: "Oct 2025 - Nov 2025",
      image: "/images/projects/class-v3.jpg",
      bullets: [
        "Eğitim kurumları için gerçek zamanlı yoklama takip sistemi",
        "Dinamik QR, Redis caching ve detaylı yönetim paneli"
      ]
    },
    {
      name: "IoT Mobile Integration",
      category: "IoT & Donanım",
      colorClass: "bg-bs-blue",
      shadowColor: "#72E5FF",
      date: "Mar 2024 - May 2025",
      image: "/images/projects/iot-v3.jpg",
      bullets: [
        "TÜBİTAK 2209-B Ödüllü Endüstriyel IoT platformu",
        "STM32, FreeRTOS ve Modbus ile gerçek zamanlı veri toplama"
      ]
    },
    {
      name: "Delivery Boy",
      category: "Mobil Uygulama",
      colorClass: "bg-bs-green",
      shadowColor: "#D3EFAB",
      date: "Dec 2023 - Apr 2024",
      image: "/images/projects/delivery-v3.jpg",
      bullets: [
        "E-ticaret için gerçek zamanlı kurye ve sipariş takip servisi",
        "Spring Boot backend, Native iOS (Swift) ve Android (Java) mimarisi"
      ]
    },
    {
      name: "TFEncryption Chat",
      category: "Siber Güvenlik",
      colorClass: "bg-bs-purple",
      shadowColor: "#5867ED",
      date: "Nov 2021 - Dec 2021",
      image: "/images/projects/tfencryption-v3.jpg",
      bullets: [
        "WebRTC tabanlı, yüksek güvenlikli P2P mesajlaşma uygulaması",
        "SPN, SHA256 ve MD5 ile uçtan uca şifreli dosya transferi"
      ]
    }
  ];

  return (
    <section id="projeler" className="w-full bg-white py-20 md:py-40">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes premium-float {
          0% { transform: translate(0px, 0px) scale(1.0); }
          33% { transform: translate(2px, -5px) scale(1.015); }
          66% { transform: translate(-2px, -2px) scale(1.005); }
          100% { transform: translate(0px, 0px) scale(1.0); }
        }
        .animate-premium-float {
          animation: premium-float 8s ease-in-out infinite;
          will-change: transform;
        }
        .mask-fade-top {
          mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
        }
      `}} />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-10 text-center text-[40px] font-medium tracking-tight text-black md:mb-20 md:text-[80px]">
          Projeler
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[40px] text-black min-h-[400px] md:min-h-[480px] ${project.colorClass}`}
              style={{ boxShadow: `0 100px 100px -100px ${project.shadowColor}` }}
            >
              <div className="p-6 pb-0 md:p-10 md:pb-0">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3 className={`text-4xl md:text-5xl font-extrabold tracking-tighter ${project.colorClass === 'bg-bs-purple' ? 'text-white' : 'text-black'}`}>
                    {project.name}
                  </h3>
                  <a href="#" className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-semibold transition-colors whitespace-nowrap ${project.colorClass === 'bg-bs-purple' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 hover:bg-black/15'}`}>
                    Detayları İncele
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5V8.5M9.5 2.5H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                <div className={`mt-8 space-y-3 ${project.colorClass === 'bg-bs-purple' ? 'text-white' : 'text-black'}`}>
                  <div className="flex items-center gap-3 font-semibold text-[17px] mb-5">
                    <div className="w-5 flex justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <span>Üretim: {project.date}</span>
                  </div>
                  
                  {project.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-[15px] font-medium opacity-75 leading-snug">
                      <div className="w-5 flex justify-center mt-[7px]">
                        <div className={`w-[7px] h-[7px] rounded-full border-2 ${project.colorClass === 'bg-bs-purple' ? 'border-white' : 'border-black'}`} />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Image */}
              <div className="mt-4 flex-1 w-full overflow-hidden relative mask-fade-top min-h-[220px]">
                <div 
                  className="absolute inset-0 w-full h-full animate-premium-float"
                  style={{ animationDelay: `-${index * 1.5}s` }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    fill
                    className="object-cover object-bottom transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* And many more divider */}
        <div className="mt-16 md:mt-24 flex items-center justify-center gap-6 md:gap-8">
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-black/20"></div>
          <span className="text-[20px] md:text-[24px] font-medium tracking-tight text-black/60">
            Ve çok daha fazlası
          </span>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-black/20"></div>
        </div>
      </div>
    </section>
  );
}
