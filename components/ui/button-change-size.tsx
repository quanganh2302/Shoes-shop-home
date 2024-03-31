"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ButtonSelectSizeProps {
  className?: string;
  rec?: number;
}

const ButtonSelectSize: React.FC<ButtonSelectSizeProps> = ({
  className,
  rec,
}) => {
  const handleClickChild = (e: any) => {
    e.stopPropagation();
  };
  return (
    <Carousel
      onClick={handleClickChild}
      opts={{
        align: "start",
        watchDrag: false,
      }}
      className={cn(
        "w-full flex items-center justify-between ",
        styles.textButton,
        styles.buttonCarousel,
        className
      )}
    >
      <CarouselPrevious
        className={cn(
          "flex w-12 h-12 border border-gray/40 rounded-r-none rounded-l-md bg-background hover:bg-primary relative top-0 left-0 translate-y-0 translate-x-0 text-foreground hover:text-primary-foreground duration-300",
          `w-${rec} h-${rec}`
        )}
      />
      <CarouselContent
        className={cn(
          "m-0 h-12 grow bg-background flex items-center justify-between w-full",
          `h-${rec}`
        )}
      >
        <CarouselItem className="p-0 basis-1/3 hover:bg-primary hover:text-primary-foreground cursor-pointer w-1/3 h-full flex items-center justify-center font-futuraNormal border-e border-y border-gray/40 transition-all duration-300">
          35
        </CarouselItem>
        <CarouselItem className="p-0 basis-1/3 hover:bg-primary hover:text-primary-foreground cursor-pointer w-1/3 h-full flex items-center justify-center font-futuraNormal border-e border-y border-gray/40 transition-all duration-300">
          36
        </CarouselItem>
        <CarouselItem className="p-0 basis-1/3 hover:bg-primary hover:text-primary-foreground cursor-pointer w-1/3 h-full flex items-center justify-center font-futuraNormal border-e border-y border-gray/40 transition-all duration-300">
          38
        </CarouselItem>
        <CarouselItem className="p-0 basis-1/3 hover:bg-primary hover:text-primary-foreground cursor-pointer w-1/3 h-full flex items-center justify-center font-futuraNormal border-e border-y border-gray/40 transition-all duration-300">
          39
        </CarouselItem>
        <CarouselItem className="p-0 basis-1/3 hover:bg-primary hover:text-primary-foreground cursor-pointer w-1/3 h-full flex items-center justify-center font-futuraNormal border-e ring-offset-0 border-gray/40 border-none transition-all duration-300">
          40
        </CarouselItem>
      </CarouselContent>
      <CarouselNext
        className={cn(
          "flex w-12 h-12 border border-gray/40 rounded-l-none rounded-r-md bg-background hover:bg-primary relative top-0 right-0 translate-y-0 translate-x-0 text-foreground hover:text-primary-foreground duration-300",
          `w-${rec} h-${rec}`
        )}
      />
    </Carousel>
  );
};

export default ButtonSelectSize;
