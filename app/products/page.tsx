'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ScrollReveal from "../components/scroll-reveal";
import { useCart, CartItem } from "../components/cart-context";
import CartDrawer from "../components/cart-drawer";

const categories = [
    { name: "Chair", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800", subcategories: ["Armchair", "Lounge Chair", "Dining Chair", "Accent Chair", "Office Chair", "Wingback Chair", "Club Chair", "Eames Style", "Rocking Chair", "Recliner", "Papasan Chair", "Bergère", "Barrel Chair", "Chesterfield Chair", "Wishbone Chair", "Slipper Chair", "Director's Chair", "Parson's Chair", "Ghost Chair", "Bean Bag Chair"] },
    { name: "Table", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800", subcategories: ["Dining Table", "Coffee Table", "Side Table", "Console Table", "Desk", "End Table", "Bistro Table", "Pedestal Table", "Trestle Table", "Farmhouse Table", "Drop-leaf Table", "Gateleg Table", "Nesting Tables", "Vanity Table", "Pub Table", "Counter Height", "Drafting Table", "Conference Table", "Gaming Table", "Outdoor Table"] },
    { name: "Bed", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800", subcategories: ["Single Bed", "Double Bed", "King Size", "Queen Size", "Bunk Bed", "Daybed", "Murphy Bed", "Canopy Bed", "Sleigh Bed", "Platform Bed", "Poster Bed", "Trundle Bed", "Divan Bed", "Cot Bed", "Storage Bed", "Adjustable Bed", "Four-Poster Bed", "Panel Bed", "Wingback Bed", "Loft Bed"] },
    { name: "Wardrobe", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800", subcategories: ["2-Door", "Sliding", "Walk-in", "Modular", "Built-in", "Armoire", "Chiffonier", "Corner Wardrobe", "Mirrored Wardrobe", "Freestanding", "Open Wardrobe", "Jewelry Armoire", "Gent's Wardrobe", "Fitted Wardrobe", "Sliding Mirrored", "3-Door Wardrobe", "4-Door Wardrobe", "Industrial Style", "Minimalist Closet", "Luxury Walk-in"] },
    { name: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", subcategories: ["2-Seater", "Sectional", "Sofa Bed", "Loveseat", "Chaise", "Chesterfield", "Lawson", "Tuxedo", "Mid-Century", "English Roll Arm", "Bridgewater", "Camelback", "Cabriole", "Divan", "Settee", "Daybed Sofa", "Power Recliner", "Modular Sofa", "Curved Sofa", "Outdoor Sofa"] },
    { name: "Lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800", subcategories: ["Pendant", "Chandelier", "Floor Lamp", "Table Lamp", "Wall Sconce", "Flush Mount", "Semi-Flush", "Track Lighting", "Recessed", "Desk Lamp", "Nightstand Lamp", "Arc Lamp", "Tripod Lamp", "Industrial Pendant", "Crystal Chandelier", "Smart Lighting", "String Lights", "Outdoor Lanterns", "Path Lighting", "Picture Lights"] },
    { name: "Storage", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800", subcategories: ["Bookshelf", "TV Stand", "Cabinet", "Sideboard", "Dresser", "Chest of Drawers", "Credenza", "Hutch", "Pantry", "Shoe Rack", "Wine Rack", "Trunk", "Floating Shelves", "Ottoman with Storage", "Wall Unit", "Media Console", "Bathroom Cabinet", "Drawer Unit", "Cube Storage", "Ladder Shelf"] },
    { name: "Decor", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", subcategories: ["Mirrors", "Rugs", "Vases", "Art", "Planters", "Statues", "Wall Clocks", "Trays", "Candles", "Curtains", "Throw Pillows", "Blankets", "Table Runners", "Picture Frames", "Tapestry", "Decorative Boxes", "Bookends", "Sculptures", "Wall Decals", "Fragrance"] },
    { name: "Outdoor", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800", subcategories: ["Patio Set", "Sun Lounger", "Outdoor Sofa", "Hammock", "Fire Pit", "Garden Bench", "Porch Swing", "Bistro Set", "Picnic Table", "Gazebo", "Pergola", "Outdoor Dining", "Deck Chairs", "Poolside Bed", "BBQ Cart", "Solar Path Lights", "Outdoor Rugs", "Planter Box", "Umbrella", "Patio Heater"] }
];

export default function Products() {
    const [searchQuery, setSearchQuery] = useState("");
    const { addToCart, cartCount } = useCart();

    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.subcategories.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleAddToCart = (item: any, catName: string) => {
        const cartItem: CartItem = {
            id: item.id || `${catName}-${item.name}`,
            name: item.name,
            price: item.price,
            image: item.img || item.image,
            quantity: 1,
            category: catName
        };
        addToCart(cartItem);
    };

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
                        src="/images/lr3.jpg"
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
                            <a href="tel:12345678910" className="ml-1 text-[#a58d71] hover:text-white transition-colors">
                                +012345 678 910
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/login" className="hover:text-[#a58d71] transition-colors">Login</Link>
                            <span className="opacity-30">/</span>
                            <Link href="/register" className="hover:text-[#a58d71] transition-colors">Register</Link>
                        </div>
                    </div>

                    <div className="h-[0.5px] bg-white/30" />

                    {/* Navbar */}
                    <div className="flex justify-between items-center pb-6 ">
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
                                    <li><Link href="/" className="hover:text-[#a58d71] transition-colors">Home</Link></li>
                                    <li><Link href="/products" className="hover:text-[#a58d71] transition-colors">Products</Link></li>
                                    <li className="relative group">
                                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#a58d71] transition-colors py-8">
                                            Pages
                                            <svg className="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        <div className="absolute top-full left-0 w-48 bg-[#1a3838] border border-white/5 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            <Link href="/about" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-[#a58d71] text-sm">About Us</Link>
                                            <Link href="/team" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-[#a58d71] text-sm">Team</Link>
                                            <Link href="/testimonials" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-[#a58d71] text-sm">Testimonials</Link>
                                            <Link href="/blog" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-[#a58d71] text-sm">Blog</Link>
                                            <Link href="/faq" className="block px-6 py-2 hover:bg-[#244d4d] hover:text-[#a58d71] text-sm">FAQ</Link>
                                        </div>
                                    </li>
                                    <li><Link href="/contact" className="hover:text-[#a58d71] transition-colors">Contact</Link></li>
                                </ul>
                            </nav>

                            {/* NEW: Cart Toggle in Product Hero */}
                            <button
                                onClick={() => (window as any).dispatchEvent(new CustomEvent('toggle-cart'))}
                                className="relative group p-2 hover:bg-white/10 rounded-full transition-all"
                            >
                                <svg className="w-6 h-6 text-[#a58d71] group-hover:text-[#a58d71] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-[#a58d71] text-[#244d4d] text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce shadow-lg">
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
                            <h1 className="text-7xl font-bold font-serif tracking-tight text-white mb-8">Our Products</h1>

                            {/* SEARCH SECTION */}
                            <div className="max-w-xl mx-auto relative group px-6">
                                <input
                                    type="text"
                                    placeholder="Search for furniture, styles, or collections..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-5 rounded-sm text-white placeholder-white/60 focus:outline-none focus:bg-white focus:text-[#244d4d] transition-all duration-500 shadow-2xl text-sm font-medium"
                                />
                                <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#244d4d] transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="text-sm text-white flex justify-center items-center gap-2 mt-8">
                                <a href="/" className="hover:underline hover:text-[#a58d71]">Home</a>
                                <span>/</span>
                                <span className="font-medium">Products</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORIES SECTION */}
            <section className="py-24 px-6 bg-[#fcfcfc]">
                <div className="max-w-[1320px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#a58d71] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Collections</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#244d4d] leading-tight italic">
                            {searchQuery ? `Search results for "${searchQuery}"` : "Shop by Category"}
                        </h2>
                    </div>

                    <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category) => (
                                <div
                                    key={category.name}
                                    className="min-w-full sm:min-w-[450px] min-h-[600px] bg-white shadow-sm border border-gray-100 rounded-sm p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group snap-start flex flex-col"
                                >
                                    <div className="w-full h-[250px] relative overflow-hidden rounded mb-6 shrink-0">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
                                    </div>
                                    <Link href={`/products/${category.name.toLowerCase()}`}>
                                        <h3 className="text-3xl font-bold font-serif text-[#1a1a1a] hover:text-[#a58d71] transition-colors mb-6 cursor-pointer text-center">
                                            {category.name}
                                        </h3>
                                    </Link>
                                    <div className="flex flex-wrap justify-center gap-2 overflow-y-auto max-h-[300px] pb-2 custom-scrollbar">
                                        {category.subcategories.map((sub, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/products/${category.name.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-[10px] bg-[#f8f9fa] text-gray-400 px-4 py-2 rounded-sm hover:bg-[#244d4d] hover:text-white transition-all cursor-pointer font-bold uppercase tracking-widest border border-gray-100"
                                            >
                                                {sub}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="w-full text-center py-20 text-gray-400 font-serif italic text-2xl">
                                No collections match your search...
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* FEATURED PRODUCTS SECTION */}
            <section className="py-24 px-6 bg-white border-t border-gray-100">
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                        <div className="max-w-2xl">
                            <span className="text-[#a58d71] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Our Bestpieces</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#244d4d] leading-tight italic">
                                Featured Products
                            </h2>
                        </div>
                        <Link href="/products" className="px-10 py-4 bg-[#244d4d] text-white hover:bg-[#1a3838] transition-all duration-300 text-sm font-semibold tracking-widest uppercase shadow-xl">
                            All Collections
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { id: 'feat-1', name: "Velvet Lounge Chair", price: "$499.00", cat: "Chair", img: "/images/lamb1.jpg" },
                            { id: 'feat-2', name: "Solid Oak Table", price: "$1,299.00", cat: "Table", img: "/images/lr1.jpg" },
                            { id: 'feat-3', name: "Minimalist Bed Frame", price: "$899.00", cat: "Bed", img: "/images/lr2.jpg" },
                            { id: 'feat-4', name: "Modern Sliding Wardrobe", price: "$1,499.00", cat: "Wardrobe", img: "/images/lr3.jpg" },
                        ].map((prod, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-gray-100">
                                    <Image
                                        src={prod.img}
                                        alt={prod.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#244d4d]">
                                        New Arrival
                                    </div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                                        <Link
                                            href={`/products/${prod.cat.toLowerCase()}`}
                                            className="bg-[#244d4d] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-[#a58d71]"
                                        >
                                            View Details
                                        </Link>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddToCart(prod, prod.cat);
                                            }}
                                            className="bg-white text-[#244d4d] px-8 py-3 text-[10px] font-bold uppercase tracking-widest shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-[#244d4d] hover:text-white delay-75"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1 block">{prod.cat}</span>
                                    <h3 className="text-xl font-bold font-serif text-[#1a1a1a] mb-2 group-hover:text-[#a58d71] transition-colors">{prod.name}</h3>
                                    <p className="text-[#a58d71] font-bold text-lg">{prod.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 px-6 bg-[#244d4d]">
                <div className="max-w-[1108px] mx-auto text-center">
                    <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-xs mb-8 block">Bespoke Design</span>
                    <h2 className="text-5xl md:text-7xl font-bold font-serif text-white mb-10 leading-tight italic">
                        Want a Custom Design?
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed">
                        If you're looking for a unique piece that fits your space perfectly, our team of expert craftsmen can help you bring your vision to life with custom spatial planning and bespoke manufacturing.
                    </p>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-[#a58d71] text-white hover:bg-white hover:text-[#244d4d] transition-all duration-500 text-sm font-bold uppercase tracking-[0.2em] shadow-2xl">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </>

    );
}













