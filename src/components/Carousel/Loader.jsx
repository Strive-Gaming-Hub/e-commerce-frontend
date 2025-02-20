"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
    const progressRef = useRef(null);
    const duration = 6;

    useEffect(() => {
        const animateProgress = () => {
            gsap.fromTo(
                progressRef.current,
                { width: "0%" },
                {
                    width: "100%",
                    duration: duration,
                    ease: "linear",
                }
            );
        };

        animateProgress();
    }, []);

    return (
        <div className="relative w-[50px] h-2 bg-transparent overflow-hidden">
            <div className="w-full h-[0.5px] bg-white absolute top-1/2 transform -translater-y-1/2"></div>
            <div
                ref={progressRef}
                className="absolute top-0 left-0 h-full bg-white"
            />
        </div>
    );
}
