import React from 'react';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0a0a0a]">
      <Header />
      <section className="relative w-full pt-40 lg:pt-48 pb-32 flex flex-col items-center flex-1">
        
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c5ea] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7800ff] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Side: Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                  Let&#39;s <span className="bg-gradient-to-r from-[#00c5ea] to-[#7800ff] text-transparent bg-clip-text">Connect</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
                  Ready to build your next big project? Tell us about your hardest operational challenges, and let's craft a tailored AI and software strategy for your enterprise.
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <svg className="w-6 h-6 text-[#00c5ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-400">hello@mavedda.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <svg className="w-6 h-6 text-[#7800ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Visit Us</h3>
                    <p className="text-gray-400">Global Tech Hub<br/>San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c5ea] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c5ea] transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c5ea] transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Project Details</label>
                  <textarea rows={4} placeholder="Tell us about your technical challenges..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c5ea] transition-colors resize-none"></textarea>
                </div>

                <button type="button" className="w-full bg-white text-black font-semibold rounded-xl px-4 py-4 mt-2 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
