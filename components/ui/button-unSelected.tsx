"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import { Button } from "./button";
import { X } from "lucide-react";
interface ButtonUnSelectedProps {
  className?: string;
  children: string;
  onClick: () => void;
}

const ButtonUnSelected: React.FC<ButtonUnSelectedProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <Button
      size={"sm"}
      variant={"outline"}
      onClick={onClick}
      className={cn(
        " h-8 ps-2 pe-1 border-primary-primary200 hover:bg-background hover:text-foreground hover:border-transparent",
        textStyle.base,
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
