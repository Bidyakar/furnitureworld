"use client";

import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // More robust visibility detection with larger root margin
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
            { 
                threshold: 0.1, 
                rootMargin: "0px 0px -10% 0px" 
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay]);

    return (
        <div ref={ref} className={`text-reveal ${className}`}>
            <span 
                className={`text-reveal-inner ${isVisible ? "active" : ""}`}
            >
                {children}
            </span>
        </div>
    );
}
