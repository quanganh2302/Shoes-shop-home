import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import TitleSection from "../blocks/title-section";
import bg1 from "@/public/images/collection-1.jpeg";
import bg2 from "@/public/images/collection-2.jpeg";

import bg3 from "@/public/images/collection-3.jpeg";
import bg4 from "@/public/images/collection-4.jpg";
import { Button } from "../ui/button";

interface CollectionProps {
  className?: string;
}

const Collection: React.FC<CollectionProps> = ({ className }) => {
  const handleClickChild = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div className={cn("", className)}>
      <div className={styles.container}>
        <TitleSection className="" title="New collections" />
        <div className="grid sm:grid-rows-2 sm:grid-cols-4 grid-rows-1 grid-cols-1 sm:gap-3">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg1.src})`,
            }}
            className={cn(
              "bg-center bg-cover bg-no-repeat w-full sm:h-full h-[360px] sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-3 col-span-1 row-span-1 cursor-pointer flex items-center justify-center",
              styles.animationHover2
            )}
          >
            <p
              className={cn(
                textStyle.h1,
                "text-background uppercase text-center md:text-[3.75rem]"
              )}
            >
              New <br /> arrivals
            </p>
            <Button
              className={cn(
                "bg-background text-foreground uppercase absolute bottom-10 right-1/2 translate-x-1/2 duration-300 transition-all hover:text-background",
                textStyle.textButton
              )}
            >
              shop now
            </Button>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg2.src})`,
            }}
            className={cn(
              "bg-center bg-cover bg-no-repeat w-full xl:h-[300px] 2xl:h-[380px] sm:h-[240px] h-[360px] sm:col-start-3 sm:col-end-5 sm:row-start-1 sm:row-end-2 col-span-1 row-span-2 cursor-pointer flex items-center justify-center",
              styles.animationHover2
            )}
          >
            {" "}
            <p
              className={cn(
                textStyle.logo,
                "text-background uppercase text-center"
              )}
            >
              #NOW
              <br /> TRENDING
            </p>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg3.src})`,
            }}
            className={cn(
              "bg-center bg-cover bg-no-repeat w-full xl:h-[300px] 2xl:h-[380px] sm:h-[240px] h-[360px] sm:col-start-4 sm:col-end-5 sm:row-start-2 sm:row-end-3 col-span-1 row-span-3 cursor-pointer flex items-center justify-center",
              styles.animationHover2
            )}
          >
            {" "}
            <p
              className={cn(
                textStyle.logo,
                "text-background uppercase text-center"
              )}
            >
              CAMPAIGNS
            </p>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg4.src})`,
            }}
            className={cn(
              "bg-center bg-cover bg-no-repeat w-full xl:h-[300px] 2xl:h-[380px] sm:h-[240px] h-[360px] sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3 col-span-1 row-span-4 cursor-pointer flex items-center justify-center",
              styles.animationHover2
            )}
          >
            {" "}
            <p
              className={cn(
                textStyle.logo,
                "text-background uppercase text-center"
              )}
            >
              LOOKBOOK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
