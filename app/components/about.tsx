"use client";

import Image from "./blur-image";

const About = () => {
    return (
        <section className="bg-[#f0ece5] py-24 md:py-32 overflow-hidden relative">
            <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left side: Images */}
                <div className="relative animate-fade-in delay-200">
                    {/* Background arched frame for images */}
                    <div className="absolute -left-[50px] md:-left-[100px] top-[10%] w-[80%] h-[120%] bg-[#d9d0c5] rounded-tl-[300px] rounded-bl-[300px] rounded-r-3xl -z-10"></div>
                    
                    <div className="relative z-10 grid grid-cols-2 gap-4 h-[600px]">
                        <div className="relative h-full w-full rounded-2xl overflow-hidden mt-12 shadow-xl hover:scale-[1.02] transition-transform duration-700">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
                                alt="Modern furniture chair"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-4 h-full">
                            <div className="relative h-2/3 w-full rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
                                    alt="Modern furniture living room"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-1/3 w-full rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800"
                                    alt="Modern furniture detail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side: Content */}
                <div className="lg:pl-10 animate-fade-in-up delay-300 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <p className="text-[#a58d71] uppercase font-bold tracking-widest text-sm mb-4">
                        About Us
                    </p>
                    <h2 className="text-[#2d2d2d] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
                        Crafting Furniture <br /> with Different <br /> Approach.
                    </h2>
                    
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
                        We are passionate about creating aesthetic, highly functional and modern furniture for those who want to elevate their living spaces. Our approach combines traditional craftsmanship with contemporary design principles.
                    </p>
                    
                    <button className="px-10 py-4 bg-[#244d4d] text-white hover:bg-[#1a3838] transition-all duration-300 text-sm font-semibold tracking-widest uppercase shadow-xl rounded-sm">
                        Learn More
                    </button>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 mt-16 pt-10 border-t border-gray-300 w-full">
                        <div className="animate-fade-in-up delay-500">
                            <h3 className="text-4xl sm:text-5xl font-serif font-bold text-[#2d2d2d]">15+</h3>
                            <p className="text-gray-500 font-medium mt-2 text-sm sm:text-base">Years of Experience</p>
                        </div>
                        <div className="animate-fade-in-up delay-700">
                            <h3 className="text-4xl sm:text-5xl font-serif font-bold text-[#2d2d2d]">85+</h3>
                            <p className="text-gray-500 font-medium mt-2 text-sm sm:text-base">Design Awards</p>
                        </div>
                        <div className="animate-fade-in-up delay-900 col-span-2 sm:col-span-1">
                            <h3 className="text-4xl sm:text-5xl font-serif font-bold text-[#2d2d2d]">8k+</h3>
                            <p className="text-gray-500 font-medium mt-2 text-sm sm:text-base">Happy Clients</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
