import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
interface TextHoverProps {
  className?: string;
  text: string;
}

const TextHover: React.FC<TextHoverProps> = ({ className, text }) => {
  return (
    <div className={cn("capitalize", styles.underlineTrans2, className)}>
      {text}
    </div>
  );
};

export default TextHover;
