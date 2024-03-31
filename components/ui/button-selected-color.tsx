"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import { Button } from "./button";
import { Check } from "lucide-react";
interface ButtonColorProps {
  className?: string;
}

const ButtonColor: React.FC<ButtonColorProps> = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <Button
      variant={"outline"}
      onClick={() => setOpen(!open)}
      className={cn(
        "p-0 w-10 h-10 rounded-full transition duration-300 border-primary-primary200 hover:bg-primary hover:text-primary-foreground",
        styles.base,
        open
          ? "bg-primary text-primary-foreground"
          : "bg-background text-foreground",

        className
      )}
    >
      {open ? <Check /> : null}
    </Button>
  );
};

export default ButtonColor;
