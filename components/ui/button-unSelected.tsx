"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import { Button } from "./button";
import { X } from "lucide-react";
interface ButtonUnSelectedProps {
  className?: string;
  children: string;
}

const ButtonUnSelected: React.FC<ButtonUnSelectedProps> = ({
  className,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Button
      size={"sm"}
      variant={"outline"}
      onClick={() => setOpen(!open)}
      className={cn(
        " h-8 ps-2 pe-1 border-primary-primary200 hover:bg-background hover:text-foreground",
        styles.base,
        open
          ? "bg-primary text-primary-foreground"
          : "bg-background text-foreground",
        className
      )}
    >
      <div className="flex items-center justify-center capitalize">
        {children}
        <X className="w-6 h-6 stroke-1" />
      </div>
    </Button>
  );
};

export default ButtonUnSelected;
