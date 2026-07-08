"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function SlideButton({ text }) {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const thumbRef = useRef(null);
  
  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  
  const handlePointerMove = (e) => {
    if (!isDragging || !containerRef.current || !thumbRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const thumbRect = thumbRef.current.getBoundingClientRect();
    const maxDrag = containerRect.width - thumbRect.width - 8; // 8px for padding (4px each side)
    
    // Calculate new X position based on movement relative to container
    let newX = e.clientX - containerRect.left - (thumbRect.width / 2);
    
    // Constrain the drag
    if (newX < 0) newX = 0;
    if (newX > maxDrag) newX = maxDrag;
    
    setDragX(newX);
    
    // If reached the end, trigger action
    if (newX >= maxDrag * 0.95) {
      setIsDragging(false);
      window.dispatchEvent(new CustomEvent('open-teklif-modal'));
      // Reset after a delay
      setTimeout(() => setDragX(0), 500);
    }
  };
  
  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    // Snap back if not reached the end
    const containerRect = containerRef.current?.getBoundingClientRect();
    const thumbRect = thumbRef.current?.getBoundingClientRect();
    if (containerRect && thumbRect) {
      const maxDrag = containerRect.width - thumbRect.width - 8;
      if (dragX < maxDrag * 0.95) {
        setDragX(0);
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center bg-[#1a1a1a] rounded-[28px] w-[205px] h-[56px] shadow-xl overflow-hidden select-none outline-none ring-0 border-none"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Trailing Background */}
      <div 
        className="absolute left-0 top-0 bottom-0 bg-white/10 rounded-l-[28px]"
        style={{ 
          width: dragX + 32, // thumb center approximately
          transition: isDragging ? 'none' : 'width 0.3s ease-out' 
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pl-10 pr-2">
        <span 
          className="font-semibold text-[15px] sm:text-[16px] tracking-tight text-white"
          style={{ opacity: Math.max(0, 1 - (dragX / 100)) }}
        >
          {text}
        </span>
      </div>
      
      <div 
        ref={thumbRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ transform: `translateX(${dragX}px)`, transition: isDragging ? 'none' : 'transform 0.3s ease-out' }}
        className="absolute left-1 flex items-center justify-center w-[48px] h-[48px] bg-white rounded-[24px] cursor-grab active:cursor-grabbing touch-none shadow-md outline-none border-none ring-0"
      >
        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{
            transform: isDragging 
              ? `translateY(${Math.abs(Math.sin(dragX / 12)) * -4}px) rotate(${Math.sin(dragX / 12) * 15}deg)`
              : 'translateY(0px) rotate(0deg)',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
