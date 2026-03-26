"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "./blur-image";

const categories = [
  {
    id: "bed",
    title: "Beds",
    href: "/products/beds",
    description: "Discover elegant bed frames and mattresses for a perfect night's sleep.",
    image: "/images/lr1.jpg",
  },
  {
    id: "chair",
    title: "Chairs",
    href: "/products/chairs",
    description: "Ergonomic and stylish chairs for your dining, office, and living spaces.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sofa",
    title: "Sofas",
    href: "/products/sofas",
    description: "Explore our premium collection of modern sofas designed for absolute comfort.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "table",
    title: "Tables",
    href: "/products/tables",
    description: "Crafted dining and coffee tables that form the centerpiece of any room.",
    image: "/images/lr2.jpg"
  },
  {
    id: "cabinet",
    title: "Cabinets",
    href: "/products/cabinets",
    description: "Functional and beautiful storage solutions to keep your space organized.",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "lighting",
    title: "Lighting",
    href: "/products/lighting",
    description: "Illuminate your interior with our unique range of modern lighting fixtures.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800"
  }
];

export default function WhatWeProvideGrid() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
      {/* LEFT SIDE */}
      <div className="space-y-10 text-right">
        {categories.slice(0, 3).map((item, idx) => (
          <div key={item.id}>
            <Link
              href={item.href}
              className="group block"
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <h3 className={`font-bold font-serif text-2xl transition-colors ${activeIndex === idx ? 'text-[#a58d71]' : 'text-black group-hover:text-[#a58d71]'}`}>
                {item.title}
              </h3>
              <p className="text-gray-500 font-playfair-display text-sm mt-2">
                {item.description}
              </p>
            </Link>
            {idx < 2 && <div className="h-[0.5px] bg-black/20 mt-10" />}
          </div>
        ))}
      </div>

      {/* CENTER IMAGE */}
      <div className="flex justify-center">
        <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] overflow-hidden rounded-sm shadow-2xl cursor-pointer">
          {categories.map((item, idx) => (
            <div
              key={`img-${item.id}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[4000ms] hover:scale-110 ease-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-10 text-left">
        {categories.slice(3, 6).map((item, idx) => {
          const globalIdx = idx + 3;
          return (
            <div key={item.id}>
              <Link
                href={item.href}
                className="group block"
                onMouseEnter={() => setActiveIndex(globalIdx)}
              >
                <h3 className={`font-bold font-serif text-2xl transition-colors ${activeIndex === globalIdx ? 'text-[#a58d71]' : 'text-black group-hover:text-[#a58d71]'}`}>
                  {item.title}
                </h3>
                <p className="text-gray-500 font-playfair-display text-sm mt-2">
                  {item.description}
                </p>
              </Link>
              {idx < 2 && <div className="h-[0.5px] bg-black/20 mt-10" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
