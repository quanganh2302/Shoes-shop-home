"use client";
import Hero from "@/components/sections/hero";
import NewArrival from "@/components/sections/new-arrivals";
import Trending from "@/components/sections/trending";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import BgImg from "@/public/images/nike-just-do-it.png";
import { Button } from "@/components/ui/button";
import Collection from "@/components/sections/collection";
import PinSection from "@/components/sections/pin-section/pin-section";
import Blog from "@/components/sections/blog";

const HomePage = () => {
  return (
    <div className={""}>
      <Hero />
      <NewArrival className={cn("", styles.layoutMargin)} />
      <Trending className={cn("", styles.layoutMargin)} />
      <div className="relative mt-12 lg:mt-16 mb-28 lg:mb-16">
        <img className="w-full" src={BgImg.src} alt="hero image" />
        <div
          className={cn(
            "absolute lg:top-3/4 lg:left-6 lg:translate-x-0 -bottom-16 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out "
          )}
        >
          <div
            className={cn(
              "mt-4 w-full h-11 rounded-md flex items-center justify-center",
              styles.hoverBtn1
            )}
          >
            <Button
              className={cn(
                " capitalize w-full h-full bg-transparent hover:bg-transparent ",
                styles.textButton
              )}
            >
              SHOP 2000’s RUNNING
            </Button>
          </div>
        </div>
      </div>
      <Collection className={cn("", styles.layoutMargin)} />
      <PinSection className={cn("", styles.layoutMargin)} />
      <Blog className={cn("container", styles.layoutMargin)} />
    </div>
  );
};

export default HomePage;
