"use client";

import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#2f5d57] flex items-center pt-20 pb-10 md:pt-0 md:pb-0">


            {/* Background Model Image */}
            <div className="absolute left-1/3 -translate-x-1/2  md:translate-x-0 md:right-100 top-1/2 -translate-y-1/2 w-56 sm:w-64 md:w-80 lg:w-[420px] h-[70vh] pointer-events-none">
                <Image
                    src="/images/pp.webp"
                    alt="Hero model"
                    fill
                    className="object-contain"
                    priority
                />
            </div>


            {/* Content Wrapper */}
            <div className="relative z-10 mx-auto w-[90%] md:w-[80%] px-4 md:px-6 grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 items-center">

                {/* LEFT CONTENT */}
                <div className="flex flex-col gap-8">

                    {/* Description Text */}
                    <p className="text-white dark:text-white max-w-md leading-relaxed order-1 text-sm sm:text-base">
                        Through innovative design and strategic thinking we create brands
                        that spark connections, inspire loyalty, and elevate your message.
                    </p>

                    {/* CTA Button */}
                    <button
                        className="order-2 w-fit px-6 py-3 bg-white text-black dark:bg-white dark:text-black text-sm font-medium inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                        onClick={() => window.open('https://wa.me/981561420-', '_blank')}
                    >
                        LET&apos;S CONTACT
                        <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    </button>

                    {/* Video Card (comes LAST on mobile) */}
                    <div className="order-3 md:order-none w-full max-w-xs rounded-xl mt-8 md:mt-20 overflow-hidden border border-gray-300 dark:border-white/20 transition-colors">

                        <div className="relative">
                            <Image
                                src="/subashdemo.webp"
                                alt="Video preview"
                                width={320}
                                height={420}
                                className="object-cover w-full h-auto"
                            />

                            {/* Overlay */}

                        </div>
                    </div>


                </div>

                {/* RIGHT CONTENT */}

                <div className="text-left md:text-right">
                    <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] font-extrabold leading-tight">
                        <span className="inline-block bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 dark:from-slate-300 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent animate-gradient">
                            CRAFTING
                        </span>
                        <br />
                        <span className="inline-block bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 dark:from-gray-300 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
                            A JOURNEY
                        </span>
                        <br />
                        <span className="inline-block bg-gradient-to-r from-slate-600 via-gray-600 to-slate-600 dark:from-slate-200 dark:via-gray-200 dark:to-slate-200 bg-clip-text text-transparent">
                            OF GROWTH
                        </span>
                        <br />
                        <span className="inline-block bg-gradient-to-r from-gray-800 via-slate-700 to-gray-800 dark:from-gray-200 dark:via-slate-300 dark:to-gray-200 bg-clip-text text-transparent">
                            AND SUCCESS
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
