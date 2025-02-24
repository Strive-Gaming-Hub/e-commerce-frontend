import Image from "next/image";

export default function FeatureCard({ feature }) {
    return (
        <div className="flex flex-col items-center text-center max-w-xs gap-3">
            <div className="w-16 h-16">
                <Image
                    width={40}
                    height={40}
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-sm md:text-base tracking-wide">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
        </div>
    );
}
