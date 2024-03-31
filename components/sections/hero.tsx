import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/images/hero-image.jpeg";
interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImage.src})`,
      }}
      className={cn("w-full md:h-screen h-[50vh] bg-top bg-cover bg-no-repeat", className)}
    >
      <div className="lg:w-[400px] w-[300px] xl:block hidden absolute left-[50px] top-[480px]">
        <p className={cn("", styles.h1)}>Nike Air Max 90 lv8</p>
        <p className={cn("", styles.subTitle)}>Styles made for your game.</p>
        <Button
          className={cn(
            "uppercase font-semibold mt-[20px] transition-all ease-in-out duration-300 hover:-translate-y-2",
            styles.gradient1,
            styles.textButton
          )}
          size={"xl"}
        >
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
