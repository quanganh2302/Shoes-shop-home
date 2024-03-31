import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
interface TextUnderlineProps {
  className?: string;
  text: string;
}

const TextUnderline: React.FC<TextUnderlineProps> = ({ className, text }) => {
  return (
    <div
      className={cn(
        "capitalize ",
        styles.underlineTrans,
        className
      )}
    >
      {text}
    </div>
  );
};

export default TextUnderline;
