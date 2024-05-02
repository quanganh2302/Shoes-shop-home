import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import textStyle from "@/lib/styles";
import { Product } from "@/types";
import styles from "@/app/main.module.scss";
import TitleSection from "@/components/blocks/title-section";
import ProductCard from "@/components/blocks/product-card/product-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getProductsFeature } from "@/actions/products/product-service";
import Link from "next/link";

interface Props {
  className?: string;
}

const UMayLike: React.FC<Props> = ({ className }) => {
  const [products, setProduct] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchFeatureProduct = async () => {
      const res = await getProductsFeature(setLoading);
      setProduct(res);
    };
    fetchFeatureProduct();
  }, []);

  if (!products) {
    return null;
  }

  const renderProduct = () => {
    const renderedProducts = [];
    for (let i = 0; i < 4; i++) {
      renderedProducts.push(
        <CarouselItem
          key={i}
          className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2 mb-2"
        >
          <ProductCard sizeBtn={12} data={products[i]} />
        </CarouselItem>
      );
    }
    return renderedProducts;
  };

  return (
    <div className={cn("", className)}>
      <TitleSection className="pb-2 xl:container" title={"You may also like"} />
      <div className="text-end w-full px-2">
        <Link
          href={"/shoes"}
          className={cn(
            " inline-block ",
            textStyle.base,
            styles.underlineTrans
          )}
        >
          View all
        </Link>
      </div>
      <Carousel
        opts={{
          align: "center",
          breakpoints: {
            "(min-width: 1280px)": { active: false },
          },
        }}
        className={cn("w-full mt-2 px-2", styles.sliderCarousel)}
      >
        <CarouselContent>{renderProduct()}</CarouselContent>
      </Carousel>
    </div>
  );
};

export default UMayLike;
