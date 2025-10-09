import { useEffect, useState, useMemo } from "react";
import { findAllDescendantLabels, findPathToId } from "../helpers";
import {
  NAVIGATION_TREE,
  useRouterContext,
  type NavigationItem,
} from "../../../Routing";

export const useNavBar = () => {
  const { currentPage, setCurrentPage } = useRouterContext();
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
  const activePath = useMemo(
    () => findPathToId(NAVIGATION_TREE, currentPage) || [],
    [currentPage]
  );
  const [interactionId, setInteractionId] = useState<string | null>(null);

  useEffect(() => {
    setOpenMenus(new Set(activePath));
  }, [activePath]);

  const handleMenuClick = (item: NavigationItem) => {
    if (item.isPage && item.id) setCurrentPage(item.id);
    else if (item.children)
      setOpenMenus((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(item.label)) {
          newSet.delete(item.label);
          const descendantLabels = findAllDescendantLabels(item);
          descendantLabels.forEach((label) => newSet.delete(label));
        } else newSet.add(item.label);
        return newSet;
      });
  };
  return {
    openMenus,
    handleMenuClick,
    activePath,
    interactionId,
    setInteractionId,
  };
};
