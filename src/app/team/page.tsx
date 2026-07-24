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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team placeholders */}
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div key={member} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member Name</h3>
                  <p className="text-sm font-medium text-blue-600 mb-4">Position / Role</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Brief description of the team member's expertise and their role in building enterprise-grade software and AI solutions at Mavedda.
                  </p>
                </div>
              </div>
            ))}
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
