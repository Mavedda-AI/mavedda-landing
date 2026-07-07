import Link from 'next/link';
import { notFound } from 'next/navigation';
import KariyerHeader from '../../components/KariyerHeader';

const jobData: Record<string, { title: string, location: string }> = {
  "senior-frontend-developer": { title: "Kıdemli Frontend Geliştirici", location: "Casablanca (Hibrit) veya Tamamen Uzaktan" },
  "backend-developer": { title: "Backend (Node.js) Geliştirici", location: "Casablanca (Hibrit) veya Tamamen Uzaktan" },
  "ai-engineer": { title: "Yapay Zeka Mühendisi", location: "Tamamen Uzaktan" },
  "ux-ui-designer": { title: "UX/UI Tasarımcı", location: "Casablanca, Madrid veya tamamen uzaktan" },
  "senior-product-designer": { title: "Kıdemli Ürün Tasarımcısı", location: "Casablanca (Hibrit) veya Tamamen Uzaktan" },
  "data-scientist": { title: "Veri Bilimci", location: "Tamamen Uzaktan" }
};

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const job = jobData[slug];

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black font-sans selection:bg-[#d4ff8f] selection:text-black">
      <KariyerHeader backLink="/kariyer" backText="Kariyer'e Dön" />

      <main className="max-w-[700px] mx-auto px-6 pt-8 pb-32">
        <h1 className="text-[40px] md:text-[56px] font-medium tracking-tighter leading-tight mb-8">
          {job.title}
        </h1>

        <div className="text-[18px] md:text-[20px] font-medium leading-relaxed mb-6">
          <p className="mb-4">{job.location}</p>
          <p>Tam zamanlı veya proje bazlı</p>
        </div>

        <div className="flex gap-4 mb-16">
          <Link 
            href={`/kariyer/${params.slug}/basvuru`}
            className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-[18px] font-medium hover:bg-black transition-colors"
          >
            Başvur
          </Link>
          <button className="w-[56px] h-[56px] flex items-center justify-center rounded-full border border-black/20 hover:bg-black/5 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
          </button>
        </div>

        <div className="text-[17px] md:text-[19px] text-[#2a2a2a] leading-[1.6]">
          <p className="text-black/60 text-[16px] mb-12">
            İşe alım sürecimiz hakkında sorularınız mı var? <Link href="#" className="underline underline-offset-4 text-black hover:text-[#00a82d]">SSS bölümüne göz atın.</Link>
          </p>

          <p className="mb-6">
            Mavedda olarak, tüm zamanların en iyi şirketlerinden birini kurmaya çalışıyoruz. Çok sayıda müşteriye hizmet veren bir şirket. Ekip üyelerinin tam potansiyellerine ulaştığı bir şirket. Eşi görülmemiş seviyelerde etkinlik ve verimlilikle çalışan bir şirket. Paydaşları için olağanüstü bir hızda değer yaratan bir şirket. Ve bunu yüksek etik standartlara bağlı kalarak yapan bir şirket.
          </p>

          <p className="mb-6">
            Bu hedef doğrultusunda, dijital işletmeler kuruyor ve geliştiriyoruz. Yaptığımız dönüşümler genellikle derindir — inovasyonu hızlandırmak, müşterilere fayda sağlamak ve iş performansını güçlendirmek için tasarlanmıştır. Burada hiyerarşi minimumdur ve ekipler küçük ama yetenek yoğundur. Şirket genelinde, yapay zekayı çalışma şeklimize derinden entegre ediyoruz, böylece insan yargısı ve makine zekası birbirini güçlendiriyor.
          </p>

          <p className="mb-12">
            Yetenekli, azimli ve işbirliğine yatkın bir birey için Mavedda'da çalışmak; öğrenmek, etki yaratmak ve kariyerini olağanüstü yüksek bir hızda ilerletmek için eşsiz bir fırsattır.
          </p>

          <h3 className="text-2xl font-bold tracking-tight text-black mt-12 mb-6">Sorumluluklarınızdan bazı örnekler</h3>
          <ul className="space-y-6 list-disc pl-5 mb-12">
            <li><strong>Yüksek etkili ürün deneyimlerini şekillendirin.</strong> Erken konseptlerden cilalı teslimata kadar olağanüstü UI ve UX tasarlayın — daha fazla yönü keşfetmek, daha hızlı hareket etmek ve kalite çıtasını yükseltmek için mevcut en iyi araçları (Yapay zeka dahil) kullanın.</li>
            <li><strong>Bir YZ (LLM) ile başlayın.</strong> Herhangi bir tasarım aracını açmadan önce niyeti netleştirmek, kısa özellikler taslağı hazırlamak ve riskleri, uç durumları yüzeye çıkarmak için YZ araçlarını kullanın.</li>
            <li><strong>Prototip oluşturun ve YZ ile inşa edin.</strong> Kaba konseptleri etkileşimli prototiplere dönüştürmek ve üretime hazır arayüz kodu oluşturmak için yapay zeka araçlarını (Cursor, Claude vb.) kullanın. Ne zaman koda ne zaman Figma'ya uzanacağınızı bilirsiniz.</li>
            <li><strong>İlk günden itibaren Ürün Yöneticileri ve mühendislerle birlikte oluşturun.</strong> Erken UX gereksinimlerini tanımlayın, QA ve sürüme kadar inşa sürecinde kalın.</li>
            <li><strong>Doğrulayın ve ölçün.</strong> Doğrudan müşterilerle konuşun, hızlı testler yapın ve yönünüzü ayarlamak için öğrendiklerinizi kullanın. Tasarım etkinliğini değerlendirmek için hunileri ve elde tutmayı takip edin.</li>
          </ul>

          <h3 className="text-2xl font-bold tracking-tight text-black mt-12 mb-6">Ne arıyoruz?</h3>
          <ul className="space-y-6 list-disc pl-5 mb-12">
            <li><strong>Akıl yürütme yeteneği.</strong> Gerekli bilgi verildiğinde, karmaşık sorunları çözebilirsiniz. İlk prensiplerden düşünür ve fikirlerinizi keskin bir şekilde yapılandırırsınız.</li>
            <li><strong>Azim.</strong> Yaptığınız her şeyde son derece hırslısınız — ve inisiyatifiniz, çabanız ve azminiz hırsınızın yoğunluğuyla eşleşiyor. İşiniz için derin bir sorumluluk hissediyorsunuz.</li>
            <li><strong>Takım ruhu.</strong> Karşılık beklemeden cömertçe verirsiniz. Sizin fikrinizi değil, en iyi fikri desteklersiniz. Ekibinize yardım etmek için ellerinizi kirletmekten her zaman mutlusunuz. Güvenilir, dürüst ve şeffafsınız.</li>
          </ul>

          <h3 className="text-2xl font-bold tracking-tight text-black mt-12 mb-6">Ne sunuyoruz?</h3>
          <ul className="space-y-6 list-disc pl-5 mb-12">
            <li><strong>İnanılmaz yetenekli, girişimci ekipler.</strong> Kendi alanınızdaki en parlak insanlardan bazılarıyla birlikte küçük, sonuç odaklı, otonom ekiplerde çalışacaksınız.</li>
            <li><strong>Büyüme için olağanüstü bir fırsat.</strong> Olağanüstü potansiyele sahip bireyleri işe almak için büyük çaba harcıyoruz — ardından, önceliğimiz onları gelişebilecekleri ideal pozisyona yerleştirmektir.</li>
            <li><strong>Tüm. Bu. Ayrıcalıklar.</strong> Esnek saatler, uzaktan çalışma, öğrenme ve eğitim için sınırsız destek, en üst düzey sağlık sigortası, cömert ebeveyn desteği ve harika bir lokasyonda yıllık geri çekilme (retreat) etkinliği.</li>
          </ul>

          <p className="mt-12 mb-6">
            Mavedda talepkar bir ortamdır. Son derece hırslıyız ve kendimizi - ve birbirimizi - yüksek bir standarda tabi tutuyoruz. Bu genellikle olağanüstü öğrenme, başarı ve kariyer gelişimi sağlasa da, aynı zamanda önemli bir bağlılık gerektirir.
          </p>

          <p className="mb-12">
            Eğer bu rol size hitap ediyorsa ve elinizden gelenin en iyisini vermeye heyecanlıysanız, sizden haber almayı çok isteriz. Hemen başvurun — sizinle tanışmak için sabırsızlanıyoruz.
          </p>
        </div>
      </main>

      {/* Sticky Mobile Apply Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-black/10 flex justify-between items-center z-50 md:hidden shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <div className="font-bold text-[18px] line-clamp-1 mr-4">{job.title}</div>
        <Link 
          href={`/kariyer/${params.slug}/basvuru`}
          className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full font-medium whitespace-nowrap"
        >
          Başvur
        </Link>
      </div>
    </div>
  );
}
