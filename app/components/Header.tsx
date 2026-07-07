import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          MAVEDDA
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          <Link href="#hizmetler" className="hover:text-white transition-colors">Neler Yapıyoruz?</Link>
          <Link href="#projeler" className="hover:text-white transition-colors">Projelerimiz</Link>
          <Link href="#iletisim" className="hover:text-white transition-colors">İletişim</Link>
        </nav>
        <Link 
          href="mailto:hello@mavedda.com" 
          className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          Teklif Al
        </Link>
      </div>
    </header>
  );
}
