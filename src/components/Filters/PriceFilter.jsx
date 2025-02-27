"use client";

import React, { useState, useEffect } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

const PriceFilter = ({ label, highestPrice, minPrice }) => {
    const [maxPrice, setMaxPrice] = useState(highestPrice);
    const [open, setOpen] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full text-left"
            >
                <span className="text-sm font-medium tracking-wide uppercase">{label}</span>
                {open ? (
                    <CgChevronUp className="h-5 w-5 transition-transform duration-300" />
                ) : (
                    <CgChevronDown className="h-5 w-5 transition-transform duration-300" />
                )}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden mt-3"
                    >
                        <p className="text-xs font-medium text-stone-700 mb-2">
                            The highest price is{" "}
                            <span className="font-medium">${highestPrice.toFixed(2)}</span>
                        </p>

                        <input
                            type="range"
                            min={minPrice}
                            max={highestPrice}
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="custom-range w-full"
                        />

                        <div className="flex items-center justify-between text-xs text-stone-700 mt-1">
                            <span>${minPrice.toFixed(2)}</span>
                            <span>${maxPrice.toFixed(2)}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PriceFilter;
