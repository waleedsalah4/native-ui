"use client";
import { useEffect, useState } from "react";

export function useMediaQuery() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      setIsTabletView(window.innerWidth < 850);
    };

    handleResize(); // Call the function initially to set the initial value

    window.addEventListener("resize", handleResize); // Listen for window resize events
    return () => {
      window.removeEventListener("resize", handleResize); // Remove the event listener on unmount
    };
  }, [window.innerWidth]);
  return { isMobileView, isTabletView };
}
