import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
interface BlogsProps {
  className?: string;
}
import BlogImg1 from "@/public/images/blog-1.jpeg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import BlogItem from "@/components/blocks/blog-item";
const Blogs: React.FC<BlogsProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      {/* Bread Crumb */}
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <span className={cn(styles.base, styles.underlineTrans2)}>
                  Home
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {" "}
                <span className={cn(styles.base)}>Blogs</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Bread Crumb */}
      {/* Content */}
      <div
        className={cn(
          "container grid grid-rows-2 grid-cols-4 gap-x-8 gap-y-16 mt-12"
        )}
      >
        {" "}
        <BlogItem imageURL={BlogImg1.src} />
        <BlogItem imageURL={BlogImg1.src} />
        <BlogItem imageURL={BlogImg1.src} />
        <BlogItem imageURL={BlogImg1.src} />
        <BlogItem imageURL={BlogImg1.src} />
        <BlogItem imageURL={BlogImg1.src} />
        <BlogItem imageURL={BlogImg1.src} />
        <BlogItem imageURL={BlogImg1.src} />
      </div>
      {/* Content */}
      {/* Pagination  */}
      <div className="container w-full flex items-center justify-end py-10 gap-10">
        <Select>
          <SelectTrigger
            className={cn(
              " capitalize z-50 w-[200px] bg-primary-primary50 focus-visible:ring-0 focus:ring-0 border-none focus-visible:border-none focus-visible:ring-offset-0 focus:ring-offset-0 font-futuraMedium text-base"
            )}
          >
            <SelectValue placeholder="Show 8" />
          </SelectTrigger>
          <SelectContent className="bg-primary-primary50">
            <SelectItem className="focus:bg-primary-primary200" value="8">
              Show 8
            </SelectItem>
            <SelectItem className="focus:bg-primary-primary200" value="10">
              Show 10
            </SelectItem>
            <SelectItem className="focus:bg-primary-primary200" value="12">
              Show 12
            </SelectItem>
          </SelectContent>
        </Select>
        <Pagination className="w-auto m-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={cn("hover:bg-primary-primary200", styles.base)}
                href="#"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={cn("hover:bg-primary-primary200", styles.base)}
                href="#"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={cn("hover:bg-primary-primary200", styles.base)}
                href="#"
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis
                className={cn(
                  "hover:bg-primary-primary200 rounded-md",
                  styles.base
                )}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                className={cn("hover:bg-primary-primary200", styles.base)}
                href="#"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      {/* Pagination  */}
    </div>
  );
};

export default Blogs;
