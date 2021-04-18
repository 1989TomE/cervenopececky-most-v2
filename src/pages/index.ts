import homoIcon from "@root/assets/home.svg";
import fruitPress from "@root/assets/fruitPress.svg";
import twoBottles from "@root/assets/twoBottles.svg";
import shoppingCart from "@root/assets/shoppingCart.svg";
import cellPhone from "@root/assets/cellPhone.svg";

export enum NavigationRoute {
  Home = "/",
  MakingAppleJuice = "/chci-mostovat",
  Products = "/produkty",
  WhereToBuy = "/kde-nakoupit",
  Contact = "/kontakt",
}

export type PageProps = {
  route: NavigationRoute;
  label: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

export const pages: PageProps[] = [
  { route: NavigationRoute.Home, label: "Domů", icon: homoIcon },
  {
    route: NavigationRoute.MakingAppleJuice,
    label: "Chci moštovat",
    icon: fruitPress,
  },
  { route: NavigationRoute.Products, label: "Produkty", icon: twoBottles },
  {
    route: NavigationRoute.WhereToBuy,
    label: "Kde nakoupit",
    icon: shoppingCart,
  },
  { route: NavigationRoute.Contact, label: "Kontakt", icon: cellPhone },
];
