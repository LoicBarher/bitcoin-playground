import type { FC } from "react";
import { MondeBleuPage, MondeOrangePage, MondeVertPage } from "../../Page";
import { useRouterContext } from "../hooks";
import { ROUTE_NAME } from "../data/";

export const AppRouter: FC = () => {
  const { currentPage } = useRouterContext();
  switch (currentPage) {
    case ROUTE_NAME.MondeBleu:
      return <MondeBleuPage />;
    case ROUTE_NAME.MondeOrange:
      return <MondeOrangePage />;
    case ROUTE_NAME.MondeVert:
      return <MondeVertPage />;
    default:
      return <MondeBleuPage />;
  }
};
