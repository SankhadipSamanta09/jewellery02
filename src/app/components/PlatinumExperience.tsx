"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Diamond, Sparkles } from "lucide-react";

interface ProductData {
  id: number;
  src: string;
  name: string;
  price: string;
}

const products: ProductData[] = [
  { id: 1, src: "/pc1.png", name: "Platinum Classic Bangle", price: "₹4,50,335" },
  { id: 2, src: "/pc2.png", name: "Platinum Rose Gold Bangle", price: "₹3,43,620" },
  { id: 3, src: "/pc3.png", name: "Platinum Dual Tone Bangle", price: "₹3,80,811" },
  { id: 4, src: "/pc4.png", name: "Platinum Link Bangle", price: "₹5,98,653" },
  { id: 5, src: "/pc5.png", name: "Platinum Diamond Bangle", price: "₹6,25,000" },
  { id: 6, src: "/pc6.png", name: "Platinum Mesh Bangle", price: "₹4,75,200" },
  { id: 7, src: "/pc7.png", name: "Platinum Crown Bangle", price: "₹7,10,500" },
  { id: 8, src: "/pc8.png", name: "Platinum Infinity Bangle", price: "₹5,45,800" },
  { id: 9, src: "/pc9.png", name: "Platinum Royal Bangle", price: "₹8,25,000" },
];

const PlatinumExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Items per view
  const itemsPerView = isMobile ? 1 : 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  // Auto slide
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  }, [maxIndex]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]);

  const handlePrev = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
    startAutoSlide();
  }, [maxIndex, startAutoSlide]);

  const handleNext = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
    startAutoSlide();
  }, [maxIndex, startAutoSlide]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  // Keyboard nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section className="w-full bg-white py-10 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
            <div className="w-10 sm:w-16 md:w-24 h-[1px] bg-[#8B1A1A]/40" />
            <Diamond className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B1A1A]" />
            <div className="w-10 sm:w-16 md:w-24 h-[1px] bg-[#8B1A1A]/40" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#8B1A1A] mb-2 sm:mb-3">
            Platinum Collection
          </h2>
          <p className="text-[#666] text-sm sm:text-base md:text-lg font-light px-4">
            Timeless Elegance, Unmatched Craftsmanship
          </p>

          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#D97706]/60" />
            <div className="w-14 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D97706]/40 to-transparent" />
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#D97706]/60" />
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-1 sm:-left-2 md:-left-4 top-[35%] sm:top-1/3 md:top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 md:p-3 rounded-full bg-white shadow-md sm:shadow-lg border border-gray-200 text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-1 sm:-right-2 md:-right-4 top-[35%] sm:top-1/3 md:top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 md:p-3 rounded-full bg-white shadow-md sm:shadow-lg border border-gray-200 text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden px-1 sm:px-2 md:px-4">
            <div 
              className={`flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-out ${isAnimating ? "opacity-80" : "opacity-100"}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative flex-shrink-0 group"
                  style={{ width: `${100 / itemsPerView}%` }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-lg bg-[#f5f5f5] mb-2 sm:mb-3">
                    <Image
                      src={product.src}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 25vw"
                      className={`object-cover transition-all duration-700 ease-out ${
                        hoveredId === product.id
                          ? "scale-110 brightness-105"
                          : "scale-100 brightness-95"
                      }`}
                    />

                    {/* Dynamic Overlay on Hover */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
                        hoveredId === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Hover Border */}
                    <div 
                      className={`absolute inset-0 rounded-lg border-2 transition-all duration-500 ${
                        hoveredId === product.id
                          ? "border-[#8B1A1A] shadow-[0_0_20px_rgba(139,26,26,0.2)]"
                          : "border-transparent"
                      }`}
                    />

                    {/* Quick View Button on Hover */}
                    <div 
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                        hoveredId === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white/90 text-[#8B1A1A] font-medium rounded-full text-xs sm:text-sm hover:bg-[#8B1A1A] hover:text-white transition-all duration-300 shadow-lg">
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="text-center px-1">
                    <h3 className="text-[#333] text-xs sm:text-sm md:text-base font-medium mb-0.5 sm:mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="text-[#666] text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3">
                      Price: {product.price}(Approx)
                    </p>
                    <button 
                      className={`px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 border-2 text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase transition-all duration-300 ${
                        hoveredId === product.id
                          ? "bg-[#8B1A1A] text-white border-[#8B1A1A] shadow-lg"
                          : "bg-transparent text-[#8B1A1A] border-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white"
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  setCurrentIndex(index);
                  startAutoSlide();
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#8B1A1A] w-4 sm:w-6"
                    : "bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatinumExperience;