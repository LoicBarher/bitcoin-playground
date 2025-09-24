import { useState, type FC, type ReactNode } from "react";
import { type RouteName } from "../types/RouteName";
import { ROUTE_NAME } from "../data/ROUTE_NAME";
import { RouterContext } from ".";

export const RouterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<RouteName>(
    ROUTE_NAME.MondeBleu as RouteName
  );
  const value = { currentPage, setCurrentPage };

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};
