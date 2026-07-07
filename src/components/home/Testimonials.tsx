'use client';
import React, {useRef} from 'react';

const TESTIMONIALS = [
  {
    name: 'Salumeh Companieh',
    title: 'Chief Digital & Information Officer',
    companyLogo: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a0715036c981406df236c8c_logo-cushman-wakefield.svg',
    image: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a08ba95dee55f6fabe86c4e_Salumeh%20Companieh.png',
    quote: "At Cushman & Wakefield, we’re working to redefine the built world and challenge the status quo with cutting-edge data and digital strategies. Our ability to draw meaningful insights and deliver client outcomes has been significantly enhanced by working with Unframe. Our AI+ strategy is focused on bringing fast-paced and innovative solutions to unlock critical insights, and we are aggressively pushing forward with Unframe."
  },
  {
    name: 'Volker Dietzel',
    title: 'CTIO',
    companyLogo: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a0714f3354e54682641dc77_logo-nzz.svg',
    image: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a08ba4b4d8b0919991e610f_Volker%20Dietzel.png',
    quote: "Unframe went into impressive depth to understand our workflows and set an important puzzle piece for NZZ's AI strategy. We are building toward a long-term success story together."
  },
  {
    name: 'Phil Lockhart',
    title: 'Chief Digital Officer and Partner',
    companyLogo: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a071397b3ed18d39e43da23_logo-credera.svg',
    image: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a08bb7d70c57f92cea03876_Phil%20Lockhart%201.png',
    quote: "Scaling AI requires a smart ‘build, buy, or borrow’ approach. For us, Unframe provides a clear ‘buy’ path, with reusable foundations that drastically shorten the road to impact. What sets them apart is their deeply collaborative spirit. Unframe doesn’t just provide a tool; they bring the thoughtfulness and partnership that drive real results."
  },
  {
    name: 'Matt Shelton',
    title: 'Co-Founder and CEO',
    companyLogo: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a0713fd5409f6ce1787d09e_logo-freed-people.svg',
    image: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a08b9fc43dbfe72624b0a5b_Matt%20Shelton.png',
    quote: "Unframe built VISION, a comprehensive case management and image-matching platform specifically designed for missing children investigations. This is Advanced AI focused on what truly matters: saving children’s lives. When a missing child appears in an ad somewhere across the country… we don’t hope we find them. We already have."
  },
  {
    name: 'Jacob Bernstein',
    title: 'Principal',
    companyLogo: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a06cea3c7e62d0aee501545_logo-highland-europe.svg',
    image: 'https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a08ba21b4c1cbdc18e29c3f_Jacob%20Bernstein%202.png',
    quote: "Almost any decision-maker at any company can describe AI use cases that would be game-changing for their business. The challenge is what happens next. Moving from idea to something that actually works in production is where most initiatives stall. Unframe is closing that gap — turning ideas into fully functioning solutions within weeks. We heard the same thing from customer after customer: I didn’t believe it at first. Then I saw it. Now we’re rolling out our next ten use cases."
  },
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#f4f4f4] py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">What our customers say</h2>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[100%] md:min-w-[800px] bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 snap-start shrink-0"
            >
              {/* Image side */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Content side */}
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <div className="h-8 mb-8">
                  {t.companyLogo && <img src={t.companyLogo} alt="Company Logo" className="h-full object-contain object-left" />}
                </div>
                
                <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-900 font-medium mb-8">
                  "{t.quote}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                  <div className="text-gray-500">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
