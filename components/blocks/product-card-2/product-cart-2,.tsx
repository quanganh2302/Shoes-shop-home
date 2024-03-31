import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import myStyle from "./product-card-2.module.scss";
import ProductImg from "@/public/images/air-jordan-1-low-se-craft-shoes.png";
import ButtonColor from "../../ui/button-selected-color";
import { Button } from "../../ui/button";
import { ShoppingBasket, Star, StarHalf } from "lucide-react";

interface ProductCard2Props {
  className?: string;
}

const ProductCard2: React.FC<ProductCard2Props> = ({ className }) => {
  const handleClickChild = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={() => console.log("parent clicked")}
      className={cn(
        "w-[300px] shadow-cardShadow overflow-hidden",
        myStyle.style,
        className
      )}
    >
      <div className="w-full">
        <div className="w-full cursor-pointer xl:h-[240px] h-[180px] flex items-center justify-center relative">
          <img
            className="w-full h-full object-cover object-center"
            src={ProductImg.src}
            alt="product-image"
          />
          <Button
            onClick={handleClickChild}
            className={cn(
              "absolute capitalize h-12 w-[96%] mx-auto bg-white hover:bg-white text-foreground -translate-y-[200px] hidden xl:block ",
              styles.textButton
            )}
          >
            Add To Cart
          </Button>
          <div className="bg-background rounded-full w-10 h-10 flex items-center justify-center absolute -bottom-5 right-1 shadow-cardShadow xl:hidden ">
            <ShoppingBasket className="stroke-1" />
          </div>
        </div>
        <div className="w-full xl:p-4 p-2 xl:pb-6 pb-4">
          <h4 className={cn(styles.h4, "")}>Air Jordan 1 Low</h4>
          <p className={cn(styles.base, "")}>Men’s Shoes</p>
          <div className="flex xl:flex-row flex-col xl:items-center items-start justify-between mt-3 xl:gap-0 gap-2">
            <div className="flex items-center justify-start gap-1">
              <p className={cn(styles.base, "")}>Color :</p>
              <div className="flex items-center justify-start gap-1 flex-wrap">
                <ButtonColor className="w-6 h-6"></ButtonColor>
              </div>
            </div>
            <div>
              <p className={cn("", styles.body)}>
                $69
                <span className="line-through ml-2 text-gray">$115</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-1 mt-2">
            <Star className="w-5 h-5 stroke-none fill-accent" />
            <Star className="w-5 h-5 stroke-none fill-accent" />
            <Star className="w-5 h-5 stroke-none fill-accent" />
            <Star className="w-5 h-5 stroke-none fill-accent" />
            <StarHalf className="w-5 h-5 stroke-none fill-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
