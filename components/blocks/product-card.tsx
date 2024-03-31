import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import ProductImage from "@/public/images/air-jordan-1-mid-shoes.jpeg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import ButtonSelectSize from "@/components/ui/button-change-size";

interface Props {
  data?: any[];
  link?: string;
  className?: string;
  wishlist?: false;
  sizeBtn?: number;
}

const ProductCard: React.FC<Props> = ({
  className,
  link,
  data,
  wishlist,
  sizeBtn,
}) => {
  const handleClickChild = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div
      className={cn(
        "w-full h-[540px] shadow-cardShadow relative flex flex-col bg-background cursor-pointer",
        className
      )}
    >
      <div
        style={{ backgroundImage: `url(${ProductImage.src})` }}
        className="w-full h-[90%] bg-center bg-cover bg-no-repeat relative flex items-end justify-center"
      >
        <ButtonSelectSize
          rec={sizeBtn}
          className={cn(
            "uppercase mb-[8%] w-[96%] mx-auto rounded-md text-foreground",
            styles.textButton
          )}
        ></ButtonSelectSize>
      </div>
      <div className="w-full p-2">
        <p className={cn(styles.h4)}>Air Jordan 1 Mid</p>
        <p className={cn(styles.sm)}>$115</p>
        <span></span>
      </div>
      {sizeBtn && sizeBtn > 10 && (
        <>
          {!wishlist ? (
            <p
              onClick={handleClickChild}
              className={cn(" capitalize absolute top-6 right-6", styles.body)}
            >
              add to wishlist
            </p>
          ) : (
            <Heart className="absolute top-6 right-6 fill-primary" />
          )}
          <p
            className={cn(
              " text-destructive absolute top-6 left-6",
              styles.body
            )}
          >
            -15%
          </p>
        </>
      )}
    </div>
  );
};

export default ProductCard;
