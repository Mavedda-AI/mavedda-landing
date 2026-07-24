import React from 'react';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#fcfcfc] text-black">
      {/* Note: Mavedda Header assumes a dark background by default on some pages, 
          but works fine if we just let it be. We can add a top padding to push content below it. */}
      <Header />
      
      <section className="relative w-full pt-32 lg:pt-48 pb-24 overflow-hidden flex-1">
        
        {/* Background wavy lines to match screenshot */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40 z-0 overflow-hidden">
          <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%]">
            <path d="M0 200 C 400 400, 800 0, 1440 200" stroke="#e5e7eb" strokeWidth="1.5" fill="none" />
            <path d="M0 220 C 400 420, 800 20, 1440 220" stroke="#e5e7eb" strokeWidth="1" fill="none" />
            <path d="M0 240 C 400 440, 800 40, 1440 240" stroke="#e5e7eb" strokeWidth="0.5" fill="none" />
            <path d="M0 260 C 400 460, 800 60, 1440 260" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          
          {/* Top Section: Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            
            {/* Left Column: Typography */}
            <div className="flex flex-col items-start justify-center">
              {/* Top diamond pattern */}
              <div className="flex gap-1 mb-6 text-gray-300">
                <svg width="120" height="12" viewBox="0 0 120 12" fill="currentColor">
                  <path d="M6 0L12 6L6 12L0 6L6 0Z" />
                  <path d="M18 0L24 6L18 12L12 6L18 0Z" />
                  <path d="M30 0L36 6L30 12L24 6L30 0Z" />
                  <path d="M42 0L48 6L42 12L36 6L42 0Z" />
                  <path d="M54 0L60 6L54 12L48 6L54 0Z" />
                  <path d="M66 0L72 6L66 12L60 6L66 0Z" />
                  <path d="M78 0L84 6L78 12L72 6L78 0Z" />
                  <path d="M90 0L96 6L90 12L84 6L90 0Z" opacity="0.5"/>
                  <path d="M102 0L108 6L102 12L96 6L102 0Z" opacity="0.3"/>
                  <path d="M114 0L120 6L114 12L108 6L114 0Z" opacity="0.1"/>
                </svg>
              </div>

              <h1 className="text-[2.75rem] md:text-6xl font-bold text-[#1a1a1a] tracking-tight leading-[1.05] mb-6">
                Manage customers across the Lifetime of the product cycle
              </h1>
              
              <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed max-w-lg mb-8">
                Build rich, unified profiles with purchase history, preferences, support interactions, and more so you can personalize experiences and boost retention at every touchpoint.
              </p>
              
              <button className="bg-[#2d3136] text-white hover:bg-black px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-sm">
                Learn More
              </button>
            </div>

            {/* Right Column: Form */}
            <div className="w-full">
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-gray-900">First Name</label>
                    <input type="text" placeholder="James..." className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-gray-900">Last Name</label>
                    <input type="text" placeholder="Smith..." className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors shadow-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-gray-900">Email</label>
                    <input type="email" placeholder="robertapouros@gmail.com" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-gray-900">Country</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors shadow-sm appearance-none cursor-pointer">
                        <option>🇺🇸 USA</option>
                        <option>🇬🇧 UK</option>
                        <option>🇹🇷 Turkey</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-900">Your Role</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-400 focus:text-gray-900 focus:outline-none focus:border-gray-900 transition-colors shadow-sm appearance-none cursor-pointer">
                      <option>Select your role</option>
                      <option>Founder / CEO</option>
                      <option>CTO / Technical Lead</option>
                      <option>Product Manager</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-900">Message</label>
                  <textarea rows={4} placeholder="enter message...." className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors shadow-sm resize-none"></textarea>
                </div>

                <div className="flex justify-end mt-2">
                  <button type="button" className="bg-[#2d3136] text-white font-semibold rounded-xl px-8 py-3 hover:bg-black transition-colors shadow-sm">
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-12"></div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16">
            <div className="flex items-start gap-5">
               <div className="relative shrink-0">
                 <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-14 h-14 rounded-full border border-gray-200 object-cover" />
                 <div className="absolute -bottom-1 -right-1 bg-[#5865F2] w-6 h-6 rounded-md flex items-center justify-center border-2 border-[#fcfcfc]">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                 </div>
               </div>
               <p className="text-[15px] text-[#4a4a4a] italic leading-relaxed pt-1">
                 "We've gained a 360-degree view of our customers. The unified profiles allow us to personalize interactions, resulting in higher customer satisfaction and increased loyalty"
               </p>
            </div>
            
            <div className="flex items-start gap-5">
               <div className="relative shrink-0">
                 <img src="https://i.pravatar.cc/150?img=33" alt="User" className="w-14 h-14 rounded-full border border-gray-200 object-cover" />
                 <div className="absolute -bottom-1 -right-1 bg-[#8c52ff] w-6 h-6 rounded-md flex items-center justify-center border-2 border-[#fcfcfc]">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                 </div>
               </div>
               <p className="text-[15px] text-[#4a4a4a] italic leading-relaxed pt-1">
                 "Now, we truly understand our customers. These unified profiles enable personalized interactions, boosting satisfaction and strengthening loyalty."
               </p>
            </div>
          </div>

          {/* Features Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <div className="text-gray-900 mb-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Customer History</h4>
              <p className="text-sm text-[#4a4a4a] leading-relaxed">Analyze customer behavior across product lines</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="text-gray-900 mb-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3v18h18v-2H5V3H3zm4 14h2v-4H7v4zm4 0h2v-8h-2v8zm4 0h2v-12h-2v12z"/></svg>
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Actionable Insights</h4>
              <p className="text-sm text-[#4a4a4a] leading-relaxed">Employ predictive analytics to optimize sales pipelines</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-gray-900 mb-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/></svg>
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Identify Patterns</h4>
              <p className="text-sm text-[#4a4a4a] leading-relaxed">Utilize live data to improve conversion rates</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-gray-900 mb-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Predictive Analysis</h4>
              <p className="text-sm text-[#4a4a4a] leading-relaxed">Employ real-time data to refine marketing strategies</p>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
