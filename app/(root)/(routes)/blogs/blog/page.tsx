import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import BlogImg1 from "@/public/images/blog-page-1.jpeg";
import BlogImg2 from "@/public/images/blog-page-2.jpeg";
import BlogImg3 from "@/public/images/blog-page-3.jpeg";

import RecentImg1 from "@/public/images/blog-1.jpeg";
import RecentImg2 from "@/public/images/blog-2.jpg";
import RecentImg3 from "@/public/images/blog-3.jpeg";
import RecentImg4 from "@/public/images/blog-4.jpeg";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ButtonUnSelected from "@/components/ui/button-unSelected";
import { ArrowLeft, ArrowRight } from "lucide-react";
import InputSearch from "@/components/ui/input-search";
import RecentPost from "@/components/blocks/recent-post";
import InputSend from "@/components/ui/input-send";
interface BlogPageProps {
  className?: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      {/* Bread Crumb */}
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <span className={cn(textStyle.base, styles.underlineTrans2)}>
                  Home
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {" "}
                <span className={cn(textStyle.base)}>Blogs</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Bread Crumb */}
      <div
        className={cn(
          "container flex sm:flex-row flex-col-reverse items-start justify-center sm:gap-16 gap-12",
          styles.layoutMargin
        )}
      >
        <div className="sm:w-5/12 w-full">
          <InputSearch
            className="bg-transparent border-primary border"
            placeholder="What are you looking for?"
          />
          <h3 className={cn(textStyle.h3, "sm:mt-10 mt-8")}>Recent posts</h3>
          <div className="flex items-start justify-between sm:gap-9 gap-2 flex-col mt-4">
            <RecentPost
              imageURL={RecentImg1.src}
              time="JUL 24, 2023"
              content="What would your shoes say..."
            />
            <RecentPost
              imageURL={RecentImg2.src}
              time="JUL 24, 2023"
              content="What would your shoes say..."
            />
            <RecentPost
              imageURL={RecentImg3.src}
              time="JUL 24, 2023"
              content="What would your shoes say..."
            />
            <RecentPost
              imageURL={RecentImg4.src}
              time="JUL 24, 2023"
              content="What would your shoes say..."
            />
          </div>
          <h4 className={cn(textStyle.h4, "sm:mt-10 mt-8")}>Tags</h4>
          <div className="flex items-center justify-start w-full flex-wrap gap-2 mt-4">
            <ButtonUnSelected>Nike</ButtonUnSelected>
            <ButtonUnSelected>Jordan</ButtonUnSelected>
          </div>
          <h4 className={cn(textStyle.h4, "sm:mt-10 mt-8")}>Newsletter</h4>

          <InputSend
            placeholder="Enter your email"
            className="bg-transparent border-primary border mt-4"
          />
        </div>
        <div className="sm:w-7/12 w-full">
          <img
            src={BlogImg1.src}
            alt="blog image 1"
            className="object-cover h-[400px] w-full"
          />
          <p className={cn(textStyle.sm, "text-gray mt-4")}>
            Jul 24, 2023 /By Andrew johns/ 0 comments
          </p>
          <h4 className={cn(textStyle.h4, "mt-4")}>
            What would your shoes say about the things.
          </h4>
          <p className={cn(textStyle.base, " mt-4")}>
            As part of our mission create space for women to express their
            sensuality without shame fear or the patriarchal gaze we’re asking
            women to invite us into their most intimate space. Fashion you can
            buy, but style you possess. The key to style is learning who you
            are, which takes years. There's no how-to road map to style.
          </p>
          <p className={cn(textStyle.base, " mt-4")}>
            Style is the only thing you can’t buy. It’s not in a shopping bag, a
            label, or a price tag. It’s something reflected from our soul to the
            outside world - an emotion. I thank you for the recognition of the
            brilliance.
          </p>
          <div className="flex items-center justify-between mt-4 w-full">
            <img
              src={BlogImg2.src}
              alt=""
              className="object-cover object-center w-[48%] "
            />
            <img
              src={BlogImg3.src}
              alt=""
              className="object-cover object-center w-[48%] "
            />
          </div>
          <p className={cn(textStyle.base, " mt-4")}>
            Fashion is what you’re offered four times a year by designers. And
            style is what you choose. I think there is beauty in everything.
            What ‘normal’ people would perceive as ugly, I can usually see
            something of beauty in it. Shoes transform your body language and
            attitude. They lift you physically and emotionally.
          </p>
          <div className="flex items-center justify-start w-full flex-wrap gap-2 mt-4">
            <ButtonUnSelected>Nike</ButtonUnSelected>
            <ButtonUnSelected>Jordan</ButtonUnSelected>
          </div>
          <div className="mt-8 flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-2 pr-4 rounded-md cursor-pointer">
              <ArrowLeft className="stroke-1" />
              <p
                className={cn(
                  textStyle.textButton,
                  styles.underlineTrans2,
                  "uppercase"
                )}
              >
                Prev post
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pl-4 rounded-md cursor-pointer">
              <p
                className={cn(
                  textStyle.textButton,
                  styles.underlineTrans2,
                  "uppercase"
                )}
              >
                Prev post
              </p>
              <ArrowRight className="stroke-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
