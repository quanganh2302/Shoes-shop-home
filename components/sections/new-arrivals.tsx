import TitleSection from "@/components/blocks/title-section";
import ProductCard from "@/components/blocks/product-card";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Props {
  className?: string;
}

const NewArrival: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", styles.container, className)}>
      <TitleSection className="pb-2" title={"New Arrivals"} />
      <div className="text-end w-full">
        <span
          className={cn(" inline-block ", styles.base, styles.underlineTrans)}
        >
          View all
        </span>
      </div>
      <Carousel
        opts={{
          align: "center",
          breakpoints: {
            "(min-width: 1280px)": { active: false },
          },
        }}
        className={cn("w-full mt-2", styles.sliderCarousel)}
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full mb-2">
            {" "}
            <ProductCard sizeBtn={12} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2 mb-2">
            {" "}
            <ProductCard sizeBtn={12} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2 mb-2">
            {" "}
            <ProductCard sizeBtn={12} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2 mb-2">
            {" "}
            <ProductCard sizeBtn={12} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewArrival;
