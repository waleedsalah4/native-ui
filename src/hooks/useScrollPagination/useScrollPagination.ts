"use client";
import { useCallback, useEffect, useState } from "react";

export const useScrollPagination = (
  handlePageChange?: () => void,
  isLoading?: boolean
) => {
  const [nodeEl, setNodeEl] = useState<HTMLElement | null>(null);

  const nodeRef = useCallback((node: HTMLElement | null) => {
    setNodeEl(node);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        nodeEl &&
        Math.ceil(nodeEl.scrollTop + nodeEl.clientHeight) >=
          nodeEl.scrollHeight &&
        !isLoading
      ) {
        if (handlePageChange) handlePageChange();
      }
    };

    if (nodeEl) {
      nodeEl.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (nodeEl) {
        nodeEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLoading, nodeEl, handlePageChange]);

  return nodeRef;
};
