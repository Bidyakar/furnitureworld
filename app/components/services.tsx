"use client";

import Image from "./blur-image";

const Services = () => {
    const services = [
        {
            title: "Home Furniture",
            description: "Furniture World is one of the most popular for those who want to elevate their home aesthetics.",
            img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Office Furniture",
            description: "Premium ergonomic solutions and elegant designs for the modern workplace.",
            img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Hospitality Decor",
            description: "Durable, stylish seating and tables designed for hospitality spaces.",
            img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Custom Planning",
            description: "Tailored spatial solutions and bespoke furniture pieces made specifically for you.",
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="bg-white py-24 md:py-32">
            <div className="max-w-[1320px] mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 animate-fade-in text-center md:text-left">
                    <div className="max-w-2xl">
                        <p className="text-[#a58d71] uppercase font-bold tracking-widest text-sm mb-4">
                            Our Services
                        </p>
                        <h2 className="text-[#2d2d2d] text-4xl sm:text-5xl font-serif font-bold leading-tight">
                            We provide different types of Furniture Solutions
                        </h2>
                    </div>
                    <button className="px-10 py-4 bg-[#244d4d] text-white hover:bg-[#1a3838] transition-all duration-300 text-sm font-semibold tracking-widest uppercase flex-shrink-0 shadow-xl rounded-sm">
                        View All Services
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`group cursor-pointer animate-fade-in-up delay-${(index + 1) * 200} flex flex-col h-full bg-[#f8f9fa] p-5 rounded-md hover:shadow-2xl transition-all duration-500 perspective-3d`}>
                            <div className="relative h-64 w-full overflow-hidden mb-6 rounded-sm">
                                {/* Adding default gray background overlay for loading states */}
                                <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                            </div>
                            
                            <h3 className="text-2xl font-serif font-bold text-[#2d2d2d] mb-3 group-hover:text-[#244d4d] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-8 text-sm flex-grow">
                                {service.description}
                            </p>
                            
                            <div className="w-12 h-1 bg-[#a58d71] group-hover:w-full transition-all duration-500 mb-2"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
