"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {

    const lenisRef = useRef(null);

    useEffect(() => {

        // Respect user's reduced motion preference
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            lerp: 0.07, // ultra smooth
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.1,
            infinite: false,
            normalizeWheel: true,
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

    return children;
}