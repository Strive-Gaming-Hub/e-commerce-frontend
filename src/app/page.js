import Carousel from "@/components/Carousel/HeroCarousel/Carousel";
import LimitedOffer from "@/components/LimitedOffer/LimitedOffer";
import CategoryContainer from "@/components/Categories/CategoryContainer";
import Marquee from "@/components/Marquee";
import BestSellerSection from "@/components/Sections/BestSellerSection";
import ProductsSection from "@/components/ProductsSection/Section";

export default function Home() {
  return (
      <div className="w-full">
          <Carousel />
          <LimitedOffer />
          <CategoryContainer />
          <Marquee />
          <BestSellerSection />
          <ProductsSection />
      </div>
  );
}
