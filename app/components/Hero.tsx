export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Geleceğin Teknolojilerini <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            İnşa Ediyoruz
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
          Mavedda bir teknoloji üretim üssüdür. Dünya standartlarında uzmanlığımızla, fikirlerinizi milyonlara ulaşan mobil uygulamalara ve yazılım çözümlerine dönüştürüyoruz.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#hizmetler"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            Neler Yapıyoruz?
          </a>
          <a 
            href="mailto:hello@mavedda.com"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            Teklif Alın
          </a>
        </div>
      </div>
    </section>
  );
}
