"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const categories = [
  {
    id: 1,
    src: "/Gj1.jpg",
    name: "Necklace",
  },
  {
    id: 2,
    src: "/Gj2.jpg",
    name: "Choker",
  },
  {
    id: 3,
    src: "/Gj3.jpg",
    name: "Mangalsutra",
  },
  {
    id: 4,
    src: "/Gj4.jpg",
    name: "Pendant",
  },
  {
    id: 5,
    src: "/Gj5.jpg",
    name: "Ring",
  },
  {
    id: 6,
    src: "/Gj6.jpg",
    name: "Sakha",
  },
  {
    id: 7,
    src: "/Gj7.jpg",
    name: "Pola",
  },
  {
    id: 8,
    src: "/Gj8.jpg",
    name: "Jhumka",
  },
];

const GoldJewellery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#FFF8F0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1A1A] mb-4 tracking-wide">
            Light-Weight Gold Jewellery
          </h2>
          <p className="text-[#5C4033] text-lg md:text-xl font-light mb-6">
            Less Gold, More Jewellery!
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 md:w-24 h-[1px] bg-[#D97706]/40" />
            <Sparkles className="w-5 h-5 text-[#D97706]" />
            <div className="w-16 md:w-24 h-[1px] bg-[#D97706]/40" />
          </div>
        </div>

        {/* Grid Container - 1:1 Square Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container - 1:1 Aspect Ratio */}
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#2D1B4E]">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={`object-cover transition-all duration-700 ease-out ${
                    hoveredId === item.id
                      ? "scale-110"
                      : "scale-100"
                  }`}
                />

                {/* Dark Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Gold Border Glow on Hover */}
                <div
                  className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
                    hoveredId === item.id
                      ? "border-[#D97706]/80 shadow-[0_0_25px_rgba(217,119,6,0.3)]"
                      : "border-transparent"
                  }`}
                />
              </div>

              {/* Shine Effect on Hover */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldJewellery;