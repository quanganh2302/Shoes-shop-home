import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckBoxCustomProps {
  className?: string;
  children: string;
  id: string;
}

const CheckBoxCustom: React.FC<CheckBoxCustomProps> = ({
  className,
  children,
  id,
}) => {
  return (
    <div className={cn("", className)}>
      <div className="items-center flex w-full space-x-2">
        <Checkbox className="bg-background" id={id} />
        <div className="grid gap-1.5 leading-none grow">
          <label
            htmlFor={id}
            className="text-sm font-futuraBook leading-none block w-full cursor-pointer hover:text-primary hover:underline"
          >
            {children}
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxCustom;
