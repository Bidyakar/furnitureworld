"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect, useRef } from "react";

interface BlurImageProps extends ImageProps {
    revealDelay?: number;
}

export default function BlurImage({ revealDelay = 0, ...props }: BlurImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track intersection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -10% 0px"
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Trigger reveal only when in view AND loaded
    useEffect(() => {
        if (!isLoading && isInView) {
            const timer = setTimeout(() => {
                setIsRevealed(true);
            }, revealDelay);
            return () => clearTimeout(timer);
        }
    }, [isLoading, isInView, revealDelay]);

    return (
        <div 
            ref={containerRef}
            className="reveal-container w-full h-full relative overflow-hidden group/reveal bg-[#244d4d]"
        >
            {/* Primary Brand Green Wipe */}
            <div 
                className={`absolute inset-0 z-30 bg-[#244d4d] transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                    isRevealed ? 'translate-x-full' : 'translate-x-0'
                }`}
                aria-hidden="true"
            />
            
            {/* Secondary Premium Tan Wipe */}
            <div 
                className={`absolute inset-0 z-20 bg-[#a58d71] transition-transform duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                    isRevealed ? 'translate-x-full' : 'translate-x-0'
                }`}
                aria-hidden="true"
                style={{ transitionDelay: '50ms' }}
            />
            
            {/* Image Inner Reveal */}
            <div className={`w-full h-full transition-all duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                isRevealed ? 'scale-100 opacity-100 blur-0 translate-y-0' : 'scale-110 opacity-0 blur-lg translate-y-4'
            }`}>
                <Image
                    {...props}
                    className={`object-cover ${props.className || ""}`}
                    onLoad={() => setIsLoading(false)}
                    onLoadingComplete={() => setIsLoading(false)}
                    sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                />
            </div>

            {/* Preloader progress bar */}
            {isLoading && (
                <div className="absolute inset-0 z-40 flex items-center justify-center">
                    <div className="w-16 h-[1px] bg-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#a58d71] animate-[loading_1.5s_ease-in-out_infinite]" />
                    </div>
                </div>
            )}
        </div>
    );
}
