import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import ProductsContainer from "@/components/ProductsContainer";
import CardContainer from "@/components/ProductsSection/CardContainer";
import BestsellerCard from "@/components/Bestseller/BestsellerCard";
import APlusSection from "@/components/Sections/APlusSection";

export default function Page({ params }) {
    return (
        <>
            <div className="w-full min-h-screen mt-32 sm:px-10">
                <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-5">
                    <ProductGallery />
                    <ProductDetails />
                </div>
            </div>

            <hr className="my-4" />
            <APlusSection />

            <ProductsContainer
                title="You may also like"
                subtitle="Combine your style with these products"
            >
                <CardContainer
                    renderCard={(product) => (
                        <BestsellerCard key={product.id} product={product} />
                    )}
                />
            </ProductsContainer>
        </>
    );
}
