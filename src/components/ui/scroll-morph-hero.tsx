"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle";

export interface ScrollMorphHeroProps {
    images?: string[];
    className?: string;
    active?: boolean;
    onExploreServices?: () => void;
    onSelectCard?: (index: number) => void;
}

interface FlipCardProps {
    src: string;
    index: number;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
    width: number;
    height: number;
    onHoverChange: (hovered: boolean) => void;
    onClick: () => void;
}

function FlipCard({
    src,
    index,
    target,
    width,
    height,
    onHoverChange,
    onClick,
}: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            role="button"
            tabIndex={0}
            aria-label={`View card ${index + 1}`}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 45,
                damping: 15,
                mass: 1,
            }}
            style={{
                position: "absolute",
                width,
                height,
                left: -width / 2,
                top: -height / 2,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
            data-hero-card={index}
            onPointerEnter={() => {
                setIsFlipped(true);
                onHoverChange(true);
            }}
            onPointerLeave={() => {
                setIsFlipped(false);
                onHoverChange(false);
            }}
            onClick={onClick}
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0, scale: isFlipped ? 1.15 : 1 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-2xl bg-zinc-900 border border-white/10"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-card-${index}`}
                        loading="eager"
                        className="h-full w-full object-cover pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-2xl bg-zinc-950 flex flex-col items-center justify-center p-2 border border-zinc-700/80"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center pointer-events-none">
                        <p className="text-[8px] font-bold text-sky-400 uppercase tracking-widest mb-0.5">View</p>
                        <p className="text-[11px] font-medium text-white">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const TOTAL_IMAGES = 20;

// High-speed CDN-mirrored images
const IMAGES = [
    "https://cdn.21st.dev/assets/mirror/4d/4d1bff4ea8b9f400dff7ae405f92e15bd39ec76e9285c7d96017e64ba1de3ae1.jpg",
    "https://cdn.21st.dev/assets/mirror/ee/ee36e332fe99d7611c43b90511db08a4f84e4545caa78e7b52e9ccffe273864b.jpg",
    "https://cdn.21st.dev/assets/mirror/dd/dddeaa4e6132c65bf7ff99d197f792a30937b5cbfe97a2b1ee54a793684df52e.jpg",
    "https://cdn.21st.dev/assets/mirror/48/487977107b5011b5e1c25289f6e4393ef555e1a92daee554788e9363b233ca14.jpg",
    "https://cdn.21st.dev/assets/mirror/a1/a12509688be6c9d3b2cb26d2ea1cfce48b8a8dbf2653e17be8a3fc31bd69f162.jpg",
    "https://cdn.21st.dev/assets/mirror/05/051f9e565b5b0b221384d9c27a0760febc3fb48d190c046adfda579f3614c958.jpg",
    "https://cdn.21st.dev/assets/mirror/87/87d4f60a4465d19d14b8acefa46275df4ccd767ccea6d7f234ea5bad99cfec56.jpg",
    "https://cdn.21st.dev/assets/mirror/06/0610989e0675a12c02d35aa5464e2644bf77913214b748b73a894808d2d79877.jpg",
    "https://cdn.21st.dev/assets/mirror/fe/fe90b90751e671a9526134c4743e2fcbf6c1a24991aba273ad7418c88fc9c701.jpg",
    "https://cdn.21st.dev/assets/mirror/2e/2e0452c1994fcc2130a1b8ef68e34b5ea52d1b35b80dde09b99349ad1de54598.jpg",
    "https://cdn.21st.dev/assets/mirror/84/847dc523558808119dc4bbb5218ff862ae5f5b455f33e9a0304f2f5a4b2f0f2c.jpg",
    "https://cdn.21st.dev/assets/mirror/2f/2f128763d177d6bdda3de9f0a766693406034977082bdb542138b7b74af9697b.jpg",
    "https://cdn.21st.dev/assets/mirror/30/30f8223f1d1ecc24fc8b7a9995b8ee98449b1e9fc300c14fbccec01b6a83a0ae.jpg",
    "https://cdn.21st.dev/assets/mirror/b4/b4df0e3e425ffce3b4f62fd7bc717e4dc90b94455f4d65d64fc07fe9721b0519.jpg",
    "https://cdn.21st.dev/assets/mirror/90/90c625659f072e4a701c2e37fa4ca46f25c7ca8689d723e7802fe84cf17874e9.jpg",
    "https://cdn.21st.dev/assets/mirror/6a/6aa0befc69cc3db8f3f3558d4b5e1216a5b64ceae1b86f51acf1c3f1432a8cf7.jpg",
    "https://cdn.21st.dev/assets/mirror/dc/dc126cfd753dc217945d0ea2f915e539dfe4ffb5fdea02245d0f576b25a9c4dd.jpg",
    "https://cdn.21st.dev/assets/mirror/ab/ab5f167fcb763aee7c3247fb8af97875998a7f519a6119da7dadd9cf73ae1a2c.jpg",
    "https://cdn.21st.dev/assets/mirror/57/57d6e450f7068e5f3be04907dcc0815343e67df1dc82f2da0ff1c859afc1f700.jpg",
    "https://cdn.21st.dev/assets/mirror/e4/e491359016d1494074e287dfbb55be068cffc0110017ae2257a5d4cdec193a47.jpg",
];

export default function ScrollMorphHero({
    images = IMAGES,
    className = "",
    active = true,
    onExploreServices,
    onSelectCard,
}: ScrollMorphHeroProps) {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState(() => {
        if (typeof window !== "undefined") {
            return { width: window.innerWidth, height: window.innerHeight };
        }
        return { width: 1200, height: 800 };
    });
    const isCardHoveredRef = useRef(false);
    const hasScrolledRef = useRef(false);

    const trackRef = useRef<HTMLDivElement>(null);
    const stickyViewportRef = useRef<HTMLDivElement>(null);

    // Keep an up-to-date ref for introPhase inside animation loops
    const introPhaseRef = useRef<AnimationPhase>("scatter");
    useEffect(() => {
        introPhaseRef.current = introPhase;
    }, [introPhase]);

    const shouldReduceMotion = useReducedMotion();

    // Continuous orbital rotation motion value
    const rotation = useMotionValue(0);
    const speedRef = useRef(7.5); // base speed in degrees per second (~48s for full 360)

    // --- Pinned Scroll Track ---
    // The hero stays pinned for a luxurious scroll track distance.
    // As the user scrolls through the track, the animation progresses (scatter -> line -> circle).
    // THEN ONLY, when reaching the end of the track, does the page continue down into #services.
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (progress > 0.02) {
            hasScrolledRef.current = true;
        }

        if (progress > 0.02 && progress < 0.35) {
            if (introPhaseRef.current !== "circle") {
                setIntroPhase("line");
            }
        } else if (progress >= 0.35) {
            setIntroPhase("circle");
        }
    });

    // --- Natural Speed Sequence (starts when active becomes true) ---
    useEffect(() => {
        if (!active) return;

        const timer1 = setTimeout(() => {
            if (!hasScrolledRef.current) {
                setIntroPhase((prev) => (prev === "scatter" ? "line" : prev));
            }
        }, 500);

        const timer2 = setTimeout(() => {
            if (!hasScrolledRef.current) {
                setIntroPhase("circle");
            }
        }, 2000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [active]);

    // Random scatter positions on mount
    const scatterPositions = useMemo(() => {
        return images.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, [images]);

    // Smooth orbital auto-rotation (only active once circle phase is reached)
    useAnimationFrame((_, delta) => {
        if (shouldReduceMotion || introPhaseRef.current !== "circle" || isCardHoveredRef.current) {
            speedRef.current = 0;
            return;
        }

        const safeDelta = Math.min(delta, 100);
        const targetSpeed = 7.5;
        const lerpFactor = Math.min(1, (safeDelta / 1000) * 6);
        speedRef.current += (targetSpeed - speedRef.current) * lerpFactor;

        if (speedRef.current > 0.01) {
            const next = (rotation.get() + speedRef.current * (safeDelta / 1000)) % 360;
            rotation.set(next);
        }
    });

    // --- Viewport Size via ResizeObserver on sticky viewport ---
    useEffect(() => {
        if (!stickyViewportRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(stickyViewportRef.current);

        setContainerSize({
            width: stickyViewportRef.current.offsetWidth,
            height: stickyViewportRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // Smooth scroll navigation to Services section
    const scrollToServices = () => {
        if (onExploreServices) {
            onExploreServices();
            return;
        }
        const services = document.getElementById("services");
        if (services) {
            services.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Responsive circle parameters
    const isMobile = containerSize.width > 0 && containerSize.width < 768;
    const isTablet = containerSize.width >= 768 && containerSize.width < 1024;

    const cardWidth = isMobile ? 38 : isTablet ? 50 : 60;
    const cardHeight = isMobile ? 54 : isTablet ? 70 : 85;

    // Dynamically calculate circle radius
    const circleRadius = isMobile
        ? Math.min(containerSize.width * 0.40, containerSize.height * 0.28, 160)
        : isTablet
        ? Math.min(containerSize.width * 0.35, containerSize.height * 0.35, 260)
        : Math.min(containerSize.width * 0.26, containerSize.height * 0.38, 330);

    const handleCardHoverChange = (hovered: boolean) => {
        isCardHoveredRef.current = hovered;
    };

    const handleCardClick = (idx: number) => {
        if (onSelectCard) {
            onSelectCard(idx);
            return;
        }
        const work = document.getElementById("work") || document.getElementById("services");
        if (work) {
            work.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        /* Outer Pinned Scroll Track: 180vh provides natural scroll distance to view the animation before services arrives */
        <div
            ref={trackRef}
            className={`relative w-full h-[180vh] min-h-[1400px] bg-transparent ${className}`}
        >
            {/* Sticky Viewport: Pins to top of screen as user scrolls through the 180vh track */}
            <div
                ref={stickyViewportRef}
                className="sticky top-0 h-screen h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center bg-transparent"
            >
                {/* Ambient site dot grid overlay matching rest of site */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-40 z-0"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1.2px)",
                        backgroundSize: "26px 26px",
                        maskImage: "radial-gradient(75% 75% at 50% 50%, #000 40%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(75% 75% at 50% 50%, #000 40%, transparent 100%)",
                    }}
                    aria-hidden="true"
                />

                {/* Subtle bottom gradient for a flawless blend into #services */}
                <div
                    className="absolute bottom-0 inset-x-0 h-32 pointer-events-none bg-gradient-to-b from-transparent to-black/30 z-0"
                    aria-hidden="true"
                />

                <div className="flex h-full w-full flex-col items-center justify-center perspective-1000 relative z-10">

                    {/* Center Headline & Action (reveals smoothly when circle phase starts) */}
                    <motion.div
                        initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                        animate={introPhase === "circle" ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 15, filter: "blur(8px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute z-10 flex flex-col items-center justify-center text-center pointer-events-auto px-4 select-none"
                    >
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-[210px] sm:max-w-xs md:max-w-md leading-tight">
                            The future is built on AI.
                        </h1>
                        <p className="mt-2 md:mt-3 text-xs sm:text-sm text-zinc-400/80 max-w-[200px] sm:max-w-xs font-light tracking-wide">
                            Your next big thing, our next big build
                        </p>
                        <button
                            type="button"
                            onClick={scrollToServices}
                            className="mt-3 group inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-400 hover:text-white uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-2 py-1 transition-colors cursor-pointer"
                            aria-label="Scroll to services"
                        >
                            <span>Scroll to explore</span>
                            <svg
                                className="w-3 h-3 text-zinc-400 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </motion.div>

                    {/* Rotating 3D Cards Circle */}
                    <motion.div
                        style={{
                            rotate: rotation,
                            transformStyle: "preserve-3d",
                        }}
                        className="rotating-cards-ring relative flex items-center justify-center w-0 h-0 pointer-events-auto"
                    >
                        {images.slice(0, TOTAL_IMAGES).map((src, i) => {
                            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                            if (introPhase === "scatter") {
                                target = scatterPositions[i] || { x: 0, y: 0, rotation: 0, scale: 0.6, opacity: 0 };
                            } else if (introPhase === "line") {
                                const lineSpacing = isMobile ? 42 : isTablet ? 54 : 68;
                                const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                                const lineX = i * lineSpacing - lineTotalWidth / 2;
                                target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                            } else {
                                const angle = (i / TOTAL_IMAGES) * 360;
                                const rad = (angle * Math.PI) / 180;
                                target = {
                                    x: Math.cos(rad) * circleRadius,
                                    y: Math.sin(rad) * circleRadius,
                                    rotation: angle + 90,
                                    scale: 1,
                                    opacity: 1,
                                };
                            }

                            return (
                                <FlipCard
                                    key={i}
                                    src={src}
                                    index={i}
                                    target={target}
                                    width={cardWidth}
                                    height={cardHeight}
                                    onHoverChange={handleCardHoverChange}
                                    onClick={() => handleCardClick(i)}
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Named alias export for convenience
export { ScrollMorphHero as IntroAnimation };
