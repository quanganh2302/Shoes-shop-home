"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./button";

interface ButtonSelectSizeProps {
  className?: string;
  rec?: number;
  sizeList: string[];
}

const ButtonSelectSize: React.FC<ButtonSelectSizeProps> = ({
  className,
  rec,
  sizeList,
}) => {
  const handleClickChild = (e: any) => {
    e.stopPropagation();
  };
  const renderSize = () => {
    const renderSizes = [];
    for (let i = 30; i < 43; i = i + 0.5) {
      const isSizeAvailable = sizeList.includes(i.toString());
      renderSizes.push(
        <CarouselItem key={i} className="p-0 basis-1/3  w-1/3 h-full ">
          <div
            className={cn(
              "w-full h-full",
              isSizeAvailable ? "cursor-pointer" : "cursor-not-allowed"
            )}
          >
            <Button
              disabled={!isSizeAvailable}
              className="w-full h-full text-foreground bg-white rounded-none hover:bg-primary hover:text-primary-foreground cursor-pointer font-futura border-r border-gray/40 transition-all duration-300 disabled:bg-[#F5F5F5]"
            >
              {i}
            </Button>
          </div>
        </CarouselItem>
      );
    }
    return renderSizes;
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
        textStyle.textButton,
        styles.buttonCarousel,
        className
      )}
    >
      <CarouselPrevious
        className={cn(
          "flex w-12 h-12 border-y-0 border-l-0 border-r border-r-gray/40 rounded-r-none rounded-l-md bg-background hover:bg-primary relative top-0 -left-0 translate-y-0 translate-x-0 text-foreground hover:text-primary-foreground duration-300",
          `w-${rec} h-${rec}`
        )}
      />
      <CarouselContent
        className={cn(
          "m-0 h-12 grow bg-background flex items-center justify-between w-full",
          `h-${rec}`
        )}
      >
        {renderSize()}
      </CarouselContent>
      <CarouselNext
        className={cn(
          "flex w-12 h-12 border-y-0 border-r-0 border-l border-gray/40 rounded-l-none rounded-r-md bg-background hover:bg-primary relative top-0 right-0 translate-y-0 translate-x-0 text-foreground hover:text-primary-foreground duration-300",
          `w-${rec} h-${rec}`
        )}
      />
    </Carousel>
  );
};

export default ButtonSelectSize;
