"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Diamond, Sparkles } from "lucide-react";

const images = [
  { id: 1, src: "/Ej1.png", alt: "Exclusive 1" },
  { id: 2, src: "/Ej2.png", alt: "Exclusive 2" },
  { id: 3, src: "/Ej3.png", alt: "Exclusive 3" },
  { id: 4, src: "/Ej4.png", alt: "Exclusive 4" },
  { id: 5, src: "/Ej5.png", alt: "Exclusive 5" },
  { id: 6, src: "/Ej6.png", alt: "Exclusive 6" },
  { id: 7, src: "/Ej7.png", alt: "Exclusive 7" },
  { id: 8, src: "/Ej8.png", alt: "Exclusive 8" },
];

const ExclusiveJewellery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const speedRef = useRef(0.5);

  const animate = useCallback(() => {
    if (!isPaused && trackRef.current) {
      positionRef.current -= speedRef.current;
      const trackWidth = trackRef.current.scrollWidth / 2;

      if (Math.abs(positionRef.current) >= trackWidth) {
        positionRef.current = 0;
      }

      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Double the images for seamless infinite scroll
  const allImages = [...images, ...images];

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">

      {/* Section Header - Screenshot Style */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#8B1A1A] mb-4">
          Exclusive Collections
        </h2>
        <p className="text-[#5C4033] text-lg md:text-xl font-light mb-6">
          Designer handcrafted gold jewellery
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="text-[#D97706]">
              <path d="M0 6L10 0V12L0 6Z" fill="currentColor" opacity="0.6"/>
              <circle cx="20" cy="6" r="3" fill="currentColor" opacity="0.8"/>
              <path d="M40 6L30 0V12L40 6Z" fill="currentColor" opacity="0.6"/>
            </svg>
            <div className="w-24 md:w-32 h-[1px] bg-[#D97706]/60" />
            <Diamond className="w-5 h-5 text-[#D97706]" />
            <div className="w-24 md:w-32 h-[1px] bg-[#D97706]/60" />
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="text-[#D97706] transform rotate-180">
              <path d="M0 6L10 0V12L0 6Z" fill="currentColor" opacity="0.6"/>
              <circle cx="20" cy="6" r="3" fill="currentColor" opacity="0.8"/>
              <path d="M40 6L30 0V12L40 6Z" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(false)}
      >
        {/* Gradient Masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 will-change-transform"
          style={{ transform: "translateX(0px)" }}
        >
          {allImages.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative flex-shrink-0 cursor-pointer"
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredId(item.id);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredId(null);
              }}
              onClick={() => setIsPaused(!isPaused)}
            >
              <div 
                className={`relative aspect-[1/2] w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] overflow-hidden rounded-xl transition-all duration-500 ${
                  hoveredId === item.id 
                    ? "shadow-[0_20px_60px_rgba(217,119,6,0.3)] scale-105 z-20" 
                    : "shadow-lg"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 280px, 320px"
                  className={`object-cover transition-all duration-700 ${
                    hoveredId === item.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Hover Border Glow */}
                <div 
                  className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
                    hoveredId === item.id 
                      ? "border-[#D97706] shadow-[inset_0_0_30px_rgba(217,119,6,0.2)]" 
                      : "border-transparent"
                  }`}
                />

                {/* Shine Effect */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full animate-shine" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pause Indicator */}
      <div className="mt-8 text-center px-4">
        <p className="text-[#999] text-sm">
          {isPaused ? (
            <span className="text-[#D97706] font-medium">Paused — Click any image to resume</span>
          ) : (
            <span>Click any image to pause</span>
          )}
        </p>
      </div>
    </section>
  );
};

export default ExclusiveJewellery;