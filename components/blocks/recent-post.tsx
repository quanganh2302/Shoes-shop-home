import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
interface RecentPostProps {
  className?: string;
  imageURL: string;
  time: string;
  content: string;
}

const RecentPost: React.FC<RecentPostProps> = ({
  className,
  imageURL,
  time,
  content,
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-start justify-start gap-5">
        <div className="w-4/12">
          <img
            src={imageURL}
            alt=""
            className="object-cover object-center sm:h-[100px] h-[60px] w-full"
          />
        </div>
        <div className="8/12 flex flex-col justify-between items-start">
          <p className="font-futuraNormal text-base text-gray uppercase">
            {time}
          </p>
          <p className="font-futuraNormal text-base">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
