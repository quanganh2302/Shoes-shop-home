"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import ButtonSize from "@/components/ui/button-selected-size";
import ButtonUnSelected from "@/components/ui/button-unSelected";
import ButtonColor from "@/components/ui/button-selected-color";
import TextUnderline from "@/components/ui/text-underline";
import ProductCard2 from "@/components/blocks/product-card-2/product-cart-2,";
import TextHover from "@/components/ui/text-hover-underline";
import CheckBoxCustom from "@/components/blocks/check-box";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import ProductCard from "@/components/blocks/product-card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const formSchema = z.object({
  from: z.number().min(0),
});

const ProductsPage = () => {
  const [position, setPosition] = useState<number[]>([]);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: 0,
    },
  });

  return (
    <div className="font-futuraNormal mt-2">
      {/* Bread Crumb  */}
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
                <span className={cn(styles.base)}>Products</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center sm:justify-start justify-between pt-4 pb-8">
          <div className={cn("w-1/2 font-futuraHeavy text-[40px]")}>Men</div>
          <div className={cn("w-1/2 sm:text-start text-end", styles.h2)}>
            Shoes
          </div>
        </div>
      </div>
      {/* Bread Crumb  */}
      {/* Filter  */}
      <div className="container w-full flex items-center justify-between">
        <div className="">
          <p className={styles.sm}>Results: ( 182 ) </p>
          <div className="sm:flex hidden items-center justify-start gap-4 mt-1">
            <div className="flex items-center justify-start flex-wrap gap-2 ">
              <div className={cn(styles.hoverBtn2)}>
                <ButtonUnSelected>Nike</ButtonUnSelected>
              </div>
              <div className={cn(styles.hoverBtn2)}>
                <ButtonUnSelected>addidas</ButtonUnSelected>
              </div>
            </div>
            <TextUnderline text="clear all" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger
              className={cn(
                "font-futuraMedium text-base w-[200px] bg-primary-primary50 focus-visible:ring-0 focus:ring-0 border-none focus-visible:border-none focus-visible:ring-offset-0 focus:ring-offset-0 capitalize hover:bg-primary-primary200 sm:flex hidden"
              )}
            >
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent className="bg-primary-primary50">
              <SelectItem
                className="focus:bg-primary-primary200"
                value="featured"
              >
                Featured
              </SelectItem>
              <SelectItem
                className="focus:bg-primary-primary200"
                value="newest"
              >
                Newest
              </SelectItem>
              <SelectItem
                className="focus:bg-primary-primary200"
                value="pricesHL"
              >
                Price: Hight - Low
              </SelectItem>
              <SelectItem
                className="focus:bg-primary-primary200"
                value="pricesLH"
              >
                Price: Low - Hight
              </SelectItem>
              <SelectItem
                className="focus:bg-primary-primary200"
                value="discount"
              >
                Biggest discount
              </SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={() => setOpen(true)}
            className={cn(
              "font-futuraMedium text-base bg-primary-primary50 focus-visible:ring-0 focus:ring-0 border-none focus-visible:border-none focus-visible:ring-offset-0 focus:ring-offset-0 capitalize text-foreground hover:bg-primary-primary200"
            )}
          >
            Open Filter
          </Button>
        </div>
      </div>
      {/*Filter  */}
      {/* Products Area  */}
      <div className="w-full grid xl:grid-cols-4 grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 gap-x-2 mt-6 sm:gap-y-12 gap-y-8">
        <ProductCard className="w-full sm:h-[550px] h-[320px]" />
        <ProductCard className="w-full sm:h-[550px] h-[320px]" />
        <ProductCard className="w-full sm:h-[550px] h-[320px]" />
        <ProductCard className="w-full sm:h-[550px] h-[320px]" />
        <ProductCard className="w-full sm:h-[550px] h-[320px]" />
        <ProductCard className="w-full sm:h-[550px] h-[320px]" />
        <ProductCard className="w-full sm:h-[550px] h-[320px]" />
        <ProductCard className="w-full sm:h-[550px] h-[320px]" />
      </div>
      {/* Products Area  */}
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

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="p-0 sm:max-w-[480px] w-full overflow-auto no-scrollbar">
          <div className="mx-4 h-full relative flex flex-col justify-between">
            <div>
              <header className="bg-background sticky top-0 z-10 flex items-center justify-between py-6 border-b border-borderLine">
                <p className={cn(styles.h3, "")}>Filter</p>
                <X
                  onClick={() => setOpen(false)}
                  className={cn(
                    " cursor-pointer hover:text-primary rotate-close-btn",
                    styles.rotateCloseIcon
                  )}
                />
              </header>
              {/* Filter  */}
              <div className="flex flex-row flex-wrap gap-4 py-4 ">
                <div className="w-full mt-2 px-2 pb-4 ">
                  <Accordion type="multiple">
                    <AccordionItem
                      value="item-0"
                      className="border-b border-primary sm:hidden block"
                    >
                      <AccordionTrigger className="hover:no-underline ">
                        <TextHover text="filter" className={styles.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="123">
                          Featured
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Newest
                        </CheckBoxCustom>
                      </AccordionContent>{" "}
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Price: Hight - Low
                        </CheckBoxCustom>
                      </AccordionContent>{" "}
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Price: Low - Hight
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Biggest discount
                        </CheckBoxCustom>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-1"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="categories" className={styles.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="123">
                          All
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Loafers
                        </CheckBoxCustom>
                      </AccordionContent>{" "}
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Slip-On
                        </CheckBoxCustom>
                      </AccordionContent>{" "}
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Sneakers
                        </CheckBoxCustom>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="brands" className={styles.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          All
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Nike
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Adidas
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Bitis Hunter
                        </CheckBoxCustom>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="collections" className={styles.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          All
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Air Force
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Air MAX
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Blazer
                        </CheckBoxCustom>
                      </AccordionContent>
                      <AccordionContent>
                        <CheckBoxCustom className="w-full" id="122">
                          Galaxy
                        </CheckBoxCustom>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-4"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="sizes" className={styles.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-center justify-between w-full">
                          <h5 className="font-futuraBook text-base">
                            {" "}
                            <span>0</span> selected
                          </h5>
                          <p className={cn(styles.sm, styles.underlineTrans)}>
                            Reset
                          </p>
                        </div>
                      </AccordionContent>
                      <AccordionContent>
                        <div className="grid grid-cols-5 justify-items-center gap-y-2">
                          <ButtonSize>1</ButtonSize>
                          <ButtonSize>1</ButtonSize>
                          <ButtonSize>1</ButtonSize>
                          <ButtonSize>1</ButtonSize>
                          <ButtonSize>40.5</ButtonSize>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-5"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="colors" className={styles.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-center justify-between w-full">
                          <h5 className="font-futuraBook text-base">
                            {" "}
                            <span>0</span> selected
                          </h5>
                          <p className={cn(styles.sm, styles.underlineTrans)}>
                            Reset
                          </p>
                        </div>
                      </AccordionContent>
                      <AccordionContent>
                        <div className="grid grid-cols-5 justify-items-center gap-y-2">
                          <ButtonColor />
                          <ButtonColor />
                          <ButtonColor />
                          <ButtonColor />
                          <ButtonColor />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-6"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="Price range" className={styles.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-start justify-between w-full gap-2">
                          <h5 className="font-futuraNormal text-sm">
                            {" "}
                            The highest price is $<span>244.00</span>
                          </h5>
                          <p className={cn(styles.sm, styles.underlineTrans)}>
                            Reset
                          </p>
                        </div>
                      </AccordionContent>
                      <AccordionContent>
                        <div>
                          <Slider
                            className="h-10"
                            defaultValue={[33, 66]}
                            max={100}
                            step={1}
                            onValueChange={setPosition}
                          />
                        </div>

                        <Form {...form}>
                          <form
                            // onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                          >
                            <div className="items-center flex justify-between">
                              <FormField
                                control={form.control}
                                name="from"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={styles.base}>
                                      From
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        className={cn("m-0 w-[100px]")}
                                        placeholder="30"
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="from"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={styles.base}>
                                      To
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        className={cn("m-0 w-[100px]")}
                                        placeholder="30"
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </form>
                        </Form>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              {/* Filter  */}
            </div>

            <footer className="z-10 w-full sticky bottom-0 bg-background pb-2 before:absolute before:content-['']  before:-top-4 before:z-1 before:w-full before:h-4 before:bg-gradient-to-b from-[transparent] to-[background]">
              <div className="pt-8">
                <Button className="w-full">Clear Filter</Button>
              </div>
            </footer>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductsPage;
