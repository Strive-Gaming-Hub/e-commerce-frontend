import { useState } from "react";
import { HiOutlineX, HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import menuItems from "./menuData";

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const [menuStack, setMenuStack] = useState([]); // Stack for submenu navigation

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
            {/* Navbar Stays Visible */}
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
                <h1 className="text-3xl font-logo">Ascension</h1>
            </div>

            {/* Scrollable Menu Container */}
            <div className="relative top-16 w-full h-full overflow-hidden">
                <div className="absolute w-full h-full flex">
                    {/* Main Menu */}
                    <div
                        className={`w-full h-full overflow-y-auto transition-transform duration-500 ${
                            menuStack.length === 0 ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className="px-6 mt-8 space-y-4">
                            {/* Categories */}
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

                            {/* Quick Links */}
                            <p className="text-sm font-semibold mt-4">Quick Links</p>
                            <p className="cursor-pointer">Blog</p>
                            <p className="cursor-pointer">F.A.Q</p>
                            <p className="cursor-pointer">Contact</p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-4">
                                <FaFacebook className="cursor-pointer text-lg" />
                                <HiOutlineX className="cursor-pointer text-lg" />
                                <FaInstagram className="cursor-pointer text-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Animated Submenus */}
                    {menuStack.map((_, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 w-full h-full overflow-y-auto transition-transform duration-500 ${
                                index === menuStack.length - 1 ? "translate-x-0" : "translate-x-full"
                            }`}
                        >
                            <nav className="flex flex-col space-y-6 px-6 mt-8">
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
