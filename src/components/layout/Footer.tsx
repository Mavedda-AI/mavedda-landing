'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useTranslation} from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-black text-white pt-24 pb-8 px-6 border-t border-[#222] font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 lg:gap-x-0 mb-16">
          
          {/* Column 1: Brand & Desc (col-span-4) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6 lg:pr-24">
            <Link href="/" className="inline-block">
              <img 
                src="/assets/logo/logo_mavedda.svg" 
                alt="Mavedda" 
                className="h-20 object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
          </div>
          
          {/* Column 2: Product (col-span-2) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-0 md:gap-6 lg:border-l lg:border-white/10 lg:pl-10 border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('product')}
              className="flex items-center justify-between w-full md:cursor-default py-4 md:py-0"
            >
              <h4 className="text-white font-semibold tracking-wide">{t('footer.product.title')}</h4>
              <span className="md:hidden text-gray-400">
                {openSection === 'product' ? '−' : '+'}
              </span>
            </button>
            <ul className={`flex flex-col gap-4 text-sm overflow-hidden transition-all duration-300 ${openSection === 'product' ? 'max-h-64 pt-2' : 'max-h-0 md:max-h-none'}`}>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.product.overview')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.product.howItWorks')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.product.capabilities')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.product.dashboard')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions (col-span-2) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-0 md:gap-6 lg:border-l lg:border-white/10 lg:pl-10 border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('solutions')}
              className="flex items-center justify-between w-full md:cursor-default py-4 md:py-0"
            >
              <h4 className="text-white font-semibold tracking-wide">{t('footer.solutions.title')}</h4>
              <span className="md:hidden text-gray-400">
                {openSection === 'solutions' ? '−' : '+'}
              </span>
            </button>
            <ul className={`flex flex-col gap-4 text-sm overflow-hidden transition-all duration-300 ${openSection === 'solutions' ? 'max-h-64 pt-2' : 'max-h-0 md:max-h-none'}`}>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.solutions.aiServices')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.solutions.webDev')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.solutions.mobileApp')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.solutions.backend')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.solutions.turnkey')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Company (col-span-2) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-0 md:gap-6 lg:border-l lg:border-white/10 lg:pl-10 border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full md:cursor-default py-4 md:py-0"
            >
              <h4 className="text-white font-semibold tracking-wide">{t('footer.company.title')}</h4>
              <span className="md:hidden text-gray-400">
                {openSection === 'company' ? '−' : '+'}
              </span>
            </button>
            <ul className={`flex flex-col gap-4 text-sm overflow-hidden transition-all duration-300 ${openSection === 'company' ? 'max-h-64 pt-2' : 'max-h-0 md:max-h-none'}`}>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.about')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.mission')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.blog')}</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.careers')}</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Us (col-span-2) */}
          <div className="md:col-span-12 lg:col-span-2 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-10 pt-4 md:pt-0">
            <h4 className="text-white font-semibold tracking-wide">{t('footer.contact')}</h4>
            
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:info@mavedda.com" className="hover:text-white transition-colors">info@mavedda.com</a>
              </div>

            </div>
          </div>
        </div>

        {/* Socials & Pre-Footer Actions */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="flex items-center gap-4 text-gray-400">
            {/* Instagram */}
            <a href="#" className="hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Facebook */}
            <a href="#" className="hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-300">Mavedda</span>. {t('footer.bottom.rights')}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <Link href="#" className="font-bold transition-transform group hover:scale-105">
                <span 
                  className="inline-flex whitespace-pre bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'url(/assets/utils/rainbow_utils.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {"Hi AI Its Mavedda".split('').map((char, index) => (
                    <span 
                      key={index} 
                      className="inline-block transition-transform duration-300 group-hover:-translate-y-1.5" 
                      style={{ transitionDelay: `${index * 30}ms` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </Link>
              <span className="text-gray-700">|</span>
            </div>
            <Link href="#" className="hover:text-white transition-colors">{t('footer.bottom.privacy')}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t('footer.bottom.terms')}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t('footer.bottom.cookies')}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t('footer.bottom.security')}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t('footer.bottom.rss')}</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};
