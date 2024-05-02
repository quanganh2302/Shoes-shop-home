"use client";

import { cn } from "@/lib/utils";
import textStyle from "@/lib/styles"; 
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="w-full py-2 flex items-center justify-center bg-primary gap-2">
      <p className={cn("uppercase text-white" , textStyle.sm)}>
        CASH ON DELIVERY IS NOW AVAILABLE!
      </p>
      <Link className={cn("underline capitalize text-white ", textStyle.navLink)} href="/">
        Shop now!
      </Link>
    </div>
  );
};

export default TopBar;
