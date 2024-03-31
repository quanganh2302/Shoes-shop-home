"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import UMayLike from "@/components/sections/u-may-like";
import img from "@/public/images/air-jordan-1-high-method-of-make-womens-shoes-3.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductPageProps {
  className?: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      {/* Bread Crumb */}
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <span className={cn(styles.base, styles.underlineTrans2)}>
                  Home
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {" "}
                <span className={cn(styles.base)}>About Us</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Bread Crumb */}
      <div className={styles.container}>
        <Carousel
          opts={{
            slidesToScroll: 2,
            align: "center",
          }}
          className={cn("w-full mt-2 relative ", styles.sliderCarousel)}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full">
              <img
                src={img.src}
                alt=""
                className="w-full h-[470px] object-cover object-center"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2">
              <img
                src={img.src}
                alt=""
                className="w-full h-[470px] object-cover object-center"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2">
              <img
                src={img.src}
                alt=""
                className="w-full h-[470px] object-cover object-center"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2 pointer-events-none">
              <img
                src={img.src}
                alt=""
                className="w-full h-[470px] object-cover object-center"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2 pointer-events-none">
              <img
                src={img.src}
                alt=""
                className="w-full h-[470px] object-cover object-center"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="right-1/4 bottom-0 translate-x-9 z-50 hover:bg-primary hover:text-white" />
          <CarouselNext className="bottom-0 right-0 z-50 hover:bg-primary hover:text-white" />
        </Carousel>
      </div>
      <UMayLike className={cn(styles.layoutMargin)} />
    </div>
  );
};

export default ProductPage;
