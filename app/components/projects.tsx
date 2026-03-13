"use client";

import Image from "./blur-image";
import TextReveal from "./text-reveal";
import ScrollReveal from "./scroll-reveal";

const Projects = () => {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Left Side: Layout Block + Stats */}
                <div className="flex flex-col w-full order-last lg:order-first">
                    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] mb-16 rounded-sm overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200"
                            alt="Modern Sofa Design"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            revealDelay={150}
                        />
                        {/* Overlay Box */}
                        <ScrollReveal delay={250} className="absolute bottom-4 left-4 right-4 sm:bottom-[-2rem] sm:right-6 lg:-right-8 z-10 sm:left-auto">
                            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-2xl max-w-none sm:max-w-sm border border-gray-100 rounded-sm">
                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#244d4d] mb-3">
                                    <TextReveal>Modern Sofa Design</TextReveal>
                                </h3>
                                <div className="text-gray-500 text-sm leading-relaxed">
                                    <TextReveal delay={100}>Furniture World is one of the most popular for premium interior concepts.</TextReveal>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-y-16 gap-x-8 mt-auto pt-10">
                        <ScrollReveal delay={100} className="text-center relative">
                            <h4 className="text-6xl font-serif font-bold text-[#244d4d] mb-3">
                                <TextReveal>20</TextReveal>
                            </h4>
                            <p className="text-gray-500 text-sm">Years of experience</p>
                            {/* Dotted border vertical */}
                            <div className="hidden md:block absolute right-[-1rem] top-2 bottom-2 w-px border-r border-dotted border-gray-300"></div>
                        </ScrollReveal>
                        <ScrollReveal delay={200} className="text-center relative">
                            <h4 className="text-6xl font-serif font-bold text-[#244d4d] mb-3">
                                <TextReveal delay={100}>35</TextReveal>
                            </h4>
                            <p className="text-gray-500 text-sm">Award gained</p>
                        </ScrollReveal>

                        {/* Dotted border horizonatal */}
                        <div className="col-span-2 border-t border-dotted border-gray-300 -my-4 h-px w-[80%] mx-auto"></div>

                        <ScrollReveal delay={300} className="text-center relative">
                            <h4 className="text-6xl font-serif font-bold text-[#244d4d] mb-3">
                                <TextReveal delay={200}>42</TextReveal>
                            </h4>
                            <p className="text-gray-500 text-sm">Branches across world</p>
                            {/* Dotted border vertical */}
                            <div className="hidden md:block absolute right-[-1rem] top-2 bottom-2 w-px border-r border-dotted border-gray-300"></div>
                        </ScrollReveal>
                        <ScrollReveal delay={400} className="text-center">
                            <h4 className="text-6xl font-serif font-bold text-[#244d4d] mb-3">
                                <TextReveal delay={300}>1200</TextReveal>
                            </h4>
                            <p className="text-gray-500 text-sm">Happy Customers</p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Right Side: Latest Projects */}
                <div className="flex flex-col">
                    <h2 className="text-[#244d4d] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-14 text-center lg:text-left">
                        <TextReveal>our latest Projects</TextReveal>
                    </h2>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 pb-2">
                        <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-sm">
                            <Image src="https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?auto=format&fit=crop&q=80&w=800" alt="Lounge Chair" fill className="object-cover group-hover:scale-105 transition-transform duration-700" revealDelay={100} />
                        </div>
                        <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-sm">
                            <Image src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800" alt="Bed Frame" fill className="object-cover group-hover:scale-105 transition-transform duration-700" revealDelay={200} />
                        </div>
                        <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-sm">
                            <Image src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800" alt="Wooden Dresser" fill className="object-cover group-hover:scale-105 transition-transform duration-700" revealDelay={300} />
                        </div>
                        <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-sm">
                            <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" alt="Living Set" fill className="object-cover group-hover:scale-105 transition-transform duration-700" revealDelay={400} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
