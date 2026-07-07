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
          {/* Follow Us */}
          <div>
            <h4 className="text-[12px] md:text-[14px] font-mono tracking-widest text-white/50 mb-6 uppercase">Bizi Takip Edin</h4>
            <ul className="flex flex-col gap-4 text-[18px] md:text-[20px]">
              <li><a href="#" className="hover:underline underline-offset-4 decoration-white/30">LinkedIn</a></li>
              <li><a href="#" className="hover:underline underline-offset-4 decoration-white/30">Instagram</a></li>
              <li><a href="#" className="hover:underline underline-offset-4 decoration-white/30">Glassdoor</a></li>
              <li><a href="#" className="hover:underline underline-offset-4 decoration-white/30">Facebook</a></li>
              <li><a href="#" className="hover:underline underline-offset-4 decoration-white/30">Medium</a></li>
              <li><a href="#" className="hover:underline underline-offset-4 decoration-white/30">X</a></li>
            </ul>
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
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="flex flex-col gap-6 text-[12px] md:text-[14px] text-white/50 max-w-[600px]">
          <p>
            © Mavedda | Quartier Industriel Ouled Saleh Pro. Nouaceur, Casablanca, Morocco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik ve çerez politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Çerez tercihleri</Link>
          </div>
        </div>

        {/* Massive Logo & Slogan */}
        <div className="flex flex-col items-start gap-0 mt-8 mb-4">
          <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-medium tracking-tighter leading-none -ml-2 md:-ml-4">
            Mavedda
          </h1>
          <p className="text-[#d4ff8f] text-[24px] md:text-[32px] font-serif italic tracking-tight mt-[-10px] md:mt-[-20px] -ml-1 md:-ml-3">
            Sıradan olsaydık, Mavedda olamazdık.
          </p>
        </div>
      </div>
    </footer>
  );
}
