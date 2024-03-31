import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
interface Props {
  title: string;
  className?: string;
}

const TitleSection: React.FC<Props> = ({ title, className }) => {
  return (
    <h2
      className={cn(
        "w-full text-center text-primary uppercase pb-8 font-futuraHeavy md:text-5xl text-[2.5rem]",
        className
      )}
    >
      {title}
    </h2>
  );
};

export default TitleSection;
