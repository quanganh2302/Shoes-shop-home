import styles from "@/app/main.module.scss";
import { cn } from "@/lib/utils";
import ShoppingCart from "./shopping-cart-item";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import RecommendItem from "./recommend-cart-item";

interface CartContentProps {
  onChange: () => void;
}

const ShoppingCartContent: React.FC<CartContentProps> = ({ onChange }) => {
  return (
    <div className="mx-4 h-full flex flex-col justify-between">
      <div>
        <header className="bg-background sticky top-0 z-10 flex items-center justify-between py-6 border-b border-borderLine">
          <p className={cn(styles.h3, "")}>Your Bag</p>
          <X
            onClick={onChange}
            className={cn(
              " cursor-pointer hover:text-primary rotate-close-btn",
              styles.rotateCloseIcon
            )}
          />
        </header>
        <div className=" flex flex-row flex-wrap gap-4 py-4 border-b border-borderLine ">
          <ShoppingCart />
        </div>
        <div className=" flex flex-col flex-wrap gap-4 py-4 border-b border-borderLine ">
          <p className={styles.h3}>YOU MAY ALSO LIKE</p>
          <div className="flex items-center justify-between w-full gap-2 pb-20">
            <RecommendItem className="" />
            <RecommendItem className="" />
            <RecommendItem className="" />
          </div>
        </div>
      </div>
      <footer className="z-10 sticky bottom-0 bg-background pb-6 before:absolute before:content-['']  before:-top-4 before:z-1 before:w-full before:h-4 before:bg-gradient-to-b from-[transparent] to-[background]">
        <div className="flex items-center justify-between py-4 border-b border-borderLine">
          <p className={cn(styles.body)}>Shipping and taxes</p>
          <p className={cn(styles.sm)}>Calculated at checkout</p>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-borderLine">
          <p className={cn(styles.body)}>Total</p>
          <p className={cn(styles.h4)}>$69,00</p>
        </div>
        <div className="flex items-center justify-start gap-4 pt-4">
          <Checkbox />
          <p className={cn(styles.body)}>
            {" "}
            You agree with our{" "}
            <span className="underline-transform">Privacy Policy</span> and{" "}
            <span className="underline-transform">Terms & Conditions</span> .
          </p>
        </div>
        <div className="pt-8">
          <Button className="w-full">Check out</Button>
        </div>
      </footer>
    </div>
  );
};

export default ShoppingCartContent;
