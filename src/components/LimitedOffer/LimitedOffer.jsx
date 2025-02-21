import Link from "next/link";
import Timer from "@/components/LimitedOffer/Timer";

export default function LimitedOffer() {
    return (
        <div className="w-full px-6 py-5 bg-[#474f45] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
                <p className="font-semibold text-sm sm:text-base">
                    UP TO 40% OFF FASHION FINDS—LIMITED TIME ONLY!
                </p>
                <Link href="#" className="underline uppercase text-xs sm:text-sm font-medium">
                    Shop Sale
                </Link>
            </div>
            <Timer targetDate="2025-03-01T18:00:00" />
        </div>
    );
}
