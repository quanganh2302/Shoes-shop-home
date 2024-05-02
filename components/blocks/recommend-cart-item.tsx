import ProductImg from "@/public/images/air-jordan-1-mid-shoes.jpeg";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface RecommendItemProps {
  link?: string;
  className?: string;
}

const RecommendItem: React.FC<RecommendItemProps> = ({ className, link }) => {
  return (
    <Link href={`/${link}`} className={cn("w-[220px] h-[260px]", className)}>
      <div
        className="w-full h-[240px]  bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${ProductImg.src})` }}
      ></div>
      <div>
        <p className={cn(styles.body)}>Air Jordan 1 Mid</p>
        <p className={cn(textStyle.sm)}>$115</p>
      </div>
    </Link>
  );
};

export default RecommendItem;
