"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Diamond, Sparkles } from "lucide-react";

const collections = [
  {
    id: 1,
    src: "/Dc1.png",
    name: "Diamond Necklace",
  },
  {
    id: 2,
    src: "/Dc2.png",
    name: "Diamond Ring",
  },
  {
    id: 3,
    src: "/Dc3.png",
    name: "Diamond Earrings",
  },
  {
    id: 4,
    src: "/Dc4.png",
    name: "Diamond Pendant",
  },
];

const DiamondJewellery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0a0a0a] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Top Diamond Icon */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#D97706]/60" />
            <Diamond className="w-6 h-6 text-[#D97706]" />
            <div className="w-12 h-[1px] bg-[#D97706]/60" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#D97706] mb-3">
            Diamond Collections
          </h2>

          {/* Subtitle */}
          <p className="text-[#c0c0c0] text-base md:text-lg font-light tracking-wide">
            Adding dazzle to your look!
          </p>

          {/* Decorative Divider */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D97706]/60" />
            <div className="w-20 md:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D97706]/60 to-transparent" />
            <Sparkles className="w-4 h-4 text-[#D97706]/60" />
          </div>
        </div>

        {/* Grid Container - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div 
                className={`relative aspect-square overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
                  hoveredId === item.id
                    ? "shadow-[0_25px_80px_rgba(217,119,6,0.25)] scale-[1.02]"
                    : "shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                }`}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={`object-cover transition-all duration-700 ease-out ${
                    hoveredId === item.id
                      ? "scale-110 brightness-110"
                      : "scale-100 brightness-90"
                  }`}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover Black Shadow Effect */}
                <div 
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Gold Border on Hover */}
                <div 
                  className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                    hoveredId === item.id
                      ? "border-[#D97706] shadow-[inset_0_0_40px_rgba(217,119,6,0.15)]"
                      : "border-transparent"
                  }`}
                />

                {/* Shine Sweep Effect */}
                <div 
                  className={`absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Floating Particles on Hover */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-float"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 12}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${2 + i * 0.5}s`,
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-[#D97706]/60" />
                    </div>
                  ))}
                </div>

                {/* Name Label at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-5">
                  <div 
                    className={`text-center transition-all duration-500 ${
                      hoveredId === item.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-80"
                    }`}
                  >
                    <h3 className="text-white text-sm md:text-base font-medium tracking-wider uppercase">
                      {item.name}
                    </h3>
                    <div 
                      className={`mt-2 mx-auto w-8 h-[2px] bg-[#D97706] transition-all duration-500 ${
                        hoveredId === item.id ? "w-12 opacity-100" : "w-8 opacity-60"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiamondJewellery;