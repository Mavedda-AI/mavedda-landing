import React from 'react';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import Link from 'next/link';

export default function LegalPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#fafafa]">
      <Header />
      <section className="relative w-full pt-40 lg:pt-48 pb-32 flex flex-col items-center flex-1">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full flex flex-col gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Legal & Security Center
            </h1>
            <p className="text-lg text-gray-600">
              We understand the value of your intellectual property. Your ideas and data are safe with us. Review our legal documentation, security standards, and policies below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Link href="#" className="block border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-sm transition-all bg-white group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Privacy Policy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Understand how we collect, use, and protect your data.</p>
            </Link>
            
            <Link href="#" className="block border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-sm transition-all bg-white group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Terms of Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Read the rules and guidelines for using our platform and services.</p>
            </Link>

            <Link href="#" className="block border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-sm transition-all bg-white group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Security Standards</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Learn about our enterprise-grade security architecture and compliances.</p>
            </Link>

            <Link href="#" className="block border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-sm transition-all bg-white group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">NDA Agreements</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Review our standard mutual Non-Disclosure Agreement templates.</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
