"use client";

const MarqueeBanner = () => {
    return (
        <div className="w-full flex items-center justify-center mb-8 px-8 overflow-hidden">
            <marquee
                className="w-full bg-amber-50 py-8 text-gray-800 text-3xl whitespace-nowrap"
                behavior="scroll"
                direction="left"
                scrollamount="5"
                loop="infinite"
            >
                Black Friday Sale: Up to 50% Off. Code: FUEL2025 &nbsp;&nbsp;&nbsp; <span className="text-[#A55353]">✦</span> &nbsp;&nbsp;&nbsp;
                Black Friday Sale: Up to 50% Off. Code: FUEL2025 &nbsp;&nbsp;&nbsp; <span className="text-[#A55353]">✦</span> &nbsp;&nbsp;&nbsp;
                Black Friday Sale: Up to 50% Off. Code: FUEL2025 &nbsp;&nbsp;&nbsp; <span className="text-[#A55353]">✦</span> &nbsp;&nbsp;&nbsp;
            </marquee>
        </div>
    );
};

export default MarqueeBanner;
