"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface QtyProps {
  className?: string;
  onChange?: () => void;
}

const QtyChange: React.FC<QtyProps> = ({ className, onChange }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="border border-borderLine rounded-sm flex items-baseline justify-between gap-4">
      <Button
        onClick={() => setQty(qty - 1)}
        disabled={qty === 1 ? true : false}
        className="bg-transparent hover:bg-transparent text-black w-1 h-8"
      >
        -
      </Button>
      <div className="text-[12px]">{qty}</div>
      <Button
        onClick={() => setQty(qty + 1)}
        className="bg-transparent hover:bg-transparent text-black w-1 h-8"
      >
        +
      </Button>
    </div>
  );
};

export default QtyChange;
