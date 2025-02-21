"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Page3() {
    const contentRef = useRef(null);

    useEffect(() => {
        const elements = contentRef.current.children;

        gsap.fromTo(
            elements,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                delay: 0.5,
                ease: "power2.out",
            }
        );
    }, []);

    return (
        <div className="relative w-full overflow-hidden h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/hero/slide3.mp4" type="video/mp4" />
            </video>

            <div
                ref={contentRef}
                className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 space-y-4"
            >
                <div className="overflow-hidden">
                    <p className="inline-block px-4 py-2 bg-white bg-opacity-50 text-black text-xs sm:text-sm rounded-full shadow-md">
                        FAVORITE PIECES
                    </p>
                </div>

                <div className="overflow-hidden">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-logo font-medium">
                        CHIC STYLES,
                    </h1>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-logo font-medium">
                        UNBEATABLE PRICES
                    </h1>
                </div>

                <div className="overflow-hidden">
                    <p className="mt-4 text-sm sm:text-lg">
                        Shop now and experience the perfect blend of style and savings!
                    </p>
                </div>

                <div className="overflow-hidden">
                    <button className="carousel-btn border-white text-white hover:bg-white hover:text-black">
                        SHOP DRESSES
                    </button>
                </div>
            </div>
        </div>
    );
}
