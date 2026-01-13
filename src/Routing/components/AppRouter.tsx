import { type FC } from "react";
import {
  MondeOrangePage,
  MondeVertPage,
  MondeBleu111Page,
  MondeBleu112Page,
  MondeBleu113Page,
  MondeBleu114Page,
  MondeBleu115Page,
  MondeBleu116Page,
  MondeBleu117Page,
} from "../../Page";
import { ROUTE_NAME, useRouterContext } from "../../Routing";
import { HomePage } from "../../Page";

export const AppRouter: FC = () => {
  const { currentPage } = useRouterContext();

  switch (currentPage) {
    case ROUTE_NAME.HomePage:
      return <HomePage />;
    case ROUTE_NAME.MondeBleu_1_1_1:
      return <MondeBleu111Page />;
    case ROUTE_NAME.MondeBleu_1_1_2:
      return <MondeBleu112Page />;
    case ROUTE_NAME.MondeBleu_1_1_3:
      return <MondeBleu113Page />;
    case ROUTE_NAME.MondeBleu_1_1_4:
      return <MondeBleu114Page />;
    case ROUTE_NAME.MondeBleu_1_1_5:
      return <MondeBleu115Page />;
    case ROUTE_NAME.MondeBleu_1_1_6:
      return <MondeBleu116Page />;
    case ROUTE_NAME.MondeBleu_1_1_7:
      return <MondeBleu117Page />;

    case ROUTE_NAME.MondeOrange:
      return <MondeOrangePage />;

    case ROUTE_NAME.MondeVert:
      return <MondeVertPage />;

    default:
      return <HomePage />;
  }
};
