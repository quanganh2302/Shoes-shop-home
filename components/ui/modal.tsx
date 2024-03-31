"use client";

import {
  Dialog,
  DialogContent,
} from "./dialog";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
