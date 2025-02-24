import Carousel from "@/components/Carousel/HeroCarousel/Carousel";
import LimitedOffer from "@/components/LimitedOffer/LimitedOffer";
import CategoryContainer from "@/components/Categories/CategoryContainer";
import Marquee from "@/components/Marquee";
import BestSellerSection from "@/components/Sections/BestSellerSection";
import ProductsSection from "@/components/ProductsSection/Section";
import ReviewList from "@/components/Reviews/ReviewList";
import FeaturesSection from "@/components/Features/FeaturesSection";
import FeaturedModelsList from "@/components/FeaturedModels/FeaturedModelsList";
import BlogSection from "@/components/Blogs/BlogSection";

export default function Home() {
  return (
      <div className="w-full">
          <Carousel />
          <LimitedOffer />
          <CategoryContainer />
          <Marquee />
          <BestSellerSection />
          <ProductsSection />
          <FeaturedModelsList />
          <ReviewList />
          <BlogSection />
          <FeaturesSection />
      </div>
  );
}
