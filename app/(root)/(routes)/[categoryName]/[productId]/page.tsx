"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import UMayLike from "@/components/sections/u-may-like";
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
import { Suspense, useEffect, useState } from "react";
import {
  getACategory,
  getAProduct,
  getCategories,
} from "@/actions/products/product-service";
import { Product, Category } from "@/types";

interface ProductPageProps {
  className?: string;
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ className, params }) => {
  const [productData, setProductData] = useState<Product | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch Product

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getAProduct(params.productId, setLoading);
      setProductData(res);
    };
    fetchProduct();
  }, []);
  // Fetch Product

  // Fetch Categories
  useEffect(() => {
    if (!productData) {
      return;
    }
    const fetchCategory = async () => {
      const res = await getACategory(productData.categoryId, setLoading);
      setCategory(res);
    };
    fetchCategory();
  }, [productData?.categoryId]);

  if (!productData) {
    return null;
  }

  // console.log(category)
  // Fetch Categories
  const renderProductImg = () => {
    return productData.images.map((item) => (
      <CarouselItem
        key={item}
        className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full sm:pl-2"
      >
        <img
          src={item}
          alt=""
          className="w-full h-[470px] object-cover object-center"
        />
      </CarouselItem>
    ));
  };

  return (
    <div className={cn("", className)}>
      {/* Bread Crumb */}
      <Breadcrumb className="xl:container">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <span className={cn(textStyle.base, styles.underlineTrans2)}>
                Home
              </span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/men">
              {" "}
              <span
                className={cn(
                  textStyle.base,
                  styles.underlineTrans2,
                  "capitalize"
                )}
              >
                {category?.genderName}
              </span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${category?.name}`}>
              {" "}
              <span
                className={cn(
                  textStyle.base,
                  styles.underlineTrans2,
                  "capitalize"
                )}
              >
                {category?.name}
              </span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {" "}
              <span className={cn(textStyle.base, "capitalize")}>
                {productData?.name}
              </span>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Bread Crumb */}

      <Carousel
        opts={{
          slidesToScroll: 2,
          align: "center",
        }}
        className={cn("w-full mt-2 relative px-2", styles.sliderCarousel)}
      >
        <CarouselContent className="ease-out">
          {renderProductImg()}
        </CarouselContent>
        <CarouselPrevious className="rounded-tr-sm  border-none right-[calc(25%+4px)] bottom-0 translate-x-9 z-50 hover:bg-primary hover:text-white" />
        <CarouselNext className="rounded-tl-sm border-none bottom-0 right-2 z-50 hover:bg-primary hover:text-white" />
      </Carousel>

      <UMayLike className={cn(styles.layoutMargin)} />
    </div>
  );
};

export default ProductPage;
