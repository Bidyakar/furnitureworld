'use client';
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import ScrollReveal from "../../components/scroll-reveal";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {

    const { category } = use(params);

    const formatName = (slug: string) => {
        if (!slug) return '';
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const categoryName = formatName(category);

    const categoryData: Record<string, { subcategories: string[], image: string, desc: string }> = {
        'chair': {
            subcategories: ["Armchair", "Lounge Chair", "Dining Chair", "Accent Chair", "Office Chair", "Wingback Chair", "Club Chair", "Eames Style", "Rocking Chair", "Recliner", "Papasan Chair", "Bergère", "Barrel Chair", "Chesterfield Chair", "Wishbone Chair", "Slipper Chair", "Director's Chair", "Parson's Chair", "Ghost Chair", "Bean Bag Chair"],
            image: "/images/lamb1.jpg",
            desc: "Discover our diverse collection of chairs, from cozy armchairs to ergonomic office seating and elegant dining sets."
        },
        'table': {
            subcategories: ["Dining Table", "Coffee Table", "Side Table", "Console Table", "Desk", "End Table", "Bistro Table", "Pedestal Table", "Trestle Table", "Farmhouse Table", "Drop-leaf Table", "Gateleg Table", "Nesting Tables", "Vanity Table", "Pub Table", "Counter Height", "Drafting Table", "Conference Table", "Gaming Table", "Outdoor Table"],
            image: "/images/lr1.jpg",
            desc: "The centerpiece of any room. Explore our selection of tables crafted for style, functionality, and lasting memories."
        },
        'bed': {
            subcategories: ["Single Bed", "Double Bed", "King Size", "Queen Size", "Bunk Bed", "Daybed", "Murphy Bed", "Canopy Bed", "Sleigh Bed", "Platform Bed", "Poster Bed", "Trundle Bed", "Divan Bed", "Cot Bed", "Storage Bed", "Adjustable Bed", "Four-Poster Bed", "Panel Bed", "Wingback Bed", "Loft Bed"],
            image: "/images/lr2.jpg",
            desc: "Designed for ultimate comfort and restful nights. Our beds range from minimal frames to grand statement pieces."
        },
        'wardrobe': {
            subcategories: ["2-Door", "Sliding", "Walk-in", "Modular", "Built-in", "Armoire", "Chiffonier", "Corner Wardrobe", "Mirrored Wardrobe", "Freestanding", "Open Wardrobe", "Jewelry Armoire", "Gent's Wardrobe", "Fitted Wardrobe", "Sliding Mirrored", "3-Door Wardrobe", "4-Door Wardrobe", "Industrial Style", "Minimalist Closet", "Luxury Walk-in"],
            image: "/images/lr3.jpg",
            desc: "Elegant storage solutions that organize your space without compromising on style. Modern designs for every bedroom."
        },
        'sofa': {
            subcategories: ["2-Seater", "Sectional", "Sofa Bed", "Loveseat", "Chaise", "Chesterfield", "Lawson", "Tuxedo", "Mid-Century", "English Roll Arm", "Bridgewater", "Camelback", "Cabriole", "Divan", "Settee", "Daybed Sofa", "Power Recliner", "Modular Sofa", "Curved Sofa", "Outdoor Sofa"],
            image: "/images/lr4.jpg",
            desc: "The soul of the living room. Our sofas offer premium comfort in sectional, compact, and multi-functional designs."
        }
    };

    const currentData = categoryData[category.toLowerCase()] || categoryData['chair'];

    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={currentData.image}
                        alt={categoryName}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-[#244d4d]/85 z-10" />

                <div className="absolute inset-0 z-20 flex flex-col max-w-[1108px] mx-auto">
                    <div className="flex justify-between items-center pt-8 pb-4 text-white text-sm">
                        <div className="flex items-center gap-6">
                            <Link href="/products" className="hover:text-yellow-400 transition-colors uppercase tracking-widest text-[12px] font-bold">All Products</Link>
                            <Link href="/" className="hover:text-yellow-400 transition-colors uppercase tracking-widest text-[12px] font-bold">Home</Link>
                        </div>
                    </div>
                    <div className="h-[0.5px] bg-white/20 mb-8" />

                    <div className="flex-1 flex flex-col justify-center text-white">
                        <ScrollReveal>
                            <div className="text-center">
                                <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-xs mb-4 block">Explore Category</span>
                                <h1 className="text-6xl md:text-8xl font-bold font-serif mb-6 leading-tight italic">
                                    {categoryName}s
                                </h1>
                                <p className="max-w-2xl mx-auto text-white/80 leading-relaxed font-medium mb-8">
                                    {currentData.desc}
                                </p>
                                <div className="flex justify-center items-center gap-3 text-sm font-medium tracking-wide">
                                    <Link href="/products" className="opacity-80 hover:opacity-100 hover:text-yellow-400 transition-all underline decoration-[#a58d71] underline-offset-4">Products</Link>
                                    <span className="opacity-40">/</span>
                                    <span className="text-yellow-400">{categoryName}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* SUBCATEGORIES GRID */}
            <section className="py-24 px-6 bg-[#fcfcfc]">
                <div className="max-w-[1320px] mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#244d4d] italic mb-4">Choose your style</h2>
                        <div className="w-24 h-1 bg-[#a58d71] mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {currentData.subcategories.map((sub, index) => (
                            <ScrollReveal key={sub} delay={index * 150}>
                                <Link
                                    href={`/products/${category.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-square overflow-hidden mb-8 shadow-2xl rounded-sm">
                                        <Image
                                            src={currentData.image} // Using main category image as base
                                            alt={sub}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-[#244d4d]/10 group-hover:bg-[#244d4d]/40 transition-all duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="border border-white/30 backdrop-blur-sm bg-white/10 px-8 py-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">View Collection</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold font-serif text-[#1a1a1a] mb-2 group-hover:text-[#a58d71] transition-colors">
                                            {sub}
                                        </h3>
                                        <div className="text-[#a58d71] text-xs font-bold uppercase tracking-widest overflow-hidden">
                                            <span className="inline-block translate-y-0 group-hover:-translate-y-full transition-transform duration-300">Explore Now</span>
                                            <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-300 text-[#244d4d]">Discover Premium Pieces</span>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
