'use client';

import Hero from "./components/hero";
import Image from "./components/blur-image";
import TextReveal from "./components/text-reveal";
import ScrollReveal from "./components/scroll-reveal";
import Link from "next/link";
import WhatWeProvideGrid from "./components/what-we-provide-grid";
import { CartItem, useCart } from "./components/cart-context";
import CartDrawer from "./components/cart-drawer";



import React, { useState, useEffect } from "react";

const services = [
  {
    title: "Home Furniture",
    description: "Furniture World is one of the most popular for those who want to elevate their home aesthetics.",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Office Furniture",
    description: "Premium ergonomic solutions and elegant designs for the modern workplace.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hospitality Decor",
    description: "Durable, stylish seating and tables designed for hospitality spaces.",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Custom Planning",
    description: "Tailored spatial solutions and bespoke furniture pieces made specifically for you.",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800"
  }
];

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Design",
    description: "Decoral is one of the most popular for",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Bedroom Retreat",
    description: "Elegant natural tones and warm lighting",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Living Room Accent",
    description: "Bold color meets minimalist form",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Dining Elegance",
    description: "Refined dining with dramatic drapery",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Modern Office",
    description: "Open-plan workspace with industrial edge",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800",
  },
];

const stats = [
  { value: "20", label: "Years of Experience" },
  { value: "35", label: "Award Gained" },
  { value: "42", label: "Team Members" },
  { value: "1200", label: "Projects Done" },
];

const testimonials = [
  {
    quote: "Furniture World is one of the most popular furniture brands for those who want to explore premium aesthetics and try to make your home beautiful and provide the best design.",
    name: "Bob Williams",
    company: "Vergon Enterpirze",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "We redesigned our entire office with Furniture World and the results were incredible. Quality, style, and service all exceeded our expectations tremendously.",
    name: "Sarah Johnson",
    company: "Nova Interiors Co.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "From consultation to delivery, everything was seamless. Our living room has never looked this good. Highly recommend Furniture World to everyone.",
    name: "James Carter",
    company: "Carter & Associates",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
];



const categories = [
  { name: "Chair", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800", subcategories: ["Armchair", "Lounge Chair", "Dining Chair", "Accent Chair", "Office Chair"] },
  { name: "Table", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800", subcategories: ["Dining Table", "Coffee Table", "Side Table", "Console Table", "Desk"] },
  { name: "Bed", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800", subcategories: ["Single Bed", "Double Bed", "King Size", "Queen Size", "Bunk Bed"] },
  { name: "Wardrobe", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800", subcategories: ["2-Door", "Sliding", "Walk-in", "Modular", "Built-in"] },
  { name: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", subcategories: ["2-Seater", "Sectional", "Sofa Bed", "Loveseat", "Chaise"] },
  { name: "Lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800", subcategories: ["Pendant", "Chandelier", "Floor Lamp", "Table Lamp", "Wall Sconce"] },
  { name: "Storage", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800", subcategories: ["Bookshelf", "TV Stand", "Cabinet", "Sideboard", "Dresser"] },
  { name: "Decor", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", subcategories: ["Mirrors", "Rugs", "Vases", "Art", "Planters"] },
  { name: "Outdoor", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800", subcategories: ["Patio Set", "Sun Lounger", "Outdoor Sofa", "Hammock", "Fire Pit"] }
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { addToCart, cartCount } = useCart();

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.subcategories.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddToCart = (item: any, catName: string) => {
    const cartItem: CartItem = {
      id: item.id || `${catName}-${item.name}`,
      name: item.name,
      price: item.price,
      image: item.img || item.image,
      quantity: 1,
      category: catName
    };
    addToCart(cartItem);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsCartOpen(true);
    window.addEventListener('toggle-cart', handleToggle);
    return () => window.removeEventListener('toggle-cart', handleToggle);
  }, []);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {/* navbar */}
      <section className="relative w-full h-[27vh] z-50">
        <div className="absolute inset-0  flex flex-col max-w-[1150px] mx-auto px-6">
          {/* Top Bar */}
          <div className="flex justify-between items-center pt-6 pb-4 text-white text-sm font-medium">
            <div>
              Call us:
              <a href="tel:12345678910" className="ml-1 text-yellow-400 hover:text-white transition-colors">
                +012345 678 910
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="hover:text-yellow-400 transition-colors">Login</Link>
              <span className="opacity-30">/</span>
              <Link href="/register" className="hover:text-yellow-400 transition-colors">Register</Link>
            </div>
          </div>

          <div className="h-[0.5px] bg-white/30" />

          {/* Navbar */}
          <div className="flex justify-between items-center pb-6 ">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 border-[1.5px] border-[#a58d71] rounded-sm flex items-center justify-center p-1 group-hover:bg-[#a58d71] transition-all">
                <svg
                  className="w-full h-full text-[#a58d71] group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M3 10h18v6H3zM3 16v4M21 16v4M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
                </svg>
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                Furniture World
              </span>
            </Link>

            {/* Desktop Menu + Cart */}
            <div className="hidden lg:flex items-center gap-10">
              <nav>
                <ul className="flex items-center gap-8 text-[15px] font-serif font-bold text-white">
                  <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
                  <li><Link href="/products" className="hover:text-yellow-400 transition-colors ">Products</Link></li>
                  <li className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors py-8">
                      Pages
                      <svg className="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="absolute top-full left-0 w-48 bg-[#1a3838] border border-white/5 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                      <Link href="/about" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">About Us</Link>
                      <Link href="/team" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">Team</Link>
                      <Link href="/testimonials" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">Testimonials</Link>
                      <Link href="/blog" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">Blog</Link>
                      <Link href="/faq" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">FAQ</Link>
                    </div>
                  </li>
                  <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
                </ul>
              </nav>

              {/* NEW: Cart Toggle in Product Hero */}
              <button
                onClick={() => (window as any).dispatchEvent(new CustomEvent('toggle-cart'))}
                className="relative group p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <svg className="w-6 h-6 text-[#a58d71] group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-[#244d4d] text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <button className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>


        </div>
      </section>


      <main>
        <Hero />

        {/* About Section */}
        <div className="bg-[#f0ece5] py-24 md:py-32 overflow-hidden relative">
          <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-[60px] md:-left-[120px] top-[10%] w-[80%] h-[120%] bg-[#d9d0c5] rounded-tl-[300px] rounded-bl-[300px] rounded-r-3xl -z-10"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4 h-[600px]">
                <div className="relative h-full w-full rounded-2xl overflow-hidden mt-16 shadow-xl hover:scale-[1.02] transition-transform duration-700">
                  <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" alt="Modern furniture chair" fill className="object-cover" revealDelay={100} />
                </div>
                <div className="flex flex-col gap-4 h-full">
                  <div className="relative h-2/3 w-full rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-700">
                    <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" alt="Modern furniture living room" fill className="object-cover" revealDelay={200} />
                  </div>
                  <div className="relative h-1/3 w-full rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-700">
                    <Image src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800" alt="Modern furniture detail" fill className="object-cover" revealDelay={300} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-10 text-center lg:text-left flex flex-col items-center lg:items-start">
              <TextReveal className="text-[#a58d71] uppercase font-bold tracking-widest text-sm mb-4">About Us</TextReveal>
              <h2 className="text-[#2d2d2d] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
                <TextReveal>Crafting Furniture</TextReveal>
                <TextReveal delay={100}>with Different</TextReveal>
                <TextReveal delay={200}>Approach.</TextReveal>
              </h2>
              <div className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
                <TextReveal delay={300}>We are passionate about creating aesthetic, highly functional and modern furniture for those who want to elevate their living spaces. Our approach combines traditional craftsmanship with contemporary design principles.</TextReveal>
              </div>
              <ScrollReveal delay={400}>
                <button className="px-10 py-4 bg-[#244d4d] text-white hover:bg-[#1a3838] transition-all duration-300 text-sm font-semibold tracking-widest uppercase shadow-xl rounded-sm">Learn More</button>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
              <div className="max-w-2xl">
                <TextReveal className="text-[#a58d71] uppercase font-bold tracking-widest text-sm mb-4">Our Services</TextReveal>
                <h2 className="text-[#2d2d2d] text-4xl sm:text-5xl font-serif font-bold leading-tight">
                  <TextReveal>We provide different types</TextReveal>
                  <TextReveal delay={100}>of Furniture Solutions</TextReveal>
                </h2>
              </div>
              <ScrollReveal delay={200}>
                <Link href="/products">
                  <button className="px-10 py-4 bg-[#244d4d] text-white hover:bg-[#1a3838] transition-all duration-300 text-sm font-semibold tracking-widest uppercase flex-shrink-0 shadow-xl rounded-sm">View All Services</button>
                </Link>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] p-5 rounded-md hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 w-full overflow-hidden mb-6 rounded-sm">
                    <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" revealDelay={(index + 1) * 100} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#2d2d2d] mb-3 group-hover:text-[#244d4d] transition-colors">
                    <TextReveal delay={index * 50}>{service.title}</TextReveal>
                  </h3>
                  <div className="text-gray-500 leading-relaxed mb-8 text-sm flex-grow">
                    <TextReveal delay={index * 75}>{service.description}</TextReveal>
                  </div>
                  <div className="w-12 h-1 bg-[#a58d71] group-hover:w-full transition-all duration-500 mb-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Provide Section */}
        <ScrollReveal delay={200} className="w-full">
          <div className="bg-white py-20">
            <div className="max-w-[1300px] mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-[#244d4d] text-4xl md:text-5xl font-serif font-bold leading-tight">
                  <TextReveal>What we provide in</TextReveal>
                  <TextReveal delay={100}>Furniture World</TextReveal>
                </h2>
              </div>
              <WhatWeProvideGrid />
            </div>
          </div>
        </ScrollReveal>

        {/* Why Choose Us Section */}
        <div className="bg-white py-24 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 items-stretch">

              {/* Column 1 */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-full max-w-6xl">
                <h2 className="text-[#244d4d] text-4xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.1] mb-8 tracking-tight">
                  <TextReveal>Why people choose</TextReveal>
                  <TextReveal delay={100}>Furniture World</TextReveal>
                </h2>
                <div className="text-gray-500 leading-[1.8] mb-12 text-[15px] font-medium max-w-sm">
                  <TextReveal delay={200}>Furniture World is one of the most popular furniture brands for those who want to explore premium aesthetics and try creating absolute comfort in their homes.</TextReveal>
                </div>
                <ScrollReveal delay={300} className="w-full">
                  <div className="w-full bg-[#f8f9fa] p-6 rounded-sm mb-10 group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-5 items-center lg:items-start">
                      <div className="flex-shrink-0">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#244d4d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" />
                        </svg>
                      </div>
                      <div className="text-left w-full">
                        <h3 className="text-[24px] font-serif font-bold text-[#244d4d] mb-3 group-hover:text-black transition-colors">
                          <TextReveal delay={400}>Modern Design</TextReveal>
                        </h3>
                        <div className="text-gray-500 leading-[1.1] text-[15px]">
                          <TextReveal delay={500}>Furniture World is one of the most popular for those who want to explore the finest curated concepts globally.</TextReveal>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                <div className="relative w-full h-[230px] mt-auto pb-8 group overflow-hidden rounded-sm">
                  <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" alt="Modern living room sofa" fill className="object-cover transition-transform duration-700 group-hover:scale-105" revealDelay={150} />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-full">
                <div className="relative w-full h-[290px] mb-8 group overflow-hidden rounded-sm">
                  <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" alt="Elegant Armchair" fill className="object-cover transition-transform duration-700 group-hover:scale-105" revealDelay={250} />
                </div>
                <ScrollReveal delay={100} className="flex-grow">
                  <div className="w-full bg-[#f8f9fa] p-6 rounded-sm mb-12 group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-5 items-center lg:items-start">
                      <div className="flex-shrink-0">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#244d4d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>
                      </div>
                      <div className="text-left w-full">
                        <h3 className="text-[24px] font-serif font-bold text-[#244d4d] mb-3 group-hover:text-black transition-colors">
                          <TextReveal delay={150}>Expert Team</TextReveal>
                        </h3>
                        <div className="text-gray-500 leading-[1.1] text-[15px]">
                          <TextReveal delay={200}>Furniture World is one of the most popular for those who want to explore with world-class support and materials.</TextReveal>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200} className="w-full">
                  <div className="w-full bg-[#f8f9fa] p-8 rounded-sm mb-8 group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                      <div className="flex-shrink-0">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#244d4d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        </svg>
                      </div>
                      <div className="text-left mb-10">
                        <h3 className="text-[24px] font-serif font-bold text-[#244d4d] mb-3 group-hover:text-black transition-colors">
                          <TextReveal delay={250}>Reasonable Price</TextReveal>
                        </h3>
                        <div className="text-gray-500 leading-[1.1] text-[15px]">
                          <TextReveal delay={300}>Furniture World is one of the most popular for those who want to explore premium aesthetics affordably.</TextReveal>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col h-[96%] lg:pl-6 pt-8 lg:pt-0">
                <div className="relative w-full h-[300px] lg:h-full min-h-[500px] group overflow-hidden rounded-sm">
                  <Image src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800" alt="Tall contemporary shelving unit" fill className="object-cover transition-transform duration-700 group-hover:scale-105" revealDelay={350} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="w-full bg-[#f8f7f4] py-20">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-4">

                {/* Large image */}
                <div className="relative group overflow-hidden aspect-[4/3] cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800"
                    alt="Modern Kitchen Design"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-6 mb-6">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-4 max-w-[320px]">
                      <h3 className="text-lg font-bold font-serif text-[#1a3838]">Modern Kitchen Design</h3>
                      <p className="text-sm text-gray-500 mt-1">Decoral is one of the most popular for</p>
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2">
                  {[
                    { value: "20", label: "Years of Experience", borderR: true, borderB: true },
                    { value: "35", label: "Award Gained", borderR: false, borderB: true },
                    { value: "42", label: "Team Members", borderR: true, borderB: false },
                    { value: "1200+", label: "Projects Done", borderR: false, borderB: false },
                  ].map(({ value, label, borderR, borderB }) => (
                    <div
                      key={label}
                      className={`flex flex-col items-start justify-center py-8 px-8
                ${borderR ? "border-r border-dashed border-gray-300" : ""}
                ${borderB ? "border-b border-dashed border-gray-300" : ""}
              `}
                    >
                      <span className="text-5xl font-bold font-serif text-[#1a3838] leading-none">{value}</span>
                      <span className="text-sm text-gray-500 mt-3 tracking-wide">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-4 h-full">

                {/* Heading + View All */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
                  <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold font-serif text-[#1a3838] leading-tight">
                    Explore our latest <span className="italic">Products</span>
                  </h2>
                  <Link
                    href="/projects"
                    className="self-start sm:self-auto flex-shrink-0 px-6 py-3 border border-[#1a3838] text-[#1a3838] font-semibold text-sm tracking-widest uppercase hover:bg-[#1a3838] hover:text-white transition-all duration-300"
                  >
                    View All
                  </Link>
                </div>

                {/* 2x2 image grid */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {[
                    { src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800", alt: "Bedroom Retreat" },
                    { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", alt: "Living Room Accent" },
                    { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800", alt: "Dining Elegance" },
                    { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800", alt: "Modern Office" },
                  ].map(({ src, alt }) => (
                    <div key={alt} className="relative group overflow-hidden cursor-pointer min-h-[200px]">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#1a3838]/0 group-hover:bg-[#1a3838]/50 transition-all duration-300 flex items-end p-4">
                        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <h3 className="text-white font-bold font-serif text-sm">{alt}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-24 md:py-32">
          <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-20 items-center">
            <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start text-black">
              <h2 className="text-[#244d4d] text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.15] mb-8 md:mb-12">
                <TextReveal>Expressions of</TextReveal>
                <TextReveal delay={100}>our happy Customer</TextReveal>
              </h2>
              <ScrollReveal delay={200}>
                <div className="flex gap-2 text-yellow-500 mb-8 text-xl">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </ScrollReveal>
              
              {/* Dynamic Testimonial Display */}
              <div className="min-h-[200px]">
                {testimonials.map((t, index) => (
                  <div key={index} className={`${activeTestimonial === index ? 'block' : 'hidden'} animate-in fade-in slide-in-from-bottom-4 duration-700`}>
                    <div className="text-gray-500 font-medium text-base sm:text-lg md:text-xl leading-loose mb-10 md:mb-8 max-w-xl">
                      &ldquo;{t.quote}&rdquo;
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4 w-full gap-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-md">
                          <Image src={t.avatar} fill className="object-cover" alt={t.name} />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-[#244d4d] text-lg">{t.name}</h4>
                          <div className="text-sm text-gray-500 font-medium mt-1">{t.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 justify-center md:justify-start w-full mt-10">
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-12 h-12 rounded-full border border-gray-200 text-[#244d4d] flex items-center justify-center hover:bg-[#244d4d] hover:text-white transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 rounded-full border border-gray-200 text-[#244d4d] flex items-center justify-center hover:bg-[#244d4d] hover:text-white transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>
            </div>

            <div className="relative h-[650px] w-full hidden md:block">
              <div className="absolute left-0 top-[5%] w-[48%] h-[70%] mt-30 overflow-hidden rounded-[80px_0px_80px_0px] shadow-2xl z-10 transition-transform duration-700 hover:scale-[1.02]">
                <Image src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800" fill className="object-cover" alt="Comfortable bed structure" revealDelay={200} />
              </div>
              <div className="absolute right-5 top-0 w-[45%] h-[33%] overflow-hidden mt-37 rounded-[0px_80px_0px_0px] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <Image src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800" fill className="object-cover" alt="Stylish modern dresser" revealDelay={350} />
              </div>
              <div className="absolute right-5 bottom-0 top-[45%] w-[45%] h-[33%] mt-auto mb-15 overflow-hidden rounded-[0px_80px_0px_0px] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <Image src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80&w=800" fill className="object-cover" alt="Stool and table set" revealDelay={500} />
              </div>
            </div>
          </div>
        </div>


        {/* Blog Section */}
        <div className="bg-white py-24">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-16 border-b border-gray-200 pb-6 text-center sm:text-left gap-6">
              <h2 className="text-[#244d4d] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
                <TextReveal>Latest Post</TextReveal>
              </h2>
              <ScrollReveal delay={100}>
                <button className="px-10 py-4 bg-[#244d4d] text-white hover:bg-black font-semibold text-sm transition-all duration-300 uppercase tracking-widest shadow-xl rounded-sm">View all</button>
              </ScrollReveal>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="group cursor-pointer">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">
                  <TextReveal>OCTOBER 11, 2026 | BY - ALLEN BLICK</TextReveal>
                </div>
                <h3 className="text-4xl lg:text-4xl font-serif font-bold text-[#244d4d] mb-6 leading-tight group-hover:text-black transition-colors max-w-2xl">
                  <TextReveal delay={100}>Seven tips to help you get better</TextReveal>
                  <TextReveal delay={200}>furniture design & Concept furniture</TextReveal>
                </h3>
                <div className="text-gray-500 text-sm mb-10 md:mb-0 flex items-center gap-2 group-hover:text-[#244d4d] transition-colors uppercase tracking-widest font-bold">
                  <TextReveal delay={300}>Read more <span className="text-lg">→</span></TextReveal>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600" fill className="object-cover hover:scale-105 transition-transform duration-700" alt="Modern blue armchair" revealDelay={200} />
                </div>
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600" fill className="object-cover hover:scale-105 transition-transform duration-700" alt="Stylish living room setup" revealDelay={350} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}