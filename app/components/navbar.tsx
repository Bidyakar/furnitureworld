"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#244d4d] shadow-lg">
            <div className="max-w-[1320px] mx-auto w-full">

            {/* Top Bar - Hidden on mobile for cleaner look */}
            <div className="hidden md:flex bg-[#244d4d] text-white text-sm px-8 py-2 justify-between border-b border-white/10">
                <span>Call us: +012345 678 910</span>

                <div className="space-x-4">
                    <Link href="/login" className="hover:text-yellow-400 transition-colors">Login</Link>
                    <span className="opacity-40">|</span>
                    <Link href="/register" className="hover:text-yellow-400 transition-colors">Register</Link>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="text-white px-6 md:px-12 py-5 flex items-center justify-between relative">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-2xl font-serif font-semibold group">
                    <svg className="w-8 h-8 text-[#a58d71] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 10h18v6H3z"/>
                        <path d="M3 16v4"/>
                        <path d="M21 16v4"/>
                        <path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/>
                    </svg>
                    <span className="tracking-tight">Furniture World</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-10 text-[17px] font-medium">
                    <li><Link href="/" className="hover:text-yellow-400 transition-all border-b-2 border-transparent hover:border-yellow-400 pb-1">Home</Link></li>
                    <li><Link href="/project" className="hover:text-yellow-400 transition-all border-b-2 border-transparent hover:border-yellow-400 pb-1">Project</Link></li>
                    <li><Link href="/services" className="hover:text-yellow-400 transition-all border-b-2 border-transparent hover:border-yellow-400 pb-1">Services</Link></li>
                    <li><Link href="/pages" className="hover:text-yellow-400 transition-all border-b-2 border-transparent hover:border-yellow-400 pb-1">Pages</Link></li>
                    <li><Link href="/contact" className="hover:text-yellow-400 transition-all border-b-2 border-transparent hover:border-yellow-400 pb-1">Contact</Link></li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#1a3838] lg:hidden animate-fade-in shadow-2xl border-t border-white/5">
                        <ul className="flex flex-col py-6">
                            <li><Link href="/" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors font-medium border-b border-white/5">Home</Link></li>
                            <li><Link href="/project" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors font-medium border-b border-white/5">Project</Link></li>
                            <li><Link href="/services" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors font-medium border-b border-white/5">Services</Link></li>
                            <li><Link href="/pages" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors font-medium border-b border-white/5">Pages</Link></li>
                            <li><Link href="/contact" className="px-8 py-4 block hover:bg-[#244d4d] hover:text-yellow-400 transition-colors font-medium">Contact</Link></li>
                            <li className="px-8 pt-6 flex gap-6 text-sm">
                                <Link href="/login" className="text-yellow-400 font-bold uppercase tracking-widest">Login</Link>
                                <Link href="/register" className="text-white hover:text-yellow-400 uppercase tracking-widest font-bold">Register</Link>
                            </li>
                        </ul>
                    </div>
                )}

            </nav>
            </div>
        </header>
    );
}