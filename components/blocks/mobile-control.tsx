"use client";

interface MobileControlProps {
  open: boolean;
  openCart: boolean;
  onChangeCart: () => void;
  onChange: () => void;
  className?: string;
}

import { cn } from "@/lib/utils";
import { ShoppingCart, Search } from "lucide-react";
const MobileControl: React.FC<MobileControlProps> = ({
  open,
  openCart,
  onChangeCart,
  onChange,
  className,
}) => {
  return (
    <div
      className={cn(
        " items-center justify-center fixed bottom-[80px] right-1/2 translate-x-1/2 z-[50]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-[60px] h-[50px] shadow-navMobile bg-background rounded-s-sm mr-[-1px] hover:cursor-pointer"
        )}
      >
        <Search />
      </div>
      <div
        onClick={onChange}
        className={cn(
          "relative flex items-center justify-center w-[60px] h-[60px] shadow-navMobileCenter hover:cursor-pointer rounded-sm z-[60] transition-all duration-300 ease-in-out",
          open ? "bg-primary" : "bg-background"
        )}
      >
        <div className={cn("hamburger", open ? "open" : "")}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={cn(
          " flex items-center justify-center w-[60px] h-[50px] shadow-navMobile bg-background rounded-e-sm ml-[-1px] hover:cursor-pointer"
        )}
      >
        <ShoppingCart onClick={onChangeCart} />
      </div>
    </div>
  );
};

export default MobileControl;
