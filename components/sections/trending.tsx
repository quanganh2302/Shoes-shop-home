import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import TitleSection from "../blocks/title-section";
import TrendingImg1 from "@/public/images/trending-1.jpg";
import TrendingImg2 from "@/public/images/trending-2.jpg";
import TrendingImg3 from "@/public/images/trending-3.jpg";

interface TrendingProps {
  className?: string;
}

const Trending: React.FC<TrendingProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className={cn("", styles.container)}>
        <TitleSection title="Trending" className="pb-8" />
        <div className="w-full flex items-center justify-between flex-col sm:flex-row gap-2 px-4 md:p-0">
          <div className="lg:w-1/3 w-full ">
            <div
              style={{ backgroundImage: `url(${TrendingImg1.src})` }}
              className={cn(
                "w-full xl:h-[490px] sm:h-[280px] h-[380px] bg-cover bg-center cursor-pointer ",
                styles.animationHover1
              )}
            ></div>
            <div className="flex flex-col items-center justify-center mt-4 ">
              <p className={cn("capitalize mb-1", textStyle.h3)}>
                take it further
              </p>
              <p className={cn("uppercase",textStyle.base, styles.underlineTrans)}>
                Shop on running
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full ">
            <div
              style={{ backgroundImage: `url(${TrendingImg2.src})` }}
              className={cn(
                "w-full xl:h-[490px] sm:h-[280px] h-[380px] bg-cover bg-center cursor-pointer ",
                styles.animationHover1
              )}
            ></div>
            <div className="flex flex-col items-center justify-center mt-4 ">
              <p className={cn("capitalize mb-1", textStyle.h3)}>
                Spring Refresh
              </p>
              <p className={cn("uppercase",textStyle.base, styles.underlineTrans)}>
                SHOP SPRING WHITES
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div
              style={{ backgroundImage: `url(${TrendingImg3.src})` }}
              className={cn(
                "w-full xl:h-[490px] sm:h-[280px] h-[380px] bg-cover bg-center cursor-pointer ",
                styles.animationHover1
              )}
            ></div>
            <div className="flex flex-col items-center justify-center mt-4 ">
              <p className={cn("capitalize mb-1", textStyle.h3)}>
                Imagine Your World
              </p>
              <p className={cn("uppercase",textStyle.base, styles.underlineTrans)}>SHOP KID</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
