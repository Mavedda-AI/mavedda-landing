"use client";

import React, {useState} from "react";
import {useLanguage} from "@/hooks/useTranslation";

export const FloatingControls = () => {
  const { language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(true); // Default to dark based on current design
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-0 z-50 flex flex-col items-start gap-4">
      {/* Settings Panel */}
      <div 
        className={`transition-all duration-300 origin-bottom-left ${isSettingsOpen ? 'opacity-100 translate-x-4 scale-100' : 'opacity-0 -translate-x-4 scale-95 pointer-events-none'}`}
      >
        <div className="bg-[#0b3566] text-white rounded-xl shadow-2xl p-2 flex items-center gap-3 backdrop-blur-md bg-opacity-95">
          {/* Settings Icon */}
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-default">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
          
          <div className="w-[1px] h-6 bg-white/20"></div>
          
          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          <div className="w-[1px] h-6 bg-white/20"></div>

          {/* Globe & Language Switcher */}
          <div className="flex items-center gap-3 pl-2 pr-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            
            <div className="flex bg-white/10 rounded-lg p-0.5 relative">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-colors z-10 ${language === 'en' ? 'text-blue-900' : 'text-white/70 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-colors z-10 ${language === 'tr' ? 'text-blue-900' : 'text-white/70 hover:text-white'}`}
              >
                TR
              </button>
              <button 
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-colors z-10 ${language === 'de' ? 'text-blue-900' : 'text-white/70 hover:text-white'}`}
              >
                DE
              </button>
              
              {/* Animated Background Pill */}
              <div 
                className="absolute top-0.5 bottom-0.5 bg-white rounded-md transition-all duration-300 ease-out shadow-sm"
                style={{
                  width: 'calc(33.33% - 2px)',
                  left: language === 'en' ? '2px' : language === 'tr' ? 'calc(33.33% + 1px)' : 'calc(66.66% + 0px)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Button */}
      <button 
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className="bg-[#1a1a1a] text-white p-4 rounded-r-2xl shadow-lg hover:bg-[#2a2a2a] transition-all flex items-center justify-center relative overflow-hidden group border border-l-0 border-white/10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
          <path d="M8.5 8.5v.01"></path>
          <path d="M16 12.5v.01"></path>
          <path d="M12 16v.01"></path>
          <path d="M11 11v.01"></path>
          <path d="M7 14v.01"></path>
        </svg>
      </button>
    </div>
  );
};
