import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";

interface BlogItemProps {
  className?: string;
  imageURL: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ className, imageURL }) => {
  return (
    <div className={cn("", className)}>
      <div>
        <div
          style={{ backgroundImage: `url(${imageURL})` }}
          className="w-full h-[280px] bg-cover bg-no-repeat bg-center"
        ></div>
        <div className="text-center p-2">
          <p className={cn(styles.base, "text-accent")}>March 01, 2024</p>
          <h4
            className={cn(
              styles.h4,
              "block after:content-[''] after:w-28 after:h-[2px] after:bg-accent after:block after:relative after:left-1/2 after:-translate-x-1/2 after:top-3 mb-4"
            )}
          >
            Converse Introduces the Chuck Taylor All Star Play Lite CX for Kids
          </h4>
          <p className={cn(styles.sm, "")}>by: Lucas Doan</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
