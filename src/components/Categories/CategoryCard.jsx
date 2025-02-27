import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
    return (
        <Link href={category.link} className="relative min-w-2/5 sm:min-w-[50%] md:w-full rounded-none overflow-hidden group cursor-pointer">
            <div className="relative w-full h-80 overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start text-white">
                <div className="w-full border-t border-white mb-2"></div>
                <div className="flex gap-2">
                    <p className="font-medium tracking-wide">{category.name.toUpperCase()}</p>
                    <p className="text-xs font-semibold">{category.count}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
