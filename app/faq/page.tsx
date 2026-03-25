'use client';

import { useState, useEffect } from "react";
import { useCart } from "../components/cart-context";
import CartDrawer from "../components/cart-drawer";
import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import NextImage from "next/image";
import Image from "next/image";

const faqs = [
    {
        question: "What is the expected delivery time for my furniture?",
        answer: "Standard delivery typically takes 5-10 business days. For custom artisan pieces, please allow 3-4 weeks for meticulous crafting and quality inspection before dispatch."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, Furniture World ships globally. International shipping rates and delivery times vary by location. Please contact our support team for a detailed quote for your region."
    },
    {
        question: "What is your return policy for damaged items?",
        answer: "If your item arrives damaged, please report it within 24 hours of delivery. We will arrange a free replacement or full refund including shipping costs. All items must be in their original packaging."
    },
    {
        question: "How do I care for my solid wood furniture?",
        answer: "To maintain the longevity of solid wood, avoid direct sunlight and extreme humidity. Use a soft, lint-free cloth for dusting and high-quality wax once every six months to preserve the finish."
    },
    {
        question: "Can I customize the upholstery and dimensions of a product?",
        answer: "Absolutely. Many of our collections offer customization in fabric, color, and size. Look for the 'Bespoke' tag on product pages or contact our design planners for a custom consultation."
    },
    {
        question: "Is there a warranty provided on your collections?",
        answer: "All Furniture World products come with a 2-year limited warranty covering manufacturing defects. Our premium collections include an extended 5-year structural warranty."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);


    useEffect(() => {
        const handleToggle = () => setIsCartOpen(true);
        window.addEventListener('toggle-cart', handleToggle);
        return () => window.removeEventListener('toggle-cart', handleToggle);
    }, []);

    return (

        <div className="bg-[#f8f7f4] min-h-screen font-serif">
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* ── HERO ── */}
            <section className="relative w-full h-[80vh] overflow-hidden bg-[#244d4d]">
                <div className="absolute inset-0 opacity-20">
                    <NextImage src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200" alt="Furniture Background" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 h-2xl">
                    <ScrollReveal>
                        <span className="text-yellow-400 uppercase tracking-[0.4em] font-bold text-xs mb-4 block">Information Center</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Frequently Asked <span className="italic text-yellow-500/80">Questions</span></h1>
                        <div className="flex items-center justify-center gap-3 text-white/60 text-sm uppercase tracking-widest font-sans font-bold">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span>FAQ</span>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── FAQ ACCORDION ── */}
            <section className="max-w-[850px] mx-auto py-32 px-6 ">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className={`overflow-hidden transition-all duration-500 border ${openIndex === index ? 'border-[#244d4d] bg-white shadow-xl' : 'border-gray-100 bg-white/50'}`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-7 flex items-center justify-between text-left group"
                                >
                                    <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#244d4d]' : 'text-[#4a4a4a] group-hover:text-[#244d4d]'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`flex-shrink-0 ml-4 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-[#a58d71]' : 'text-gray-300'}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </span>
                                </button>
                                <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-8 pb-8 text-gray-500 leading-relaxed font-sans text-base">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-20 p-10 bg-[#244d4d] text-center text-white rounded-sm shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 blur-3xl" />
                    <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                    <p className="text-white/60 mb-8 font-sans">Our support team is available 24/7 to assist you with your artisan selection.</p>
                    <Link href="/contact" className="inline-block px-10 py-4 border border-white/20 hover:bg-white hover:text-[#244d4d] transition-all font-bold uppercase tracking-[0.2em] text-xs">
                        Contact Support
                    </Link>
                </div>
            </section>
        </div>
    );
}
