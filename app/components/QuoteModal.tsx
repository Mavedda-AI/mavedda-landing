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
    <div className="flex justify-center items-center py-6 perspective-[2000px]">
      {/* 3D Angled Phone Container */}
      <div className="relative w-[240px] h-[480px] group transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu hover:scale-[1.02]"
           style={{ transform: 'rotateY(-15deg) rotateX(10deg) rotateZ(-2deg)', transformStyle: 'preserve-3d' }}>
        
        {/* Massive 3D Drop Shadow */}
        <div className="absolute inset-0 bg-black/60 blur-[40px] rounded-[50px] transform-gpu translate-y-[30px] translate-x-[-20px] scale-[0.98] opacity-100 transition-all duration-1000 group-hover:translate-y-[40px] group-hover:blur-[50px]" style={{ transform: 'translateZ(-50px)' }} />

        {/* Titanium Frame */}
        <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-[#8a8a8e] via-[#3a3a3c] to-[#8a8a8e] p-[3px] shadow-[inset_0_0_2px_rgba(255,255,255,0.3)]">
          
          {/* Side buttons (left side) */}
          <div className="absolute -left-[3px] top-[110px] w-[3px] h-[32px] bg-gradient-to-r from-[#1c1c1e] to-[#4a4a4c] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />
          <div className="absolute -left-[3px] top-[160px] w-[3px] h-[48px] bg-gradient-to-r from-[#1c1c1e] to-[#4a4a4c] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />
          <div className="absolute -left-[3px] top-[220px] w-[3px] h-[48px] bg-gradient-to-r from-[#1c1c1e] to-[#4a4a4c] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />
          {/* Power button (right side) */}
          <div className="absolute -right-[3px] top-[150px] w-[3px] h-[64px] bg-gradient-to-l from-[#1c1c1e] to-[#4a4a4c] rounded-r-md shadow-[2px_0_4px_rgba(0,0,0,0.5)]" />

          {/* Screen Bezel (Inner black border) */}
          <div className="absolute inset-[1px] rounded-[48px] bg-black p-[5px]">
            
            {/* The Actual Screen Content */}
            <div className="relative w-full h-full rounded-[43px] overflow-hidden bg-[#000]">
              
              {/* Wallpaper / Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#111116] via-[#08080a] to-[#111116]">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_top,#72E5FF_0%,transparent_70%)] opacity-10 mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_bottom_right,#bf5af2_0%,transparent_60%)] opacity-10 mix-blend-screen" />
              </div>

              {/* Dynamic Island */}
              <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[84px] h-[26px] bg-black rounded-full z-40 flex items-center justify-between px-2.5 ring-1 ring-white/[0.05] shadow-[0_4px_10px_rgba(0,0,0,0.5)] backdrop-blur-md">
                <div className="w-[10px] h-[10px] rounded-full bg-[#050508] ring-1 ring-white/[0.15] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#1a1a4a] blur-[0.5px]" />
                </div>
                <div className="w-[5px] h-[5px] rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse" />
              </div>

              {/* Status bar */}
              <div className="flex justify-between items-center px-7 pt-[16px] pb-2 relative z-30">
                <span className="text-[11px] text-white font-bold tracking-tight">9:41</span>
                <div className="flex gap-[5px] items-center">
                  <svg width="15" height="11" viewBox="0 0 14 10" fill="white"><rect x="0" y="4" width="3" height="6" rx="0.5"/><rect x="4" y="2" width="3" height="8" rx="0.5"/><rect x="8" y="0" width="3" height="10" rx="0.5"/></svg>
                  <svg width="14" height="11" viewBox="0 0 13 10" fill="white"><path d="M0.5 3.5C3.5 0.5 9.5 0.5 12.5 3.5M2.5 5.5C4.5 3.5 8.5 3.5 10.5 5.5M4.5 7.5C5.5 6.5 7.5 6.5 8.5 7.5" stroke="white" strokeWidth="1.2" fill="none"/><circle cx="6.5" cy="9" r="1.5"/></svg>
                  <div className="w-[22px] h-[11px] border-[1.5px] border-white rounded-[4px] ml-0.5 relative flex items-center p-[1px]">
                    <div className="w-full h-full bg-white rounded-[1px]" />
                    <div className="absolute -right-[3px] top-[2px] w-[2px] h-[4px] bg-white rounded-r-sm" />
                  </div>
                </div>
              </div>

              {/* Ultra Premium UI Content */}
              <div className="px-5 pt-8 relative z-20 h-full flex flex-col">
                
                {/* Header Profile */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] text-white/50 font-medium mb-0.5 tracking-wide">İyi günler</p>
                    <h2 className="text-[18px] text-white font-bold tracking-tight leading-tight">{name}</h2>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#72E5FF] to-[#0a84ff] p-[1.5px] shadow-[0_0_15px_rgba(114,229,255,0.3)]">
                    <div className="w-full h-full rounded-full bg-[#1c1c1e] flex items-center justify-center overflow-hidden border border-black">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                  </div>
                </div>
                
                {/* Hero Glass Card (Main Metric) */}
                <div className="relative rounded-[24px] p-5 mb-6 overflow-hidden border border-white/[0.15] shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                  {/* Glass Background */}
                  <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl" />
                  {/* Inner Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#72E5FF]/20 blur-[30px] rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#bf5af2]/20 blur-[30px] rounded-full" />
                  
                  <div className="relative z-10">
                    <p className="text-[10px] text-white/60 font-medium mb-1">Toplam Bakiye</p>
                    <h3 className="text-[28px] text-white font-extrabold tracking-tighter mb-3">₺148,250<span className="text-[16px] text-white/40">.00</span></h3>
                    
                    {/* Fake Sparkline Chart */}
                    <div className="h-[24px] w-full flex items-end justify-between gap-1 mt-2">
                      {[30, 45, 25, 60, 40, 75, 50, 90, 65, 85, 70, 100].map((h, i) => (
                        <div key={i} className="w-full bg-gradient-to-t from-[#72E5FF]/80 to-[#0a84ff] rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Modular List (Features) */}
                <div className="flex justify-between items-end mb-3">
                  <p className="text-[11px] text-white font-bold tracking-tight">Hızlı İşlemler</p>
                  <span className="text-[9px] text-[#72E5FF] font-medium">Tümü</span>
                </div>
                
                <div className="space-y-2.5 flex-1 overflow-hidden">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3.5 bg-white/[0.04] backdrop-blur-md rounded-[18px] p-3 border border-white/[0.06] hover:bg-white/[0.08] transition-colors">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] ${
                        i === 0 ? 'bg-gradient-to-br from-[#0a84ff] to-[#005bb5]' : 
                        i === 1 ? 'bg-gradient-to-br from-[#bf5af2] to-[#7b2cb5]' : 
                        i === 2 ? 'bg-gradient-to-br from-[#30d158] to-[#1a8a36]' :
                        'bg-gradient-to-br from-[#ff9f0a] to-[#cc7b00]'
                      }`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[12px] text-white font-bold tracking-tight truncate">{f}</p>
                        <p className="text-[9px] text-white/50 mt-0.5 truncate">Modül aktif ve çalışıyor</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elegant Glass Tab Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#111116]/80 backdrop-blur-2xl border-t border-white/[0.1] px-5 pb-[28px] pt-4 z-40">
                <div className="flex justify-between items-center px-2">
                  {[
                    { icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>, active: true },
                    { icon: <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>, active: false },
                    { icon: <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>, active: false, highlight: true },
                    { icon: <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>, active: false },
                    { icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>, active: false },
                  ].map((tab, i) => (
                    <div key={i} className="flex justify-center items-center">
                      {tab.highlight ? (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#72E5FF] to-[#0a84ff] text-white flex items-center justify-center shadow-[0_0_20px_rgba(114,229,255,0.4)] -mt-4 ring-4 ring-[#111116]">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{tab.icon}</svg>
                        </div>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={tab.active ? "#72E5FF" : "rgba(255,255,255,0.3)"} strokeWidth={tab.active ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors">
                          {tab.icon}
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                {/* Home Indicator */}
                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
              </div>

              {/* Diagonal Screen Glare (Top Layer) */}
              <div className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.15] to-transparent transform -skew-x-12 translate-x-[-100%] animate-[glare_6s_infinite_ease-in-out]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Required style for glare animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glare {
          0% { transform: skewX(-12deg) translateX(-150%); }
          20% { transform: skewX(-12deg) translateX(150%); }
          100% { transform: skewX(-12deg) translateX(150%); }
        }
      `}} />
    </div>
  );
}

/* ─── Browser Mockup ─── */
function BrowserMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[480px] mx-auto py-6 perspective-[2000px]">
      <div className="bg-[#1e1e1e] rounded-[20px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(114,229,255,0.1)] overflow-hidden transform-gpu transition-transform duration-1000 hover:scale-[1.02]"
           style={{ transform: 'rotateX(8deg) rotateY(-5deg)', transformStyle: 'preserve-3d' }}>
        
        {/* Browser Chrome */}
        <div className="h-[44px] bg-gradient-to-b from-[#3a3a3c] to-[#2c2c2e] border-b border-black/50 flex items-center px-4 relative">
          {/* Traffic Lights */}
          <div className="flex gap-[8px] absolute left-4 z-10">
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] border border-black/20 shadow-inner" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#febc2e] border border-black/20 shadow-inner" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#28c840] border border-black/20 shadow-inner" />
          </div>
          {/* URL Bar */}
          <div className="mx-auto w-[60%] h-[28px] bg-black/40 rounded-lg border border-white/5 flex items-center justify-center gap-2 px-3 shadow-inner">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.4"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            <span className="text-[11px] text-white/50 tracking-wide font-medium">{name.toLowerCase().replace(/\s+/g, '-')}.mavedda.com</span>
          </div>
        </div>
        
        {/* Page Content */}
        <div className="bg-[#0c0c0e] h-[300px] relative overflow-hidden">
          {/* Glowing Orbs Background */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#0a84ff]/20 blur-[60px] rounded-full mix-blend-screen" />
          <div className="absolute top-20 -right-20 w-80 h-80 bg-[#bf5af2]/15 blur-[60px] rounded-full mix-blend-screen" />
          
          <div className="relative z-10 p-8 flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-[14px] text-white font-black tracking-tighter">{name.toUpperCase()}</span>
              <div className="flex gap-6">
                {['Özellikler', 'Çözümler', 'Fiyatlandırma'].map((item, i) => (
                  <span key={i} className="text-[11px] text-white/60 font-medium hover:text-white cursor-pointer transition-colors">{item}</span>
                ))}
                <div className="bg-white text-black rounded-full px-4 py-1.5 text-[11px] font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]">Giriş Yap</div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="max-w-[70%]">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4 backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#72E5FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#72E5FF]"></span>
                </span>
                <span className="text-[9px] text-[#72E5FF] font-bold tracking-widest uppercase">Yeni Nesil Platform</span>
              </div>
              <h1 className="text-[28px] text-white font-extrabold tracking-tight leading-[1.1] mb-3">
                İşinizi geleceğe taşıyan <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#72E5FF] to-[#bf5af2]">akıllı çözümler</span>
              </h1>
              <p className="text-[11px] text-white/50 leading-relaxed max-w-[80%] mb-6">
                {name} projesi için özel olarak tasarlanmış, yüksek performanslı ve güvenli modern web altyapısı.
              </p>
            </div>
            
            {/* Floating Feature Cards */}
            <div className="absolute right-8 bottom-8 flex gap-4">
              {features.slice(0, 2).map((f, i) => (
                <div key={i} className="w-[140px] bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-transform duration-500">
                  <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center ${i === 0 ? 'bg-[#0a84ff]/20 text-[#0a84ff]' : 'bg-[#bf5af2]/20 text-[#bf5af2]'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <h4 className="text-[12px] text-white font-bold mb-1">{f}</h4>
                  <div className="h-1 w-8 bg-white/20 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Mockup ─── */
function DashboardMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[480px] mx-auto py-6 perspective-[2000px]">
      <div className="bg-[#111114] rounded-[24px] border border-[#2a2a2c] shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(114,229,255,0.05)] overflow-hidden transform-gpu transition-transform duration-1000 hover:scale-[1.02]"
           style={{ transform: 'rotateY(10deg) rotateX(5deg)', transformStyle: 'preserve-3d' }}>
        
        {/* App Frame Top */}
        <div className="h-[40px] bg-[#1a1a1c] border-b border-white/5 flex items-center px-4">
          <div className="flex gap-[6px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto text-[11px] text-white/40 font-medium tracking-wide">Enterprise ERP — {name}</div>
        </div>

        <div className="flex h-[320px]">
          {/* Sidebar */}
          <div className="w-[64px] bg-[#1a1a1c]/50 backdrop-blur-md border-r border-white/5 py-6 flex flex-col items-center gap-4 relative z-20">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a84ff] to-[#bf5af2] mb-4 flex items-center justify-center shadow-[0_0_15px_rgba(10,132,255,0.3)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            {['grid','pie-chart','users','settings'].map((icon, i) => (
              <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${i === 0 ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/70'}`}>
                {i === 0 ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> :
                 i === 1 ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg> :
                 i === 2 ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> :
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>}
              </div>
            ))}
          </div>
          
          {/* Main Dashboard Area */}
          <div className="flex-1 p-6 relative">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#0a84ff]/10 to-transparent blur-[50px] pointer-events-none" />
            
            <header className="flex justify-between items-center mb-6 relative z-10">
              <div>
                <h2 className="text-[20px] text-white font-bold tracking-tight">Genel Bakış</h2>
                <p className="text-[11px] text-white/50">{name} sistem verileri</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[11px] text-white/70">Son 30 Gün ▾</div>
                <div className="w-8 h-8 rounded-full bg-[#3a3a3c] border-[2px] border-[#0a84ff] overflow-hidden" />
              </div>
            </header>

            {/* Metric Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
              {[
                { title: 'Toplam Ciro', value: '₺2.4M', trend: '+14.5%', color: 'from-[#0a84ff]/20 to-[#0a84ff]/0', line: '#0a84ff' },
                { title: 'Aktif Kullanıcı', value: '18.2K', trend: '+5.2%', color: 'from-[#30d158]/20 to-[#30d158]/0', line: '#30d158' },
                { title: 'Dönüşüm Oranı', value: '%4.8', trend: '+1.2%', color: 'from-[#bf5af2]/20 to-[#bf5af2]/0', line: '#bf5af2' },
              ].map((card, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 backdrop-blur-sm relative overflow-hidden">
                  <div className={`absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t ${card.color}`} />
                  <p className="text-[10px] text-white/50 font-medium mb-1">{card.title}</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-[18px] text-white font-bold">{card.value}</h3>
                    <span className="text-[9px] font-bold text-green-400">{card.trend}</span>
                  </div>
                  {/* Micro Chart */}
                  <div className="h-[20px] mt-2 flex items-end gap-1">
                    {[3,5,4,7,5,8,6,9,7,10].map((h, j) => (
                      <div key={j} className="flex-1 rounded-t-sm" style={{ height: `${h*10}%`, backgroundColor: card.line, opacity: 0.5 + (j*0.05) }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Data Table Area */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 relative z-10">
              <h3 className="text-[12px] text-white font-bold mb-3">Sistem Modülleri</h3>
              <div className="space-y-2">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0a84ff] shadow-[0_0_8px_#0a84ff]" />
                      <span className="text-[11px] text-white/80 font-medium">{f}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] text-white/40">100% Optimizasyon</span>
                      <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[9px] font-bold">Aktif</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── IoT Mockup ─── */
function IoTMockup({ name, features }: { name: string; features: string[] }) {
  // Similar ultra-premium treatment for IoT
  return (
    <div className="w-full max-w-[480px] mx-auto py-6 perspective-[2000px]">
      <div className="bg-[#0f1115] rounded-[24px] border border-cyan-500/20 shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(6,182,212,0.15)] overflow-hidden transform-gpu transition-transform duration-1000 hover:scale-[1.02]"
           style={{ transform: 'rotateX(15deg)', transformStyle: 'preserve-3d' }}>
        
        {/* Holographic Header */}
        <div className="h-[50px] border-b border-cyan-500/20 flex items-center justify-between px-6 bg-gradient-to-r from-cyan-950/40 to-transparent relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
            </div>
            <span className="text-[12px] text-cyan-50 font-bold tracking-widest uppercase">{name} NETWORK</span>
          </div>
          <div className="flex gap-2">
            {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full" />)}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-6 relative">
          {/* Radar background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/10 rounded-full flex items-center justify-center">
            <div className="w-[300px] h-[300px] border border-cyan-500/10 rounded-full flex items-center justify-center">
              <div className="w-[200px] h-[200px] border border-cyan-500/20 rounded-full" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-[1px] bg-cyan-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 h-full w-[1px] bg-cyan-500/10" />

          <div className="relative z-10 grid grid-cols-2 gap-4 mb-4">
            {[
              { label: 'SİSTEM ISISI', value: '24.5', unit: '°C', color: 'text-orange-400', glow: 'shadow-[0_0_20px_rgba(251,146,60,0.2)]', border: 'border-orange-500/30' },
              { label: 'AĞ DURUMU', value: '98', unit: 'mbps', color: 'text-cyan-400', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]', border: 'border-cyan-500/30' },
              { label: 'GÜÇ TÜKETİMİ', value: '1.2', unit: 'kW', color: 'text-green-400', glow: 'shadow-[0_0_20px_rgba(74,222,128,0.2)]', border: 'border-green-500/30' },
              { label: 'VERİ AKIŞI', value: '14.2', unit: 'TB/s', color: 'text-purple-400', glow: 'shadow-[0_0_20px_rgba(192,132,252,0.2)]', border: 'border-purple-500/30' },
            ].map((s, i) => (
              <div key={i} className={`bg-black/40 backdrop-blur-sm rounded-xl p-4 border ${s.border} ${s.glow} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-inherit opacity-30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-r border-t border-inherit opacity-30" />
                
                <p className="text-[9px] text-white/50 tracking-widest font-mono mb-2">{s.label}</p>
                <div className="flex items-baseline gap-1 font-mono">
                  <span className={`text-[24px] font-bold ${s.color}`}>{s.value}</span>
                  <span className="text-[10px] text-white/40">{s.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Device Nodes */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
            <p className="text-[9px] text-cyan-500/70 tracking-widest font-mono mb-3 uppercase">Aktif Nodelar</p>
            <div className="space-y-2">
              {features.map((f, i) => (
                <div key={i} className="flex items-center justify-between bg-cyan-950/20 px-3 py-2 rounded border border-cyan-500/10 font-mono">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-sm shadow-[0_0_5px_#22d3ee]" />
                    <span className="text-[11px] text-cyan-50">{f}</span>
                  </div>
                  <span className="text-[9px] text-cyan-400/60">ONLINE</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Generic Mockup ─── */
function GenericMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[440px] mx-auto py-6 perspective-[2000px]">
      <div className="bg-gradient-to-br from-[#1c1c1e] to-[#0c0c0e] rounded-[24px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(114,229,255,0.06)] p-8 transform-gpu transition-transform duration-1000 hover:scale-[1.02]"
           style={{ transform: 'rotateX(5deg) rotateY(5deg)', transformStyle: 'preserve-3d' }}>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0a84ff] to-[#bf5af2] mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(10,132,255,0.3)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        </div>
        <h2 className="text-[24px] text-white font-extrabold tracking-tight mb-2">{name}</h2>
        <p className="text-[12px] text-white/50 mb-8 max-w-[80%]">Sizin için özel olarak hazırlanacak dijital çözümün temel mimarisi.</p>
        
        <div className="space-y-3">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 font-bold text-[12px]">{i+1}</div>
              <span className="text-[13px] text-white/90 font-medium">{f}</span>
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
      setShowSuccess(false);
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
          <input type="text" name="_honey" style={{ display: 'none' }} />
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
