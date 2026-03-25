'use client';

import { useState, useEffect } from "react";
import { useCart } from "../components/cart-context";
import CartDrawer from "../components/cart-drawer";
import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import NextImage from "next/image";
import Image from "next/image";
import BlurImage from "../components/blur-image";


const blogPosts = [
  {
    id: 1,
    title: "The Art of Sustainable Woodworking",
    category: "Craftsmanship",
    date: "March 15, 2026",
    readTime: "6 min read",
    excerpt: "Discover how we source our solid oak and maple while maintaining a carbon-neutral footprint in our artisan workshops. Every grain tells a story of responsibility.",
    image: "/images/lr4.jpg",
    author: "Elena Rossi"
  },
  {
    id: 2,
    title: "Modern Minimalism: Less is Truly More",
    category: "Design Trends",
    date: "March 10, 2026",
    readTime: "4 min read",
    excerpt: "Exploring the philosophy of decluttered living spaces and how selected statement pieces can redefine your home's energy and flow.",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800",
    author: "Marcus Thorne"
  },
  {
    id: 3,
    title: "Color Theory in Living Spaces",
    category: "Interior Tips",
    date: "March 05, 2026",
    readTime: "8 min read",
    excerpt: "From deep teals to sun-drenched terracottas—learn how the palette of your furniture affects mood, productivity, and rest.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    author: "Sarah Mitchell"
  },
  {
    id: 4,
    title: "The Renaissance of Rattan & Wicker",
    category: "Materials",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    excerpt: "Woven textures are making a comeback in 2026. See how we integrate organic fibers into contemporary steel and glass structures.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    author: "Julian Drax"
  },
  {
    id: 5,
    title: "Smart Lighting for Artisan Homes",
    category: "Innovation",
    date: "Feb 20, 2026",
    readTime: "7 min read",
    excerpt: "Integrating subtle LED technology into traditional wood carvings to create ambient moods that change with the time of day.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800",
    author: "Elena Rossi"
  }
];

export default function BlogPage() {

  const featured = blogPosts[0];
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
              <h1 className="text-7xl font-bold font-serif tracking-tight text-white mb-8">Blog</h1>
              <div className="text-sm text-white flex justify-center items-center gap-2 mt-8">
                <a href="/" className="hover:underline hover:text-[#a58d71]">Home</a>
                <span>/</span>
                <span className="font-medium">Blog</span>
              </div>
            </div>
          </div>
        </div>
      </section>




      <div className="bg-[#f8f7f4] min-h-screen font-serif lg:pt-50">


        {/* ── HERO ── */}
        <section className="pt-48 pb-20 px-6 text-center">
          <ScrollReveal>
            <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Artisan Journal</span>
            <h1 className="text-5xl md:text-8xl font-bold text-[#244d4d] mb-8 leading-tight">
              Insights & Inspiration
            </h1>
            <div className="h-[0.5px] bg-[#244d4d]/10 mx-auto w-1/4" />
          </ScrollReveal>
        </section>

        {/* ── FEATURED POST ── */}
        <section className="max-w-[1150px] mx-auto px-6 mb-32">
          <ScrollReveal>
            <Link href={`/blog/${featured.id}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-6 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-[#244d4d] text-white text-[10px] uppercase font-bold tracking-widest z-10">
                  Featured
                </div>
              </div>
              <div className="pr-10">
                <div className="text-[10px] text-[#a58d71] uppercase tracking-[0.3em] font-bold mb-6 block">
                  {featured.category} — {featured.date}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#244d4d] mb-8 leading-tight group-hover:text-black transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 font-sans leading-relaxed mb-10 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                  <div className="text-xs uppercase tracking-widest font-bold text-black border-b border-black pb-1">
                    Read Journal →
                  </div>
                  <span className="text-[10px] text-gray-400 font-sans tracking-widest uppercase ml-auto">{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </section>

        {/* ── BLOG GRID ── */}
        <section className="max-w-[1150px] mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {blogPosts.slice(1).map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 100}>
                <Link href={`/blog/${post.id}`} className="group flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-10 shadow-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#244d4d]/0 group-hover:bg-[#244d4d]/10 transition-colors duration-500" />
                  </div>
                  <div className="flex-1 px-4 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9px] text-[#a58d71] uppercase tracking-[0.3em] font-bold">{post.category}</span>
                      <span className="text-[9px] text-gray-400 font-sans tracking-widest uppercase">{post.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#244d4d] mb-6 leading-tight group-hover:italic transition-all line-clamp-2 h-[80px]">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 font-sans text-sm leading-relaxed mb-10 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-6">
                      <span className="text-[10px] font-bold text-black group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-widest">
                        Discover More →
                      </span>
                      <span className="text-[9px] text-gray-400 font-sans uppercase tracking-[0.2em]">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
