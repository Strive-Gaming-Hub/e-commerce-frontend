import {cardData} from "@/components/ProductsSection/cardsData";

export default function CardContainer({renderCard}){
    return (
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="flex flex-nowrap gap-8 w-max py-6">
                {cardData?.length > 0 ? (
                    cardData.map((product) => renderCard(product))
                ) : (
                    <p className="text-gray-400 w-full text-center">No products available</p>
                )}
            </div>
        </div>
    )
}