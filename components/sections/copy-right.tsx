import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
interface CopyRightProps {
  className?: string;
}

const CopyRight: React.FC<CopyRightProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-black border-t border-gray/40 flex items-center justify-center py-4",
        className
      )}
    >
      <p className={cn(textStyle.sm, "text-gray")}>
        @ Copyright <span className="text-accent">Lucas</span> 2024. All right
        reserved
      </p>
    </div>
  );
};

export default CopyRight;
