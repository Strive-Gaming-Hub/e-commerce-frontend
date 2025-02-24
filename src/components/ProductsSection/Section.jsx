import ProductsContainer from "@/components/ProductsContainer";
import CardContainer from "@/components/ProductsSection/CardContainer";
import BestsellerCard from "@/components/Bestseller/BestsellerCard";

export default function ProductsSection() {
    return (
        <ProductsContainer ctaText="Shop Tops" ctaUrl="#" title="Redefine Your Wardrobe." subtitle="This lineup blends timeless elegance with modern sophistication.">
            <CardContainer renderCard={(product) => <BestsellerCard key={product.id} product={product} />}></CardContainer>
        </ProductsContainer>
    )
}