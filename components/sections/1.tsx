import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
interface ANameProps {
  className?: string;
}

const AName: React.FC<ANameProps> = ({ className }) => {
  return <div className={cn("", className)}>AName</div>;
};

export default AName;
