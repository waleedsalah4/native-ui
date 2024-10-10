import { useState, useEffect, RefObject } from "react";
const useInView = (ref: RefObject<HTMLElement>): boolean => {
  //  const [isInView, setIsInView] = useState<boolean>(false);
  const [hasBeenInView, setHasBeenInView] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return; // Exit if no element is passed

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasBeenInView) {
          //run only one time
          setHasBeenInView(true); // Set true when it enters the viewport the first time
        }
      });
    });
    observer.observe(ref.current);
    // Cleanup observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
  //  return isInView;
  return hasBeenInView;
};

export default useInView;
