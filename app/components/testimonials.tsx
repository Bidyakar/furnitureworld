"use client";

import Image from "./blur-image";

const Testimonials = () => {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-20 items-center">
                
                {/* Left Side: Quotes */}
                <div className="flex flex-col justify-center animate-fade-in-up text-center md:text-left items-center md:items-start">
                    <h2 className="text-[#244d4d] text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.15] mb-8 md:mb-12">
                        Expressions of <br className="hidden sm:block" /> our happy Customer
                    </h2>
                    
                    {/* Stars */}
                    <div className="flex gap-2 text-yellow-500 mb-8 text-xl">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>

                    <p className="text-gray-600 font-medium text-base sm:text-lg md:text-xl leading-loose mb-10 md:mb-12 max-w-xl">
                        &ldquo;Furniture World is one of the most popular furniture brands for those who want to explore premium aesthetics and try to make your home beautiful and provide the best design.&rdquo;
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4 w-full gap-8">
                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-md">
                                <Image 
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                                    fill 
                                    className="object-cover" 
                                    alt="Bob Williams" 
                                />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-[#244d4d] text-lg">Bob Williams</h4>
                                <p className="text-sm text-gray-500 font-medium mt-1">Vergon Enterpirze</p>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-3">
                            <button className="w-12 h-12 rounded-full border border-gray-200 text-[#244d4d] flex items-center justify-center hover:bg-[#244d4d] hover:text-white transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                            </button>
                            <button className="w-12 h-12 rounded-full border border-gray-200 text-[#244d4d] flex items-center justify-center hover:bg-[#244d4d] hover:text-white transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Collage */}
                <div className="relative h-[650px] w-full hidden md:block animate-fade-in delay-300">
                    {/* Tall Left Image */}
                    <div className="absolute left-0 top-[5%] w-[48%] h-[85%] overflow-hidden rounded-[80px_15px_15px_80px] shadow-2xl z-10 transition-transform duration-700 hover:scale-[1.02]">
                        <Image 
                            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800" 
                            fill 
                            className="object-cover" 
                            alt="Comfortable bed structure" 
                        />
                    </div>
                    {/* Top Right Image */}
                    <div className="absolute right-0 top-0 w-[45%] h-[40%] overflow-hidden rounded-[80px_0_0_0] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                        <Image 
                            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800" 
                            fill 
                            className="object-cover" 
                            alt="Stylish modern dresser" 
                        />
                    </div>
                    {/* Bottom Right Image */}
                    <div className="absolute right-0 bottom-0 top-[45%] w-[48%] h-[45%] mt-auto overflow-hidden rounded-[80px_0px_15px_15px] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                        <Image 
                            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80&w=800" 
                            fill 
                            className="object-cover" 
                            alt="Stool and table set" 
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
