"use client";

import React, { useState } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { motion } from "framer-motion"; // Import Framer Motion

const FilterSection = ({ label, items, showColorSwatches = false, collapsible = true }) => {
    const [open, setOpen] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const MAX_ITEMS = 6;
    const hasOverflow = items.length > MAX_ITEMS;
    const displayedItems = showAll ? items : items.slice(0, MAX_ITEMS);

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

            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="mt-3 space-y-2">
                    {displayedItems.map((item, idx) => (
                        <label key={idx} className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700" />
                            <span className="text-xs font-medium text-stone-700 flex items-center">
                                {showColorSwatches && item.color && (
                                    <span
                                        className="inline-block w-3 h-3 rounded-full mr-2"
                                        style={{ backgroundColor: item.color }}
                                    />
                                )}
                                {item.label}{" "}
                                {item.count !== undefined && (
                                    <span className="text-gray-500 ml-1">({item.count})</span>
                                )}
                            </span>
                        </label>
                    ))}

                    {hasOverflow && (
                        <button
                            type="button"
                            onClick={() => setShowAll(!showAll)}
                            className="text-red-600 text-xs font-medium uppercase mt-1 hover:underline"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default FilterSection;
