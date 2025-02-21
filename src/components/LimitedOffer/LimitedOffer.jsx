import Link from "next/link";
import Timer from "@/components/LimitedOffer/Timer";

export default function LimitedOffer() {
    return (
        <div className="w-full px-6 py-3 bg-[#474f45] text-white flex items-center justify-between">
            <div className="flex items-center gap-5">
                <p className="font-semibold">UP TO 40% OFF FASHION FINDS—LIMITED TIME ONLY!</p>
                <Link href="#" className="underline uppercase text-xs font-medium">
                    Shop Sale
                </Link>
            </div>
            <Timer targetDate="2025-03-01T18:00:00" />
        </div>
    )
}