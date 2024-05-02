"use client";

import { useEffect, useRef, useState } from "react";
const _ = require("lodash");
import { cn } from "@/lib/utils";
interface TextDropProps {
  className?: string;
}

const TextDrop: React.FC<TextDropProps> = ({ className }) => {
  const ref = useRef<any>(null);
  const [pos, setPos] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", listScroll);
    return () => window.removeEventListener("scroll", listScroll);
  }, [pos]);
  const listScroll = (e: Event) => {
    const currentPos =
      window.scrollY - ref.current.offsetTop + window.innerHeight;

    if (currentPos) setPos(currentPos);
    else {
      setPos(0);
    }
  };

  return (
    <div ref={ref} className={cn("bg-[#f7f7f7] overflow-hidden", className)}>
      <div className="xl:flex hidden h-[300px] 2xl:h-[400px] items-center justify-center w-full 2xl:-translate-x-12 -translate-x-4">
        <div
          style={{
            transform: `translateY(${_.clamp(pos.toFixed(), 0, 350)}px`,
          }}
          className={cn("relative -top-[350px]")}
        >
          <span
            className={cn(
              // textStyle.h1,
              "xl:text-[300px] 2xl:text-[380px] text-[260px] italic tracking-tighter font-futura font-bold"
            )}
          >
            W
          </span>
        </div>
        <div
          style={{
            transform: `translateY(${_.clamp(pos.toFixed(), 0, 400)}px`,
          }}
          className={cn("relative -top-[400px]")}
        >
          <span
            className={cn(
              // textStyle.h1,
              "xl:text-[300px] 2xl:text-[380px] text-[260px]  italic tracking-tighter font-futura font-bold"
            )}
          >
            O
          </span>
        </div>
        <div
          style={{
            transform: `translateY(${_.clamp(pos.toFixed(), 0, 450)}px`,
          }}
          className={cn("relative -top-[450px]")}
        >
          <span
            className={cn(
              // textStyle.h1,
              "xl:text-[300px] 2xl:text-[380px] text-[260px]  italic tracking-tighter font-futura font-bold"
            )}
          >
            N
          </span>
        </div>
        <div
          style={{
            transform: `translateY(${_.clamp(pos.toFixed(), 0, 500)}px`,
          }}
          className={cn("relative -top-[500px]")}
        >
          <span
            className={cn(
              // textStyle.h1,
              "xl:text-[300px] 2xl:text-[380px] text-[260px]  italic tracking-tighter font-futura font-bold"
            )}
          >
            D
          </span>
        </div>
        <div
          style={{
            transform: `translateY(${_.clamp(pos.toFixed(), 0, 550)}px`,
          }}
          className={cn("relative -top-[550px]")}
        >
          <span
            className={cn(
              // textStyle.h1,
              "xl:text-[300px] 2xl:text-[380px] text-[260px]  italic tracking-tighter font-futura font-bold"
            )}
          >
            E
          </span>
        </div>
        <div
          style={{
            transform: `translateY(${_.clamp(pos.toFixed(), 0, 600)}px`,
          }}
          className={cn("relative -top-[600px]")}
        >
          <span
            className={cn(
              // textStyle.h1,
              "xl:text-[300px] 2xl:text-[380px] text-[260px]  italic tracking-tighter font-futura font-bold"
            )}
          >
            R
          </span>
        </div>
        <div
          style={{
            transform: `translateY(${_.clamp(pos.toFixed(), 0, 650)}px`,
          }}
          className={cn("relative -top-[650px]")}
        >
          <span
            className={cn(
              // textStyle.h1,
              "xl:text-[300px] 2xl:text-[380px] text-[260px]  italic tracking-tighter font-futura font-bold"
            )}
          >
            S
          </span>
        </div>
      </div>
      <div className="xl:hidden flex items-center justify-center ">
        <p
          className={cn(
            // textStyle.h1,
            "text-[90px] py-14 sm:text-[160px] lg:text-[240px] italic tracking-tighter -translate-x-2 lg:-translate-x-8 font-futura font-bold"
          )}
        >
          Wonders
        </p>
      </div>
    </div>
  );
};

export default TextDrop;
