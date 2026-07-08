import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-16 flex-1">
          {/* Company Links */}
          <div>
            <h4 className="text-[12px] md:text-[14px] font-mono tracking-widest text-white/50 mb-6 uppercase">Şirket</h4>
            <ul className="flex flex-col gap-4 text-[18px] md:text-[20px]">
              <li><Link href="#" className="hover:underline underline-offset-4 decoration-white/30">Hakkımızda</Link></li>
              <li><Link href="#" className="hover:underline underline-offset-4 decoration-white/30">Kariyer</Link></li>
              <li><Link href="#" className="hover:underline underline-offset-4 decoration-white/30">Projeler</Link></li>
              <li><Link href="#" className="hover:underline underline-offset-4 decoration-white/30">Etkinlikler</Link></li>
              <li><Link href="#" className="hover:underline underline-offset-4 decoration-white/30">Uyumluluk</Link></li>
              <li><Link href="#" className="hover:underline underline-offset-4 decoration-white/30">Destek Merkezi</Link></li>
              <li><Link href="#" className="hover:underline underline-offset-4 decoration-white/30">Yatırımcılar</Link></li>
            </ul>
          </div>
          
          {/* Partnership Inquiries */}
          <div>
            <h4 className="text-[12px] md:text-[14px] font-mono tracking-widest text-white/50 mb-6 uppercase">İşbirliği Talepleri</h4>
            <a href="mailto:partnerships@mavedda.com" className="text-[18px] md:text-[20px] hover:underline underline-offset-4 decoration-white/30">
              partnerships@mavedda.com
            </a>
          </div>

          {/* Press Inquiries */}
          <div>
            <h4 className="text-[12px] md:text-[14px] font-mono tracking-widest text-white/50 mb-6 uppercase">Basın İletişimi</h4>
            <div className="flex flex-col gap-4 text-[18px] md:text-[20px]">
              <a href="mailto:press@mavedda.com" className="hover:underline underline-offset-4 decoration-white/30">
                press@mavedda.com
              </a>
              <Link href="#" className="hover:underline underline-offset-4 decoration-white/30">
                Medya kitini indir
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-16 flex-1 md:pl-20">
          {/* Social Links */}
          <div>
            <h4 className="text-[12px] md:text-[14px] font-mono tracking-widest text-white/50 mb-6 uppercase">Bizi Takip Edin</h4>
            <div className="flex flex-col gap-4 text-[16px] md:text-[20px] text-white">
              <Link href="#" className="hover:text-white/70 transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-white/70 transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-white/70 transition-colors">Facebook</Link>
              <Link href="#" className="hover:text-white/70 transition-colors">Medium</Link>
              <Link href="#" className="hover:text-white/70 transition-colors">X</Link>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-[12px] md:text-[14px] font-mono tracking-widest text-white/50 mb-6 uppercase">Ofisler</h4>
            <div className="flex flex-col gap-4 text-[16px] md:text-[18px] text-white/80 leading-relaxed">
              <p>Quartier Industriel Ouled Saleh Pro. Nouaceur, Casablanca, Morocco</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-12">
        <div className="flex flex-col gap-6 text-[12px] md:text-[14px] text-white/50 max-w-[600px]">
          <p>
            © {new Date().getFullYear()} Mavedda | Quartier Industriel Ouled Saleh Pro. Nouaceur, Casablanca, Morocco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik ve çerez politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Çerez tercihleri</Link>
          </div>
        </div>

        {/* Slogan */}
        <div className="lg:text-right">
          <p className="text-[#72E5FF] text-[20px] md:text-[28px] lg:text-[32px] font-serif italic tracking-tight">
            Sıradan olsaydık, Mavedda olamazdık.
          </p>
        </div>
      </div>

      {/* Massive Full-Width Logo */}
      <div className="w-full overflow-hidden flex justify-center items-center pointer-events-none select-none px-4">
        <h1 className="text-[18vw] font-black tracking-tighter leading-[0.75] text-white">
          Mavedda
        </h1>
      </div>
    </footer>
  );
}
