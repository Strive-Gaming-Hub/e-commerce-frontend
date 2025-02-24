import FeaturedModelCards from "@/components/FeaturedModels/FeaturedModelCards";

const featuredModelData = [
    {
        title: "Must Haves",
        highlight: "The Model Edit: Latest Fashion"
    },
    {
        title: "Loved By You",
        highlight: "Styled by Our Model"
    },
    {
        title: "Winter 25'",
        highlight: "Model wears the latest"
    }
]

export default function FeaturedModelsList() {
    return (
        <div className="w-full flex items-center justify-center px-8">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredModelData.map((feature, index) => (
                    <FeaturedModelCards key={index} featuredData={feature} />
                ))}
            </div>
        </div>
    )
}