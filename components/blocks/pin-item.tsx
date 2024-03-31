"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import ProductCard from "./product-card";
import { useEffect, useRef, useState } from "react";

interface PinItemProps {
  className?: string;
}

const PinItem: React.FC<PinItemProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<any>(null);
  const handleClose = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
    return
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClose);
    return () => window.removeEventListener("mousedown", handleClose);
  });
  return (
    <div
      className={cn(
        "flex items-center justify-center cursor-pointer transition-all duration-300 absolute top-1/3 left-[20%] pinPoint",
        className
      )}
    >
      <div className={cn("pinZoom")}></div>
      <div
        onClick={() => setOpen(true)}
        className={cn(
          " hover:opacity-80 w-8 h-8 bg-destructive rounded-full relative after:content-[''] after:bg-background after:absolute after:w-4 after:h-4 after:rounded-full after:top-1/4 after:right-1/4"
        )}
      ></div>

      <div
        ref={ref}
        className={cn(
          "absolute bottom-16 -left-[84px] transition-all hidden pin-productCard ",
          open ? "active" : ""
        )}
      >
        <ProductCard sizeBtn={8} className="w-[200px] h-[300px]" />
      </div>
    </div>
  );
};

export default PinItem;
