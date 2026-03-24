'use client';

import TextReveal from "../components/text-reveal";
import ScrollReveal from "../components/scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "../components/cart-context";
import CartDrawer from "../components/cart-drawer";
import { CartItem } from "../components/cart-context";

export default function ContactPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const { addToCart, cartCount } = useCart();





    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const handleToggle = () => setIsCartOpen(true);
        window.addEventListener('toggle-cart', handleToggle);
        return () => window.removeEventListener('toggle-cart', handleToggle);
    }, []);

    return (
        <>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            {/* HERO SECTION */}
            <section className="relative w-full h-[80vh] mt-0 top-0 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/lr4.jpg"
                        alt="Living Room Furniture"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="absolute inset-0 bg-[#244d4d]/85 z-10" />

                <div className="absolute inset-0 z-20 flex flex-col max-w-[1150px] mx-auto px-6">
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
                    <div className="flex justify-between items-center pb-6">
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
                                    <li><Link href="/products" className="hover:text-yellow-400 transition-colors">Products</Link></li>
                                    <li className="relative group">
                                        <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors py-8">
                                            Pages
                                            <svg className="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        <div className="absolute top-full left-0 w-48 bg-[#1a3838] border border-white/5 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            <Link href="/about" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">About Us</Link>
                                            <Link href="/team" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">Team</Link>
                                            <Link href="/testimonial" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">Testimonial</Link>
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

                    <div className="flex-1 flex flex-col justify-center">
                        <div className="text-center py-0 mb-24">
                            <h1 className="text-7xl font-bold font-serif tracking-tight text-white mb-8">Contact Us</h1>

                            <div className="text-sm text-white flex justify-center items-center gap-2 mt-8">
                                <a href="/" className="hover:underline hover:text-[#a58d71]">Home</a>
                                <span>/</span>
                                <span className="font-medium">Contact Us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="max-w-[1150px] mx-auto px-6 py-20">
                <ScrollReveal delay={200}>
                    <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
                        <div className="hidden lg:block lg:w-[45%] xl:w-[50%] relative bg-gray-100">
                            <Image src="/images/lr4.jpg" alt="Living Room Furniture" fill className="object-cover" />
                        </div>
                        <div className="flex-1 p-10 md:p-14">
                            <div className="mb-10 text-left">
                                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#244d4d] mb-4">Send us a message</h2>
                                <p className="text-gray-500 font-medium">We'd love to hear from you. Please fill out this form.</p>
                            </div>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">First Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#244d4d] focus:outline-none focus:border-[#a58d71] focus:bg-white focus:ring-4 focus:ring-[#a58d71]/10 transition-all duration-300 font-medium placeholder-gray-400" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Last Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#244d4d] focus:outline-none focus:border-[#a58d71] focus:bg-white focus:ring-4 focus:ring-[#a58d71]/10 transition-all duration-300 font-medium placeholder-gray-400" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#244d4d] focus:outline-none focus:border-[#a58d71] focus:bg-white focus:ring-4 focus:ring-[#a58d71]/10 transition-all duration-300 font-medium placeholder-gray-400" placeholder="john@example.com" required />
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                                    <div className="relative">
                                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#244d4d] focus:outline-none focus:border-[#a58d71] focus:bg-white focus:ring-4 focus:ring-[#a58d71]/10 transition-all duration-300 font-medium appearance-none cursor-pointer">
                                            <option value="general">General Inquiry</option>
                                            <option value="custom">Custom Design</option>
                                            <option value="support">Customer Support</option>
                                            <option value="partnership">Partnership</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Your Message</label>
                                    <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#244d4d] focus:outline-none focus:border-[#a58d71] focus:bg-white focus:ring-4 focus:ring-[#a58d71]/10 transition-all duration-300 font-medium placeholder-gray-400 resize-none" placeholder="Tell us about your project or inquiry..." required></textarea>
                                </div>
                                <button type="submit" className="w-full py-5 mt-4 bg-[#244d4d] text-white text-[14px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#a58d71] transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_-10px_rgba(165,141,113,0.5)] hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </ScrollReveal>
            </section >
        </>
    );
}
