"use client";

import { useState } from "react";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import TopBar from "./TopBar";
import {CiSearch} from "react-icons/ci";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="hidden md:block">
                <TopBar />
            </div>

            <header className="w-full border-b bg-white fixed top-0 md:top-[40px] left-0 z-50">
                <div className="w-full flex items-center justify-between py-2 px-6 md:px-10">
                    <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(true)}>
                        <HiOutlineMenu />
                    </button>

                    <div className="w-full flex items-center justify-between py-2 pl-2 md:pl-0 md:px-6">
                        <div className="hidden bg-stone-100 p-2 md:flex items-center justify-center gap-20 cursor-pointer">
                            <p className="text-extralight text-2xs text-stone-500">Search</p>
                            <CiSearch className="text-stone-500" />
                        </div>
                        <CiSearch className="block md:hidden w-6 h-6 cursor-pointer" />
                        <h1 className="text-4xl font-logo">Ascension</h1>
                        <div className="flex items-center gap-4">
                            <FiUser className="cursor-pointer text-lg" />
                            <div className="relative">
                                <FiShoppingBag className="cursor-pointer text-lg" />
                                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

                <DesktopMenu />
            </header>
        </>
    );
};

export default Navbar;
