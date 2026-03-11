"use client";

import Image from "./blur-image";

const Features = () => {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 items-stretch">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col animate-fade-in-up delay-100 items-center lg:items-start text-center lg:text-left h-full">
                        <h2 className="text-[#244d4d] text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-8 tracking-tight">
                            Why people <br /> choose Furniture World
                        </h2>
                        <p className="text-gray-500 leading-[1.8] mb-12 text-[15px] font-medium max-w-sm">
                            Furniture World is one of the most popular furniture brands for those who want to explore premium aesthetics and try creating absolute comfort in their homes.
                        </p>

                        <div className="w-full bg-[#f8f9fa] p-8 rounded-sm mb-12 group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 perspective-3d">
                            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                                <div className="flex-shrink-0">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#244d4d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                        <path d="m15 5 4 4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-serif font-bold text-[#244d4d] mb-3 group-hover:text-black transition-colors">Modern Design</h3>
                                    <p className="text-gray-500 leading-[1.8] text-[15px]">
                                        Furniture World is one of the most popular for those who want to explore the finest curated concepts globally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image 1 */}
                        <div className="relative w-full h-[350px] mt-auto group overflow-hidden rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
                                alt="Modern living room sofa"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col animate-fade-in-up delay-300 items-center lg:items-start text-center lg:text-left h-full">
                        {/* Image 2 */}
                        <div className="relative w-full h-[350px] mb-12 group overflow-hidden rounded-sm lg:mt-0">
                            <Image
                                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
                                alt="Elegant Armchair"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="w-full bg-[#f8f9fa] p-8 rounded-sm mb-12 group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 flex-grow perspective-3d">
                            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start h-full">
                                <div className="flex-shrink-0">
                                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#244d4d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="8" r="5" />
                                        <path d="M20 21a8 8 0 0 0-16 0" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-serif font-bold text-[#244d4d] mb-3 group-hover:text-black transition-colors">Expert Team</h3>
                                    <p className="text-gray-500 leading-[1.8] text-[15px]">
                                        Furniture World is one of the most popular for those who want to explore with world-class support and materials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-[#f8f9fa] p-8 rounded-sm items-center lg:items-start group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 mb-12 lg:mb-0 perspective-3d">
                            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                                <div className="flex-shrink-0">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#244d4d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-serif font-bold text-[#244d4d] mb-3 group-hover:text-black transition-colors">Reasonable Price</h3>
                                    <p className="text-gray-500 leading-[1.8] text-[15px]">
                                        Furniture World is one of the most popular for those who want to explore premium aesthetics affordably.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col h-full lg:pl-6 pt-8 lg:pt-0 animate-fade-in-up delay-500">
                        <div className="relative w-full h-[500px] lg:h-full min-h-[500px] group overflow-hidden rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800"
                                alt="Tall contemporary shelving unit"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
