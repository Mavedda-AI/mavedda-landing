import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Test Section */}
      <section className="w-full py-32 flex flex-col items-center justify-center bg-white text-black min-h-[400px]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-heading font-bold mb-6">Test Metni Alanı</h2>
          <p className="text-xl text-gray-600">
            Burası şimdilik Header ve Footer arasındaki yapıyı test etmek için eklenmiş bir içerik alanıdır. Daha sonra bu alana uygulamanın diğer bileşenleri (Özellikler, Müşteriler, Fiyatlandırma vb.) gelecektir.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
