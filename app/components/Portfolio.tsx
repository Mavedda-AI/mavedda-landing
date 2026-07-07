export default function Portfolio() {
  const projects = [
    {
      name: "SalutBabe",
      category: "E-Ticaret & Pazar Yeri",
      description: "İkinci el lüks bebek ve çocuk ürünleri için tasarlanmış yeni nesil mobil pazar yeri uygulaması.",
      color: "from-pink-500/20 to-purple-500/20",
    },
    {
      name: "Kripto Cüzdan App",
      category: "Fintech",
      description: "Kullanıcıların kripto varlıklarını güvenle saklayabildiği, hızlı transfer imkanı sunan Web3 tabanlı mobil cüzdan.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "SmartFit",
      category: "Sağlık & Spor",
      description: "Kişiselleştirilmiş antrenman programları ve AI tabanlı kalori takibi sunan fitness uygulaması.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      name: "B2B Tedarik Portalı",
      category: "Kurumsal Yazılım",
      description: "Şirketlerin tüm tedarik süreçlerini yönettikleri, ERP sistemleri ile entegre çalışan web portalı.",
      color: "from-orange-500/20 to-red-500/20",
    }
  ];

  return (
    <section id="projeler" className="py-32 bg-black text-white border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projelerimiz</h2>
            <p className="text-xl text-white/60 max-w-2xl">
              Geliştirdiğimiz uygulamalarla kullanıcı deneyimini baştan tanımlıyoruz. İşte son dönemde hayata geçirdiğimiz projelerden bazıları.
            </p>
          </div>
          <a 
            href="mailto:hello@mavedda.com" 
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors shrink-0"
          >
            Tüm Projeleri Gör
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`p-10 rounded-3xl bg-gradient-to-br ${project.color} border border-white/10 hover:border-white/30 transition-colors group cursor-pointer h-80 flex flex-col justify-end relative overflow-hidden`}
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium tracking-wide mb-4 backdrop-blur-md">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold mb-3">{project.name}</h3>
                <p className="text-white/70 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
