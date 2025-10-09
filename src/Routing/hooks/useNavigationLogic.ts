import { useMemo } from "react";
import { useRouterContext } from "./useRouterContext";
import { NAVIGATION_TREE } from "../data/NAVIGATION_TREE";
import { flattenPages } from "../helpers";
import type { NavigationLogic } from "../types/NavigationLogic";

/**
 * Custom hook that determines the previous and next pages based on the current route.
 * It flattens the NAVIGATION_TREE to create a linear sequence of pages.
 */
export const useNavigationLogic = (): NavigationLogic => {
  const { currentPage } = useRouterContext();

  const { previousPage, nextPage } = useMemo(() => {
    const pages = flattenPages(NAVIGATION_TREE);
    const currentIndex = pages.findIndex((page) => page.id === currentPage);
    if (currentIndex === -1) return { previousPage: null, nextPage: null };
    const prev = pages[currentIndex - 1];
    const next = pages[currentIndex + 1];
    return {
      previousPage: prev ? { id: prev.id, label: prev.label } : null,
      nextPage: next ? { id: next.id, label: next.label } : null,
    };
  }, [currentPage]);
  return { previousPage, nextPage };
};
