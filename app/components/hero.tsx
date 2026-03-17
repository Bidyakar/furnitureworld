"use client";

import Image from "./blur-image";
import TextReveal from "./text-reveal";
import ScrollReveal from "./scroll-reveal";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] bg-[#244d4d] overflow-hidden flex items-center justify-center">
            {/* Background Arch Image */}
            <div className="absolute top-[10%] w-[90vw] md:w-[60vw] lg:w-[700px] h-[90vh]  overflow-hidden z-0">
                <Image
                    src="/images/lr4.jpg"
                    alt="Living Room Furniture"
                    fill
                    className="object-cover"

                    revealDelay={100}
                />
            </div>

            {/* Foreground Content Wrapper */}
            <div className="max-w-[1320px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 px-6 pt-10 pb-20">

                {/* Left Side Content */}
                <div className="flex flex-col justify-center gap-6 lg:gap-8 lg:-mt-30 text-center lg:text-left items-center lg:items-start">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-6xl lg:text-[4rem] font-bold leading-[1.2] font-serif tracking-tight">
                        <TextReveal>Modern Furniture</TextReveal>
                        <TextReveal delay={100}>Design Studio.</TextReveal>
                    </h1>

                    <ScrollReveal delay={200}>
                        <button className="px-10 py-4 bg-[black] text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-widest mt-4 uppercase shadow-2xl">
                            Explore Now
                        </button>
                    </ScrollReveal>
                </div>

                {/* Right Side Content */}
                <div className="flex flex-col items-center lg:items-end lg:mt-48 xl:-mr-10">
                    <div className="w-full max-w-[500px]">
                        <div className="text-white text-2xl sm:text-3xl lg:text-[2.2rem] font-bold leading-tight mb-10 font-serif text-center lg:text-right">
                            <TextReveal delay={150}>We make the <span className="underline decoration-2 underline-offset-8">Unique</span></TextReveal>
                            <TextReveal delay={250}>& <span className="underline decoration-2 underline-offset-8">Modern</span> Stylish</TextReveal>
                            <TextReveal delay={350}>Furniture.</TextReveal>
                        </div>

                        {/* Floating Small Image */}
                        <div className="relative w-full lg:w-[110%] lg:-ml-[10%] aspect-[16/10] shadow-2xl overflow-hidden mt-6 bg-[#244d4d] rounded-sm">
                            <Image
                                src="/images/lr1.jpg"
                                alt="Living Room Furniture"
                                fill
                                className="object-cover"
                                revealDelay={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
