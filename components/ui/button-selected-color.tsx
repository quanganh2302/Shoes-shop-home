"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import textStyle from "@/lib/styles";
import { Button } from "./button";
import { Check } from "lucide-react";
interface ButtonColorProps {
  className?: string;
  value: string;
  onClickOut: () => void;
  status: boolean;
}

const ButtonColor: React.FC<ButtonColorProps> = ({
  className,
  value,
  onClickOut,
  status,
}) => {
  const [open, setOpen] = useState<boolean>(status);
  const handleOnClick = () => {
    onClickOut();
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(status);
  }, [status]);
  return (
    <Button
      variant={"outline"}
      onClick={handleOnClick}
      style={{ backgroundColor: value }}
      className={cn(
        `p-0 w-10 h-10 rounded-full transition duration-300 border-primary-primary200 hover:border-primary hover:border-2`,
        textStyle.base,
        className
      )}
    >
      {open ? (
        <Check
          className={
            value === "#000" || value === "#000000"
              ? " stroke-white"
              : "stroke-primary"
          }
        />
      ) : null}
    </Button>
  );
};

export default ButtonColor;
