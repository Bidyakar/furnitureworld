"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Trigger preloader removal when the page/window is fully loaded
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500); // Small delay for visual impact
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-[#244d4d] flex items-center justify-center">
            <div className="flex flex-col items-center">
                {/* Logo or Iconic Symbol */}
                <div className="w-20 h-20 relative animate-pulse mb-6">
                    <svg className="w-full h-full text-[#a58d71]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 10h18v6H3zM3 16v4M21 16v4M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
                    </svg>
                </div>
                
                {/* Branding Text */}
                <h2 className="text-white font-serif text-3xl font-bold tracking-tight animate-fade-in">
                    Furniture World
                </h2>
                
                {/* Progress Indicator */}
                <div className="mt-8 w-48 h-[2px] bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-full bg-[#a58d71] animate-[loading_1.5s_ease-in-out_infinite]" />
                </div>
            </div>
        </div>
    );
}
