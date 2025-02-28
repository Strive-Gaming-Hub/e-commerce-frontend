"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductGallery() {
    const images = [
        "/collections/1.webp",
        "/collections/2.webp",
        "/collections/3.webp",
        "/collections/4.webp"
    ];
    const [mainImage, setMainImage] = useState(images[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setMainImage(images[index]);
    }, [index]);

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 items-center lg:items-start w-full">
            <div className="flex lg:flex-col flex-row gap-2">
                {images.map((img, idx) => (
                    <Image
                        width={50}
                        height={50}
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className={`w-20 h-20 object-cover cursor-pointer border-2 transition-transform duration-300 ${
                            mainImage === img ? "border-black scale-105" : "border-transparent"
                        }`}
                        onClick={() => {
                            setMainImage(img);
                            setIndex(idx);
                        }}
                    />
                ))}
            </div>
            <div className="w-full h-[500px] overflow-hidden flex justify-start">
                <Image
                    width={500}
                    height={500}
                    src={mainImage}
                    alt="Main Product"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105"
                />
            </div>
        </div>
    );
}
