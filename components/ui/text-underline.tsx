import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
interface TextUnderlineProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

const TextUnderline: React.FC<TextUnderlineProps> = ({
  className,
  text,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn("capitalize ", styles.underlineTrans, className)}
    >
      {text}
    </div>
  );
};

export default TextUnderline;
