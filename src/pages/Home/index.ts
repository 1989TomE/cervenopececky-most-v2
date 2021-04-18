import { default as Leaf } from "@root/assets/leaf.svg";
import { default as AppleAndBottle } from "@root/assets/appleAndBottle.svg";
import { default as Tap } from "@root/assets/tap.svg";
import { default as WineGlass } from "@root/assets/wineGlass.svg";

import workPlaceWidescreen from "@root/assets/mostarnaWidescreen.jpg";
import cuteLady from "@root/assets/cuteLady.jpg";
import bottlesWidescreen from "@root/assets/bottlesWidescreen.jpg";
import publicAppleJuicing from "@root/assets/publicAppleJuicing.jpg";

export enum HomeRoute {
  Home = "/",
  WorkPlace = "/mostarna",
  Products = "/produkty",
  FruitOrchards = "/ovocne-sady",
  PublicAppleJuicing = "/mostovani-pro-verejnost",
}

export type HomeRouteProps = {
  route: HomeRoute;
  label: string;
  icon: React.ElementType;
  imageSource: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

export const homeRoutes: HomeRouteProps[] = [
  {
    route: HomeRoute.Home,
    label: "Domů",
    icon: Tap,
    imageSource: workPlaceWidescreen,
  },
  {
    route: HomeRoute.FruitOrchards,
    label: "Ovocné sady",
    icon: Leaf,
    imageSource: cuteLady,
  },
  {
    route: HomeRoute.Products,
    label: "Produkty",
    icon: AppleAndBottle,
    imageSource: bottlesWidescreen,
  },
  {
    route: HomeRoute.WorkPlace,
    label: "Moštárna",
    icon: Tap,
    imageSource: workPlaceWidescreen,
  },
  {
    route: HomeRoute.PublicAppleJuicing,
    label: "Moštování pro veřejnost",
    icon: WineGlass,
    imageSource: publicAppleJuicing,
  },
];
