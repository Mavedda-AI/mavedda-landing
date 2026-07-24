import React from 'react';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#fafafa]">
      <Header />
      <section className="relative w-full pt-40 lg:pt-48 pb-32 flex flex-col items-center flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Meet the Mavedda Team
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We are a collective of engineers, AI researchers, and digital builders passionate about creating scalable, high-performance software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Halil İbrahim Direktör */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Halil İbrahim Direktör</h3>
                <p className="text-sm font-semibold text-[#00c5ea] mb-4">Software Architect & Embedded Systems Engineer</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Specializes in designing highly scalable microservices, IoT solutions, and robust enterprise infrastructures. He drives Mavedda's technical vision with deep expertise in Node.js, Docker, and distributed architectures.
                </p>
              </div>
            </div>

            {/* Mustafa Mavedda */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Mustafa Mavedda</h3>
                <p className="text-sm font-semibold text-[#7800ff] mb-4">Chairman of the Board & Application Developer</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  A visionary developer and entrepreneur who brings digital products to life. He leads Mavedda’s mobile and cross-platform app development, building successful commercial platforms and seamless user experiences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link href="/demo" className="bg-gray-900 text-white hover:bg-black px-8 py-3 rounded-full font-semibold transition-all">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
