"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            {/* Centered container that controls the width AND background */}
            <div className="w-[1150px] mx-auto bg-[#244d4d] px-6">

                {/* Top Bar */}
                <div className="flex justify-between items-center pt-6 pb-4 text-white text-sm">
                    <div>
                        Call us:
                        <a href="tel:12345678910" className="ml-1 hover:text-yellow-400 transition-colors">
                            +012345 678 910
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="/login" className="hover:text-yellow-400 transition-colors">Login</a>
                        <span>/</span>
                        <a href="/register" className="hover:text-yellow-400 transition-colors">Register</a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[0.5px] bg-white/30" />

                {/* Main Navigation */}
                <div className="flex justify-between items-center pb-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 border-[1.5px] border-[#a58d71] rounded-sm flex items-center justify-center p-1 group-hover:bg-[#a58d71] transition-all">
                            <svg className="w-full h-full text-[#a58d71] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3 10h18v6H3zM3 16v4M21 16v4M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
                            </svg>
                        </div>
                        <span className="text-2xl font-serif font-bold text-white tracking-tight">
                            Furniture World
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-8 text-[15px] font-serif font-bold text-white">
                            <li className="relative group">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors py-8">
                                    Home
                                    <svg className="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className="absolute top-full left-0 w-48 bg-[#1a3838] border border-white/5 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <Link href="/" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">Home One</Link>
                                    <Link href="/home-2" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-yellow-400 text-sm">Home Two</Link>
                                </div>
                            </li>
                            <li><Link href="/project" className="hover:text-yellow-400 transition-colors">Project</Link></li>
                            <li><Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link></li>
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

                    {/* Mobile Toggle */}
                    <button className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="w-[1150px] mx-auto bg-[#1a3838] lg:hidden shadow-2xl border-t border-white/5">
                    <ul className="flex flex-col py-6">
                        <li><Link href="/" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors text-white font-medium border-b border-white/5">Home</Link></li>
                        <li><Link href="/about" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors text-white font-medium border-b border-white/5">About</Link></li>
                        <li><Link href="/project" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors text-white font-medium border-b border-white/5">Project</Link></li>
                        <li><Link href="/services" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors text-white font-medium border-b border-white/5">Services</Link></li>
                        <li><Link href="/blog" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors text-white font-medium border-b border-white/5">Blog</Link></li>
                        <li><Link href="/contact" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors text-white font-medium">Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}