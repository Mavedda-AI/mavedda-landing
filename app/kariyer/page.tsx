import Link from 'next/link';
import KariyerHeader from '../components/KariyerHeader';

export default function KariyerPage() {
  const categories = [
    {
      title: "Yazılım & Mühendislik",
      jobs: [
        { title: "Kıdemli Frontend Geliştirici", location: "Casablanca (Hibrit) veya Tamamen Uzaktan", slug: "senior-frontend-developer" },
        { title: "Backend (Node.js) Geliştirici", location: "Casablanca (Hibrit) veya Tamamen Uzaktan", slug: "backend-developer" },
        { title: "Yapay Zeka Mühendisi", location: "Tamamen Uzaktan", slug: "ai-engineer" }
      ]
    },
    {
      title: "Tasarım",
      jobs: [
        { title: "UX/UI Tasarımcı", location: "Casablanca, Madrid veya tamamen uzaktan", slug: "ux-ui-designer" },
        { title: "Kıdemli Ürün Tasarımcısı", location: "Casablanca (Hibrit) veya Tamamen Uzaktan", slug: "senior-product-designer" }
      ]
    },
    {
      title: "Veri",
      jobs: [
        { title: "Veri Bilimci", location: "Tamamen Uzaktan", slug: "data-scientist" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black font-sans selection:bg-[#d4ff8f] selection:text-black pb-24">
      <KariyerHeader backLink="/" />

      <main className="max-w-3xl mx-auto px-6 pt-12">
        <div className="text-center mb-16">
          <h1 className="flex flex-col items-center justify-center">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-serif text-[40px] md:text-[56px] italic leading-none">Kariyer</span>
              <span className="font-serif text-[32px] md:text-[40px] leading-none">@</span>
            </div>
            <span className="text-[48px] md:text-[72px] font-medium tracking-tighter leading-none">Mavedda</span>
          </h1>
        </div>

        <div className="flex justify-center mb-16">
          <button className="flex items-center justify-between w-[160px] md:w-[200px] px-6 py-3 rounded-full border border-black/20 hover:border-black/40 transition-colors bg-transparent">
            <span className="text-[16px] md:text-[18px]">Filtreler</span>
            <span className="text-xl leading-none">+</span>
          </button>
        </div>

        <div className="flex flex-col gap-12">
          {categories.map((category, idx) => (
            <section key={idx}>
              <h2 className="text-[18px] md:text-[20px] font-bold mb-6 tracking-tight">{category.title}</h2>
              <div className="flex flex-col gap-4">
                {category.jobs.map((job, jIdx) => (
                  <Link 
                    key={jIdx}
                    href={`/kariyer/${job.slug}`}
                    className="block bg-white p-6 md:p-8 rounded-[24px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group outline-none focus:outline-none focus:ring-0"
                  >
                    <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight mb-2 group-hover:text-[#00a82d] transition-colors">{job.title}</h3>
                    <p className="text-black/60 text-[15px]">{job.location}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
