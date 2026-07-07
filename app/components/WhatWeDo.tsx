import ScrollRevealText from './ScrollRevealText';

export default function WhatWeDo() {
  return (
    <>
      <section id="hizmetler" className="bg-black py-16 md:py-26">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <p className="mx-auto py-10 text-center text-[50px] leading-tight text-white md:text-[80px]">
            <span className="font-serif text-[67px] text-bs-blue md:text-[130px]">15</span>
            <span className="align-bottom font-serif text-[67px] text-bs-blue md:text-[100px]">+ </span>
            proje
            <span className="mt-2 block text-[24px] md:text-[32px] font-sans font-light">başarıyla tamamlandı</span>
          </p>
          <p className="mx-auto py-10 text-center text-[50px] leading-tight text-white md:text-[80px]">
            <span className="font-serif text-[67px] text-bs-orange md:text-[130px]">100</span>
            <span className="align-bottom font-serif text-[67px] text-bs-orange md:text-[100px]">K+ </span>
            kullanıcı
            <span className="mt-2 block text-[24px] md:text-[32px] font-sans font-light">aylık aktif (MAU)</span>
          </p>
          <p className="mx-auto py-10 text-center text-[50px] leading-tight text-white md:text-[80px]">
            <span className="font-serif text-[67px] text-bs-green md:text-[130px]">%98</span>
            <span className="mt-2 block text-[24px] md:text-[32px] font-sans font-light">müşteri memnuniyeti</span>
          </p>
          <p className="mx-auto py-10 text-center text-[50px] leading-tight text-white md:text-[80px]">
            <span className="font-serif text-[67px] text-bs-pink md:text-[130px]">700</span>
            <span className="align-bottom font-serif text-[67px] text-bs-pink md:text-[100px]">K+ </span>
            veri işlemi
            <span className="mt-2 block text-[24px] md:text-[32px] font-sans font-light">günlük ortalama, güvenle yönetiliyor</span>
          </p>
        </div>
      </section>

      <section className="bg-black py-20 md:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-16 space-y-32">
          <ScrollRevealText>
            Sıfırdan ürün tasarlıyor, geliştiriyor ve ölçeklendiriyoruz. Bağımsız stüdyolarımız ve merkezi kaynaklarımızla yüksek kaliteyi standart hale getiriyoruz.
          </ScrollRevealText>
          <ScrollRevealText>
            Fikirlerinizi iOS ve Android platformları için yüksek performanslı, ölçeklenebilir ve kullanıcı dostu mobil uygulamalara dönüştürüyoruz.
          </ScrollRevealText>
          <ScrollRevealText>
            Sadece kod yazmıyor, ürününüzün pazara çıkış stratejisinde ve büyüme aşamalarında teknoloji partneriniz oluyoruz.
          </ScrollRevealText>
        </div>
      </section>
    </>
  );
}
