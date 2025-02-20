"use client";

import { useState } from "react";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import TopBar from "./TopBar";

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

                    <h1 className="text-3xl md:text-4xl font-logo text-center">Ascension</h1>

                    <div className="flex items-center gap-4">
                        <FiUser className="cursor-pointer text-lg" />
                        <div className="relative">
                            <FiShoppingBag className="cursor-pointer text-lg" />
                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
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
