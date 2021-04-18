import { default as HomeIcon } from "@root/assets/home.svg";
import { default as ShoppingCart } from "@root/assets/shoppingCart.svg";
import { default as CellPhone } from "@root/assets/cellPhone.svg";
import { default as FruitPress } from "@root/assets/fruitPress.svg";
import { default as TwoBottles } from "@root/assets/twoBottles.svg";

export enum MainRoute {
  Home = "/",
  About = "/o-nas",
  EShop = "/e-shop",
  SalesStore = "/prodejna",
  Contact = "/kontakt",
}

export type MainNavigationRouteProps = {
  route: MainRoute;
  label: string;
  icon: React.ElementType;
};

export const pages: MainNavigationRouteProps[] = [
  { route: MainRoute.Home, label: "Domů", icon: HomeIcon },
  {
    route: MainRoute.About,
    label: "O nás",
    icon: FruitPress,
  },
  { route: MainRoute.EShop, label: "E-shop", icon: ShoppingCart },
  {
    route: MainRoute.SalesStore,
    label: "Prodejna",
    icon: TwoBottles,
  },
  { route: MainRoute.Contact, label: "Kontakt", icon: CellPhone },
];
