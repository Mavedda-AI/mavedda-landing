import React from 'react';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#fcfcfc]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 lg:pt-48 pb-20 flex flex-col items-center">
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-gray-100 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
            Enterprise Solutions & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Infrastructure</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            From integrating our proprietary AI models to building highly scalable turnkey software and robust cloud architectures, we engineer the future of your enterprise.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="bg-black text-white hover:bg-gray-800 px-8 py-3.5 rounded-full font-semibold transition-all">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="w-full pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-24">
          
          {/* Mavedda AI */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Core Offering</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mavedda AI Provider</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Access our highly optimized proprietary AI models via robust APIs. We provide state-of-the-art Natural Language Processing (NLP), Computer Vision, and Embedding capabilities tailored for enterprise use-cases, ensuring data privacy and uncompromising speed.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  High-throughput, low-latency API endpoints
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Dedicated enterprise instances for maximum security
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Custom model fine-tuning on your proprietary data
                </li>
              </ul>
              <Link href="/pricing" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center gap-1 group">
                View AI Model Pricing
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-8 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
                 <div className="absolute inset-0 bg-black/10 backdrop-blur-3xl"></div>
                 <div className="relative z-10 w-full bg-black/40 border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md">
                   <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     <div className="ml-2 text-xs font-mono text-gray-400">POST /v1/chat/completions</div>
                   </div>
                   <pre className="text-sm font-mono text-green-400 overflow-x-auto">
{`{
  "model": "mavedda-turbo-v2",
  "messages": [
    {"role": "user", "content": "Optimize supply chain routing."}
  ],
  "temperature": 0.2
}`}
                   </pre>
                 </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          {/* Turnkey Software Development */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Development</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Turnkey Software Engineering</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From conceptualization to deployment, we build highly scalable, enterprise-grade web and mobile applications. We handle the entire lifecycle so you can focus on your core business.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Cross-platform mobile apps (React Native, Flutter)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Modern web applications (React, Next.js, Vue)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Robust backend architectures (Node.js, Spring Boot, Go)
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center p-8 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
                {/* Abstract UI representation */}
                <div className="w-full h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex flex-col shadow-2xl overflow-hidden">
                  <div className="h-10 bg-black/20 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                  <div className="flex-1 p-6 flex gap-4">
                    <div className="w-1/3 flex flex-col gap-3">
                      <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
                      <div className="h-4 bg-white/10 rounded-full w-full"></div>
                      <div className="h-4 bg-white/10 rounded-full w-5/6"></div>
                    </div>
                    <div className="w-2/3 flex flex-col gap-4">
                      <div className="h-32 bg-white/10 rounded-lg w-full"></div>
                      <div className="h-32 bg-white/10 rounded-lg w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          {/* Cloud & DevOps Architecture */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Infrastructure</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cloud & DevOps Architecture</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We design, deploy, and manage highly resilient infrastructure. From container orchestration to continuous integration pipelines, we ensure your applications remain highly available and performant globally.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Kubernetes & Docker Orchestration
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  AWS, GCP, and Azure migrations
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  CI/CD Automation & Infrastructure as Code (Terraform)
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center p-8 shadow-2xl shadow-orange-500/20 relative overflow-hidden">
                {/* Abstract Infra representation */}
                <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
                   <div className="bg-black/20 backdrop-blur-md rounded-xl border border-white/20 p-4 flex flex-col justify-between">
                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                     </div>
                     <div className="h-2 w-1/2 bg-white/30 rounded-full mt-auto"></div>
                   </div>
                   <div className="bg-black/20 backdrop-blur-md rounded-xl border border-white/20 p-4 flex flex-col justify-between">
                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                     </div>
                     <div className="h-2 w-1/2 bg-white/30 rounded-full mt-auto"></div>
                   </div>
                   <div className="col-span-2 bg-black/30 backdrop-blur-md rounded-xl border border-white/20 p-4 flex items-center justify-between">
                      <div className="h-2 w-1/3 bg-white/30 rounded-full"></div>
                      <div className="w-16 h-4 bg-green-400/80 rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
