import { useEffect } from "react";
interface IOutsideClickProps {
  ref: React.RefObject<HTMLElement>;
  onClickOutside: () => void;
}

const useClickOutside = ({ ref, onClickOutside }: IOutsideClickProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside the element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
