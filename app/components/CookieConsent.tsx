"use client";

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [profiling, setProfiling] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Cookie Button */}
      <div 
        className="fixed bottom-6 left-6 z-[90] flex items-center group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
      >
        {/* Tooltip */}
        <div 
          className={`absolute left-[72px] whitespace-nowrap bg-[#333] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 pointer-events-none ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
        >
          Çerez tercihlerinizi yönetin
          {/* Arrow */}
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-[#333]"></div>
        </div>
        
        {/* Cookie Icon Button */}
        <div className="w-[60px] h-[60px] bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.233 21.905 10.485 21.728 9.768C21.464 8.694 20.354 8.083 19.266 8.355C18.178 8.627 17.202 9.593 16.92 10.678C16.591 11.95 15.39 12.875 14.025 12.875C12.355 12.875 11 11.52 11 9.85C11 8.485 11.925 7.284 13.197 6.955C14.282 6.673 15.248 5.697 15.52 4.609C15.792 3.521 15.181 2.411 14.107 2.147C13.414 1.977 12.713 1.908 12 2ZM8.5 13.5C7.67157 13.5 7 12.8284 7 12C7 11.1716 7.67157 10.5 8.5 10.5C9.32843 10.5 10 11.1716 10 12C10 12.8284 9.32843 13.5 8.5 13.5ZM13.5 17.5C12.6716 17.5 12 16.8284 12 16C12 15.1716 12.6716 14.5 13.5 14.5C14.3284 14.5 15 15.1716 15 16C15 16.8284 14.3284 17.5 13.5 17.5ZM8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-black w-full max-w-[600px] rounded-xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <span className="font-extrabold tracking-tight text-xl">Mavedda</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M1 13L13 1M1 1L13 13"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4 text-[#555]">Çerez (Cookie) tercihleriniz</h2>
              
              <p className="text-[#666] mb-4 text-sm leading-relaxed">
                Sitemizi güvenli ve kullanıcı dostu tutmak ve aşağıda belirtilen faaliyetleri gerçekleştirmek için çerezler kullanıyoruz.
              </p>
              
              <p className="text-[#666] mb-6 text-sm leading-relaxed">
                Seçenekleri açıp kapatarak çerez tercihlerinizi dilediğiniz zaman özelleştirebilirsiniz.
              </p>
              
              <a href="#" className="text-sm font-medium underline underline-offset-4 decoration-gray-400 hover:text-black mb-10 block">
                Daha fazla bilgi için, Gizlilik ve Çerez Politikamıza göz atın.
              </a>

              <h3 className="text-xl font-bold mb-4 text-[#555]">İzin tercihlerinizi yönetin</h3>
              
              {/* Preferences List */}
              <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200">
                
                <div className="flex items-center justify-between p-4 bg-white">
                  <span className="font-semibold text-gray-700">Teknik çerezler</span>
                  <span className="text-[#0055ff] font-bold text-sm mr-2">Her zaman aktif</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white">
                  <span className="font-semibold text-gray-700">Analitik çerezler</span>
                  <button 
                    onClick={() => setAnalytics(!analytics)}
                    className={`w-12 h-7 rounded-full flex items-center p-1 transition-colors ${analytics ? 'bg-[#4a8a5b]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${analytics ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white">
                  <span className="font-semibold text-gray-700">Profilleme çerezleri</span>
                  <button 
                    onClick={() => setProfiling(!profiling)}
                    className={`w-12 h-7 rounded-full flex items-center p-1 transition-colors ${profiling ? 'bg-[#4a8a5b]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${profiling ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => { setAnalytics(false); setProfiling(false); setIsOpen(false); }}
                className="flex-1 bg-[#1a1a1a] text-white py-3.5 rounded-lg font-semibold hover:bg-black transition-colors"
              >
                Hepsini reddet
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-[#1a1a1a] text-white py-3.5 rounded-lg font-semibold hover:bg-black transition-colors"
              >
                Seçimlerimi onayla
              </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}
