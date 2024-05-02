import { cn } from "@/lib/utils";
import { useRouter, usePathname, useParams } from "next/navigation";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import { Heart } from "lucide-react";
import ButtonSelectSize from "@/components/ui/button-change-size";
import MyStyle from "./product-card.module.scss";
import { useEffect, useState } from "react";
import { Category, Product, ProductItem, Promotion } from "@/types";
import {
  getACategory,
  getAPromotion,
  getProductSize,
} from "@/actions/products/product-service";

interface Props {
  data: Product;
  className?: string;
  wishlist?: false;
  sizeBtn: number;
}

const ProductCard: React.FC<Props> = ({
  className,
  data,
  wishlist,
  sizeBtn,
}) => {
  if (!data) {
    return null;
  }
  const [promotionData, setPromotionData] = useState<Promotion | null>(null);
  const [productSize, setProductSize] = useState<string[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchPromotion = async () => {
      const respond = await getAPromotion(data.promotionId, setLoading);
      setPromotionData(respond);
    };
    fetchPromotion();
  }, []);

  useEffect(() => {
    const fetchProductSize = async () => {
      const respond = await getProductSize(data.id, setLoading);
      const sizeList = respond.map((item) => item.sizeValue);

      setProductSize([...sizeList]);
    };
    fetchProductSize();
  }, []);

  const handleClick = async () => {
    const res = await getACategory(data.categoryId, setLoading);
    router.push(`/${res.name}/${data.id}`);
  };

  useEffect(() => {}, []);

  const handleClickChild = (e: any) => {
    e.stopPropagation();
  };

  const [contentBtn, setContentBtn] = useState("quick add");
  const handleClickBtn = (e: any) => {
    e.stopPropagation();
    if (contentBtn === "quick add") {
      setContentBtn("select size");
    } else if (contentBtn === "select size") {
      setContentBtn("added");
      setTimeout(() => {
        setContentBtn("quick add");
      }, 300);
    }
  };
  const addToWishlist = () => {};

  const router = useRouter();

  return (
    <div
      className={cn(
        "w-full h-[540px] shadow-cardShadow relative flex flex-col bg-background cursor-pointer",
        className
      )}
    >
      <div
        onMouseLeave={() =>
          setTimeout(() => {
            setContentBtn("quick add");
          }, 500)
        }
        onClick={handleClick}
        style={{ backgroundImage: `url(${data.avatarURL})` }}
        className={cn(
          "w-full h-[90%] bg-center bg-cover bg-no-repeat relative flex items-end justify-center",
          MyStyle.style
        )}
      >
        {/* Button Card  */}
        <div
          onClick={handleClickBtn}
          className={cn(
            " uppercase mb-[8%] w-[96%] mx-auto rounded-md text-foreground",
            MyStyle.contentBtn
          )}
        >
          <div
            className={cn(
              "bg-white h-12 flex items-center justify-center uppercase rounded-md",
              contentBtn === "quick add" ? "" : "hidden",
              textStyle.textButton
            )}
          >
            quick add
          </div>
          <ButtonSelectSize
            sizeList={productSize}
            rec={sizeBtn}
            className={cn(
              "",
              contentBtn === "select size" ? "" : "hidden",
              textStyle.textButton
            )}
          ></ButtonSelectSize>
          <div
            className={cn(
              "bg-white h-12 flex items-center justify-center uppercase rounded-md",
              contentBtn === "added" ? "" : "hidden",
              textStyle.textButton
            )}
          >
            added
          </div>
        </div>
        {/* Button Card  */}
        {/* Add to wishlist and promotion  */}
        {sizeBtn && sizeBtn > 10 && (
          <>
            {!wishlist ? (
              <p
                onClick={handleClickChild}
                className={cn(
                  " capitalize absolute top-6 right-6",
                  styles.body,
                  MyStyle.addToWishlist
                )}
              >
                add to wishlist
              </p>
            ) : (
              <Heart className="absolute top-6 right-6 fill-primary" />
            )}

            {data.promotionId ? (
              <p
                className={cn(
                  " text-destructive absolute top-6 left-6",
                  styles.body
                )}
              >
                {promotionData?.discountRate} %
              </p>
            ) : null}
          </>
        )}
        {/* Add to wishlist  */}
      </div>
      <div className="w-full p-2">
        <p onClick={handleClick} className={cn(textStyle.h4, "capitalize")}>
          {data.name}
        </p>
        <div className="flex items-center gap-2">
          <p
            className={cn(
              textStyle.sm,
              promotionData ? "line-through text-muted-foreground" : undefined
            )}
          >
            $ {data.price}
          </p>
          {promotionData ? (
            <p className={cn(textStyle.sm, "text-destructive")}>
              $ {(data.price * (100 - promotionData?.discountRate)) / 100}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
