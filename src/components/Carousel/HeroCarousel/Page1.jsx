"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/Button";

export default function Page1() {
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
                style={{ backgroundImage: "url('/hero/slide1.webp')" }}
            />

            <div
                ref={contentRef}
                className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 space-y-4"
            >
                <div className="overflow-hidden">
                    <p className="inline-block px-4 py-2 bg-white bg-opacity-50 text-black text-xs md:text-sm rounded-full shadow-md">
                        ★★★★★ RATED 4.7/5 ESCADA BESTSELLER
                    </p>
                </div>

                <div className="overflow-hidden">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-logo font-medium">
                        30% Sale On Selected
                    </h1>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-logo font-medium">
                        Jackets This Winter
                    </h1>
                </div>

                <div className="overflow-hidden flex gap-4">
                    <Button text="Shop Men" className="border-white text-white hover:bg-white hover:text-black" />
                    <Button text="Shop Women" className="border-white text-white hover:bg-white hover:text-black" />
                </div>
            </div>
        </div>
    );
}
