"use client";

import Image from "./blur-image";

const Projects = () => {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                
                {/* Left Side: Layout Block + Stats */}
                <div className="flex flex-col w-full animate-fade-in-up order-last lg:order-first">
                    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] mb-16 rounded-sm overflow-hidden group">
                        <Image 
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200" 
                            alt="Modern Sofa Design" 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        {/* Overlay Box */}
                        <div className="absolute bottom-4 left-4 right-4 sm:bottom-[-2rem] sm:right-6 lg:-right-8 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-2xl max-w-none sm:max-w-sm border border-gray-100 z-10 animate-fade-in delay-500 rounded-sm sm:left-auto">
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#244d4d] mb-3">Modern Sofa Design</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Furniture World is one of the most popular for premium interior concepts.</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-y-16 gap-x-8 mt-auto pt-10">
                        <div className="text-center relative">
                            <h4 className="text-6xl font-serif font-bold text-[#244d4d] mb-3">20</h4>
                            <p className="text-gray-500 text-sm">Years of experience</p>
                            {/* Dotted border vertical */}
                            <div className="hidden md:block absolute right-[-1rem] top-2 bottom-2 w-px border-r border-dotted border-gray-300"></div>
                        </div>
                        <div className="text-center relative">
                            <h4 className="text-6xl font-serif font-bold text-[#244d4d] mb-3">35</h4>
                            <p className="text-gray-500 text-sm">Award gained</p>
                        </div>
                        
                        {/* Dotted border horizonatal */}
                        <div className="col-span-2 border-t border-dotted border-gray-300 -my-4 h-px w-[80%] mx-auto"></div>

                        <div className="text-center relative">
                            <h4 className="text-6xl font-serif font-bold text-[#244d4d] mb-3">42</h4>
                            <p className="text-gray-500 text-sm">Branches across world</p>
                            {/* Dotted border vertical */}
                            <div className="hidden md:block absolute right-[-1rem] top-2 bottom-2 w-px border-r border-dotted border-gray-300"></div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-6xl font-serif font-bold text-[#244d4d] mb-3">1200</h4>
                            <p className="text-gray-500 text-sm">Happy Customers</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Latest Projects */}
                <div className="flex flex-col animate-fade-in delay-200">
                    <h2 className="text-[#244d4d] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-14 text-center lg:text-left">
                        our latest Projects
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 pb-2">
                        <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-sm">
                            <Image src="https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?auto=format&fit=crop&q=80&w=800" alt="Lounge Chair" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-sm">
                            <Image src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800" alt="Bed Frame" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-sm">
                            <Image src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800" alt="Wooden Dresser" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-sm">
                            <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" alt="Living Set" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
