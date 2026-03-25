import Link from "next/link";
import TextReveal from "./text-reveal";

export default function Footer() {
  return (
    <footer className="bg-[#244d4d] text-gray-200 relative">

      {/* Topographic Background Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/topography.png')" }}
      />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-16 text-center sm:text-left">
        {/* Column 1: Logo + About */}
        <div className="md:border-r border-white/20 pr-8 lg:pr-12">
          <h2 className="text-3xl font-serif font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10h18v6H3z" />
              <path d="M3 16v4" />
              <path d="M21 16v4" />
              <path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
            </svg>
            Furniture World
          </h2>

          <div className="mt-8 text-sm text-gray-300 leading-relaxed font-medium">
            <TextReveal>Crafting exceptional furniture for homes that inspire. Every piece tells a story of timeless quality and care.</TextReveal>
          </div>

          <div className="mt-8">
            <h4 className="font-serif font-bold text-white text-lg tracking-wide">
              <TextReveal delay={200}>Office Hour</TextReveal>
            </h4>
            <div className="text-gray-300 mt-2 text-sm leading-relaxed">
              <TextReveal delay={300}>Sunday - Friday</TextReveal>
              <TextReveal delay={400}>9am to 8.30pm</TextReveal>
            </div>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="md:border-r border-white/20 pr-8 lg:pr-12">
          <h3 className="text-2xl font-serif font-bold text-white mb-8">
            <TextReveal>Company</TextReveal>
          </h3>
          <ul className="space-y-4 text-sm text-gray-300 font-medium">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
          </ul>
        </div>

        {/* Column 3: Information */}
        <div className="md:border-r border-white/20 pr-8 lg:pr-12">
          <h3 className="text-2xl font-serif font-bold text-white mb-8">
            <TextReveal>Information</TextReveal>
          </h3>
          <ul className="space-y-4 text-sm text-gray-300 font-medium">
            <li><Link href="/products" className="hover:text-white transition-colors">Our Products</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog Post</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-8">
            <TextReveal>Contact info</TextReveal>
          </h3>

          <div className="space-y-6 text-sm text-gray-300 font-medium">
            <div className="leading-relaxed">
              <TextReveal delay={100}>Telephone</TextReveal>
              <TextReveal delay={200}>+12345 658 987</TextReveal>
              <TextReveal delay={300}>(038) 12345 678 901</TextReveal>
            </div>

            <div className="leading-relaxed">
              <TextReveal delay={400}>Address</TextReveal>
              <TextReveal delay={500}>75 North Street City</TextReveal>
              <TextReveal delay={600}>New York, NY 1010, USA</TextReveal>
            </div>

            <div className="leading-relaxed">
              <TextReveal delay={700}>Email</TextReveal>
              <TextReveal delay={800}>info@example.com</TextReveal>
              <TextReveal delay={900}>admin@example.com</TextReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-white text-center text-sm text-gray-500 py-6 relative z-10 font-medium">
        © 2026 <span className="text-gray-800 font-bold">Furniture World</span>. All rights reserved
        <br />
        Powered by <a href="https://bidyakar.com.np" target="_blank" rel="noopener noreferrer" className="text-[#a58d71]">BB</a>

      </div>


    </footer>
  );
}