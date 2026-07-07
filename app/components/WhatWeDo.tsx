export default function WhatWeDo() {
  const services = [
    {
      title: "Mobil Uygulama Geliştirme",
      description: "Fikirlerinizi iOS ve Android platformları için yüksek performanslı, ölçeklenebilir ve kullanıcı dostu mobil uygulamalara dönüştürüyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
      )
    },
    {
      title: "Web Platformları",
      description: "Modern web teknolojileri ile kurumsal web siteleri, B2B portallar ve SaaS çözümleri tasarlayıp geliştiriyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      )
    },
    {
      title: "UI/UX Tasarım",
      description: "Kullanıcı deneyimini merkeze alarak, markanıza değer katan çarpıcı ve modern arayüzler tasarlıyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
      )
    },
    {
      title: "Danışmanlık & Büyüme",
      description: "Sadece kod yazmıyor, ürününüzün pazara çıkış stratejisinde ve büyüme aşamalarında teknoloji partneriniz oluyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
      )
    }
  ];

  return (
    <section id="hizmetler" className="py-32 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Neler Yapıyoruz?</h2>
          <p className="text-xl text-white/60 max-w-3xl">
            Sıfırdan ürün tasarlıyor, geliştiriyor ve ölçeklendiriyoruz. Bağımsız stüdyolarımız ve merkezi kaynaklarımızla yüksek kaliteyi standart hale getiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
