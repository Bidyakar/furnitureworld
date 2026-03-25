'use client';

import { useState, useEffect } from "react";
import { useCart } from "../components/cart-context";
import CartDrawer from "../components/cart-drawer";
import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import NextImage from "next/image";
import Image from "next/image";
import BlurImage from "../components/blur-image";



export default function AboutPage() {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsCartOpen(true);
    window.addEventListener('toggle-cart', handleToggle);
    return () => window.removeEventListener('toggle-cart', handleToggle);
  }, []);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[30vh] overflow-visible">
        {/* Background image - spans into the next section */}
        <div className="absolute inset-0 z-0 -bottom-[350px]">
          <NextImage
            src="/images/lr1.jpg"
            alt="Living Room Furniture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark teal overlay - also spans */}
        <div className="absolute inset-0 -bottom-[350px] bg-[#244d4d]/85 z-10" />

        {/* Hero content */}
        <div className="absolute inset-0 z-[60] flex flex-col max-w-[1150px] mx-auto px-6">

          {/* Top bar */}
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

          <div className="w-full border-t border-white/30" />

          {/* Navbar */}
          <div className="flex justify-between items-center pb-6 ">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 border-[1.5px] border-[#a58d71] rounded-sm flex items-center justify-center p-1 group-hover:bg-[#a58d71] transition-all">
                <svg className="w-full h-full text-[#a58d71] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 10h18v6H3zM3 16v4M21 16v4M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
                </svg>
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">Furniture World</span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              <nav>
                <ul className="flex items-center gap-8 text-[15px] font-serif font-bold text-white">
                  <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
                  <li><Link href="/products" className="hover:text-yellow-400 transition-colors">Products</Link></li>
                  <li className="relative group z-50">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors py-8">
                      Pages
                      <svg className="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="absolute top-full left-0 w-48 bg-[#1a3838] border border-white/5 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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

              <button
                onClick={() => window.dispatchEvent(new CustomEvent('toggle-cart'))}
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

          {/* Page title */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-24">
              <h1 className="text-7xl font-bold font-serif tracking-tight text-white mb-8">About Us</h1>
              <div className="text-sm text-white flex justify-center items-center gap-2 mt-8">
                <a href="/" className="hover:underline hover:text-[#a58d71]">Home</a>
                <span>/</span>
                <span className="font-medium">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOATING IMAGE + WHITE SECTION ──
          The trick: a single wrapper with a split gradient background.
          Top half = teal (matches hero), bottom half = white.
          The image floats in the middle with no colour gap on the sides.
      */}
      <div
        className="relative z-30"
        style={{ background: 'linear-gradient(to bottom, transparent 50%, #ffffff 50%)' }}
      >
        <div className="max-w-[1000px] mx-auto px-6 py-16 ">
          <ScrollReveal delay={200}>
            <div className="relative w-full h-[400px] md:h-[550px] mt-7 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <BlurImage
                src="/images/lr2.jpg"
                alt="Living Room Furniture"
                fill
                className="object-cover"

                revealDelay={100}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── OUR STORY SECTION ── */}
      <section className="bg-white pb-24">
        <div className="w-full bg-[#f8f7f4] py-24 px-6 mb-24">
          <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

              {/* LEFT COLUMN - Stats only */}
              <div className="flex flex-col gap-12 self-start">
                <ScrollReveal delay={100}>
                  <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-xs">Why Choose Us</span>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div className=" grid grid-cols-2">

                    {[
                      { value: "20", label: "Years of Craftsmanship", borderR: true, borderB: true },
                      { value: "35", label: "Design Awards Won", borderR: false, borderB: true },
                      { value: "42", label: "Expert Craftsmen", borderR: true, borderB: false },
                      { value: "1200+", label: "Homes Furnished", borderR: false, borderB: false },
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
                </ScrollReveal>
              </div>

              {/* RIGHT COLUMN - Text only */}
              <div className="flex flex-col gap-8">

                <div className="flex flex-col gap-6">
                  <ScrollReveal delay={100}>
                    <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-xs">Our Promise</span>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#1a3838] leading-[1.1]">
                      We furnish your home with{" "}
                      <span className="italic text-[#a58d71]">timeless elegance</span>
                    </h2>
                  </ScrollReveal>

                  <ScrollReveal delay={300}>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                      Furniture World is one of the most trusted furniture destinations for homeowners who want to elevate every room. We combine timeless craftsmanship with modern design sensibility — delivering pieces that are built to last and designed to impress.
                    </p>
                  </ScrollReveal>
                </div>

                {/* Feature list */}
                <ScrollReveal delay={400}>
                  <div className="flex flex-col
                  ">
                    {[
                      "Solid wood and premium materials built to last a lifetime",
                      "Hundreds of styles from classic to contemporary",
                      "Free in-home design consultation for every customer",
                      "White-glove delivery and professional installation included",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#a58d71] flex-shrink-0" />
                        <p className="text-gray-600 text-[15px] leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <div className="pt-2">
                    <Link
                      href="/products"
                      className="inline-block px-10 py-5 bg-[#1a3838] text-white text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-[#a58d71] transition-all duration-500 shadow-xl"
                    >
                      Shop Our Collections
                    </Link>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}