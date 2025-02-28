"use client";

import React from "react";
import FilterSidebar from "@/components/Filters/FilterSidebar";
import CollectionCardsContainer from "@/components/CollectionCardsContainer";
import {useState} from "react";
import bestSellerData from "@/components/Bestseller/bestSellerData";
import BestsellerCard from "@/components/Bestseller/BestsellerCard";
import { VscSettings } from "react-icons/vsc";

export default function Page({params}) {

    const {collectionName} = React.use(params);
    const [showFilters, setShowFilters] = useState(true);

    function formatName(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <div className="w-full flex flex-col items-start justify-between">
            <div className="w-full md:mt-32 px-5 py-10 border-b">
                <h3 className="font-logo text-4xl font-light">
                    {formatName(collectionName)}
                </h3>
                <p className="text-base w-2/3">Make an impression with tailored sheath dresses, chic shirt dresses, and wrap styles that effortlessly blend professionalism with comfort. Ideal for the modern workplace or power meetings.</p>
            </div>
            <div className="w-full p-3"><button onClick={()=>setShowFilters(prev=>!prev)} className="flex items-center gap-2"><VscSettings /> <p className="text-xs">{showFilters ? "Hide" : "Show"} Filters</p></button></div>
            <div className="w-full flex items-start justify-between">
                {showFilters && <FilterSidebar/>}
                <CollectionCardsContainer>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {bestSellerData.bestsellers.map((data, index) => (
                            <BestsellerCard key={index} product={data} />
                        ))}
                    </div>
                </CollectionCardsContainer>
            </div>
        </div>
    )
}