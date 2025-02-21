"use client"

import { useState } from "react";
import { HiOutlineX, HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import menuItems from "./menuData";
import {CiSearch} from "react-icons/ci";
import {FiShoppingBag, FiUser} from "react-icons/fi";

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const [menuStack, setMenuStack] = useState([]);

    const openSubMenu = (submenu) => {
        setMenuStack([...menuStack, submenu]);
    };

    const goBack = () => {
        setMenuStack(menuStack.slice(0, -1));
    };

    return (
        <div
            className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
        >
            <div className="fixed top-0 left-0 w-full bg-white border-b px-6 py-4 flex items-center justify-between z-50">
                {menuStack.length > 0 ? (
                    <button onClick={goBack} className="text-2xl">
                        <HiChevronLeft />
                    </button>
                ) : (
                    <button onClick={() => setIsOpen(false)} className="text-2xl">
                        <HiOutlineX />
                    </button>
                )}
                <div className="w-full flex items-center justify-between py-2 pl-2">
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

            <div className="relative top-16 w-full h-full overflow-y-auto">
                <div className="absolute w-full h-full flex flex-col">
                    <div
                        className={`w-full flex-grow overflow-y-auto transition-transform duration-500 ${
                            menuStack.length === 0 ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className="px-6 mt-8 space-y-4 pb-20">
                            <p className="text-sm font-semibold">Categories</p>
                            {menuItems.map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <p
                                        className="cursor-pointer text-lg w-full"
                                        onClick={() => {
                                            if (item.children.length > 0) {
                                                openSubMenu(item.children);
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </p>
                                    {item.children.length > 0 && <HiChevronRight className="text-lg" />}
                                </div>
                            ))}

                            <div className="flex flex-col gap-2">
                                <p className="font-semibold mt-4">Quick Links</p>
                                <p className="text-sm cursor-pointer">Blog</p>
                                <p className="text-sm cursor-pointer">F.A.Q</p>
                                <p className="text-sm cursor-pointer">Contact</p>
                            </div>

                            <div className="flex items-center gap-4 mt-6">
                                <FaFacebook className="cursor-pointer text-lg" />
                                <FaXTwitter className="cursor-pointer text-lg" />
                                <FaInstagram className="cursor-pointer text-lg" />
                            </div>
                        </div>
                    </div>

                    {menuStack.map((_, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 w-full h-full flex-grow overflow-y-auto transition-transform duration-500 ${
                                index === menuStack.length - 1 ? "translate-x-0" : "translate-x-full"
                            }`}
                        >
                            <nav className="flex flex-col space-y-6 px-6 mt-8 pb-20">
                                {menuStack[index].map((subItem, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <p
                                            className="cursor-pointer text-lg w-full"
                                            onClick={() => {
                                                if (subItem.children && subItem.children.length > 0) {
                                                    openSubMenu(subItem.children);
                                                }
                                            }}
                                        >
                                            {subItem.label}
                                        </p>
                                        {subItem.children && subItem.children.length > 0 && (
                                            <HiChevronRight className="text-lg" />
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
