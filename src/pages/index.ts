import { default as HomeIcon } from "@root/assets/home.svg";
import { default as ShoppingCart } from "@root/assets/shoppingCart.svg";
import { default as CellPhone } from "@root/assets/cellPhone.svg";
import { default as FruitPress } from "@root/assets/fruitPress.svg";
import { default as TwoBottles } from "@root/assets/twoBottles.svg";

import { default as Leaf } from "@root/assets/leaf.svg";
import { default as AppleAndBottle } from "@root/assets/appleAndBottle.svg";
import { default as Tap } from "@root/assets/tap.svg";
import { default as WineGlass } from "@root/assets/wineGlass.svg";

import workPlaceWidescreen from "@root/assets/mostarnaWidescreen.jpg";
import cuteLady from "@root/assets/cuteLady.jpg";
import bottlesWidescreen from "@root/assets/bottlesWidescreen.jpg";
import publicAppleJuicing from "@root/assets/publicAppleJuicing.jpg";

export enum Page {
  Home = "/",
  About = "/o-nas",
  EShop = "/e-shop",
  SalesStore = "/prodejna",
  Contact = "/kontakt",
  WorkPlace = "/mostarna",
  Products = "/produkty",
  FruitOrchards = "/ovocne-sady",
  PublicAppleJuicing = "/mostovani-pro-verejnost",
}

export type PageProps = {
  route: Page;
  label: string;
  icon: React.ElementType;
};

export const pages: PageProps[] = [
  { route: Page.Home, label: "Domů", icon: HomeIcon },
  {
    route: Page.About,
    label: "O nás",
    icon: FruitPress,
  },
  { route: Page.EShop, label: "E-shop", icon: ShoppingCart },
  {
    route: Page.SalesStore,
    label: "Prodejna",
    icon: TwoBottles,
  },
  { route: Page.Contact, label: "Kontakt", icon: CellPhone },
];

export type HomePageProps = PageProps & {
  imageSource: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

export const homePages: HomePageProps[] = [
  {
    route: Page.WorkPlace,
    label: "Moštárna",
    icon: Tap,
    imageSource: workPlaceWidescreen,
  },
  {
    route: Page.FruitOrchards,
    label: "Ovocné sady",
    icon: Leaf,
    imageSource: cuteLady,
  },
  {
    route: Page.Products,
    label: "Produkty",
    icon: AppleAndBottle,
    imageSource: bottlesWidescreen,
  },
  {
    route: Page.PublicAppleJuicing,
    label: "Moštování pro veřejnost",
    icon: WineGlass,
    imageSource: publicAppleJuicing,
  },
];
