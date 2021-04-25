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
import React from "react";

export enum Page {
  Home = "/",
  WantToFruitPress = "/chci-zmostovat",
  WhereToBuy = "/kde-zakoupit",
  OurProducts = "/nase-produkty",
  Contact = "/kontakt",
  WorkPlace = "/mostarna",
  Making = "/vyrabime",
  FruitOrchards = "/ovocne-sady",
  PublicAppleJuicing = "/mostovani-pro-verejnost",
}

export type PageProps = {
  route: Page;
  label: string;
  icon: React.ElementType;
};

export const mainPages: PageProps[] = [
  { route: Page.Home, label: "O nás", icon: HomeIcon },
  {
    route: Page.WantToFruitPress,
    label: "Chci zmoštovat",
    icon: FruitPress,
  },
  {
    route: Page.OurProducts,
    label: "Naše produkty",
    icon: TwoBottles,
  },
  { route: Page.WhereToBuy, label: "Kde zakoupit", icon: ShoppingCart },
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
    route: Page.Making,
    label: "Vyrábíme",
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

// lazy import functions
export const importHomePage = () => import("@src/pages/Home/Home");

export const importWorkplacePage = () =>
  import("@src/pages/WorkPlace/WorkPlace");

export const importPublicAppleJuicingPage = () =>
  import("@src/pages/PublicAppleJuicing/PublicAppleJuicing");

export const importMakingPage = () => import("@src/pages/Making/Making");
export const importFruitOrchardsPage = () =>
  import("@src/pages/FruitOrchards/FruitOrchards");

export const importContactPage = () => import("@src/pages/Contact/Contact");
export const importWantToFruitPressPage = () =>
  import("@src/pages/WantToFruitPress/WantToFruitPress");

export const importOurProductsPage = () =>
  import("@src/pages/OurProducts/OurProducts");

export const importWhereToBuyPage = () =>
  import("@src/pages/WhereToBuy/WhereToBuy");

// Lazy loaded Page components
export const Home = React.lazy(importHomePage);
export const WorkPlace = React.lazy(importWorkplacePage);
export const PublicAppleJuicing = React.lazy(importPublicAppleJuicingPage);
export const Making = React.lazy(importMakingPage);
export const FruitOrchards = React.lazy(importFruitOrchardsPage);
export const Contact = React.lazy(importContactPage);
export const WantToFruitPress = React.lazy(importWantToFruitPressPage);
export const OurProducts = React.lazy(importOurProductsPage);
export const WhereToBuy = React.lazy(importWhereToBuyPage);

// preload pages
export const preloadPages = () => {
  importWorkplacePage();
  importPublicAppleJuicingPage();
  importMakingPage();
  importFruitOrchardsPage();
  importContactPage();
  importWantToFruitPressPage();
  importOurProductsPage();
  importWhereToBuyPage();
};
