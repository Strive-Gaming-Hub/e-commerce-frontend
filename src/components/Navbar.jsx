"use client";

import { Text } from "@mantine/core";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Dropdown from "./Dropdown";

const Navbar = () => {
    return (
        <header className="w-full border-b bg-white">
            <div className="bg-accent text-white flex justify-between items-center py-1 px-6 text-sm">
                <div className="flex items-center gap-4">
                    <Dropdown label="Pages" items={["About", "Services", "Careers"]} />
                    <Text>Blog</Text>
                    <Text>F.A.Q</Text>
                    <Text>Contact</Text>
                </div>
                <div className="flex items-center gap-4">
                    <FaFacebook className="cursor-pointer" />
                    <FaInstagram className="cursor-pointer" />
                    <Text>Türkiye (USD $)</Text>
                </div>
            </div>
            <div className="w-full flex items-center justify-between py-2 px-6">
                <div className="bg-stone-100 p-2 flex items-center justify-center gap-20 cursor-pointer">
                    <p className="text-extralight text-2xs text-stone-500">Search</p>
                    <CiSearch className="text-stone-500" />
                </div>
                <h1 className="text-4xl font-logo">Ascension</h1>
                <div className="flex items-center gap-4">
                    <FiUser className="cursor-pointer text-lg" />
                    <div className="relative">
                        <FiShoppingBag className="cursor-pointer text-lg" />
                        <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="w-full flex justify-center items-center py-4 px-6 gap-5">
                <Dropdown label="Clothing" items={["Men", "Women", "Kids"]} />
                <div className="relative group">
                    <Text size="sm" fw={500} className="cursor-pointer">New Arrivals</Text>
                    <div className="nav-link-animation"></div>
                </div>
                <Dropdown label="Dresses" items={["Casual", "Formal"]} />
                <Dropdown label="Outerwear" items={["Jackets", "Coats"]} />
                <div className="relative group">
                    <Text size="sm" fw={500} className="cursor-pointer">Sale</Text>
                    <div className="nav-link-animation"></div>
                </div>
                <Dropdown label="Features" items={["Best Sellers", "Trending"]} />
                <Dropdown label="Pre-built Templates" items={["Modern", "Classic"]} />
                <Dropdown label="Product Styles" items={["Minimal", "Luxury"]} />
            </div>
        </header>
    );
};

export default Navbar;
