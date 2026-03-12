"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }) {

    const lenisRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            // Core smoothness
            lerp: 0.07,          // premium smoothness
            duration: 1.2,

            // Wheel & touch
            smoothWheel: true,
            smoothTouch: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.1,

            // Stability
            infinite: false,
            normalizeWheel: true,
            autoResize: true,
        });

        lenisRef.current = lenis;

        let rafId;

        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };

    }, []);

    // Reset scroll on route change (important for Next.js)
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return children;
}