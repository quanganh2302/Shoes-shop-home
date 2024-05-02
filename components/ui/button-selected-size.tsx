"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import { Button } from "./button";
interface ButtonSizeProps {
  className?: string;
  children: string;
  onClickOut: () => void;
  isSelected: boolean;
}

const ButtonSize: React.FC<ButtonSizeProps> = ({
  className,
  children,
  onClickOut,
  isSelected,
}) => {
  const [open, setOpen] = useState<boolean>(isSelected);
  const handleOnClick = () => {
    onClickOut();
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(isSelected);
  }, [isSelected]);

  return (
    <Button
      size={"sm"}
      variant={"outline"}
      onClick={handleOnClick}
      className={cn(
        "w-14 h-8 p-0 border-primary-primary200 hover:bg-primary hover:text-primary-foreground",
        textStyle.base,
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
