import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import TitleSection from "@/components/blocks/title-section";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
interface Page404Props {
  className?: string;
}

const Page404: React.FC<Page404Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "container flex flex-col items-center justify-center h-[400px]",
        styles.layoutMargin
      )}
    >
      <TitleSection
        className={cn(
          " bg-clip-text text-transparent inline-block pb-4 md:text-[100px] text-[80px]",
          styles.gradient1
        )}
        title="404 Not Found"
      />
      <p className={cn(textStyle.subTitle, "text-center")}>
        Your visited page not found. You may go home page.
      </p>
      <div className={cn(styles.hoverBtn1, "mt-16")}>
        <Button
          onClick={redirect("/")}
          className=" bg-transparent hover:bg-transparent uppercase"
          size={"lg"}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default Page404;
