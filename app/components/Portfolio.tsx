export default function Portfolio() {
  const projects = [
    {
      name: "SalutBabe",
      category: "Mobil Uygulama",
      colorClass: "bg-bs-pink",
      shadowColor: "#FFE3E3",
      date: "2024",
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
      bullets: [
        "Küresel tedarik zinciri için devasa veri yönetimi",
        "Kurumsal şirketler için operasyonel maliyet düşüşü"
      ]
    }
  ];

  return (
    <section id="projeler" className="w-full bg-white py-20 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="mb-10 text-center text-[40px] font-medium tracking-tight text-black md:mb-20 md:text-[80px]">
          Projeler
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative flex flex-col justify-between overflow-hidden rounded-[36px] md:rounded-[50px] text-black min-h-[500px] md:min-h-[650px] ${project.colorClass}`}
              style={{ boxShadow: `0 100px 100px -100px ${project.shadowColor}` }}
            >
              <div className="p-6 pb-0 md:pt-10 md:px-10">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${project.colorClass === 'bg-bs-purple' ? 'text-white' : 'text-black'}`}>
                    {project.name}
                  </h3>
                  <a href="#" className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${project.colorClass === 'bg-bs-purple' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'}`}>
                    Detayları İncele
                  </a>
                </div>

                <ul className={`relative mt-8 space-y-4 before:absolute before:top-2 before:left-2 before:h-full before:w-[2px] ${project.colorClass === 'bg-bs-purple' ? 'before:bg-white/20 text-white' : 'before:bg-black/10 text-black'}`}>
                  <li className="flex items-center gap-2 pl-8 text-[16px] font-medium">
                    <span className="absolute left-1 w-2.5 h-2.5 rounded-full bg-black/20" />
                    Üretim: {project.date}
                  </li>
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 pl-8 text-[16px] font-medium opacity-70">
                      <span className={`absolute left-1 w-2.5 h-2.5 rounded-full border-2 ${project.colorClass === 'bg-bs-purple' ? 'border-white bg-bs-purple' : 'border-black'} ${project.colorClass === 'bg-bs-purple' ? '' : project.colorClass}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Placeholder for project image/video to push content up */}
              <div className={`mt-10 h-[250px] md:h-[350px] w-full rounded-t-[36px] mx-auto w-[90%] ${project.colorClass === 'bg-bs-purple' ? 'bg-white/10' : 'bg-black/5'}`}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
