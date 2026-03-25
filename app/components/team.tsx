"use client";

import Image from "./blur-image";
import TextReveal from "./text-reveal";
import ScrollReveal from "./scroll-reveal";
import { useState, useEffect } from "react";
import { useCart } from "../components/cart-context";
import CartDrawer from "../components/cart-drawer";
import Link from "next/link";
import NextImage from "next/image";

const teamMembers = [
    {
        name: "Alexander Mitchell",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
        socials: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
        name: "Sophia Anderson",
        role: "Lead Interior Designer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
        socials: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
        name: "James Carter",
        role: "Head of Craftsmanship",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
        socials: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
        name: "Emily Richardson",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
        socials: { twitter: "#", linkedin: "#", instagram: "#" },
    },
];

const Team = () => {
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
                            <h1 className="text-7xl font-bold font-serif tracking-tight text-white mb-8">Team</h1>
                            <div className="text-sm text-white flex justify-center items-center gap-2 mt-8">
                                <a href="/" className="hover:underline hover:text-[#a58d71]">Home</a>
                                <span>/</span>
                                <span className="font-medium">Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f7f4] py-24 md:py-32 mt-60 overflow-hidden">
                <div className="max-w-[1320px] mx-auto px-6">



                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <TextReveal className="text-[#a58d71] uppercase font-bold tracking-widest text-sm mb-4">
                            Our Team
                        </TextReveal>
                        <h2 className="text-[#244d4d] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                            <TextReveal>Meet the Experts</TextReveal>
                            <TextReveal delay={100}>Behind Every Design</TextReveal>
                        </h2>
                        <div className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                            <TextReveal delay={200}>
                                Our talented team of designers, craftsmen, and visionaries work together to bring you furniture that transforms spaces and elevates living.
                            </TextReveal>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="group cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-6">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            revealDelay={(index + 1) * 100}
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-[#244d4d]/0 group-hover:bg-[#244d4d]/40 transition-all duration-500 flex items-end justify-center pb-8">
                                            {/* Social Icons */}
                                            <div className="flex gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                {/* Twitter / X */}
                                                <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#244d4d] hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                    </svg>
                                                </a>
                                                {/* LinkedIn */}
                                                <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#244d4d] hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    </svg>
                                                </a>
                                                {/* Instagram */}
                                                <a href={member.socials.instagram} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#244d4d] hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-serif font-bold text-[#244d4d] mb-1 group-hover:text-[#1a3838] transition-colors">
                                            <TextReveal delay={index * 50}>{member.name}</TextReveal>
                                        </h3>
                                        <div className="text-gray-500 text-sm font-medium tracking-wide uppercase">
                                            <TextReveal delay={index * 50 + 50}>{member.role}</TextReveal>
                                        </div>
                                    </div>

                                    {/* Accent Line */}
                                    <div className="w-8 h-[2px] bg-[#a58d71] mx-auto mt-4 group-hover:w-16 transition-all duration-500"></div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
