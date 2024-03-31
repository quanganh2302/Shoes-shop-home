import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss"
interface BreadCrumbProps {
    className?: string
}


const BreadCrumb:React.FC<BreadCrumbProps> = ({className}) => {
  return (
    <div className={cn("", className)}>
      AName
    </div>
  )
};

export default BreadCrumb;
