import { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  toggleDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, toggleDialog }, ref) => {
    return (
      <dialog
        ref={ref}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog();
          }
        }}
        className="transition-opacity ease-in-out backdrop:bg-black/50 open:animate-modal"
      >
        <div className="bg-white p-4 text-black">
          {children}
          <button onClick={toggleDialog} className="mt-4 p-2">
            Close
          </button>
        </div>
      </dialog>
    );
  }
);
// Explicitly setting the displayName
Dialog.displayName = 'Dialog';
export default Dialog;
