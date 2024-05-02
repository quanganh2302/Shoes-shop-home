"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import { The_Nautigal } from "next/font/google";

const nautigal = The_Nautigal({
  weight: "400",
  subsets: ["latin"],
});
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
import BlogImg from "@/public/images/blog-page-3.jpeg";
import { Eye, Headset, Target } from "lucide-react";
import AboutUsImg2 from "@/public/images/about-us-2.jpeg";
import AboutUsImg3 from "@/public/images/about-us-3.jpg";
import BrandImg1 from "@/public/images/230908-fl-hp-ugg-timberland-brand-6up-ugg.jpg";
import BrandImg2 from "@/public/images/brand-6up-adidas.jpg";
import BrandImg3 from "@/public/images/brand-6up-hoka.jpg";
import BrandImg4 from "@/public/images/brand-6up-new-balance.jpg";
import BrandImg5 from "@/public/images/brand-6up-nike-jordan.jpg";
import BrandImg6 from "@/public/images/brand-6up-on.jpg";
import OfficeImg from "@/public/images/office.png";
import AvatarImg from "@/public/images/avata.jpg";

interface AboutUsPageProps {
  className?: string;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      {/* Bread Crumb */}
      <div className="container">
        <Breadcrumb>
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
              <BreadcrumbPage>
                {" "}
                <span className={cn(textStyle.base)}>About Us</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex sm:flex-row flex-col items-center sm:justify-start justify-between py-2 mt-4">
          <div
            className={cn(
              "sm:w-1/2 w-full text-center sm:text-start font-futura md:text-[40px] text-[36px]"
            )}
          >
            WE ARE WONDERS
          </div>
          <div className="sm:w-1/2 w-full">
            <p className={cn(textStyle.base, "px-6 pt-2")}>
              {" "}
              With every website, we begin with the foundation. Because it's the
              foundation that creates a seamless and user-friendly digital
              experience, from the very first click.
            </p>
          </div>
        </div>
      </div>
      {/* Bread Crumb */}
      <div
        className={cn(
          "w-full container flex items-center justify-between gap-4 sm:flex-row flex-col",
          styles.layoutMargin
        )}
      >
        <img
          src={AboutUsImg2.src}
          className="object-cover object-center sm:w-1/2 w-full h-[420px] sm:h-[600px]"
          alt=""
        />
        <img
          src={AboutUsImg3.src}
          className="object-cover object-center sm:w-1/2 w-full h-[420px] sm:h-[600px]"
          alt=""
        />
      </div>
      {/* Introduction */}
      <div
        className={cn(
          "container flex flex-col items-center justify-between",
          styles.layoutMargin
        )}
      >
        <h3
          className={cn(
            "px-9 py-4 text-white",
            textStyle.textButton,
            styles.gradient1
          )}
        >
          SINCE 2020 OUR STORY
        </h3>
        <p
          className={cn(
            "sm:text-center text-start m:w-[80%] w-full p-6 mt-4",
            styles.body
          )}
        >
          Welcome to Lucas Web! We specialize in crafting innovative and
          visually stunning digital experiences tailored to your unique needs.
          From startups to corporations, we're here to transform your online
          presence and drive results. Join us in crafting digital excellence.
          <br />
          ESTD 2020 • CRAFTING DIGITAL EXCELLENCE
        </p>
      </div>
      {/* Introduction */}
      {/* Story */}
      <div
        className={cn(
          styles.layoutMargin,
          "flex sm:flex-row flex-col items-center justify-between xl:gap-16 gap-8 container"
        )}
      >
        <div className="sm:w-1/2 w-full">
          <img
            src={BlogImg.src}
            alt=""
            className="object-cover object-center xl:h-[610px] sm:h-[500px] h-[360px] w-full"
          />
        </div>
        <div className="sm:w-1/2 w-full text-center sm:text-start">
          <h2
            className={cn(
              " bg-clip-text text-transparent inline-block pb-4",
              styles.gradient1,
              textStyle.h2
            )}
          >
            Story about us
          </h2>
          <p
            className={cn(
              textStyle.base,
              "sm:w-[90%] w-full sm:px-0 p-6 text-start"
            )}
          >
            We believe that great design goes beyond aesthetics; it's about
            creating intuitive and user-friendly experiences that captivate
            audiences and drive results. <br /> Every website we create is
            meticulously crafted to reflect your brand identity, engage your
            audience, and achieve your business objectives.
          </p>
          <p
            className={cn(
              nautigal.className,
              " bg-clip-text text-transparent inline-block pb-4 text-[70px] mt-8",
              styles.gradient1
            )}
          >
            Lucas doan
          </p>
        </div>
      </div>
      {/* Story */}
      {/* Vision */}
      <div
        style={{ backgroundImage: `url(${OfficeImg.src})` }}
        className={cn(
          "sm:px-[60px] relative px-4 py-[84px] bg-primary-primary50 bg-cover bg-center bg-no-repeat after:content-[''] after:block after:w-full after:h-full after:bg-black/60 after:absolute after:top-0 after:right-0",
          styles.layoutMargin
        )}
      >
        <Carousel
          className="z-10"
          opts={{
            align: "center",
            breakpoints: {
              "(min-width: 1280px)": { active: false },
            },
          }}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full mb-2 flex items-center justify-center text-white">
              <div className="flex items-center justify-center flex-col gap-6 w-10/12">
                <div className=" shadow-cardShadow w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
                  <Eye className="stroke-1 w-10 h-10 stroke-primary" />
                </div>
                <h3 className={cn(textStyle.h3)}>OUR VISION</h3>
                <p className={cn(textStyle.base, "text-center")}>
                  Create the highest grandest vision possible for your life,
                  because you become what you believe.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full pl-2 mb-2 flex items-center justify-center text-white">
              <div className="flex items-center justify-center flex-col gap-6 w-10/12">
                <div className=" shadow-cardShadow w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
                  <Target className="stroke-1 w-10 h-10 stroke-primary" />
                </div>
                <h3 className={cn(textStyle.h3)}>OUR MISSION</h3>
                <p className={cn(textStyle.base, "text-center")}>
                  The most extraordinary people in the world today don’t have a
                  career. They have a mission.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full pl-2 mb-2 flex items-center justify-center text-white">
              <div className="flex items-center justify-center flex-col gap-6 w-10/12">
                <div className=" shadow-cardShadow w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
                  <Headset className="stroke-1 w-10 h-10 stroke-primary" />
                </div>
                <h3 className={cn(textStyle.h3)}>OUR SUPPORT</h3>
                <p className={cn(textStyle.base, "text-center")}>
                  Create the highest grandest vision possible for your life,
                  because you become what you believe.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      {/* Vision */}
      {/* Our team */}

      {/* Our team */}
      <div
        className={cn(
          "flex items-center justify-center flex-col gap-6",
          styles.layoutMargin
        )}
      >
        <h3
          className={cn(
            "px-9 py-4 text-white bg-primary",
            textStyle.textButton
          )}
        >
          HIGHLY SKILLED
        </h3>
        <h2 className={cn(textStyle.h2, "text-primary")}>MEET OUR TEAMS</h2>
        <div className="w-full">
          <Carousel
            className="container"
            opts={{
              align: "center",
              breakpoints: {
                "(min-width: 1280px)": { active: false },
              },
            }}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full mb-2 flex">
                <div className="w-full relative">
                  <div
                    style={{ backgroundImage: `url(${AvatarImg.src})` }}
                    className="bg-left-bottom bg-[length:180%] w-[280px] h-[420px] bg-no-repeat"
                  ></div>
                  {/* <div className="border-8 border-primary/40 w-[250px] h-[280px] p-2 absolute right-[50px] top-1/2 -translate-y-1/2 z-10 flex bg-white/70 flex-col justify-center gap-1 items-start">
                    <h4 className={cn(textStyle.h4)}>Lucas Doan</h4>
                    <p className={cn(textStyle.base)}>CEO</p>
                    <p className={cn(textStyle.sm)}>
                      Lucas is a seasoned leader known for driving innovation
                      and growth in the IT sector. With 5 years of experience,
                      He inspire teams, foster collaboration, and set new
                      standards of excellence. Committed to sustainable growth,
                      He bring strategic insight and operational expertise to
                      Wonders.
                    </p>
                  </div> */}
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full mb-2 flex items-center justify-center ">
                <div className="w-full relative">
                  <div
                    style={{ backgroundImage: `url(${AvatarImg.src})` }}
                    className="bg-left-bottom bg-[length:160%] w-[280px] h-[360px] bg-no-repeat"
                  ></div>
                  <div className="border border-5 border-primary w-[300px] h-[300px] absolute -right-[300px] top-1/2 -translate-y-1/2 z-10 bg-black"></div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full mb-2 flex items-center justify-center ">
                <div className="w-full relative">
                  <div
                    style={{ backgroundImage: `url(${AvatarImg.src})` }}
                    className="bg-left-bottom bg-[length:160%] w-[280px] h-[360px] bg-no-repeat"
                  ></div>
                  <div className="border border-5 border-primary w-[300px] h-[300px] absolute -right-[300px] top-1/2 -translate-y-1/2 z-10 bg-black"></div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {/* Investors */}
      <div
        className={cn(
          "sm:px-[60px] px-4 py-[60px] bg-primary-primary50",
          styles.layoutMargin
        )}
      >
        <h2
          className={cn(textStyle.h2, " w-full text-center text-primary mb-8")}
        >
          INVESTOR
        </h2>
        <Carousel
          opts={{
            align: "center",
            breakpoints: {
              "(min-width: 1280px)": { active: false },
            },
          }}
        >
          <CarouselContent>
            <CarouselItem className="sm:basis-1/2 xl:basis-1/6 lg:basis-1/4 md:basis-1/3 basis-full mb-2 flex items-center justify-center">
              <img
                src={BrandImg1.src}
                className="object-cover object-center h-[100px] w-[200px]"
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 xl:basis-1/6 lg:basis-1/4 md:basis-1/3 basis-full mb-2 flex items-center justify-center">
              <img
                src={BrandImg2.src}
                className="object-cover object-center h-[100px] w-[200px]"
                alt=""
              />
            </CarouselItem>{" "}
            <CarouselItem className="sm:basis-1/2 xl:basis-1/6 lg:basis-1/4 md:basis-1/3 basis-full mb-2 flex items-center justify-center">
              <img
                src={BrandImg3.src}
                className="object-cover object-center h-[100px] w-[200px]"
                alt=""
              />
            </CarouselItem>{" "}
            <CarouselItem className="sm:basis-1/2 xl:basis-1/6 lg:basis-1/4 md:basis-1/3 basis-full mb-2 flex items-center justify-center">
              <img
                src={BrandImg4.src}
                className="object-cover object-center h-[100px] w-[200px]"
                alt=""
              />
            </CarouselItem>{" "}
            <CarouselItem className="sm:basis-1/2 xl:basis-1/6 lg:basis-1/4 md:basis-1/3 basis-full mb-2 flex items-center justify-center">
              <img
                src={BrandImg5.src}
                className="object-cover object-center h-[100px] w-[200px]"
                alt=""
              />
            </CarouselItem>{" "}
            <CarouselItem className="sm:basis-1/2 xl:basis-1/6 lg:basis-1/4 md:basis-1/3 basis-full mb-2 flex items-center justify-center">
              <img
                src={BrandImg6.src}
                className="object-cover object-center h-[100px] w-[200px]"
                alt=""
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      {/* Investors */}
    </div>
  );
};

export default AboutUsPage;
