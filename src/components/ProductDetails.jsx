"use client";

import { useState } from "react";
import { CiStopwatch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbTruckReturn } from "react-icons/tb";
import { PiWalletLight } from "react-icons/pi";

export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState("XS");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("DETAILS");
    const [color, setColor] = useState("black")

    return (
        <div className="w-[50%] mx-auto p-6">
            <p className="text-xs uppercase font-light text-accent">Aether Apparel</p>
            <h1 className="text-3xl font-logo mt-4">Black Floral Midi Velvet Cocktail Dress</h1>
            <p className="font-medium text-sm sm:text-base">$278.30</p>
            <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-1 text-xs bg-gray-200">BESTSELLER</span>
                <span className="px-2 py-1 text-xs bg-gray-200">TRENDING</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Tax included.</p>
            <div className="flex items-center gap-1 my-2">
                <span className="text-red-500">★★★★★</span>
                <span className="text-sm">1 review</span>
            </div>

            <hr/>

            <div className="my-2 flex items-center gap-20">
                <div>
                    <p className="font-medium text-sm">Color</p>
                    <p className="text-sm font-light text-stone-700">{color.charAt(0).toUpperCase()+color.slice(1)}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={()=>setColor("black")} className="w-7 h-7 rounded-full border border-black bg-black"></button>
                    <button onClick={()=>setColor("purple")} className="w-7 h-7 rounded-full border border-gray-300 bg-purple-500"></button>
                </div>
            </div>
            <hr/>

            <div className="my-4 flex items-center gap-20">
                <div>
                    <p className="font-medium text-sm">Size</p>
                    <p className="text-sm font-light text-stone-700">{selectedSize}</p>
                </div>
                <div>
                    <div className="flex gap-2 mt-2">
                        {["XS", "S", "M", "L"].map((size) => (
                            <button
                                key={size}
                                className={`px-4 py-2 text-sm border ${selectedSize === size ? "border-black" : "border-gray-300"}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <p className="text-xs text-red-500 mt-2 cursor-pointer underline">SIZING GUIDE</p>
                </div>
            </div>

            <div className="bg-blue-50 p-3 mt-4 text-indigo-900 text-sm flex items-center justify-center gap-5">
                <CiStopwatch className="w-8 h-8" />
                <div className="w-[80%]">
                    <p className="font-semibold">Time’s ticking! Grab your favorites before they’re gone!</p>
                    <p>Shop our limited-time collection of must-have fashion pieces and grab your favorites before they’re gone.</p>
                </div>
            </div>

            <p className="text-green-600 mt-3">✔ 48 in stock, ready to ship</p>

            <div className="w-full flex items-center gap-3 mt-4">
                <div className="flex items-center justify-center gap-4">
                    <button
                        className="px-5 py-3 border"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button className="px-5 py-3 border" onClick={() => setQuantity((q) => q + 1)}>
                        +
                    </button>
                </div>
                <button className="w-full py-3 bg-black text-white">ADD TO CART</button>
            </div>

            <button className="w-full mt-2 py-3 bg-red-600 text-white">BUY IT NOW</button>

            <div className="w-full flex flex-col gap-3 mt-4 text-stone-800">
                <div className="w-full flex items-center gap-2">
                    <HiOutlineShoppingBag className="w-4 h-4" />
                    <p className="text-sm font-light text-stone-800">Free shipping on orders over $40</p>
                </div>
                <div className="w-full flex items-center gap-2">
                    <PiWalletLight className="w-4 h-4" />
                    <p className="text-sm font-light text-stone-800">Money back guarantee</p>
                </div>
                <div className="w-full flex items-center gap-2">
                    <TbTruckReturn className="w-4 h-4" />
                    <p className="text-sm font-light text-stone-800">Return within 30 days of ship date for a fee $10</p>
                </div>
            </div>

            <div className="mt-6 border-t pt-4">
                <div className="flex gap-4 text-gray-500 text-sm font-medium">
                    {["DETAILS", "SHIPPING & RETURNS", "WARRANTY"].map((tab) => (
                        <span
                            key={tab}
                            className={`cursor-pointer ${
                                activeTab === tab
                                    ? "font-semibold text-black border-b-2 border-black"
                                    : ""
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>
                <div className="mt-4 text-gray-700 w-full">
                    <div className="w-full min-h-[100px]">
                        {activeTab === "DETAILS" && (
                            <p className="text-sm">
                                It's a statement of timeless elegance and modern sophistication. Its flawless cut and premium fabric offer all-day comfort, while its stylish details ensure you'll stand out on any occasion. Whether you're attending a special event or simply enjoying a night out, this dress guarantees you'll be the center of attention.
                                <br/>
                                <br/>
                                Available in a wide range of sizes, this dress is designed to complement different body types and make you feel confident and comfortable. Choose from colors to match your personal style and wardrobe needs.
                            </p>
                        )}
                        {activeTab === "SHIPPING & RETURNS" && (
                            <p className="text-sm">
                                <strong>Domestic Shipping:</strong> Fast and reliable delivery options, including standard and expedited shipping. Orders typically arrive within 3-7 business days.
                                <br/>
                                <br/>
                                <strong>International Shipping:</strong> We ship worldwide! Delivery times vary by region and may take 7-15 business days. Additional customs fees may apply.
                            </p>
                        )}
                        {activeTab === "WARRANTY" && (
                            <p className="text-sm">We are dedicated to delivering high-quality products and ensuring customer satisfaction. To support this commitment, we offer a comprehensive <strong>2-years limited warranty</strong> on all our products. This warranty is designed to cover defects in materials and workmanship that occur under normal use. It guarantees that your purchase meets the high standards of quality we promise.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
