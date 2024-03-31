"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import { Button } from "./button";
interface ButtonSizeProps {
  className?: string;
  children: string;
}

const ButtonSize: React.FC<ButtonSizeProps> = ({ className, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Button
      size={"sm"}
      variant={"outline"}
      onClick={() => setOpen(!open)}
      className={cn(
        "w-14 h-8 p-0 border-primary-primary200 hover:bg-primary hover:text-primary-foreground",
        styles.base,
        open
          ? "bg-primary text-primary-foreground"
          : "bg-background text-foreground",

        className
      )}
    >
      {children}
    </Button>
  );
};

export default ButtonSize;
