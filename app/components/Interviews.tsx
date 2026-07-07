"use client";

import { useState } from "react";
import Image from "next/image";

const interviews = [
  {
    id: 1,
    title: "Swipeline Özel: Mavedda'nın Yükselişi",
    image: "/images/interviews/1.jpg",
    videoUrl: "#"
  },
  {
    id: 2,
    title: "Webrazzi Röportajı: Geleceği Kodlamak",
    image: "/images/interviews/2.jpg",
    videoUrl: "#"
  },
  {
    id: 3,
    title: "Girişimci Muhabbeti: Global Başarı Hikayemiz",
    image: "/images/interviews/3.jpg",
    videoUrl: "#"
  }
];

export default function Interviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % interviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + interviews.length) % interviews.length);
  };

  return (
    <section className="w-full bg-[#111111] py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="mb-10 text-center text-[40px] md:text-[64px] font-medium tracking-tight text-white md:mb-16">
          Röportajlar
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Main Video Card */}
          <div className="relative w-full aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl">
            <Image
              src={interviews[currentIndex].image}
              alt={interviews[currentIndex].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
            />
            
            {/* Watch Button Overlay (like Bending Spoons) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 md:left-auto md:right-10 md:translate-x-0">
              <button className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-[100px] text-white font-medium transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                İzle
              </button>
            </div>
          </div>

          {/* Title Below Video */}
          <div className="mt-6 md:mt-8 px-2">
            <h3 className="text-white font-bold text-[20px] md:text-[24px]">
              {interviews[currentIndex].title}
            </h3>
            <p className="mt-2 text-white/50 text-[15px] md:text-[17px] font-medium tracking-wide">
              Yakında yüklenecek
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="mt-12 md:mt-16 flex items-center justify-center gap-6">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
