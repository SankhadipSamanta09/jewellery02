"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const desktopImages = [
    { src: "/m1.png", alt: "Banner 1" },
    { src: "/m2.png", alt: "Banner 2" },
    { src: "/m3.png", alt: "Banner 3" },
    { src: "/m4.png", alt: "Banner 4" },
  ];

  const mobileImages = [
    { src: "/b1.png", alt: "Mobile Banner 1" },
    { src: "/b2.png", alt: "Mobile Banner 2" },
    { src: "/b3.png", alt: "Mobile Banner 3" },
    { src: "/b4.png", alt: "Mobile Banner 4" },
  ];

  // Detect Mobile Screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  // Auto Slide: 5 sec wait + 1 sec animation = 6 sec total per slide
  const SLIDE_DURATION = 5000;
  const ANIMATION_DURATION = 1000;

  const startAutoSlide = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION + ANIMATION_DURATION);
  }, [images.length]);

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, startAutoSlide]);

  const goToSlide = useCallback((index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentIndex(index);
  }, []);

  const goToPrev = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  return (
    <section className="relative w-full bg-black">
      {/* Slider Container - full height, no white space */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* Slider Track */}
        <div
          className="flex h-full transition-transform duration-[1000ms] ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={`${isMobile ? "m" : "d"}-${index}`}
              className="relative h-full"
              style={{
                width: `${100 / images.length}%`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 group"
          aria-label="Previous Slide"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 group"
          aria-label="Next Slide"
        >
          <svg
            className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-[#D97706] scale-125"
                    : "bg-white/50 hover:bg-white/80 scale-100"
                }`}
              />
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-full border-2 border-[#D97706]/50 animate-ping" />
              )}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 text-white/60 text-sm font-medium">
          <span className="text-[#D97706] text-lg font-bold">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-white/30">/</span>
          <span>{String(images.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;