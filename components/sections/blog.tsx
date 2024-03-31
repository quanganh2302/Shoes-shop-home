import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import BlogItem from "../blocks/blog-item";
interface BlogProps {
  className?: string;
}
import BlogImg1 from "@/public/images/blog-1.jpeg";
import BlogImg2 from "@/public/images/blog-2.jpg";
import BlogImg3 from "@/public/images/blog-3.jpeg";
import BlogImg4 from "@/public/images/blog-4.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TextUnderline from "@/components/ui/text-underline";

const Blog: React.FC<BlogProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="flex flex-col items-center justify-center mb-16">
        <p className={cn(styles.subTitle, "block mb-4")}>ARTICALS & BLOGS</p>
        <h2
          className={cn(
            styles.h2,
            "block after:content-[''] after:w-28 after:h-1 after:bg-accent after:block after:relative after:left-1/2 after:-translate-x-1/2 after:top-4 text-primary"
          )}
        >
          UPDATE NEWS
        </h2>
      </div>
      <div className={cn(styles.container)}>
        <Carousel
          opts={{
            align: "center",
            breakpoints: {
              "(min-width: 1280px)": { active: false },
            },
          }}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full pl-2 mb-2">
              <BlogItem className="w-full" imageURL={BlogImg1.src} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full pl-2 mb-2">
              {" "}
              <BlogItem className="w-full" imageURL={BlogImg2.src} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full pl-2 mb-2">
              {" "}
              <BlogItem className="w-full" imageURL={BlogImg3.src} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full pl-2 mb-2">
              {" "}
              <BlogItem className="w-full" imageURL={BlogImg4.src} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex items-center justify-center w-full ">
        <TextUnderline text="view all" className="capitalize mt-2" />
      </div>
    </div>
  );
};

export default Blog;
