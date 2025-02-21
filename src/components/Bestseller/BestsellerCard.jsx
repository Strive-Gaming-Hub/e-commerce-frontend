"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BestsellerCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div
            className="w-full sm:w-72 group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-80 sm:h-96 bg-gray-300 flex items-center justify-center text-gray-600 text-sm sm:text-lg overflow-hidden">
                Photo Goes Here

                <button
                    className={`absolute left-2 p-2 transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={handlePrev}
                >
                    <FaChevronLeft className="text-sm sm:text-lg" />
                </button>

                <button
                    className={`absolute right-2 p-2 transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={handleNext}
                >
                    <FaChevronRight className="text-sm sm:text-lg" />
                </button>

                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                    {product.tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`w-fit bg-white text-black text-2xs font-semibold px-2 ${
                                tag.toLowerCase() === "sale" && "bg-red-600 text-white"
                            } ${tag.includes("%") && "text-red-500"}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-3">
                <p className="text-2xs sm:text-xs font-thin text-gray-600 uppercase text-left">{product.brand}</p>

                <p className="text-left text-sm sm:text-base font-medium">{product.name}</p>

                <div className="flex gap-2">
                    {product.discountPrice ? (
                        <>
                            <span className="line-through text-gray-400 text-sm sm:text-base">{product.price}</span>
                            <span className="text-red-500 font-medium text-sm sm:text-base">{product.discountPrice}</span>
                        </>
                    ) : (
                        <span className="font-semibold text-sm sm:text-base">{product.price}</span>
                    )}
                </div>

                <div className="relative mt-2 h-6 transition-all">
                    {product.colors.map((color, index) => (
                        <span
                            key={index}
                            className={`absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white transition-all duration-300 ${
                                isHovered ? "transform translate-x-[10px]" : ""
                            }`}
                            style={{
                                backgroundColor: color,
                                left: `${index * (isHovered ? 18 : 12)}px`,
                                zIndex: product.colors.length - index,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestsellerCard;
