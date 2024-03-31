"use client";

import { useState } from "react";
import InputSearch from "@/components/ui/input-search";
import { useHandleSticky } from "@/features/sticky-heading";
import styles from "@/app/main.module.scss";
import { cn } from "@/lib/utils";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ShoppingCartContent from "../blocks/shopping-cart";
import MobileControl from "@/components/blocks/mobile-control";
import TopBar from "../blocks/top-bar";

let x = 1;
const Heading = () => {
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);
  const isVisible = useHandleSticky({ heightOfHeading: 80 });
  return (
    <div className="w-full">
      <header
        className={cn(
          isVisible
            ? "w-full sticky opacity-100 bg-background"
            : "opacity-0 bg-none",
          "transition-all duration-300 ease-in "
        )}
      >
        <TopBar />
        <div className="flex items-center justify-center xl:justify-between xl:container xl:mx-auto py-6">
          <div>
            <p className={cn("tracking-[.4rem]", styles.logo)}>Wonders</p>
          </div>
          <div className="xl:flex hidden items-center justify-between w-1/3">
            <Link
              className={cn(styles.navLink, "hover:underline text-[20px]")}
              href={"/"}
            >
              {" "}
              New Arrivals{" "}
            </Link>
            <Link
              className={cn(styles.navLink, "hover:underline text-[20px]")}
              href={"/"}
            >
              {" "}
              Men{" "}
            </Link>
            <Link
              className={cn(styles.navLink, "hover:underline text-[20px]")}
              href={"/"}
            >
              {" "}
              Women{" "}
            </Link>
            <Link
              className={cn(styles.navLink, "hover:underline text-[20px]")}
              href={"/"}
            >
              {" "}
              Kid{" "}
            </Link>
          </div>
          <div className="w-auto items-center justify-between gap-6 xl:flex hidden">
            <InputSearch
              className="w-[250px] xl:flex hidden"
              placeholder="What are you looking for?"
            />
            <div className={cn("w-6 h-6 relative xl:block hidden")}>
              <div className="absolute -top-[4px] -right-[4px] w-4 h-4 bg-primary text-white flex items-center justify-center text-[.7rem] font-futuraNormal rounded-full">
                {x}
              </div>
              <Heart className="w-6 h-6 hover:cursor-pointer" />
            </div>
            <div className={cn("w-6 h-6 relative ")}>
              <div className="absolute -top-[4px] -right-[4px] w-4 h-4 bg-primary text-white flex items-center justify-center text-[.7rem] font-futuraNormal rounded-full">
                {x}
              </div>
              <button onClick={() => setOpenCart(true)}>
                <ShoppingCart className="w-6 h-6 hover:cursor-pointer " />
              </button>
            </div>
            <UserRound className=" hover:cursor-pointer" />
          </div>
        </div>
      </header>
      <Sheet open={openCart} onOpenChange={setOpenCart}>
        <SheetContent className="p-0 sm:max-w-[640px] w-full overflow-auto">
          <ShoppingCartContent onChange={() => setOpenCart(false)} />
        </SheetContent>
      </Sheet>
      <MobileControl
        className="flex xl:hidden"
        openCart={openCart}
        onChangeCart={() => setOpenCart(!openCart)}
        open={open}
        onChange={() => setOpen(!open)}
      />
      <div
        className={cn(
          "fixed z-40 top-0 w-full bg-background transition-all duration-500 ease overflow-hidden",
          open ? "h-screen" : "h-0"
        )}
      >
        <p className={cn(`py-6 text-center block ${styles.logo}`)}>
          Wonders
        </p>
        <div className="w-full pb-6">
          <Link
            className="block w-full uppercase font-futuraMedium font-semibold text-[24px] text-black px-4 py-4 border-b border-borderLine"
            href={"/"}
          >
            New Arrivals
          </Link>
          <Link
            className="block w-full uppercase font-futuraMedium font-semibold text-[24px] text-black px-4 py-4 border-b border-borderLine"
            href={"/"}
          >
            Men
          </Link>
          <Link
            className="block w-full uppercase font-futuraMedium font-semibold text-[24px] text-black px-4 py-4 border-b border-borderLine"
            href={"/"}
          >
            Women
          </Link>
          <Link
            className="block w-full uppercase font-futuraMedium font-semibold text-[24px] text-black px-4 py-4 border-b border-borderLine"
            href={"/"}
          >
            Kids
          </Link>
        </div>
        <div className="w-full h-auto">
          <Link
            className="block w-full uppercase font-futuraMedium font-semibold text-[16px] text-black px-4 py-4 border-b border-borderLine"
            href={"/"}
          >
            My account
          </Link>
          <Link
            className="block w-full uppercase font-futuraMedium font-semibold text-[16px] text-black px-4 py-4 border-b border-borderLine"
            href={"/"}
          >
            wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
