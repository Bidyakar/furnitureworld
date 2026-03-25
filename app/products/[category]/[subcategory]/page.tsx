'use client';
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import ScrollReveal from "../../../components/scroll-reveal";

import { useCart, CartItem } from "../../../components/cart-context";



export default function SubcategoryPage({ params }: { params: Promise<{ category: string, subcategory: string }> }) {
    const router = useRouter();
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = React.useState<any>(null);
    const [userRating, setUserRating] = React.useState(5);

    // In Next 15+, we need to unwrap the params promise
    const { category, subcategory } = use(params);

    const handleAddToCart = (product: any) => {
        const cartItem: CartItem = {
            id: `sub-${category}-${subcategory}-${product.id}`,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            category: formatName(category)
        };
        addToCart(cartItem);
    };

    const handleBuyNow = (product: any) => {
        handleAddToCart(product);
        router.push('/checkout');
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
        { id: 1, name: `Premium ${subcategoryName} v1`, price: "$299.00", image: getCategoryImage(0), desc: "The pinnacle of comfort and style. This piece features hand-selected hardwoods and premium upholstery, ensuring both durability and a luxurious feel. Perfect for those who value craftsmanship and timeless design." },
        { id: 2, name: `Modern ${subcategoryName} v2`, price: "$349.00", image: getCategoryImage(1), desc: "Sleek lines and a minimalist profile define this modern take on a classic silhouette. Engineered for ergonomic support, it seamlessly blends into any contemporary living or office space." },
        { id: 3, name: `Classic ${subcategoryName} v3`, price: "$499.00", image: getCategoryImage(2), desc: "A tribute to traditional aesthetics. With ornate details and a rich finish, this piece brings an air of sophistication and heritage to your home, making it a true statement piece." },
        { id: 4, name: `Luxury ${subcategoryName} v4`, price: "$899.00", image: getCategoryImage(3), desc: "Experience the ultimate in luxury. Using rare materials and bespoke finishing techniques, this exclusive edition offers unparalleled elegance and a standard of quality that is second to none." },
        { id: 5, name: `Minimalist ${subcategoryName} x`, price: "$249.00", image: getCategoryImage(4), desc: "Focusing on the essentials. This minimalist design removes the unnecessary to highlight the natural beauty of the materials and the purity of the form. Ideal for clean, open spaces." },
        { id: 6, name: `Vintage ${subcategoryName} z`, price: "$459.00", image: getCategoryImage(5), desc: "A nostalgic touch for the modern home. Inspired by mid-century designs, this vintage-flavored piece combines retro charm with modern construction standards for a unique and reliable experience." },
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* HERO SECTION */}
            <section className="relative w-full h-[40vh]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={selectedProduct ? selectedProduct.image : getCategoryImage(0)}
                        alt={subcategoryName}
                        fill
                        className="object-cover transition-all duration-1000"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-[#244d4d]/85 z-10" />

                <div className="absolute inset-0 z-20 flex flex-col max-w-[1150px] mx-auto px-6">
                    <div className="flex justify-between items-center pt-6 pb-4 text-white text-sm font-medium">
                        <div className="hidden sm:block">
                            Call us: <span className="text-[#a58d71] font-medium">+012345 678 910</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="/products" className="hover:text-[#a58d71] transition-colors uppercase tracking-widest text-[12px] font-bold text-white">All Products</Link>
                            <Link href="/" className="hover:text-[#a58d71] transition-colors uppercase tracking-widest text-[12px] font-bold text-white">Home</Link>
                        </div>
                    </div>

                    <div className="h-[0.5px] bg-white/20 mb-8" />

                    <div className="flex-1 flex flex-col justify-center text-white">
                        <ScrollReveal>
                            <div className="text-center">
                                <span className="text-[#a58d71] uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">
                                    {selectedProduct ? "Product Detail" : "Collection"}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight italic">
                                    {selectedProduct ? selectedProduct.name : subcategoryName}
                                </h1>
                                <div className="flex justify-center items-center gap-3 text-[11px] font-bold uppercase tracking-widest opacity-80">
                                    <Link href="/" className="hover:text-[#a58d71]">Home</Link>
                                    <span>/</span>
                                    <Link href="/products" className="hover:text-[#a58d71]">Products</Link>
                                    <span>/</span>
                                    <Link href={`/products/${category}`} className="hover:text-[#a58d71]">{categoryName}</Link>
                                    <span>/</span>
                                    {selectedProduct ? (
                                        <>
                                            <button onClick={() => setSelectedProduct(null)} className="hover:text-[#a58d71]">{subcategoryName}</button>
                                            <span>/</span>
                                            <span className="text-[#a58d71]">{selectedProduct.name}</span>
                                        </>
                                    ) : (
                                        <span className="text-[#a58d71]">{subcategoryName}</span>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {!selectedProduct ? (
                /* PRODUCT GRID VIEW */
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-[1320px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div className="max-w-xl">
                                <ScrollReveal>
                                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#244d4d] leading-none mb-6 italic">Exquisite {subcategoryName}s</h2>
                                    <p className="text-gray-500 leading-relaxed font-medium">
                                        Meticulously crafted with a focus on form and function. Our {subcategoryName.toLowerCase()} collection combines modern elegance with the durability you expect from Furniture World.
                                    </p>
                                </ScrollReveal>
                            </div>
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#244d4d]">
                                <span className="opacity-40">Filter:</span>
                                <div className="flex gap-2">
                                    <span className="px-5 py-2 hover:bg-[#244d4d] hover:text-white border border-gray-100 transition-all cursor-pointer bg-gray-50">Price</span>
                                    <span className="px-5 py-2 hover:bg-[#244d4d] hover:text-white border border-gray-100 transition-all cursor-pointer bg-gray-50">Material</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                            {dummyProducts.map((product, index) => (
                                <ScrollReveal key={product.id} delay={index * 100}>
                                    <div className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                                        <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-[#244d4d]/20 transition-all duration-500" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                                                <div className="bg-white text-[#244d4d] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    View Details
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl font-bold font-serif text-[#1a1a1a] mb-2 group-hover:text-[#a58d71] transition-colors">{product.name}</h3>
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-[#a58d71]" />
                                                    <div className="w-3 h-3 rounded-full bg-[#244d4d]" />
                                                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-2xl font-bold text-[#a58d71]">{product.price}</span>
                                                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">In Stock</div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                /* PRODUCT DETAIL VIEW */
                <ScrollReveal>
                    <section className="py-24 px-6 bg-white min-h-[60vh]">
                        <div className="max-w-[1150px] mx-auto">
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="flex items-center gap-3 text-[#a58d71] text-[10px] font-bold uppercase tracking-widest mb-16 hover:text-[#244d4d] transition-colors group"
                            >
                                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                                Back to Collection
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                                {/* Left Side: Large Product Image */}
                                <div className="relative aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
                                    <Image
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right Side: Product Description & Actions */}
                                <div className="flex flex-col gap-10">
                                    <div>
                                        <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-xs mb-4 block">Handcrafted Excellence</span>
                                        <h2 className="text-5xl md:text-6xl font-bold font-serif text-[#244d4d] mb-6 leading-tight italic">{selectedProduct.name}</h2>
                                        <div className="flex items-center gap-6 mb-8">
                                            <span className="text-4xl font-bold text-[#a58d71]">{selectedProduct.price}</span>
                                            <div className="h-8 w-[1px] bg-gray-200" />
                                            <div className="flex text-yellow-500 text-sm">
                                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">4.9 (128 Reviews)</span>
                                        </div>
                                        <p className="text-gray-500 text-lg leading-relaxed font-medium mb-10">
                                            {selectedProduct.desc}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button
                                            onClick={() => handleBuyNow(selectedProduct)}
                                            className="w-full bg-[#244d4d] text-white py-6 text-[12px] font-bold uppercase tracking-[0.3em] text-center hover:bg-[#a58d71] transition-all shadow-xl"
                                        >
                                            Buy Now
                                        </button>
                                        <button
                                            onClick={() => handleAddToCart(selectedProduct)}
                                            className="w-full bg-white border-2 border-[#244d4d] text-[#244d4d] py-6 text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-[#244d4d] hover:text-white transition-all"
                                        >
                                            Add to Collection
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#a58d71] mb-2">Material</h4>
                                            <p className="text-sm font-bold text-[#244d4d]">Solid Oak</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#a58d71] mb-2">Delivery</h4>
                                            <p className="text-sm font-bold text-[#244d4d]">3-5 Days</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#a58d71] mb-2">Warranty</h4>
                                            <p className="text-sm font-bold text-[#244d4d]">5 Years</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* REVIEWS SECTION (Moved Inside Detail View) */}
                    <section className="bg-[#f8f7f4] py-24 px-6 border-t border-gray-100">
                        <div className="max-w-[1150px] mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
                                {/* Summary & Form */}
                                <div className="flex flex-col gap-12">
                                    <div>
                                        <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-xs mb-4 block">Feedback</span>
                                        <h2 className="text-4xl font-bold font-serif text-[#244d4d] mb-8 italic">Customer Impressions</h2>
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="flex text-yellow-500 text-xl">
                                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                            </div>
                                            <span className="text-2xl font-bold text-[#244d4d]">4.9</span>
                                        </div>
                                        <p className="text-gray-500 font-medium">Based on 128 verified reviews for the {selectedProduct.name}.</p>
                                    </div>

                                    <div className="bg-white p-10 rounded-sm shadow-xl border border-gray-100">
                                        <h3 className="text-2xl font-bold font-serif text-[#244d4d] mb-6">Leave a Review</h3>
                                        <form className="space-y-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#a58d71]">Your Name</label>
                                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#244d4d] transition-all" placeholder="John Doe" />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#a58d71]">Rating</label>
                                                    <div className="flex gap-2 text-2xl">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <button
                                                                key={star}
                                                                type="button"
                                                                onClick={() => setUserRating(star)}
                                                                className={`transition-all duration-300 transform hover:scale-125 ${star <= userRating ? 'text-yellow-500' : 'text-gray-200 hover:text-[#a58d71]'}`}
                                                            >
                                                                ★
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#a58d71]">Your Comment</label>
                                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#244d4d] transition-all resize-none" placeholder="Share your experience..." />
                                            </div>
                                            <button className="w-full bg-[#244d4d] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#a58d71] transition-all shadow-lg">Submit Review</button>
                                        </form>
                                    </div>
                                </div>

                                {/* Recent Reviews List */}
                                <div className="flex flex-col gap-10">
                                    {[
                                        { name: "Sarah Mitchell", date: "2 Weeks Ago", rating: 5, comment: "I am absolutely in love with this particular model. The craftsmanship is evident in every detail. Delivery was smooth and the assembly took minutes." },
                                        { name: "James Anderson", date: "1 Month Ago", rating: 5, comment: "Fantastic quality and design. It fits perfectly in my contemporary living room. Furniture World never fails to impress with their collections." },
                                        { name: "Emily Richardson", date: "2 Months Ago", rating: 4, comment: "Beautiful design and very sturdy. The color was slightly deeper than in the photos but I actually prefer it this way. Highly recommend!" },
                                    ].map((review, i) => (
                                        <div key={i} className="pb-10 border-b border-gray-200 last:border-0 group">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="text-xl font-bold font-serif text-[#1a1a1a] mb-1">{review.name}</h4>
                                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{review.date}</span>
                                                </div>
                                                <div className="flex text-[#a58d71] text-sm">
                                                    {[...Array(review.rating)].map((_, j) => <span key={j}>★</span>)}
                                                    {[...Array(5 - review.rating)].map((_, j) => <span key={j} className="text-gray-200">★</span>)}
                                                </div>
                                            </div>
                                            <p className="text-gray-500 leading-relaxed italic">&ldquo;{review.comment}&rdquo;</p>
                                        </div>
                                    ))}
                                    <button className="self-start text-[#a58d71] text-xs font-bold uppercase tracking-[0.3em] hover:text-[#244d4d] transition-all">View All 128 Reviews +</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            )}
        </div>
    );
}
