"use client";

import Image from "./blur-image";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] bg-[#244d4d] overflow-hidden flex items-center justify-center py-20 pb-0">
            {/* Background Arch Image */}
            <div className="absolute top-[10%] w-[90vw] md:w-[60vw] lg:w-[700px] h-[90vh]  overflow-hidden z-0 animate-fade-in">
                <Image
                    src="/small-hero.png"
                    alt="Main Interior Arch"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Foreground Content Wrapper */}
            <div className="max-w-[1320px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 px-6 pt-10 pb-20">

                {/* Left Side Content */}
                <div className="flex flex-col justify-center gap-6 lg:gap-8 lg:-mt-32 text-center lg:text-left items-center lg:items-start">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] font-serif tracking-tight animate-fade-in-up">
                        Modern Interior <br className="hidden sm:block" /> Design Studio.
                    </h1>

                    <button className="w-max px-10 py-4 bg-[black] text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-widest mt-4 animate-fade-in-up delay-200 uppercase shadow-2xl">
                        Explore Now
                    </button>
                </div>

                {/* Right Side Content */}
                <div className="flex flex-col items-center lg:items-end lg:mt-48 xl:-mr-10">
                    <div className="w-full max-w-[500px]">
                        <p className="text-white text-2xl sm:text-3xl lg:text-[2.2rem] font-bold leading-tight mb-10 font-serif animate-fade-in-up delay-100 text-center lg:text-right">
                            We make the <span className="underline decoration-2 underline-offset-8">Unique</span> <br />
                            & <span className="underline decoration-2 underline-offset-8">Modern</span> Stylish<br />
                            Furniture.
                        </p>

                        {/* Floating Small Image */}
                        <div className="relative w-full lg:w-[110%] lg:-ml-[10%] aspect-[16/10] shadow-2xl overflow-hidden mt-6 bg-[#244d4d] animate-fade-in-up delay-300 rounded-sm">
                            <Image
                                src="/main-hero.png"
                                alt="Small Modern Interior Detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
