import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles"
interface AccountProps {
  className?: string;
}

const AccountPage: React.FC<AccountProps> = ({ className }) => {
  return <div className={cn("", className)}>AName</div>;
};

export default AccountPage;
