"use client";

import { useRef, useEffect, useState } from 'react';

export default function ScrollRevealText({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aşağı kaydırırken ekrana girdiğinde tetiklenir
        if (entry.isIntersecting) {
          setIsVisible(true);
          // "yukarı kaydırdığımda görünür olsun" (Bir kere açılınca öyle kalsın)
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1, 
        rootMargin: "0px 0px -15% 0px" // Ekranın altından %15 yukarı geldiğinde animasyon başlasın
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Metni kelimelere böl
  const words = typeof children === 'string' ? children.split(' ') : [];

  return (
    <p 
      ref={ref}
      className="mb-14 text-[32px] font-medium tracking-tight text-white md:mb-24 md:text-[64px] leading-[1.2]"
    >
      {words.length > 0 ? words.map((word, index) => (
        <span 
          key={index}
          className="inline-block transition-all duration-[800ms] ease-out mr-[0.25em] mb-[0.1em]"
          style={{
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(12px)',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${index * 40}ms`
          }}
        >
          {word}
        </span>
      )) : (
        <span style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}>{children}</span>
      )}
    </p>
  );
}
