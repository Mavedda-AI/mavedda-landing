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
      <div className="relative w-[220px] h-[440px] bg-[#1c1c1e] rounded-[44px] border-[2px] border-[#3a3a3c] shadow-[0_20px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(114,229,255,0.08)]">
        {/* Side buttons */}
        <div className="absolute -left-[2px] top-[100px] w-[3px] h-[28px] bg-[#3a3a3c] rounded-l" />
        <div className="absolute -left-[2px] top-[140px] w-[3px] h-[44px] bg-[#3a3a3c] rounded-l" />
        <div className="absolute -left-[2px] top-[190px] w-[3px] h-[44px] bg-[#3a3a3c] rounded-l" />
        <div className="absolute -right-[2px] top-[130px] w-[3px] h-[56px] bg-[#3a3a3c] rounded-r" />
        {/* Screen */}
        <div className="absolute inset-[6px] rounded-[38px] overflow-hidden bg-[#000]">
          {/* Dynamic Island */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[76px] h-[22px] bg-black rounded-full z-20 flex items-center justify-center gap-2">
            <div className="w-[6px] h-[6px] rounded-full bg-[#1a1a2e] ring-1 ring-[#2a2a3e]" />
          </div>
          {/* Screen content */}
          <div className="h-full bg-gradient-to-b from-[#0c0c0e] via-[#111114] to-[#0c0c0e]">
            {/* Status bar */}
            <div className="flex justify-between items-center px-7 pt-[14px] pb-1">
              <span className="text-[10px] text-white font-semibold tracking-tight">9:41</span>
              <div className="flex gap-[3px] items-center">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="white" opacity="0.6"><rect x="0" y="4" width="3" height="6" rx="0.5"/><rect x="4" y="2" width="3" height="8" rx="0.5"/><rect x="8" y="0" width="3" height="10" rx="0.5"/></svg>
                <svg width="13" height="10" viewBox="0 0 13 10" fill="white" opacity="0.6"><path d="M0.5 3.5C3.5 0.5 9.5 0.5 12.5 3.5M2.5 5.5C4.5 3.5 8.5 3.5 10.5 5.5M4.5 7.5C5.5 6.5 7.5 6.5 8.5 7.5" stroke="white" strokeWidth="1" fill="none"/><circle cx="6.5" cy="9" r="1"/></svg>
                <div className="w-[18px] h-[9px] border border-white/50 rounded-[2px] ml-0.5 relative">
                  <div className="absolute inset-[1px] right-[3px] bg-[#30d158] rounded-[1px]" />
                  <div className="absolute -right-[2px] top-[2px] w-[1.5px] h-[4px] bg-white/50 rounded-r-sm" />
                </div>
              </div>
            </div>
            {/* App Content */}
            <div className="px-4 pt-6">
              {/* Greeting */}
              <div className="mb-4">
                <p className="text-[9px] text-white/40 mb-0.5">Hoş geldiniz</p>
                <h2 className="text-[16px] text-white font-bold tracking-tight leading-tight">{name}</h2>
              </div>
              {/* Search Bar */}
              <div className="flex items-center gap-2 bg-white/[0.06] rounded-xl px-3 py-2 mb-4 border border-white/[0.04]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span className="text-[9px] text-white/25">Ara...</span>
              </div>
              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gradient-to-br from-[#72E5FF]/15 to-[#72E5FF]/5 rounded-2xl p-3 border border-[#72E5FF]/10">
                  <p className="text-[8px] text-white/40 mb-1">Aktif</p>
                  <p className="text-[18px] text-white font-bold leading-none">247</p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="#30d158"><path d="M5 0L9 6H1L5 0Z"/></svg>
                    <span className="text-[7px] text-[#30d158]">+12%</span>
                  </div>
                </div>
                <div className="bg-white/[0.04] rounded-2xl p-3 border border-white/[0.04]">
                  <p className="text-[8px] text-white/40 mb-1">Gelir</p>
                  <p className="text-[18px] text-white font-bold leading-none">₺48K</p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="#30d158"><path d="M5 0L9 6H1L5 0Z"/></svg>
                    <span className="text-[7px] text-[#30d158]">+8%</span>
                  </div>
                </div>
              </div>
              {/* Feature List */}
              <p className="text-[8px] text-white/30 uppercase tracking-widest font-semibold mb-2 ml-1">Modüller</p>
              <div className="space-y-[6px]">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white/[0.04] rounded-xl px-3 py-2 border border-white/[0.03]">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      i === 0 ? 'bg-[#0a84ff]/20' : 
                      i === 1 ? 'bg-[#bf5af2]/20' : 
                      i === 2 ? 'bg-[#30d158]/20' :
                      'bg-[#ff9f0a]/20'
                    }`}>
                      <div className={`w-3 h-3 rounded ${
                        i === 0 ? 'bg-[#0a84ff]' : i === 1 ? 'bg-[#bf5af2]' : i === 2 ? 'bg-[#30d158]' : 'bg-[#ff9f0a]'
                      }`} />
                    </div>
                    <span className="text-[10px] text-white/80 font-medium truncate flex-1">{f}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.15"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                ))}
              </div>
            </div>
            {/* Tab Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#1c1c1e]/80 backdrop-blur-xl border-t border-white/[0.06] px-3 pb-5 pt-1.5">
              <div className="flex justify-around items-center">
                {[
                  { active: true, label: 'Ana Sayfa' },
                  { active: false, label: 'Keşfet' },
                  { active: false, label: 'Bildirim' },
                  { active: false, label: 'Profil' },
                ].map((tab, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <div className={`w-5 h-5 rounded-md ${tab.active ? 'bg-[#0a84ff]' : 'bg-white/10'}`} />
                    <span className={`text-[7px] ${tab.active ? 'text-[#0a84ff]' : 'text-white/30'}`}>{tab.label}</span>
                  </div>
                ))}
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Browser Mockup ─── */
function BrowserMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[440px] mx-auto">
      <div className="bg-[#1c1c1e] rounded-xl border border-[#3a3a3c]/50 shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(114,229,255,0.06)] overflow-hidden">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#2c2c2e] border-b border-[#3a3a3c]/50">
          <div className="flex gap-[6px] mr-2">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex items-center">
            <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-[5px] flex items-center gap-2 border border-[#3a3a3c]/30">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.3"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              <span className="text-[9px] text-white/40 truncate">{name.toLowerCase().replace(/\s+/g, '-')}.mavedda.com</span>
            </div>
          </div>
        </div>
        {/* Page Content */}
        <div className="bg-[#0c0c0e] min-h-[260px]">
          {/* Nav */}
          <div className="flex justify-between items-center px-5 py-3 border-b border-white/[0.04]">
            <span className="text-[10px] text-white font-bold tracking-tight">{name}</span>
            <div className="flex gap-4">
              {['Ürünler', 'Hakkında', 'İletişim'].map((item, i) => (
                <span key={i} className="text-[8px] text-white/40 hover:text-white/60">{item}</span>
              ))}
              <div className="bg-[#0a84ff] rounded px-2 py-0.5 text-[7px] text-white font-semibold">Başla</div>
            </div>
          </div>
          {/* Hero */}
          <div className="px-5 py-6">
            <div className="flex items-center gap-1 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
              <span className="text-[7px] text-[#30d158] font-medium uppercase tracking-widest">Canlı</span>
            </div>
            <h2 className="text-[18px] text-white font-bold tracking-tight leading-tight mb-1">{name}</h2>
            <div className="flex gap-1 mb-4">
              <div className="w-[180px] h-[5px] rounded bg-white/[0.06]" />
              <div className="w-[100px] h-[5px] rounded bg-white/[0.04]" />
            </div>
            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-2">
              {features.map((f, i) => (
                <div key={i} className="rounded-xl p-3 bg-white/[0.03] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                  <div className={`w-6 h-6 rounded-lg mb-2 flex items-center justify-center ${
                    i === 0 ? 'bg-[#0a84ff]/15' : i === 1 ? 'bg-[#bf5af2]/15' : i === 2 ? 'bg-[#30d158]/15' : 'bg-[#ff9f0a]/15'
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-sm ${
                      i === 0 ? 'bg-[#0a84ff]' : i === 1 ? 'bg-[#bf5af2]' : i === 2 ? 'bg-[#30d158]' : 'bg-[#ff9f0a]'
                    }`} />
                  </div>
                  <p className="text-[9px] text-white/70 font-medium truncate">{f}</p>
                  <div className="w-3/4 h-[3px] rounded bg-white/[0.04] mt-1.5" />
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
    <div className="w-full max-w-[440px] mx-auto">
      <div className="bg-[#1c1c1e] rounded-xl border border-[#3a3a3c]/50 shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(114,229,255,0.06)] overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center px-4 py-2 bg-[#2c2c2e] border-b border-[#3a3a3c]/50">
          <div className="flex gap-[6px] mr-3">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[9px] text-white/50 font-medium">{name} — Panel</span>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0a84ff] to-[#bf5af2] flex items-center justify-center text-[7px] text-white font-bold">M</div>
          </div>
        </div>
        <div className="flex min-h-[260px]">
          {/* Sidebar */}
          <div className="w-[52px] bg-[#1c1c1e] border-r border-white/[0.04] py-3 flex flex-col items-center gap-1.5">
            {['□','◇','△','○','☆'].map((icon, i) => (
              <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] transition-colors ${i === 0 ? 'bg-[#0a84ff]/15 text-[#0a84ff]' : 'text-white/20 hover:text-white/40'}`}>
                {icon}
              </div>
            ))}
          </div>
          {/* Main Content */}
          <div className="flex-1 p-4 bg-[#0c0c0e]">
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-[8px] text-white/30 uppercase tracking-widest font-medium">Genel Bakış</p>
                <p className="text-[13px] text-white font-bold tracking-tight">{name}</p>
              </div>
              <div className="bg-white/[0.06] rounded-lg px-2 py-1 text-[7px] text-white/50">Bu ay ▾</div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              {[
                { label: 'Kullanıcı', value: '2.4K', change: '+12%', color: '#0a84ff' },
                { label: 'Gelir', value: '₺148K', change: '+23%', color: '#30d158' },
                { label: 'Sipariş', value: '856', change: '+7%', color: '#bf5af2' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.03] rounded-lg p-2 border border-white/[0.04]">
                  <p className="text-[7px] text-white/35 mb-0.5">{stat.label}</p>
                  <p className="text-[13px] text-white font-bold leading-none">{stat.value}</p>
                  <span className="text-[7px] font-medium" style={{ color: stat.color }}>{stat.change}</span>
                </div>
              ))}
            </div>
            {/* Mini Chart */}
            <div className="bg-white/[0.02] rounded-lg p-2.5 border border-white/[0.04] mb-3">
              <div className="flex items-end gap-[3px] h-[32px]">
                {[40, 65, 45, 80, 60, 90, 75, 95, 70, 85, 55, 92].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[#0a84ff]/40 to-[#0a84ff]/80" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            {/* Module List */}
            <div className="space-y-1">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/[0.02] rounded-lg px-2.5 py-1.5 border border-white/[0.03]">
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#0a84ff]' : i === 1 ? 'bg-[#30d158]' : i === 2 ? 'bg-[#bf5af2]' : 'bg-[#ff9f0a]'}`} />
                  <span className="text-[8px] text-white/60 truncate flex-1">{f}</span>
                  <span className="text-[7px] text-white/20">→</span>
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
    <div className="w-full max-w-[440px] mx-auto">
      <div className="bg-[#1c1c1e] rounded-xl border border-[#3a3a3c]/50 shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(114,229,255,0.06)] overflow-hidden">
        <div className="flex items-center px-4 py-2 bg-[#2c2c2e] border-b border-[#3a3a3c]/50">
          <div className="flex gap-[6px] mr-3">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[9px] text-white/50 font-medium">{name} — IoT Kontrol</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-[6px] h-[6px] rounded-full bg-[#30d158] animate-pulse" />
            <span className="text-[7px] text-[#30d158] font-medium">Çevrimiçi</span>
          </div>
        </div>
        <div className="bg-[#0c0c0e] p-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-[13px] text-white font-bold tracking-tight">{name}</p>
              <p className="text-[8px] text-white/30">3 cihaz bağlı</p>
            </div>
          </div>
          {/* Sensor Grid */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { label: 'Sıcaklık', value: '24.5°', unit: 'C', color: '#ff9f0a', bar: 62 },
              { label: 'Nem', value: '58', unit: '%', color: '#0a84ff', bar: 58 },
              { label: 'Enerji', value: '3.2', unit: 'kW', color: '#30d158', bar: 45 },
              { label: 'Basınç', value: '1013', unit: 'hPa', color: '#bf5af2', bar: 78 },
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04]">
                <p className="text-[7px] text-white/30 uppercase tracking-wider mb-1">{s.label}</p>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[20px] font-bold leading-none" style={{ color: s.color }}>{s.value}</span>
                  <span className="text-[8px] text-white/30">{s.unit}</span>
                </div>
                <div className="w-full h-[3px] bg-white/[0.06] rounded-full mt-2 overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${s.bar}%`, backgroundColor: s.color }} />
                </div>
              </div>
            ))}
          </div>
          {/* Devices */}
          <p className="text-[7px] text-white/25 uppercase tracking-widest font-semibold mb-2 ml-1">Bağlı Cihazlar</p>
          <div className="space-y-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-3 py-2 border border-white/[0.04]">
                <div className={`w-[6px] h-[6px] rounded-full ${i % 3 === 0 ? 'bg-[#30d158]' : i % 3 === 1 ? 'bg-[#0a84ff]' : 'bg-[#ff9f0a]'}`} />
                <span className="text-[9px] text-white/60 truncate flex-1">{f}</span>
                <span className="text-[7px] text-white/20 bg-white/[0.04] px-1.5 py-0.5 rounded">Aktif</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Generic Mockup ─── */
function GenericMockup({ name, features }: { name: string; features: string[] }) {
  return (
    <div className="w-full max-w-[440px] mx-auto">
      <div className="bg-[#1c1c1e] rounded-xl border border-[#3a3a3c]/50 shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(114,229,255,0.06)] overflow-hidden">
        <div className="flex items-center px-4 py-2 bg-[#2c2c2e] border-b border-[#3a3a3c]/50">
          <div className="flex gap-[6px] mr-3">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[9px] text-white/50 font-medium">{name}</span>
        </div>
        <div className="bg-[#0c0c0e] p-5 min-h-[220px]">
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0a84ff] to-[#bf5af2]" />
              <span className="text-[12px] text-white font-bold tracking-tight">{name}</span>
            </div>
            <div className="flex gap-1">
              <div className="w-[160px] h-[5px] rounded bg-white/[0.06]" />
              <div className="w-[80px] h-[5px] rounded bg-white/[0.04]" />
            </div>
          </div>
          <div className="space-y-2">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/[0.03] rounded-xl px-3.5 py-3 border border-white/[0.04]">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  i === 0 ? 'bg-[#0a84ff]/15' : i === 1 ? 'bg-[#bf5af2]/15' : 'bg-[#30d158]/15'
                }`}>
                  <div className={`w-3.5 h-3.5 rounded ${
                    i === 0 ? 'bg-[#0a84ff]' : i === 1 ? 'bg-[#bf5af2]' : 'bg-[#30d158]'
                  }`} />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-white/80 font-medium">{f}</span>
                  <div className="w-2/3 h-[3px] rounded bg-white/[0.04] mt-1" />
                </div>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.15"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            ))}
          </div>
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
