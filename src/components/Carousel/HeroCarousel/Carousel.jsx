"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Page1 from "@/components/Carousel/HeroCarousel/Page1";
import Page2 from "@/components/Carousel/HeroCarousel/Page2";
import Page3 from "@/components/Carousel/HeroCarousel/Page3";
import Loader from "@/components/Carousel/Loader";

export default function Carousel() {
    const pages = [Page1, Page2, Page3];

    const [carouselNum, setCarouselNum] = useState(0);
    const [prevNum, setPrevNum] = useState(0);

    const prevRef = useRef(null);
    const currRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevNum(carouselNum);
            setCarouselNum((prev) => (prev === 2 ? 0 : prev + 1));
        }, 8000);

        return () => clearInterval(interval);
    }, [carouselNum]);

    useEffect(() => {
        if (!prevRef.current || !currRef.current) return;

        gsap.fromTo(
            prevRef.current,
            { x: "0%", opacity: 1 },
            { x: "-100%", opacity: 0, duration: 0.8, ease: "power2.out" }
        );

        gsap.fromTo(
            currRef.current,
            { x: "100%", opacity: 0 },
            { x: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }
        );
    }, [carouselNum]);

    const CurrentPage = pages[carouselNum];
    const PrevPage = pages[prevNum];

    return (
        <div className="relative w-full overflow-hidden h-screen">
            <div ref={prevRef} className="absolute w-full h-full">
                <PrevPage />
            </div>

            <div ref={currRef} className="absolute w-full h-full">
                <CurrentPage />
            </div>

            <div className="absolute bottom-20 w-full flex items-center justify-center gap-3 md:gap-5">
                {Array.from({ length: pages.length }).map((_, i) =>
                    carouselNum === i ? (
                        <Loader key={i} />
                    ) : (
                        <div key={i} className="w-[30px] h-[0.5px] md:w-[50px] relative">
                            <div className="w-full h-[0.5px] bg-white absolute top-1/2 transform -translate-y-1/2"></div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
