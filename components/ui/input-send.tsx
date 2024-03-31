import { Input } from "./input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { SendHorizontal } from "lucide-react";
interface InputSendProps {
  placeholder?: string;
  className?: string;
}

const InputSend: React.FC<InputSendProps> = ({ placeholder, className }) => {
  return (
    <div
      className={cn(
        "rounded-sm flex items-center justify-between bg-bgInput pr-2",
        className
      )}
    >
      <Input
        placeholder={placeholder}
        className="border-none bg-transparent grow"
      />
      <SendHorizontal className=" w-6 h-6 text-muted-foreground" />
    </div>
  );
};

export default InputSend;
