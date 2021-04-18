import { default as HomeIcon } from "@root/assets/home.svg";
import { default as ShoppingCart } from "@root/assets/shoppingCart.svg";
import { default as CellPhone } from "@root/assets/cellPhone.svg";
import { default as FruitPress } from "@root/assets/fruitPress.svg";
import { default as TwoBottles } from "@root/assets/twoBottles.svg";

export enum NavigationRoute {
  Home = "/",
  WorkPlace = "/mostarna",
  About = "/o-nas",
  FruitOrchards = "/ovocne-sady",
  PublicAppleJuicing = "/mostovani-pro-verejnost",
  EShop = "/e-shop",
  Products = "/produkty",
  SalesStore = "/prodejna",
  Contact = "/kontakt",
}

export type MainNavigationRouteProps = {
  route: NavigationRoute;
  label: string;
  icon: React.ElementType;
};

export const pages: MainNavigationRouteProps[] = [
  { route: NavigationRoute.Home, label: "Domů", icon: HomeIcon },
  {
    route: NavigationRoute.About,
    label: "O nás",
    icon: FruitPress,
  },
  { route: NavigationRoute.EShop, label: "E-shop", icon: ShoppingCart },
  {
    route: NavigationRoute.SalesStore,
    label: "Prodejna",
    icon: TwoBottles,
  },
  { route: NavigationRoute.Contact, label: "Kontakt", icon: CellPhone },
];
