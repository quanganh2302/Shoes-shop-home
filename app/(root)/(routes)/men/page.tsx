"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
interface MenPageProps {
  className?: string;
}
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import TitleSection from "@/components/blocks/title-section";
import { Button } from "@/components/ui/button";
import HeroMenImg from "@/public/images/HeroMen.jpg";
import BestSellerImg from "@/public/images/best-seller-2.jpg";
import ShoesSvg from "@/public/images/sb-force-58-skate-shoes.svg";
import productShoes1 from "@/public/images/product-shoes-1.png";
import productShoes2 from "@/public/images/product-shoes-2.png";
import productShoes3 from "@/public/images/product-shoes-3.png";
import productShoes4 from "@/public/images/product-shoes-4.png";

import Polygon from "@/components/svg/polygon";
import { useEffect, useState } from "react";
import ProductCard3 from "@/components/blocks/product-card-3";
import Blog from "@/components/sections/blog";
import ProductCard2 from "@/components/blocks/product-card-2/product-cart-2,";
const MenPage: React.FC<MenPageProps> = ({ className }) => {
  // const [scrollDown, setScrollDown] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     setPrevScrollPos(currentScrollPos);
  //     if (currentScrollPos > prevScrollPos && currentScrollPos > 250) {
  //       setScrollDown(true);
  //     }
  //   };
  //   window.removeEventListener("scroll", handleScroll);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
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
                <span className={cn(styles.base)}>Men</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center sm:justify-start justify-between py-2">
          <div
            className={cn("w-1/2 font-futuraHeavy md:text-[40px] text-[36px]")}
          >
            Men
          </div>
          <div className="w-1/2">
            <a className={cn(styles.navLink, "mr-6")} href="#">
              Shoes
            </a>
            <a className={cn(styles.navLink, "mr-6")} href="#">
              Clothing
            </a>
            <a className={cn(styles.navLink)} href="#">
              Bag
            </a>
          </div>
        </div>
      </div>
      {/* Bread Crumb */}
      {/* Sub Hero */}
      <div
        className={cn("w-full sm:h-[800px] h-[660px] relative overflow-hidden")}
      >
        <img
          src={HeroMenImg.src}
          alt="Hero Img"
          className="w-full h-full object-cover object-center "
        />
        <div
          className={cn(
            "relative sm:left-8 sm:bottom-[35rem] bottom-[38rem] z-10 sm:w-[515px] w-full h-[515px] flex items-center justify-center flex-col overflow-hidden",
            styles.polygon
          )}
        >
          <Polygon
            width={515}
            height={515}
            className={cn("sm:block hidden absolute left-2 -rotate-[15deg]")}
          />
          <div className="flex items-center justify-center flex-col text-primary-foreground gap-2 z-20 absolute top-[180px] ">
            <h3 className={cn("font-futuraHeavy text-3xl")}>
              The Celebration Is On
            </h3>
            <p className={cn(styles.subTitle, "text-center w-[400px]")}>
              Fresh voices, fire fits, and new kicks. Shop a brand new
              collection inspired by strong women.
            </p>
            <div
              className={cn(
                "mt-4 w-40 h-14 rounded-md flex items-center justify-center",
                styles.hoverBtn1
              )}
            >
              <Button
                className={cn(
                  " capitalize w-full h-full bg-transparent hover:bg-transparent ",
                  styles.textButton
                )}
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Hero */}
      {/* <div
        className={cn(
          "container flex flex-col items-center justify-center",
          styles.layoutMargin
        )}
      >
        <TitleSection
          className={cn(
            " bg-clip-text text-transparent inline-block pb-4",
            styles.gradient1
          )}
          title="YOUR TRAIL GUIDE AWAITS"
        />
        <p className={cn(styles.subTitle, "text-center")}>
          Explore the outside world in our latest trail running & hiking styles.
        </p>
        <div className={cn(styles.hoverBtn1, "mt-6")}>
          <Button
            className=" bg-transparent hover:bg-transparent uppercase"
            size={"lg"}
          >
            Shop Trail Running
          </Button>
        </div>
      </div> */}
      {/* Collection  */}
      <div className={cn("", styles.layoutMargin, styles.container)}>
        <TitleSection title="UNIQUE COLLECTION" />
        <div className="w-full ">
          <Carousel
            opts={{
              align: "center",
              breakpoints: {
                "(min-width: 1280px)": { active: false },
              },
            }}
          >
            <CarouselContent className="2xl:pb-12">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full mb-2 flex items-center justify-center">
                <ProductCard3
                  className={cn(styles.gradient2)}
                  imageURL={productShoes1.src}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full pl-2 mb-2 flex items-center justify-center">
                {" "}
                <ProductCard3
                  className={styles.gradient3}
                  imageURL={productShoes2.src}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full pl-2 mb-2 flex items-center justify-center">
                {" "}
                <ProductCard3
                  className={styles.gradient4}
                  imageURL={productShoes3.src}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full pl-2 mb-2 flex items-center justify-center">
                {" "}
                <ProductCard3
                  className={styles.gradient5}
                  imageURL={productShoes4.src}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {/* Collection  */}
      {/* Best seller */}
      <div className={cn("container lg:px-8 p-0", styles.layoutMargin)}>
        <TitleSection title="Best seller products" />
        <div className="flex sm:flex-row flex-col items-center justify-center xl:gap-16 gap-8">
          <div className="sm:w-5/12 w-full grid grid-cols-2 grid-rows-2 sm:gap-x-4 gap-x-2 xl:gap-y-16 gap-y-8 justify-items-center">
            <ProductCard2 className="2xl:w-[270px] md:w-full sm:w-[160px] w-[175px]" />
            <ProductCard2 className="2xl:w-[270px] md:w-full sm:w-[160px] w-[175px]" />
            <ProductCard2 className="2xl:w-[270px] md:w-full sm:w-[160px] w-[175px]" />
            <ProductCard2 className="2xl:w-[270px] md:w-full sm:w-[160px] w-[175px]" />
          </div>
          <div
            className={cn("sm:w-7/12 w-full relative ", styles.animationHover4)}
          >
            <img
              src={BestSellerImg.src}
              alt=""
              className="w-full xl:h-[1000px] sm:h-[800px] h-[600px] object-cover"
            />
            <div className="w-full h-full absolute block bg-black/10 top-0 right-0"></div>
            <div className="absolute lg:bottom-16 lg:left-12 bottom-8 left-6 lg:w-[366px] w-10/12">
              <h3 className={cn(styles.h3, "text-primary-foreground ")}>
                STYLE ZONE
              </h3>
              <p
                className={cn(styles.subTitle, "text-primary-foreground mt-2")}
              >
                {" "}
                Try to make something unique about your stores.
              </p>
              <Button
                variant={"outline"}
                className="text-white z-[2] relative block mt-8 bg-transparent border-white border-2 hover:text-white hover:bg-transparent hover:border-primary overflow-hidden after:content-[''] after:w-full after:h-full after:z-[-1] after:bg-primary after:block after:absolute after:bottom-0 after:transition-all after:duration-300 after:left-0 after:scale-y-0 hover:after:scale-y-100 after:origin-[bottom_center]"
                size={"lg"}
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Best seller */}
      {/* CTA  */}
      <div className="flex sm:flex-row flex-col-reverse items-center justify-center xl:gap-20 sm:gap-16 gap-10">
        <div className="sm:w-7/12 w-full bg-[#A0A3BD]/30">
          <img
            src={ShoesSvg.src}
            alt=""
            className="object-cover object-center h-full"
          />
        </div>
        <div className="sm:w-5/12 flex flex-col justify-start sm:items-start items-center gap-6">
          <p
            className={cn(
              "bg-primary text-primary-foreground inline-block py-2 px-4",
              styles.textButton
            )}
          >
            #BEST OFFER PRICE
          </p>
          <h3 className={cn(styles.h3, "text-primary")}>STYLE ZONE</h3>
          <p
            className={cn(
              "2xl:w-8/12 sm:w-10/12 w-full sm:p-0 px-8 ",
              styles.base
            )}
          >
            Give your feet the beauty treatment that only brand new shoes can
            give, Try to make something unique about your stores.
          </p>
          <Button
            className={cn("uppercase mt-4", styles.textButton)}
            size={"lg"}
          >
            Shop now
          </Button>
        </div>
      </div>
      {/* CTA  */}

      <Blog className={cn("container", styles.layoutMargin)} />
    </div>
  );
};

export default MenPage;
