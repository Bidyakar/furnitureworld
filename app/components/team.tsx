"use client";

import Image from "./blur-image";
import TextReveal from "./text-reveal";
import ScrollReveal from "./scroll-reveal";

const teamMembers = [
    {
        name: "Alexander Mitchell",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
        socials: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
        name: "Sophia Anderson",
        role: "Lead Interior Designer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
        socials: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
        name: "James Carter",
        role: "Head of Craftsmanship",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
        socials: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
        name: "Emily Richardson",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
        socials: { twitter: "#", linkedin: "#", instagram: "#" },
    },
];

const Team = () => {
    return (
        <section className="bg-[#f8f7f4] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <TextReveal className="text-[#a58d71] uppercase font-bold tracking-widest text-sm mb-4">
                        Our Team
                    </TextReveal>
                    <h2 className="text-[#244d4d] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                        <TextReveal>Meet the Experts</TextReveal>
                        <TextReveal delay={100}>Behind Every Design</TextReveal>
                    </h2>
                    <div className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        <TextReveal delay={200}>
                            Our talented team of designers, craftsmen, and visionaries work together to bring you furniture that transforms spaces and elevates living.
                        </TextReveal>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="group cursor-pointer">
                                {/* Image Container */}
                                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        revealDelay={(index + 1) * 100}
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-[#244d4d]/0 group-hover:bg-[#244d4d]/40 transition-all duration-500 flex items-end justify-center pb-8">
                                        {/* Social Icons */}
                                        <div className="flex gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            {/* Twitter / X */}
                                            <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#244d4d] hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </a>
                                            {/* LinkedIn */}
                                            <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#244d4d] hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                            {/* Instagram */}
                                            <a href={member.socials.instagram} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#244d4d] hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="text-center">
                                    <h3 className="text-xl font-serif font-bold text-[#244d4d] mb-1 group-hover:text-[#1a3838] transition-colors">
                                        <TextReveal delay={index * 50}>{member.name}</TextReveal>
                                    </h3>
                                    <div className="text-gray-500 text-sm font-medium tracking-wide uppercase">
                                        <TextReveal delay={index * 50 + 50}>{member.role}</TextReveal>
                                    </div>
                                </div>

                                {/* Accent Line */}
                                <div className="w-8 h-[2px] bg-[#a58d71] mx-auto mt-4 group-hover:w-16 transition-all duration-500"></div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
