import type { JSX } from "react";
import type { RouteName } from "../../../Routing";

export type NavItem = {
  id: RouteName;
  label: string;
  icon: JSX.Element;
  color: {
    primary: string;
    hover: string;
    text: string;
  };
};
