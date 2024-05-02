"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import UMayLike from "@/components/sections/u-may-like";
interface CartPageProps {
  className?: string;
}

const CartPage: React.FC<CartPageProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <UMayLike className={cn(styles.layoutMargin)} />
    </div>
  );
};

export default CartPage;
