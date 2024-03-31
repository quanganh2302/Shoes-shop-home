import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import Product from "@/public/images/air-jordan-1-high-method-of-make-womens-shoes-3.jpeg";
import QtyChange from "@/components/blocks/qty-change";
interface ShoppingCartProps {
  className?: string;
  open?: boolean;
  onChange?: () => void;
  loading?: boolean;
  imageURL?: string;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  className,
  open,
  onChange,
  loading,
}) => {
  return (
    <div
      className={cn("h-auto flex w-full gap-4 border-b-borderLine", className)}
    >
      <div
        style={{ backgroundImage: `url(${Product.src})` }}
        className="w-[8rem] h-[10rem] bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="flex flex-col items-baseline justify-between grow">
        <div className="flex items-start justify-between w-full">
          <div className="">
            <p className={cn("", styles.h4)}>Air jordan 1 high</p>
            <p className={cn("text-base", styles.sm)}>Men’s Shoes</p>
            <p className={cn("text-base pt-2", styles.sm)}>Size: EU 44</p>
          </div>

          <div className="text-end">
            <p className={cn("", styles.body)}>$69</p>
            <div
              className={cn(
                styles.body,
                "flex items-center justify-end flex-wrap gap-1"
              )}
            >
              <p className="line-through text-gray">$115</p>
              <p className="text-destructive">
                {" "}
                {"["} - 40% {"]"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <QtyChange />
          <span
            className={cn(
              "capitalize cursor-pointer underline-transform",
              styles.body
            )}
          >
            remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
