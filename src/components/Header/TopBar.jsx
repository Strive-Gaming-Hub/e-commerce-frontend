import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const TopBar = () => {
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

    return (
        <div className="w-full bg-[#3E3330] text-white text-sm flex justify-between items-center px-6 py-2">
            <div className="flex items-center gap-4">
                <div className="relative group">
                    <span className="cursor-pointer">Pages ▼</span>
                    <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow-lg">
                        <p className="cursor-pointer px-2 py-1">About</p>
                        <p className="cursor-pointer px-2 py-1">Services</p>
                        <p className="cursor-pointer px-2 py-1">Careers</p>
                    </div>
                </div>
                <p className="cursor-pointer">Blog</p>
                <p className="cursor-pointer">F.A.Q</p>
                <p className="cursor-pointer">Contact</p>
            </div>

            <div className="flex items-center gap-4">
                <FaFacebook className="cursor-pointer" />
                <HiOutlineX className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />

                <div className="relative">
                    <button
                        onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                        className="cursor-pointer flex items-center gap-1"
                    >
                        Türkiye (USD $) ▼
                    </button>
                    {isCurrencyOpen && (
                        <div className="absolute right-0 mt-2 bg-white text-black p-2 rounded shadow-lg">
                            <p className="cursor-pointer px-2 py-1">USA (USD $)</p>
                            <p className="cursor-pointer px-2 py-1">EU (EUR €)</p>
                            <p className="cursor-pointer px-2 py-1">UK (GBP £)</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
