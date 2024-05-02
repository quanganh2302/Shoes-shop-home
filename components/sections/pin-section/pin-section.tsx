import { cn } from "@/lib/utils";
import "./pin-section.scss";
import ModalImg from "@/public/images/modal.jpg";
import PinItem from "@/components/blocks/pin-item";

interface PinSectionProps {
  className?: string;
}

const PinSection: React.FC<PinSectionProps> = ({ className }) => {
  return (
    <div className={cn("relative pinImage ", className)}>
      <img className="w-full" src={ModalImg.src} alt="modal image " />
      <PinItem />
    </div>
  );
};

export default PinSection;
