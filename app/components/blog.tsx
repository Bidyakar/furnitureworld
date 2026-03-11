"use client";

import Image from "./blur-image";

const Blog = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-[1320px] mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-16 border-b border-gray-200 pb-6 animate-fade-in text-center sm:text-left gap-6">
                    <h2 className="text-[#244d4d] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">Latest Post</h2>
                    <button className="px-10 py-4 bg-[#244d4d] text-white hover:bg-black font-semibold text-sm transition-all duration-300 uppercase tracking-widest shadow-xl rounded-sm">
                        View all
                    </button>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Main post */}
                    <div className="group cursor-pointer animate-fade-in-up perspective-3d">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">
                            OCTOBER 11, 2026 | BY - ALLEN BLICK
                        </p>
                        <h3 className="text-4xl lg:text-5xl font-serif font-bold text-[#244d4d] mb-6 leading-tight group-hover:text-black transition-colors max-w-2xl">
                            Seven tips to help you get better interior design & Concept
                        </h3>
                        <p className="text-gray-500 text-sm mb-10 md:mb-0 flex items-center gap-2 group-hover:text-[#244d4d] transition-colors uppercase tracking-widest font-bold">
                            Read more <span className="text-lg">→</span>
                        </p>
                    </div>

                    {/* Side posts (thumbnails only layout as per image) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                             <Image 
                                src="https://images.unsplash.com/photo-1540574163026-643ea20d25b5?auto=format&fit=crop&q=80&w=600" 
                                fill 
                                className="object-cover hover:scale-105 transition-transform duration-700" 
                                alt="Modern blue armchair"
                            />
                        </div>
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                             <Image 
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600" 
                                fill 
                                className="object-cover hover:scale-105 transition-transform duration-700" 
                                alt="Stylish living room setup"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
