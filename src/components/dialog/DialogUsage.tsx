import { useRef } from "react";
import Dialog from "./Dialog";

function DialogUsage() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <div className="bg-black p-8 text-center text-white">
      <p className="mb-4">Accessible Dialog</p>
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            toggleDialog();
          }}
          className="rounded bg-sky-500 p-2"
        >
          open dialog
        </button>

        <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
          <div>Dialog content</div>
        </Dialog>
      </div>
    </div>
  );
}

export default DialogUsage;
