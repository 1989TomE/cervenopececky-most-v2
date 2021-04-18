import homoIcon from "@root/assets/home.svg";
import fruitPress from "@root/assets/fruitPress.svg";
import twoBottles from "@root/assets/twoBottles.svg";
import shoppingCart from "@root/assets/shoppingCart.svg";
import cellPhone from "@root/assets/cellPhone.svg";

export enum NavigationRoute {
  Home = "/",
  WorkPlace = "/mostarna",
  About = "/o-nas",
  Arboriculture = "/ovocne-sady",
  MakingAppleJuiceForPublic = "/mostovani-pro-verejnost",
  EShop = "/e-shop",
  Products = "/produkty",
  SalesStore = "/prodejna",
  Contact = "/kontakt",
}

export type MainNavigationRouteProps = {
  route: NavigationRoute;
  label: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

export const pages: MainNavigationRouteProps[] = [
  { route: NavigationRoute.Home, label: "Domů", icon: homoIcon },
  {
    route: NavigationRoute.About,
    label: "O nás",
    icon: fruitPress,
  },
  { route: NavigationRoute.EShop, label: "E-shop", icon: shoppingCart },
  {
    route: NavigationRoute.SalesStore,
    label: "Prodejna",
    icon: twoBottles,
  },
  { route: NavigationRoute.Contact, label: "Kontakt", icon: cellPhone },
];
