"use client";

import React, { useState } from "react";
import PriceFilter from "./PriceFilter";
import FilterSection from "@/components/Filters/FilterSection";

const FilterSidebar = () => {
    const [maxPrice, setMaxPrice] = useState(648);

    const filterData = [
        {
            label: "Availability",
            items: [
                { label: "In stock", count: 9 },
                { label: "Out of stock", count: 7 },
            ],
            showColorSwatches: false,
        },
        {
            label: "Size",
            items: [
                { label: "Extra small", count: 6 },
                { label: "Small", count: 9 },
                { label: "Medium", count: 9 },
                { label: "Large", count: 9 },
                { label: "Extra large", count: 5 },
            ],
            showColorSwatches: false,
        },
        {
            label: "Color",
            items: [
                { label: "Beige", count: 1, color: "#F5F5DC" },
                { label: "Black", count: 4, color: "#000000" },
                { label: "Blue", count: 1, color: "#0000FF" },
                { label: "Brown", count: 3, color: "#964B00" },
                { label: "Gold", count: 2, color: "#FFD700" },
                { label: "Green", count: 3, color: "#008000" },
                { label: "Navy", count: 1, color: "#000080" },
                { label: "Orange", count: 1, color: "#FFA500" },
                { label: "Purple", count: 1, color: "#800080" },
                { label: "Red", count: 3, color: "#FF0000" },
                { label: "Yellow", count: 2, color: "#FFFF00" },
            ],
            showColorSwatches: true,
        },
    ];

    return (
        <div className="w-full sticky top-0 max-w-xs bg-white text-black font-sans p-4 space-y-6 border-r">
            <PriceFilter
                label="Price"
                highestPrice={648}
                minPrice={0}
                maxPrice={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <hr />
            {filterData.slice(0, 2).map((section, index) => (
                <React.Fragment key={index}>
                    <FilterSection
                        label={section.label}
                        items={section.items}
                        showColorSwatches={section.showColorSwatches}
                    />
                    <hr />
                </React.Fragment>
            ))}
            <FilterSection
                label={filterData[2].label}
                items={filterData[2].items}
                showColorSwatches={filterData[2].showColorSwatches}
            />
            <hr />
        </div>
    );
};

export default FilterSidebar;
