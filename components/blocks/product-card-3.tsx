import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import { ArrowRight } from "lucide-react";

interface ProductCard3Props {
  imageURL: string;
  className?: string;
}

const ProductCard3: React.FC<ProductCard3Props> = ({ className, imageURL }) => {
  return (
    <div
      className={cn(
        styles.animationHover3,
        "xl:w-[380px] xl:h-[380px] 3xl:w-[420px] 3xl:h-[420px] w-[400px] h-[400px]",
        className
      )}
    >
      <div className="flex items-center justify-between py-2 px-9 mt-10">
        <div className="grow">
          <p
            className={cn("text-primary-foreground font-futuraNormal text-xl")}
          >
            New Arrivals
          </p>
          <h4
            className={cn(
              "text-primary-foreground font-futuraMedium text-2xl "
            )}
          >
            Jordan Essentials
          </h4>
        </div>
        <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center">
          <ArrowRight className="stroke-primary-foreground" />
        </div>
      </div>


      <img src={imageURL} alt="" />

    </div>
  );
};

export default ProductCard3;
