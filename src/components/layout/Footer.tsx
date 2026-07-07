import React from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/Button';

const footerLinks = {
  product: [
    { label: 'Platform', href: '#' },
    { label: 'Security', href: '#' },
  ],
  alternatives: [
    { label: 'Build vs. Unframe', href: '#' },
    { label: 'Build vs. Buy', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Locations', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Customers', href: '#' },
    { label: 'Workshop', href: '#' },
  ],
  support: [
    { label: 'Customer Support', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  legal: [
    { label: 'Legal', href: '#' },
    { label: 'Cookie Settings', href: '#' },
  ]
};

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-8 px-6 border-t border-[#222]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Left Column (Brand & Contact) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-1 font-heading text-3xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">U</span>
              nframe
            </Link>
            
            <div className="flex items-center gap-4 text-white">
              <Link href="#" className="hover:text-gray-400 transition-colors bg-white/10 p-2 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors bg-white/10 p-2 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </Link>
            </div>

            <div>
              <Button variant="primary" className="font-semibold text-black hover:bg-gray-200 bg-white">
                Contact us
              </Button>
            </div>

            {/* Badges (Placeholders) */}
            <div className="flex items-center gap-3 mt-4 opacity-50">
              <div className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-[8px] text-center p-1 leading-tight">AICPA<br/>SOC</div>
              <div className="w-10 h-12 border border-gray-500 rounded-md flex items-center justify-center text-[8px] text-center p-1 leading-tight">HIPAA<br/>COMPLIANT</div>
              <div className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-[10px] font-bold">ISO<br/><span className="text-[6px] font-normal">27001</span></div>
              <div className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-[10px] font-bold">ISO<br/><span className="text-[6px] font-normal">9001</span></div>
            </div>
          </div>

          {/* Right Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
            
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-gray-500 text-xs font-semibold mb-4 tracking-wider uppercase">Product</h4>
                <ul className="flex flex-col gap-3">
                  {footerLinks.product.map(link => (
                    <li key={link.label}><Link href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gray-500 text-xs font-semibold mb-4 tracking-wider uppercase">Alternatives</h4>
                <ul className="flex flex-col gap-3">
                  {footerLinks.alternatives.map(link => (
                    <li key={link.label}><Link href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-gray-500 text-xs font-semibold mb-4 tracking-wider uppercase">Company</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map(link => (
                  <li key={link.label}><Link href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-500 text-xs font-semibold mb-4 tracking-wider uppercase">Resources</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.resources.map(link => (
                  <li key={link.label}><Link href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-gray-500 text-xs font-semibold mb-4 tracking-wider uppercase">Support</h4>
                <ul className="flex flex-col gap-3">
                  {footerLinks.support.map(link => (
                    <li key={link.label}><Link href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gray-500 text-xs font-semibold mb-4 tracking-wider uppercase">Legal</h4>
                <ul className="flex flex-col gap-3">
                  {footerLinks.legal.map(link => (
                    <li key={link.label}><Link href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>

        <div className="pt-8 border-t border-[#222] text-xs text-gray-400">
          © 2026 Unframe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
