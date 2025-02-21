"use client"

import TabNavigation from "@/components/TabNavigation";
import bestSellerData from "@/components/Bestseller/bestSellerData";
import BestsellerCard from "@/components/Bestseller/BestsellerCard";
import ProductsContainer from "@/components/ProductsContainer";

const tabs = [
    { id: "bestsellers", label: "BESTSELLERS" },
    { id: "bottoms", label: "BOTTOMS" },
    { id: "tops", label: "TOPS" },
    { id: "outerwear", label: "OUTERWEAR" },
];

const BestSellerSection = () => {
    return (
        <ProductsContainer highlightText="INVEST IN STYLE" title="Buy Quality, Style With Ease All Year.">
            <TabNavigation
                tabsData={tabs}
                cardsData={bestSellerData}
                renderCard={(product) => <BestsellerCard key={product.id} product={product} />}
            />
        </ProductsContainer>
    );
};

export default BestSellerSection;
