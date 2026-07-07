import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-8 px-6 border-t border-[#222] font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Desc (col-span-3) */}
          <div className="md:col-span-12 lg:col-span-3 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <img src="/assets/trusted-logo/logo-white.png" alt="Mavedda" className="h-10 object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              AI-powered platform providing turnkey software solutions including web, mobile, backend systems, and specialized AI services.
            </p>
          </div>
          
          {/* Column 2: Product (col-span-2) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-semibold tracking-wide">Product</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions (col-span-2) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-semibold tracking-wide">Solutions</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Backend Systems</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Turnkey Projects</Link></li>
            </ul>
          </div>

          {/* Column 4: Company (col-span-2) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-semibold tracking-wide">Company</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Our Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Us (col-span-3) */}
          <div className="md:col-span-12 lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-semibold tracking-wide">Contact Us</h4>
            
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
            © {new Date().getFullYear()} <span className="font-semibold text-gray-300">Mavedda</span>. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
            <Link href="#" className="hover:text-white transition-colors">RSS Feed</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};
