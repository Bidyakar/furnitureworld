'use client';
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import ScrollReveal from "../../../components/scroll-reveal";

import { useCart, CartItem } from "../../../components/cart-context";

import Navbar from "../../../components/navbar";

export default function SubcategoryPage({ params }: { params: Promise<{ category: string, subcategory: string }> }) {
    const { addToCart } = useCart();
    
    // In Next 15+, we need to unwrap the params promise
    const { category, subcategory } = use(params);

    const handleAddToCart = (product: any) => {
        const cartItem: CartItem = {
            id: `sub-${product.id}`,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            category: formatName(category)
        };
        addToCart(cartItem);
    };

    // Format the URL slugs back into readable text
    const formatName = (slug: string) => {
        if (!slug) return '';
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const categoryName = formatName(category);
    const subcategoryName = formatName(subcategory);

    // Dynamic product images based on category to make it feel less repetitive
    const getCategoryImage = (index: number) => {
        const images: Record<string, string[]> = {
            'chair': ['/images/lamb1.jpg', '/images/lr1.jpg', '/images/lr2.jpg'],
            'table': ['/images/lr1.jpg', '/images/lr2.jpg', '/images/lr3.jpg'],
            'bed': ['/images/lr2.jpg', '/images/lr3.jpg', '/images/lr4.jpg'],
            'wardrobe': ['/images/lr3.jpg', '/images/lr4.jpg', '/images/lamb1.jpg'],
            'sofa': ['/images/lr4.jpg', '/images/lamb1.jpg', '/images/lr1.jpg'],
        };
        const catArray = images[category.toLowerCase()] || images['chair'];
        return catArray[index % catArray.length];
    };

    // Generate products for this subcategory
    const dummyProducts = [
        { id: 1, name: `Premium ${subcategoryName} v1`, price: "$299.00", image: getCategoryImage(0) },
        { id: 2, name: `Modern ${subcategoryName} v2`, price: "$349.00", image: getCategoryImage(1) },
        { id: 3, name: `Classic ${subcategoryName} v3`, price: "$499.00", image: getCategoryImage(2) },
        { id: 4, name: `Luxury ${subcategoryName} v4`, price: "$899.00", image: getCategoryImage(3) },
        { id: 5, name: `Minimalist ${subcategoryName} x`, price: "$249.00", image: getCategoryImage(4) },
        { id: 6, name: `Vintage ${subcategoryName} z`, price: "$459.00", image: getCategoryImage(5) },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={getCategoryImage(0)}
                        alt={subcategoryName}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-[#244d4d]/80 z-10" />

                <div className="absolute inset-0 z-20 flex flex-col max-w-[1150px] mx-auto px-6">
                    {/* Simplified Navbar inside the page structure for consistency with the main products page design */}
                    <div className="flex justify-between items-center pt-6 pb-4 text-white text-sm font-medium">
                        <div className="hidden sm:block">
                            Call us: <span className="text-yellow-400 font-medium">+012345 678 910</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="/products" className="hover:text-yellow-400 transition-colors uppercase tracking-widest text-[12px] font-bold">Back to Products</Link>
                            <Link href="/" className="hover:text-yellow-400 transition-colors uppercase tracking-widest text-[12px] font-bold">Home</Link>
                        </div>
                    </div>

                    <div className="h-[0.5px] bg-white/20 mb-8" />

                    <div className="flex-1 flex flex-col justify-center text-white">
                        <ScrollReveal>
                            <div className="text-center">
                                <span className="text-[#a58d71] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Collection</span>
                                <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
                                    {subcategoryName}
                                </h1>
                                <div className="flex justify-center items-center gap-3 text-sm font-medium tracking-wide">
                                    <Link href="/" className="opacity-60 hover:opacity-100 hover:text-yellow-400 transition-opacity">Home</Link>
                                    <span className="opacity-30">/</span>
                                    <Link href="/products" className="opacity-60 hover:opacity-100 hover:text-yellow-400 transition-opacity">Products</Link>
                                    <span className="opacity-30">/</span>
                                    <Link href={`/products/${category}`} className="opacity-80 hover:opacity-100 hover:text-yellow-400 transition-opacity">{categoryName}</Link>
                                    <span className="opacity-30">/</span>
                                    <span className="text-yellow-400">{subcategoryName}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* PRODUCT GRID */}
            <section className="py-24 px-6">
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#244d4d] leading-none mb-6 italic">Exquisite {subcategoryName}s</h2>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    Meticulously crafted with a focus on form and function. Our {subcategoryName.toLowerCase()} collection combines modern elegance with the durability you expect from Furniture World.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex items-center gap-4 text-sm font-bold text-[#244d4d]">
                            <span>Filter by:</span>
                            <div className="flex gap-2">
                                <span className="px-4 py-2 bg-gray-100 rounded-sm cursor-pointer hover:bg-[#244d4d] hover:text-white transition-colors">Price</span>
                                <span className="px-4 py-2 bg-gray-100 rounded-sm cursor-pointer hover:bg-[#244d4d] hover:text-white transition-colors">Material</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {dummyProducts.map((product, index) => (
                            <ScrollReveal key={product.id} delay={index * 100}>
                                <div className="group">
                                    <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-[#244d4d]/20 transition-all duration-500" />
                                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <button 
                                                onClick={() => handleAddToCart(product)}
                                                className="w-full bg-white text-[#244d4d] py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#244d4d] hover:text-white transition-colors shadow-2xl"
                                            >
                                                Add to Collection
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold font-serif text-[#1a1a1a] mb-2">{product.name}</h3>
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#a58d71]" />
                                                <div className="w-3 h-3 rounded-full bg-[#244d4d]" />
                                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-bold text-[#a58d71]">{product.price}</span>
                                            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Free Delivery</div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
