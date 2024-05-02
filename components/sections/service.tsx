import * as React from "react";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import {
  Truck,
  CreditCard,
  PiggyBank,
  Headset,
  PackageCheck,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import ShippingIcon from "@/components/svg/Shipping";

interface ServiceProps {
  className?: string;
}

const Service: React.FC<ServiceProps> = ({ className }) => {
  return (
    <div
      className={cn("bg-black/5 xl:px-5 border-b border-b-gray/40", className)}
    >
      <Carousel
        opts={{
          align: "center",
          breakpoints: {
            "(min-width: 1280px)": { active: false },
          },
        }}
      >
        <CarouselContent>
          <CarouselItem className="h-[200px] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 basis-full pl-2 mb-2">
            <div className="h-full flex flex-col items-center justify-center text-foreground">
              <ShippingIcon className="w-20 h-20 border-none" fill="red" />
              <p className={cn("text-gray", textStyle.base)}>FREE SHIPPING</p>
            </div>
          </CarouselItem>
          <CarouselItem className="h-[200px] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 basis-full pl-2 mb-2">
            {" "}
            <div className="h-full flex flex-col items-center justify-center text-foreground">
              <p className={cn("text-gray", textStyle.base)}>SECURE PAYMENT</p>
            </div>
          </CarouselItem>
          <CarouselItem className="h-[200px] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 basis-full pl-2 mb-2">
            {" "}
            <div className="h-full flex flex-col items-center justify-center text-foreground">
              <Headset className="text-gray w-20 h-20 stroke-1 mb-2" />
              <p className={cn("text-gray", textStyle.base)}>24/7 SUPPORT</p>
            </div>
          </CarouselItem>
          <CarouselItem className="h-[200px] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 basis-full pl-2 mb-2">
            {" "}
            <div className="h-full flex flex-col items-center justify-center text-foreground">
              <PackageCheck className="text-gray w-20 h-20 stroke-1 mb-2" />
              <p className={cn("text-gray", textStyle.base)}>90 DAYS RETURN</p>
            </div>
          </CarouselItem>
          <CarouselItem className="h-[200px] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 basis-full pl-2 mb-2">
            {" "}
            <div className="h-full flex flex-col items-center justify-center text-foreground">
              <PiggyBank className="text-gray w-20 h-20 stroke-1 mb-2" />
              <p className={cn("text-gray", textStyle.base)}>MONEY BACK</p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Service;
