import { useEffect, useState } from "react";
import { Product } from "@/types";
import TitleSection from "@/components/blocks/title-section";
import ProductCard from "@/components/blocks/product-card/product-card";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getProducts } from "@/actions/products/product-service";
import Link from "next/link";

interface Props {
  className?: string;
}

const NewArrival: React.FC<Props> = ({ className }) => {
  const [products, setProduct] = useState<Product[] | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setProduct(null);
      // const abortController = new AbortController();
      try {
        const response = await getProducts(setLoading);
        setProduct(response.reverse());
      } catch (error) {
        console.log("Fetch aborted");
      }
    };
    fetchProducts();
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
          className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full mb-2"
        >
          <ProductCard sizeBtn={12} data={products[i]} />
        </CarouselItem>
      );
    }
    return renderedProducts;
  };

  return (
    <div className={cn("", styles.container, className)}>
      <TitleSection className="pb-2" title={"New Arrivals"} />
      <div className="text-end w-full">
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
        className={cn("w-full mt-2", styles.sliderCarousel)}
      >
        <CarouselContent>{renderProduct()}</CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewArrival;
