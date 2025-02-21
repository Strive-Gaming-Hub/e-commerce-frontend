"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/Button";

export default function Page2() {
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
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/hero/slide2.webp')" }}
            />

            <div
                ref={contentRef}
                className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-6 space-y-4"
            >
                <div className="overflow-hidden">
                    <p className="text-xs md:text-sm tracking-widest uppercase font-medium">
                        FLASH SALE
                    </p>
                </div>

                <div className="overflow-hidden">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-logo font-medium">
                        Up to 50% Off on All
                    </h1>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-logo font-medium">
                        Your Favorites!
                    </h1>
                </div>

                <div className="overflow-hidden">
                    <p className="mt-4 text-sm sm:text-lg font-light">
                        Your favorite looks are waiting for you, but the clock is ticking.
                    </p>
                </div>

                <div className="overflow-hidden">
                    <Button text="Shop Sale" className="border-black text-black hover:bg-black hover:text-white" />
                </div>
            </div>
        </div>
    );
}
