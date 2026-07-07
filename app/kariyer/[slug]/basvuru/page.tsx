"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import KariyerHeader from '../../../components/KariyerHeader';

export default function ApplicationForm() {
  const params = useParams();
  const slug = params.slug as string;
  const jobTitle = slug === 'ux-ui-designer' ? 'UX/UI designer' : 'Açık Pozisyon';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    portfolio: '',
    country: '',
    visa: '',
    englishLevel: '',
    languages: ''
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const body = `Ad Soyad: ${formData.firstName} ${formData.lastName}
E-posta: ${formData.email}
Portfolyo: ${formData.portfolio}
Yaşadığı Ülke: ${formData.country}
Vize İhtiyacı: ${formData.visa}
İngilizce Seviyesi: ${formData.englishLevel}
Diğer Diller: ${formData.languages}`;

    window.location.href = `mailto:mustafamavedda@gmail.com?subject=İş Başvurusu: ${jobTitle}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black font-sans selection:bg-[#d4ff8f] selection:text-black flex flex-col pb-24">
      <KariyerHeader backLink={`/kariyer/${slug}`} backText="İlan detayına dön" />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[600px] mx-auto px-6 pt-12">
        <div className="mb-10">
          <p className="text-black/50 text-[15px] font-medium mb-1">Adım {step} / 3</p>
          <h1 className="text-[32px] md:text-[40px] font-medium tracking-tight">
            {step === 1 && "Kişisel bilgiler"}
            {step === 2 && "Başvuru bilgileri"}
            {step === 3 && "Eğitim ve diller"}
          </h1>
        </div>

        {/* Form Steps */}
        <div className="flex flex-col gap-8">
          {step === 1 && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-[17px]">Ad</label>
                <input 
                  type="text"
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                  className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors bg-white text-[17px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[17px]">Soyad</label>
                <input 
                  type="text"
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                  className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors bg-white text-[17px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[17px]">E-posta adresi</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors bg-white text-[17px]"
                />
              </div>
              <div className="mt-4 flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-black/20" />
                <p className="text-black/70 text-[15px] leading-relaxed">
                  Devam et'e tıklayarak <Link href="#" className="underline text-black hover:text-[#00a82d]">gizlilik politikasını</Link> okuduğumu ve kabul ettiğimi onaylıyorum.
                </p>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-[17px]">Portfolyo bağlantısı</label>
                <input 
                  type="url"
                  value={formData.portfolio}
                  onChange={e => setFormData({...formData, portfolio: e.target.value})}
                  placeholder="https://"
                  className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors bg-white text-[17px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[17px] flex justify-between">
                  <span>CV/Özgeçmiş</span>
                  <span className="text-black/40 text-[14px]">Tek PDF dosyası, max 10MB.</span>
                </label>
                <div className="w-full border border-black/20 rounded-xl px-4 py-2 bg-white flex justify-between items-center text-black/50">
                  <span className="text-[17px]">Yükle...</span>
                  <button className="bg-[#1a1a1a] text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-black transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[17px]">Nerede yaşıyorsunuz?</label>
                <select 
                  value={formData.country}
                  onChange={e => setFormData({...formData, country: e.target.value})}
                  className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors bg-white text-[17px] appearance-none"
                >
                  <option value="">Ara...</option>
                  <option value="Turkey">Türkiye</option>
                  <option value="UK">Birleşik Krallık</option>
                  <option value="Other">Diğer</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[17px]">Vize sponsorluğuna ihtiyacınız var mı?</label>
                <select 
                  value={formData.visa}
                  onChange={e => setFormData({...formData, visa: e.target.value})}
                  className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors bg-white text-[17px] appearance-none"
                >
                  <option value="">Seç...</option>
                  <option value="Yes">Evet</option>
                  <option value="No">Hayır</option>
                </select>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-[17px]">Genel İngilizce seviyeniz nedir?</label>
                <select 
                  value={formData.englishLevel}
                  onChange={e => setFormData({...formData, englishLevel: e.target.value})}
                  className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors bg-white text-[17px] appearance-none"
                >
                  <option value="">Seç...</option>
                  <option value="B1">Orta (B1/B2)</option>
                  <option value="C1">İleri (C1/C2)</option>
                  <option value="Native">Anadil</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[17px]">Diğer diller</label>
                <p className="text-[13px] text-black/50 mb-1">Bildiğiniz diğer dilleri virgülle ayırarak yazın.</p>
                <input 
                  type="text"
                  value={formData.languages}
                  onChange={e => setFormData({...formData, languages: e.target.value})}
                  placeholder="Örn: İspanyolca (B2), Fransızca (A2)"
                  className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors bg-white text-[17px]"
                />
              </div>
              <div className="mt-8 flex items-start gap-3 border-t border-black/10 pt-8">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-black/20" />
                <p className="text-black/70 text-[15px] leading-relaxed">
                  Mavedda'nın kişisel bilgilerimi ve başvuru materyallerimi değerlendirme amacıyla işlemesine izin veriyorum. Bu form doldurulduğunda otomatik olarak Mavedda'ya e-posta atılacaktır.
                </p>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 px-6 bg-[#f7f7f7] border-t border-black/10 flex justify-between items-center z-50">
        <div className="font-bold text-[18px] md:text-[20px]">{jobTitle}</div>
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            disabled={step === 1}
            className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border border-black/20 transition-colors ${step === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 bg-white'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          {step < 3 ? (
            <button 
              onClick={handleNext}
              className="w-[100px] h-[56px] bg-[#dfdfdf] hover:bg-[#d5d5d5] text-black/50 flex items-center justify-center rounded-[30px] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              className="px-8 h-[56px] bg-[#1a1a1a] hover:bg-black text-white font-medium flex items-center justify-center rounded-full transition-colors"
            >
              Gönder
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
