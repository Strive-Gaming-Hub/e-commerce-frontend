import Carousel from "@/components/Carousel/HeroCarousel/Carousel";
import LimitedOffer from "@/components/LimitedOffer/LimitedOffer";

export default function Home() {
  return (
      <div className="w-full">
        <Carousel />
          <LimitedOffer />
      </div>
  );
}
