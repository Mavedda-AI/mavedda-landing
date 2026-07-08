"use client";

import { useState, useEffect, useMemo } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ─── Helpers ─── */
function extractProjectName(text: string): string {
  if (!text.trim()) return "Projeniz";
  // Take first meaningful chunk as project name
  const firstLine = text.trim().split('\n')[0];
  const words = firstLine.split(/\s+/).slice(0, 4).join(' ');
  return words.length > 30 ? words.substring(0, 30) + '…' : words;
}

function extractFeatures(text: string): string[] {
  const defaults = ["Ana Sayfa", "Kullanıcı Paneli", "Bildirimler"];
  if (!text.trim()) return defaults;
  const lines = text.split('\n').filter(l => l.trim().length > 0);
  if (lines.length <= 1) {
    const words = text.split(/[,;.·\-•]+/).map(w => w.trim()).filter(w => w.length > 2 && w.length < 30);
    return words.length >= 2 ? words.slice(0, 4) : defaults;
  }
  return lines.slice(0, 4).map(l => l.trim().substring(0, 28));
}

/* ─── Phone Mockup ─── */
function PhoneMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-[200px] h-[400px] bg-[#1a1a1a] rounded-[36px] border-[3px] border-white/20 shadow-[0_0_60px_rgba(114,229,255,0.15)] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[28px] bg-[#1a1a1a] rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="absolute inset-[3px] rounded-[33px] overflow-hidden bg-gradient-to-b from-[#0d1117] to-[#161b22]">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-8 pb-2 text-[9px] text-white/50 font-medium">
            <span>09:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2 border border-white/50 rounded-sm"><div className="w-2 h-1.5 bg-green-400 rounded-sm" /></div>
            </div>
          </div>
          {/* App Header */}
          <div className="px-5 pt-3 pb-4">
            <div className="text-[8px] text-[#72E5FF] font-bold tracking-widest uppercase mb-1">MAVEDDA</div>
            <div className="text-[14px] text-white font-bold tracking-tight leading-tight">{name}</div>
          </div>
          {/* Hero Card */}
          <div className="mx-4 mb-3 h-[80px] rounded-2xl bg-gradient-to-br from-[#72E5FF]/20 to-[#72E5FF]/5 border border-[#72E5FF]/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[20px] mb-0.5">🚀</div>
              <div className="text-[8px] text-white/60">Hızlı Başlangıç</div>
            </div>
          </div>
          {/* Feature List */}
          <div className="px-4 space-y-2">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2.5 border border-white/5">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] ${
                  i === 0 ? 'bg-[#72E5FF]/20 text-[#72E5FF]' : 
                  i === 1 ? 'bg-purple-500/20 text-purple-400' : 
                  i === 2 ? 'bg-green-500/20 text-green-400' :
                  'bg-orange-500/20 text-orange-400'
                }`}>
                  {i === 0 ? '◉' : i === 1 ? '◆' : i === 2 ? '▲' : '■'}
                </div>
                <span className="text-[10px] text-white/80 truncate">{f}</span>
              </div>
            ))}
          </div>
          {/* Bottom Nav */}
          <div className="absolute bottom-0 left-0 right-0 h-[44px] bg-[#0d1117]/90 backdrop-blur border-t border-white/5 flex justify-around items-center px-4">
            <div className="w-5 h-5 rounded-full bg-[#72E5FF]/30" />
            <div className="w-5 h-5 rounded-full bg-white/10" />
            <div className="w-5 h-5 rounded-full bg-white/10" />
            <div className="w-5 h-5 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Browser Mockup ─── */
function BrowserMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="bg-[#1a1a1a] rounded-xl border border-white/15 shadow-[0_0_60px_rgba(114,229,255,0.12)] overflow-hidden">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-[#111]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white/5 rounded-md px-3 py-1 text-[10px] text-white/40 truncate">
              mavedda.com/{name.toLowerCase().replace(/\s+/g, '-')}
            </div>
          </div>
        </div>
        {/* Page Content */}
        <div className="p-5 bg-gradient-to-b from-[#0d1117] to-[#161b22] min-h-[240px]">
          {/* Nav */}
          <div className="flex justify-between items-center mb-5">
            <div className="text-[10px] text-[#72E5FF] font-bold tracking-widest">MAVEDDA</div>
            <div className="flex gap-3">
              <div className="w-8 h-1.5 rounded bg-white/20" />
              <div className="w-8 h-1.5 rounded bg-white/20" />
              <div className="w-8 h-1.5 rounded bg-white/20" />
            </div>
          </div>
          {/* Hero Section */}
          <div className="mb-4">
            <div className="text-[16px] text-white font-bold tracking-tight mb-1">{name}</div>
            <div className="w-3/4 h-1.5 rounded bg-white/10 mb-1" />
            <div className="w-1/2 h-1.5 rounded bg-white/10" />
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-2">
            {features.map((f, i) => (
              <div key={i} className={`rounded-lg p-3 border ${
                i === 0 ? 'bg-[#72E5FF]/10 border-[#72E5FF]/20' :
                i === 1 ? 'bg-purple-500/10 border-purple-500/20' :
                i === 2 ? 'bg-green-500/10 border-green-500/20' :
                'bg-orange-500/10 border-orange-500/20'
              }`}>
                <div className={`text-[10px] font-bold mb-1 ${
                  i === 0 ? 'text-[#72E5FF]' : i === 1 ? 'text-purple-400' : i === 2 ? 'text-green-400' : 'text-orange-400'
                }`}>{f}</div>
                <div className="w-full h-1 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Mockup ─── */
function DashboardMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="bg-[#1a1a1a] rounded-xl border border-white/15 shadow-[0_0_60px_rgba(114,229,255,0.12)] overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center px-4 py-2.5 border-b border-white/10 bg-[#111]">
          <div className="text-[10px] text-[#72E5FF] font-bold tracking-widest mr-4">MAVEDDA ERP</div>
          <div className="flex-1" />
          <div className="w-6 h-6 rounded-full bg-[#72E5FF]/20 border border-[#72E5FF]/30" />
        </div>
        <div className="flex min-h-[240px]">
          {/* Sidebar */}
          <div className="w-[80px] bg-[#0d1117] border-r border-white/5 p-3 flex flex-col gap-2">
            {['◉','◆','▲','■','●'].map((icon, i) => (
              <div key={i} className={`w-full py-2 rounded-lg text-center text-[10px] ${i === 0 ? 'bg-[#72E5FF]/15 text-[#72E5FF]' : 'text-white/30 hover:text-white/50'}`}>
                {icon}
              </div>
            ))}
          </div>
          {/* Main Content */}
          <div className="flex-1 p-4 bg-gradient-to-b from-[#0d1117] to-[#161b22]">
            <div className="text-[13px] text-white font-bold mb-3">{name}</div>
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {['Kullanıcılar', 'Gelir', 'Siparişler'].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/5 text-center">
                  <div className={`text-[12px] font-bold ${i === 0 ? 'text-[#72E5FF]' : i === 1 ? 'text-green-400' : 'text-purple-400'}`}>
                    {i === 0 ? '2.4K' : i === 1 ? '₺48K' : '156'}
                  </div>
                  <div className="text-[7px] text-white/40 mt-0.5">{stat}</div>
                </div>
              ))}
            </div>
            {/* Module List */}
            <div className="space-y-1.5">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-2 border border-white/5">
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#72E5FF]' : i === 1 ? 'bg-green-400' : i === 2 ? 'bg-purple-400' : 'bg-orange-400'}`} />
                  <span className="text-[9px] text-white/70 truncate">{f}</span>
                  <div className="ml-auto w-8 h-1 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── IoT Mockup ─── */
function IoTMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="bg-[#1a1a1a] rounded-xl border border-white/15 shadow-[0_0_60px_rgba(114,229,255,0.12)] overflow-hidden p-5 bg-gradient-to-b from-[#0d1117] to-[#161b22]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] text-[#72E5FF] font-bold tracking-widest mb-0.5">MAVEDDA IoT</div>
            <div className="text-[14px] text-white font-bold">{name}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
        {/* Sensor Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: 'Sıcaklık', value: '24.5°C', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
            { label: 'Nem', value: '%62', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
            { label: 'Enerji', value: '3.2kW', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
            { label: 'Durum', value: 'Aktif', color: 'text-[#72E5FF]', bg: 'bg-[#72E5FF]/10 border-[#72E5FF]/20' },
          ].map((s, i) => (
            <div key={i} className={`rounded-xl p-3 border ${s.bg}`}>
              <div className="text-[8px] text-white/40 mb-1">{s.label}</div>
              <div className={`text-[16px] font-bold ${s.color}`}>{s.value}</div>
            </div>
          ))}
        </div>
        {/* Devices */}
        <div className="space-y-1.5">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
              <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-green-400' : 'bg-[#72E5FF]'}`} />
              <span className="text-[10px] text-white/70 truncate">{f}</span>
              <div className="ml-auto text-[8px] text-white/30">Bağlı</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Generic Mockup ─── */
function GenericMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="bg-[#1a1a1a] rounded-xl border border-white/15 shadow-[0_0_60px_rgba(114,229,255,0.12)] overflow-hidden p-5 bg-gradient-to-b from-[#0d1117] to-[#161b22] min-h-[200px]">
        <div className="text-[10px] text-[#72E5FF] font-bold tracking-widest mb-2">MAVEDDA</div>
        <div className="text-[16px] text-white font-bold mb-4">{name}</div>
        <div className="space-y-2">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-3 border border-white/5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[12px] ${
                i === 0 ? 'bg-[#72E5FF]/20 text-[#72E5FF]' : i === 1 ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'
              }`}>
                {i === 0 ? '◉' : i === 1 ? '◆' : '▲'}
              </div>
              <span className="text-[11px] text-white/80 truncate">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Preview Wrapper ─── */
function ProjectPreview({ service, details }: { service: string; details: string }) {
  const name = useMemo(() => extractProjectName(details), [details]);
  const features = useMemo(() => extractFeatures(details), [details]);

  const MockupComponent = {
    'Mobil Uygulama': PhoneMockup,
    'Web Platformu': BrowserMockup,
    'Kurumsal Yazilim': DashboardMockup,
    'IoT': IoTMockup,
    'Diger': GenericMockup,
  }[service] || GenericMockup;

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#72E5FF]/30 to-transparent" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#72E5FF]/70 whitespace-nowrap flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#72E5FF]">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Canlı Önizleme
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#72E5FF]/30 to-transparent" />
      </div>
      
      <div className="relative rounded-2xl bg-gradient-to-b from-[#72E5FF]/5 to-transparent border border-[#72E5FF]/10 p-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-[#72E5FF]/10 blur-[60px] rounded-full pointer-events-none" />
        
        <MockupComponent name={name} features={features} />
        
        <div className="text-center mt-4">
          <p className="text-[10px] text-white/30 italic">
            Projenizin tahmini önizlemesi — Mavedda tarafından tasarlandı
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Modal ─── */
export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState('Mobil Uygulama');
  const [projectDetails, setProjectDetails] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show preview when user has typed enough
  useEffect(() => {
    if (projectDetails.trim().length > 5 && selectedService) {
      const timer = setTimeout(() => setShowPreview(true), 600);
      return () => clearTimeout(timer);
    } else {
      setShowPreview(false);
    }
  }, [projectDetails, selectedService]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setShowSuccess(false); // Reset on open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/mustafamavedda@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setShowSuccess(true);
        // Reset the form
        e.currentTarget.reset();
        setProjectDetails('');
        setShowPreview(false);
      } else {
        alert('Gönderim sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (error) {
      alert('Bir ağ hatası oluştu, lütfen internet bağlantınızı kontrol edin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl animate-in slide-in-from-bottom-8 fade-in duration-500 overflow-y-auto max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
          Harika bir fikir mi var?
        </h2>
        <p className="text-white/50 text-lg mb-8 font-light">
          Projenizin detaylarını bizimle paylaşın, en kısa sürede profesyonel bir değerlendirme ile size dönüş yapalım.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Honeypot for spam protection */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          {/* Disable Captcha for smoother UX */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Adınız Soyadınız</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">E-posta Adresiniz</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">İhtiyacınız Olan Hizmet</label>
            <select 
              name="service" 
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/40 transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="Mobil Uygulama">Mobil Uygulama (iOS & Android)</option>
              <option value="Web Platformu">Web Platformu / SaaS</option>
              <option value="Kurumsal Yazilim">Kurumsal Yazılım (ERP/CRM)</option>
              <option value="IoT">IoT & Donanım Çözümleri</option>
              <option value="Diger">Diğer</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Proje Detayları</label>
            <textarea 
              name="message"
              rows={4}
              required
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 resize-none"
              placeholder="Fikrinizden, hedeflerinizden ve hayal ettiğiniz özelliklerden bahsedin..."
            ></textarea>
          </div>

          {/* ✨ Live Project Preview */}
          {showPreview && (
            <ProjectPreview service={selectedService} details={projectDetails} />
          )}

          {showSuccess && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl p-4 text-[15px] font-medium flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>
                Talebiniz başarıyla bize ulaştı! Fikrinizi en kısa sürede, büyük bir heyecanla değerlendirip size dönüş yapacağız.
              </span>
            </div>
          )}

          <button 
            type="submit"
            disabled={isSubmitting || showSuccess}
            className="w-full bg-white text-black font-extrabold text-lg rounded-2xl py-4 mt-6 hover:scale-[0.98] hover:bg-gray-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gönderiliyor...
              </>
            ) : showSuccess ? (
              "Gönderildi"
            ) : (
              "Talebi Gönder"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
