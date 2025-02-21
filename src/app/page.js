import Carousel from "@/components/Carousel/HeroCarousel/Carousel";
import LimitedOffer from "@/components/LimitedOffer/LimitedOffer";
import CategoryContainer from "@/components/Categories/CategoryContainer";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
      <div className="w-full">
        <Carousel />
          <LimitedOffer />
          <CategoryContainer />
          <Marquee />
      </div>
  );
}
