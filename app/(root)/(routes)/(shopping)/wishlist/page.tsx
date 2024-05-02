"use client";

import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import Product from "@/public/images/air-jordan-1-high-method-of-make-womens-shoes-3.jpeg";
import productImg from "@/public/images/air-jordan-1-high-method-of-make-womens-shoes-3.jpeg";
interface WishListProps {
  className?: string;
}
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const WishList: React.FC<WishListProps> = ({ className }) => {
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
                <span className={cn(textStyle.base)}>Wishlist</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Bread Crumb */}
      <div className="flex sm:flex-row flex-col items-start sm:justify-start justify-between py-2 container sm:px-8 p-2 sm:h-screen">
        <div className={cn("sm:w-3/12 w-full ")}>
          <p className="font-futura md:text-[30px] text-[26px]">WISHLIST</p>
          <p>
            <span>login</span>
            to save items to your wishlist
          </p>
        </div>
        {/* Table content */}
        <div className="w-9/12 sm:block hidden">
          <Table className="hover:bg-transparent">
            <TableHeader>
              <TableRow>
                <TableHead className={cn(textStyle.h4, "text-foreground")}>
                  Product
                </TableHead>
                <TableHead className={cn(textStyle.h4, "text-foreground")}>
                  Color
                </TableHead>
                <TableHead className={cn(textStyle.h4, "text-foreground")}>
                  Size
                </TableHead>
                <TableHead className={cn(textStyle.h4, "text-foreground")}>
                  Price
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className=" border-b-borderLine">
                <TableCell className="flex items-center justify-start gap-4">
                  <img
                    src={productImg.src}
                    alt=""
                    className="object-cover object-center h-[160px]"
                  />
                  <p className={cn(textStyle.base, " capitalize")}>
                    Nike Air Force 1 07 (M)
                  </p>
                </TableCell>
                <TableCell className={cn(textStyle.base)}>Red</TableCell>
                <TableCell className={cn(textStyle.base)}>M</TableCell>
                <TableCell className={cn(textStyle.base)}>$250.00</TableCell>
                <TableCell>
                  <p
                    className={cn(
                      styles.underlineTrans,
                      textStyle.base,
                      "capitalize"
                    )}
                  >
                    remove
                  </p>
                </TableCell>
                <TableCell>
                  <Button
                    className={cn(
                      textStyle.base,
                      "capitalize hover:bg-primary hover:text-white"
                    )}
                    size={"sm"}
                    variant={"outline"}
                  >
                    add to card
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        {/* Table content */}
        {/* Table mobile */}
        <div className="w-full mt-8 sm:mt-12 sm:mb-20 mb-8 block sm:hidden">
          <div
            className={cn(
              "h-auto flex w-full gap-4  border-b border-b-borderLine pb-4"
            )}
          >
            <div
              style={{ backgroundImage: `url(${Product.src})` }}
              className="w-[8rem] h-[10rem] bg-cover bg-center bg-no-repeat"
            ></div>
            <div className="flex flex-col items-baseline justify-between grow">
              <div className="flex items-start justify-between w-full">
                <div className="">
                  <p className={cn("", textStyle.h4)}>Air jordan 1 high</p>
                  <p className={cn("text-base", textStyle.sm)}>Men’s Shoes</p>
                  <p className={cn("text-base pt-2", textStyle.sm)}>
                    Size: EU 44
                  </p>
                </div>

                <div className="text-end">
                  <p className={cn("", styles.body)}>$69</p>
                  <div
                    className={cn(
                      styles.body,
                      "flex items-center justify-end flex-wrap gap-1"
                    )}
                  >
                    <p className="line-through text-gray">$115</p>
                    <p className="text-destructive">
                      {" "}
                      {"["} - 40% {"]"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <span
                  className={cn(
                    "capitalize cursor-pointer underline-transform",
                    styles.body
                  )}
                >
                  remove
                </span>
                <Button
                  className={cn(
                    textStyle.base,
                    "capitalize hover:bg-primary hover:text-white"
                  )}
                  size={"sm"}
                  variant={"outline"}
                >
                  add to card
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Table mobile */}
      </div>
    </div>
  );
};

export default WishList;
