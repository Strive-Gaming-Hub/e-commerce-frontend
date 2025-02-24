import FeatureCard from "@/components/Features/FeatureCard";
import { featuresData } from "@/components/Features/featuresData";

const FeaturesSection = () => {
    return (
        <div className="w-full flex items-center justify-center py-12 px-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 mx-auto max-w-screen-lg">
                {featuresData.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;
