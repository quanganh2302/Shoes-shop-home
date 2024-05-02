"use client";
import { useEffect, useState } from "react";
import { useRouter, notFound } from "next/navigation";
import {
  Category,
  Collection,
  Color,
  Product,
  Size,
  Brand,
  Style,
  ProductItem,
  ProductCollection,
  Promotion,
} from "@/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import textStyle from "@/lib/styles";
import ButtonSize from "@/components/ui/button-selected-size";
import ButtonUnSelected from "@/components/ui/button-unSelected";
import ButtonColor from "@/components/ui/button-selected-color";
import TextUnderline from "@/components/ui/text-underline";
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
import ProductCard from "@/components/blocks/product-card/product-card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  getBrand,
  getCategories,
  getCollection,
  getColor,
  getProductCollection,
  getProductItems,
  getProducts,
  getProductsByCategory,
  getPromotions,
  getSize,
  getStyle,
} from "@/actions/products/product-service";

const formSchema = z.object({
  from: z.number().min(0),
  to: z.number().max(244),
});

const ProductsPage = ({ params }: { params: { categoryName: string } }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  // State API
  const [promotions, setPromotions] = useState<Promotion[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [collections, setCollections] = useState<Collection[] | null>(null);
  const [productCollection, setProductCollection] = useState<
    ProductCollection[] | null
  >(null);

  const [sizes, setSizes] = useState<Size[] | null>(null);
  const [colors, setColors] = useState<Color[] | null>(null);
  const [brands, setBrands] = useState<Brand[] | null>(null);
  const [types, setTypes] = useState<Style[] | null>(null);
  const [productItems, setProductItem] = useState<ProductItem[] | null>(null);

  const [paramsIsValid, setParamsIsValid] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productFilter, setProductFilter] = useState<Product[] | null>(null);

  //State filter
  const [brandFilter, setBrandFilter] = useState<Brand[]>([]);
  const [typeFilter, setTypeFilter] = useState<Style[]>([]);
  const [colorFilter, setColorFilter] = useState<Color[]>([]);
  const [collectionFilter, setCollectionFilter] = useState<Collection[]>([]);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [productsPerPage, setProductsPerPage] = useState<number>(8);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);

  const minRange = 0;
  const maxRange = 405;
  const minDefault = 0;
  const maxDefault = 300;
  const [rangePrice, setRangePrice] = useState<number[]>([
    minDefault,
    maxDefault,
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: minDefault,
      to: maxDefault,
    },
  });

  //Check params is valid

  useEffect(() => {
    setEndIndex(productsPerPage);
  }, [productsPerPage]);

  useEffect(() => {
    const categoryIsValid = async () => {
      const res = await getCategories(setLoading);
      setCategories(res);
      const isValid = res.findIndex(
        (category) => category.name === params.categoryName
      );
      if (isValid === -1) {
        setParamsIsValid(false);
      }
    };
    categoryIsValid();
  }, []);

  // Fetch Data
  //Prioritize Product data

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProductsByCategory(params.categoryName, setLoading);
      setProducts(res);
      setProductFilter(res);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProductCollection = async () => {
      const res = await getProductCollection(setLoading);
      setProductCollection(res);
    };
    fetchProductCollection();

    const fetchProductItems = async () => {
      const res = await getProductItems(setLoading);
      setProductItem(res);
    };
    fetchProductItems();

    const fetchSizes = async () => {
      const res = await getSize(setLoading);
      setSizes(res);
      // setSizeFilter(res);
    };
    fetchSizes();
    const fetchColors = async () => {
      const res = await getColor(setLoading);
      setColors(res);
      // setCollectionFilter(res);
    };
    fetchColors();
    const fetchBrands = async () => {
      const res = await getBrand(setLoading);
      setBrands(res);
      // setBrandFilter(res);
    };
    fetchBrands();
    const fetchTypes = async () => {
      const res = await getStyle(setLoading);
      setTypes(res);
      // setTypeFilter(res);
    };
    fetchTypes();
    const fetchCollections = async () => {
      const res = await getCollection(setLoading);
      setCollections(res);
      // setCollectionFilter(res);
    };
    fetchCollections();
    return setParamsIsValid(true);
  }, []);

  useEffect(() => {
    const fetchPromotion = async () => {
      const res = await getPromotions(setLoading);
      setPromotions(res);
    };
    fetchPromotion();
  }, []);

  // useEffect(() => {
  //   const findPromotion = (promotionId: string) => {
  //     if (!promotions) return;
  //     return promotions.find((promotion) => promotion.id === promotionId);
  //   };
  //   const productList = products?.forEach((product) => {
  //     let promotion = findPromotion(product.promotionId);
  //     if (promotion) {
  //       product.price = (product.price * (100 - promotion.discountRate)) / 100;
  //     }
  //   });
  //   // setProductFilter(productList);
  //   console.log(productList);
  // }, []);

  if (!paramsIsValid) {
    notFound();
  }

  if (
    !products ||
    !categories ||
    !colors ||
    !brands ||
    !types ||
    !sizes ||
    !collections
  ) {
    return null;
  }

  const between = (min: number, max: number, value: number) => {
    return value >= min && value <= max;
  };

  const findPromotionById = (promotionId: string) => {
    if (!promotions) return;
    return promotions.find((promotion) => promotion.id === promotionId);
  };

  const sortProduct = (sort: string) => {
    if (!productFilter) return;

    let productList: Product[] = [];
    if (sort === "featured") {
      productList = [...productFilter].filter((item) => item.isFeatured);
      productList.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    if (sort === "newest") {
      productList = [...productFilter];
      productList.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    if (sort === "priceHL") {
      // productList = [...productFilter];
      // productList.sort((a, b) => b.price - a.price);
      productList = [...productFilter].map((product) => {
        const promotion = findPromotionById(product.promotionId);
        if (promotion) {
          product = {
            ...product,
            newPrice: (product.price * (100 - promotion.discountRate)) / 100,
          };
        } else {
          product = {
            ...product,
            newPrice: product.price,
          };
        }
        return product;
      });
      productList.sort((a, b) => b.newPrice - a.newPrice);
    }
    if (sort === "priceLH") {
      productList = [...productFilter].map((product) => {
        const promotion = findPromotionById(product.promotionId);
        if (promotion) {
          product = {
            ...product,
            newPrice: (product.price * (100 - promotion.discountRate)) / 100,
          };
        } else {
          product = {
            ...product,
            newPrice: product.price,
          };
        }
        return product;
      });
      productList.sort((a, b) => a.newPrice - b.newPrice);
    }
    if (sort === "discount") {
      productList = [...productFilter];
      productList.sort((a, b) => {
        const promotionA = findPromotionById(a.promotionId);
        const promotionB = findPromotionById(b.promotionId);
        // Check if either promotion is missing
        if (!promotionA && !promotionB) {
          // If both products have no promotions, sort them by their original order
          return 0;
        } else if (!promotionA) {
          // If product A has no promotion, move it to the end
          return 1;
        } else if (!promotionB) {
          // If product B has no promotion, move it to the end
          return -1;
        } else {
          // Both products have promotions, sort by discount
          return promotionB.discountRate - promotionA.discountRate;
        }
      });
    }
    setProductFilter(productList);
  };

  const filterProductPrice = () => {
    if (!productFilter) return null;
    return productFilter.filter((product) =>
      between(rangePrice[0], rangePrice[1], product.price)
    );
  };

  const renderProduct = () => {
    if (!productFilter) return null;

    const selectPriceRange = filterProductPrice();
    const productDisPlay = selectPriceRange?.slice(startIndex, endIndex);
    return productDisPlay?.map((product) => (
      <ProductCard
        key={product.id}
        sizeBtn={12}
        data={product}
        className="w-full sm:h-[550px] h-[320px]"
      />
    ));
  };

  //Logic Filter
  // If products in a field will increase number of product
  // If products in a different field will decrease

  //Filter Product
  //Input : prop filter , filter key of field need to filtering
  //OutPut: Product list
  const handleProductFilter = (
    productList: Product[],
    currentFilter: any[],
    filterKey: keyof Product
  ) => {
    if (currentFilter.length === 0) {
      return productList;
    }

    const newArr: Product[] | null = [];

    for (let i = 0; i < currentFilter.length; i++) {
      const newProducts = productList?.filter(
        (product) => product[filterKey] === currentFilter[i].id
      );

      if (!newProducts) {
        continue;
      }
      newArr.push(...newProducts);
    }
    return newArr;
  };

  // Handle filter last version product list
  const handleFilterProduct = (currentFilter: any[], filterKey: string) => {
    const productAfterBrandFiltering = handleProductFilter(
      products,
      filterKey === "brandId" ? currentFilter : brandFilter,
      "brandId"
    );
    const productAfterTyPeFiltering = handleProductFilter(
      productAfterBrandFiltering,
      filterKey === "styleId" ? currentFilter : typeFilter,
      "styleId"
    );
    const productAfterColorFiltering = handleProductFilter(
      productAfterTyPeFiltering,
      filterKey === "colorId" ? currentFilter : colorFilter,
      "colorId"
    );
    const productAfterSizeFiltering = handleSizeFilter(
      productAfterColorFiltering,
      filterKey === "sizeId" ? currentFilter : sizeFilter
    );
    const productAfterCollectionFiltering = handleCollectionFilter(
      productAfterSizeFiltering,
      filterKey === "collectionId" ? currentFilter : collectionFilter
    );
    setProductFilter([...productAfterCollectionFiltering]);
  };

  const filterTypeIsExist = (type: Style) => {
    const index = typeFilter?.findIndex((style) => style.name === type.name);
    if (index !== -1) {
      const newArr = [...typeFilter];
      newArr.splice(index, 1);
      setTypeFilter(newArr);
      handleFilterProduct(newArr, "styleId");
    } else {
      const newArr = [...typeFilter, type];
      setTypeFilter(newArr);
      handleFilterProduct(newArr, "styleId");
    }
  };

  const selectAllTypesFilter = () => {
    setTypeFilter([]);
    handleFilterProduct([], "styleId");
  };
  //Handle Filter Type

  //Handle Filter Brand

  const filterBrandIsExist = (brand: Brand) => {
    const index = brandFilter?.findIndex((item) => item.name === brand.name);
    if (index !== -1) {
      const newArr = [...brandFilter];
      newArr.splice(index, 1);
      setBrandFilter(newArr);
      handleFilterProduct(newArr, "brandId");
    } else {
      const newArr = [...brandFilter, brand];
      setBrandFilter(newArr);
      handleFilterProduct(newArr, "brandId");
    }
  };

  const selectAllBrandsFilter = (brands: Brand[]) => {
    setBrandFilter([]);
    handleFilterProduct([], "brandId");
  };
  //Handle Filter Brand

  //Handle Filter Color

  const filterColorIsExist = (color: Color) => {
    const index = colorFilter?.findIndex((item) => item.name === color.name);
    if (index !== -1) {
      const newArr = [...colorFilter];
      newArr.splice(index, 1);
      setColorFilter(newArr);
      handleFilterProduct(newArr, "colorId");
    } else {
      const newArr = [...colorFilter, color];
      setColorFilter(newArr);
      handleFilterProduct(newArr, "colorId");
    }
  };

  const selectAllColorFilter = () => {
    setColorFilter([]);
    handleFilterProduct([], "colorId");
  };

  //Handle Filter Color

  //Handle Filter Size
  // Input : Prop filter of size (Array)
  // Output : Product list (Product[])
  const handleSizeFilter = (currentFilter: Product[], sizeFilter: string[]) => {
    if (sizeFilter?.length === 0) return currentFilter;
    if (!productItems) return currentFilter;
    const filter: Product[] = [];
    sizeFilter.map((item) => {
      const productSize = productItems.filter(
        (size) => size.sizeValue === item
      );
      if (productSize.length !== 0) {
        for (let i = 0; i < productSize.length; i++) {
          const newProducts = currentFilter?.filter(
            (product) => product.id === productSize[i].productId
          );

          if (!newProducts) {
            continue;
          }
          filter.push(...newProducts);
        }
      }
    });
    const filterUnique: Product[] = Array.from(
      new Set(filter.map((item) => item.id))
    ).map((id) => filter.find((product) => product.id === id)!);
    return filterUnique;
  };

  const filterSizeIsExist = (value: string) => {
    const index = sizeFilter.findIndex((item) => item === value);
    if (index !== -1) {
      // existed
      const newArr = [...sizeFilter];
      newArr.splice(index, 1);

      handleFilterProduct(newArr, "sizeId");
      setSizeFilter(newArr);
    } else {
      //not existed
      const newArr = [...sizeFilter, value];

      handleFilterProduct(newArr, "sizeId");
      setSizeFilter(newArr);
    }
  };
  const resetSizeFilter = () => {
    setSizeFilter([]);
    handleFilterProduct([], "sizeId");
  };

  //Handle Filter Size

  //Handle Filter Collection
  const handleCollectionFilter = (
    currentFilter: Product[],
    collectionFilter: Collection[]
  ) => {
    if (collectionFilter?.length === 0) return currentFilter;
    if (!productCollection) return currentFilter;
    const filter: Product[] = [];
    collectionFilter.map((item) => {
      const ProductCollection = productCollection.filter(
        (collection) => collection.collectionId === item.id
      );
      if (ProductCollection.length !== 0) {
        for (let i = 0; i < ProductCollection.length; i++) {
          const newProducts = currentFilter?.filter(
            (product) => product.id === ProductCollection[i].productId
          );

          if (!newProducts) {
            continue;
          }
          filter.push(...newProducts);
        }
      }
    });
    // const filterUnique: Product[] = Array.from(
    //   new Set(filter.map((item) => item.id))
    // ).map((id) => filter.find((product) => product.id === id)!);
    // return filterUnique;
    return filter;
  };

  const filterCollectionIsExist = (collection: Collection) => {
    if (!productCollection) {
      return;
    }
    const index = collectionFilter.findIndex(
      (item) => item.id === collection.id
    );
    if (index !== -1) {
      // existed
      const prevFilter = [...collectionFilter];
      prevFilter.splice(index, 1);
      handleFilterProduct(prevFilter, "collectionId");
      setCollectionFilter(prevFilter);
    } else {
      //have not been existed
      const prevFilter = [...collectionFilter, collection];
      handleFilterProduct(prevFilter, "collectionId");

      setCollectionFilter(prevFilter);
    }
  };

  const selectAllCollectionsFilter = (collection: Collection[]) => {
    //Remove all
    setCollectionFilter([]);
    handleFilterProduct([], "collectionId");
  };
  //Handle Filter Collection

  const renderSize = () => {
    if (!productItems) {
      return null;
    }
    const renderSizes = [];
    for (let i = 30; i < 43; i = i + 0.5) {
      renderSizes.push(
        <ButtonSize
          isSelected={sizeFilter.includes(i.toString())}
          onClickOut={() => filterSizeIsExist(i.toString())}
          key={i}
        >
          {i.toString()}
        </ButtonSize>
      );
    }
    return renderSizes;
  };

  const removeAllFilter = () => {
    setTypeFilter([]);
    setBrandFilter([]);
    setCollectionFilter([]);
    setColorFilter([]);
    setSizeFilter([]);
    setRangePrice([minDefault, maxDefault]);
    setProductFilter(products);
  };

  return (
    <div className="font-futura mt-2">
      {/* Bread Crumb  */}
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
                <span className={cn(textStyle.base, "capitalize")}>
                  {params.categoryName}
                </span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center sm:justify-start justify-between pt-4 pb-8">
          <div className={cn("w-1/2 font-futura text-[40px]")}>Men</div>
          <div
            className={cn(
              "w-1/2 sm:text-start text-end capitalize",
              textStyle.h2
            )}
          >
            {params.categoryName}
          </div>
        </div>
      </div>
      {/* Bread Crumb  */}
      {/* Filter  */}
      <div className="container w-full flex items-center justify-between">
        <div className="w-1/2">
          <p className={textStyle.sm}>
            Results: ( {filterProductPrice()?.length} ){" "}
          </p>
          <div className="sm:flex hidden items-center justify-start gap-4 mt-1 ">
            <div className="flex items-center justify-start flex-wrap gap-3 ">
              {typeFilter.length > 0 ? (
                <div className="flex justify-center items-center gap-1">
                  <p className={cn("mr-1")}>Styles : </p>
                  {typeFilter.map((item) => (
                    <div key={item.id} className={cn(styles.hoverBtn2)}>
                      <ButtonUnSelected onClick={() => filterTypeIsExist(item)}>
                        {item.name}
                      </ButtonUnSelected>
                    </div>
                  ))}
                </div>
              ) : null}
              {brandFilter.length > 0 ? (
                <div className="flex justify-center items-center gap-1">
                  <p className={cn("mr-1")}>Brands : </p>
                  {brandFilter.map((item) => (
                    <div key={item.id} className={cn(styles.hoverBtn2)}>
                      <ButtonUnSelected
                        onClick={() => filterBrandIsExist(item)}
                      >
                        {item.name}
                      </ButtonUnSelected>
                    </div>
                  ))}
                </div>
              ) : null}
              {collectionFilter.length > 0 ? (
                <div className="flex justify-center items-center gap-1">
                  <p className={cn("mr-1")}>Collection : </p>
                  {collectionFilter.map((item) => (
                    <div key={item.id} className={cn(styles.hoverBtn2)}>
                      <ButtonUnSelected
                        onClick={() => filterCollectionIsExist(item)}
                      >
                        {item.name}
                      </ButtonUnSelected>
                    </div>
                  ))}
                </div>
              ) : null}
              {colorFilter.length > 0 ? (
                <div className="flex justify-center items-center gap-1">
                  <p className={cn("mr-1")}>Color : </p>
                  {colorFilter.map((item) => (
                    <div key={item.id} className={cn(styles.hoverBtn2)}>
                      <ButtonUnSelected
                        onClick={() => filterColorIsExist(item)}
                      >
                        {item.name}
                      </ButtonUnSelected>
                    </div>
                  ))}
                </div>
              ) : null}
              {sizeFilter.length > 0 ? (
                <div className="flex justify-center items-center gap-1">
                  <p className={cn("mr-1")}>Size : </p>
                  {sizeFilter.map((item) => (
                    <div key={item} className={cn(styles.hoverBtn2)}>
                      <ButtonUnSelected onClick={() => filterSizeIsExist(item)}>
                        {item}
                      </ButtonUnSelected>
                    </div>
                  ))}
                </div>
              ) : null}
              {typeFilter.length > 0 ||
              brandFilter.length > 0 ||
              collectionFilter.length > 0 ||
              colorFilter.length > 0 ||
              sizeFilter.length > 0 ? (
                <TextUnderline
                  className={cn(
                    styles.underlineTrans3,
                    textStyle.navLink,
                    "text-destructive ml-4"
                  )}
                  onClick={removeAllFilter}
                  text="clear all"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select onValueChange={(value) => sortProduct(value)}>
            <SelectTrigger
              className={cn(
                "font-futura text-base w-[200px] bg-primary-primary50 focus-visible:ring-0 focus:ring-0 border-none focus-visible:border-none focus-visible:ring-offset-0 focus:ring-offset-0 capitalize hover:bg-primary-primary200 sm:flex hidden"
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
                value="priceHL"
              >
                Price: Hight - Low
              </SelectItem>
              <SelectItem
                className="focus:bg-primary-primary200"
                value="priceLH"
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
              "font-futura text-base bg-primary-primary50 focus-visible:ring-0 focus:ring-0 border-none focus-visible:border-none focus-visible:ring-offset-0 focus:ring-offset-0 capitalize text-foreground hover:bg-primary-primary200"
            )}
          >
            Open Filter
          </Button>
        </div>
      </div>
      {/*Filter  */}
      {/* Products Area  */}
      <div className="xl:container w-full grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-x-2 mt-6 sm:gap-y-12 gap-y-8">
        {renderProduct()}
      </div>
      {/* Products Area  */}
      {/* Pagination  */}
      <div className="container w-full flex items-center justify-end py-10 gap-10">
        <Select
          onValueChange={(value) => setProductsPerPage(parseInt(value, 10))}
        >
          <SelectTrigger
            className={cn(
              " capitalize z-50 w-[200px] bg-primary-primary50 focus-visible:ring-0 focus:ring-0 border-none focus-visible:border-none focus-visible:ring-offset-0 focus:ring-offset-0 font-futura text-base"
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
                className={cn(
                  "hover:bg-primary-primary200",
                  textStyle.base,
                  startIndex === 0
                    ? "pointer-events-none opacity-50"
                    : undefined
                )}
                href="#"
                onClick={() => {
                  setStartIndex(startIndex - productsPerPage);
                  setEndIndex(endIndex - productsPerPage);
                }}
              />
            </PaginationItem>
            {/* <PaginationItem>
              <PaginationLink
                className={cn("hover:bg-primary-primary200", textStyle.base)}
                href="#"
                onClick={() => {
                  setStartIndex(0);
                  setEndIndex(productsPerPage);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={cn("hover:bg-primary-primary200", textStyle.base)}
                href="#"
                onClick={() => {
                  setStartIndex(productsPerPage);
                  setEndIndex(productsPerPage * 2);
                }}
              >
                2
              </PaginationLink>
            </PaginationItem> */}
            {/* <PaginationItem>
              <PaginationEllipsis
                className={cn(
                  "hover:bg-primary-primary200 rounded-md",
                  textStyle.base
                )}
              />
            </PaginationItem> */}
            <PaginationItem>
              <PaginationNext
                className={cn(
                  "hover:bg-primary-primary200",
                  textStyle.base,
                  startIndex === 50
                    ? "pointer-events-none opacity-50"
                    : undefined
                )}
                href="#"
                onClick={() => {
                  setStartIndex(startIndex + productsPerPage);
                  setEndIndex(endIndex + productsPerPage);
                }}
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
                <p className={cn(textStyle.h3, "")}>Filter</p>
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
                        <TextHover text="filter" className={textStyle.h4} />
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
                        <TextHover text="types" className={textStyle.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <CheckBoxCustom
                          checked={typeFilter.length === 0}
                          onCheckedChange={() => selectAllTypesFilter()}
                          className="w-full"
                          id="all-type"
                        >
                          All
                        </CheckBoxCustom>
                      </AccordionContent>
                      {types
                        ? types.map((item) => (
                            <AccordionContent key={item.id}>
                              <CheckBoxCustom
                                checked={typeFilter.some(
                                  (style) => style.id === item.id
                                )}
                                onCheckedChange={() => filterTypeIsExist(item)}
                                className="w-full capitalize"
                                id={item.id}
                              >
                                {item.name}
                              </CheckBoxCustom>
                            </AccordionContent>
                          ))
                        : null}
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="brands" className={textStyle.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <CheckBoxCustom
                          checked={brandFilter.length === 0}
                          onCheckedChange={() => selectAllBrandsFilter(brands)}
                          className="w-full"
                          id="all-brands"
                        >
                          All
                        </CheckBoxCustom>
                      </AccordionContent>
                      {brands
                        ? brands.map((item) => (
                            <AccordionContent key={item.id}>
                              <CheckBoxCustom
                                checked={brandFilter.some(
                                  (brand) => brand.id === item.id
                                )}
                                onCheckedChange={() => filterBrandIsExist(item)}
                                className="w-full capitalize"
                                id={item.id}
                              >
                                {item.name}
                              </CheckBoxCustom>
                            </AccordionContent>
                          ))
                        : null}
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover
                          text="collections"
                          className={textStyle.h4}
                        />
                      </AccordionTrigger>
                      <AccordionContent>
                        <CheckBoxCustom
                          checked={collectionFilter.length === 0}
                          onCheckedChange={() =>
                            selectAllCollectionsFilter(collections)
                          }
                          className="w-full"
                          id="all-collection"
                        >
                          All
                        </CheckBoxCustom>
                      </AccordionContent>
                      {collections
                        ? collections.map((item) => (
                            <AccordionContent key={item.id}>
                              <CheckBoxCustom
                                checked={collectionFilter.some(
                                  (collection) => collection.id === item.id
                                )}
                                onCheckedChange={() =>
                                  filterCollectionIsExist(item)
                                }
                                className="w-full capitalize"
                                id={item.id}
                              >
                                {item.name}
                              </CheckBoxCustom>
                            </AccordionContent>
                          ))
                        : null}
                    </AccordionItem>
                    <AccordionItem
                      value="item-4"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="sizes" className={textStyle.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-center justify-between w-full">
                          <h5 className="font-futuraBook text-base">
                            {" "}
                            <span>{sizeFilter.length}</span> selected
                          </h5>
                          <p
                            className={cn(textStyle.sm, styles.underlineTrans)}
                            onClick={resetSizeFilter}
                          >
                            Reset
                          </p>
                        </div>
                      </AccordionContent>
                      <AccordionContent>
                        <div className="grid grid-cols-5 justify-items-center gap-y-2">
                          {renderSize()}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-5"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover text="colors" className={textStyle.h4} />
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-center justify-between w-full">
                          <h5 className="font-futuraBook text-base">
                            {" "}
                            <span>{colorFilter.length}</span> selected
                          </h5>
                          <p
                            onClick={selectAllColorFilter}
                            className={cn(textStyle.sm, styles.underlineTrans)}
                          >
                            Reset
                          </p>
                        </div>
                      </AccordionContent>
                      <AccordionContent>
                        <div className="grid grid-cols-5 justify-items-center gap-y-2">
                          {colors.map((item) => (
                            <ButtonColor
                              status={colorFilter.some(
                                (color) => color.id === item.id
                              )}
                              onClickOut={() => filterColorIsExist(item)}
                              key={item.id}
                              value={item.value}
                            />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-6"
                      className="border-b border-primary"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <TextHover
                          text="Price range"
                          className={textStyle.h4}
                        />
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-start justify-between w-full gap-2">
                          <h5 className="font-futura text-sm">
                            {" "}
                            The highest price is $<span>{maxRange}</span>
                          </h5>
                          <p
                            className={cn(textStyle.sm, styles.underlineTrans)}
                            onClick={() =>
                              setRangePrice([minDefault, maxDefault])
                            }
                          >
                            Reset
                          </p>
                        </div>
                      </AccordionContent>
                      <AccordionContent>
                        <div>
                          <Slider
                            min={minRange}
                            className="h-10"
                            defaultValue={[minDefault, maxDefault]}
                            value={rangePrice}
                            max={maxRange}
                            step={1}
                            onValueChange={setRangePrice}
                          />
                        </div>

                        <Form {...form}>
                          <form className="space-y-8">
                            <div className="items-center flex justify-between">
                              <FormField
                                control={form.control}
                                name="from"
                                render={({ field }) => (
                                  <FormItem className="relative ">
                                    <FormLabel className={textStyle.base}>
                                      From
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        pattern="[0-9]"
                                        className={cn(
                                          "m-0 w-[100px]",
                                          textStyle.base
                                        )}
                                        onChangeCapture={(e) => {
                                          const newValue =
                                            e.currentTarget.value;
                                          const parsedValue =
                                            newValue.trim() !== ""
                                              ? parseInt(newValue, 10)
                                              : 0;
                                          const min = [...rangePrice];
                                          min[0] = parsedValue;
                                          setRangePrice(min);
                                        }}
                                        {...field}
                                        value={rangePrice[0]}
                                      />
                                    </FormControl>
                                    <p
                                      className={cn(
                                        "absolute top-1/2 right-3",
                                        textStyle.base
                                      )}
                                    >
                                      $
                                    </p>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="to"
                                render={({ field }) => (
                                  <FormItem className="relative">
                                    <FormLabel className={textStyle.base}>
                                      To
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        className={cn("m-0 w-[100px]")}
                                        {...field}
                                        onChange={(e) => {
                                          const newValue =
                                            e.currentTarget.value;
                                          const parsedValue =
                                            newValue.trim() !== ""
                                              ? parseInt(newValue, 10)
                                              : 0;
                                          const max = [...rangePrice];
                                          max[1] = parsedValue;
                                          setRangePrice(max);
                                        }}
                                        value={rangePrice[1]}
                                      />
                                    </FormControl>{" "}
                                    <p
                                      className={cn(
                                        "absolute top-1/2 right-3",
                                        textStyle.base
                                      )}
                                    >
                                      $
                                    </p>
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
                <Button onClick={removeAllFilter} className="w-full">
                  Clear Filter
                </Button>
              </div>
            </footer>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductsPage;
