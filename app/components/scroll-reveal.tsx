"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    animation?: "fade-in-up" | "fade-in";
}

export default function ScrollReveal({ 
    children, 
    className = "", 
    delay = 0,
    animation = "fade-in-up" 
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.unobserve(entry.target);
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    return (
        <div 
            ref={ref} 
            className={`${className} ${isVisible ? `animate-${animation}` : "opacity-0"}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
