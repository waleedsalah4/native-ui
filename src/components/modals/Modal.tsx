"use client";
import { useState, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Props {
  // open: boolean;
  triggerText?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  className?: string;
}

function Modal({
  children,
  triggerText,
  showCloseButton = true,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleModal = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="rounded-md bg-[#0ea5e9] p-2 text-white"
      >
        {triggerText ? triggerText : "Open Modal"}
      </button>
      {open && (
        <div
          onClick={handleCloseModal}
          className="animate-modal fixed top-0 right-0 bottom-0 left-0 z-[100] bg-[#1A1A1A]/15"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          role="presentation"
        >
          <div
            autoFocus={true}
            id="popup-modal"
            className={cn(
              "absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 shadow sm:max-w-lg",
              className
            )}
            onClick={handleModal}
          >
            {showCloseButton && (
              <div className="absolute top-2 right-4 inline-block">
                <button
                  type="button"
                  aria-label="close-modal"
                  onClick={handleCloseModal}
                >
                  <X color="#1A1A1A" />
                </button>
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
