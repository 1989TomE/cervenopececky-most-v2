import { default as aboutIcon } from "@root/assets/about.svg";
import { default as shoppingCart } from "@root/assets/shoppingCart.svg";
import { default as cellPhone } from "@root/assets/cellPhone.svg";
import { default as fruitPress } from "@root/assets/fruitPress.svg";
import { default as twoBottles } from "@root/assets/twoBottles.svg";

import { default as leaf } from "@root/assets/leaf.svg";
import { default as appleAndBottle } from "@root/assets/appleAndBottle.svg";
import { default as tap } from "@root/assets/tap.svg";
import { default as wineGlass } from "@root/assets/wineGlass.svg";

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
  { route: Page.Home, label: "O nás", icon: aboutIcon },
  {
    route: Page.OurProducts,
    label: "Naše produkty",
    icon: twoBottles,
  },
  { route: Page.WhereToBuy, label: "Kde zakoupit", icon: shoppingCart },
  {
    route: Page.WantToFruitPress,
    label: "Chci zmoštovat",
    icon: fruitPress,
  },
  { route: Page.Contact, label: "Kontakt", icon: cellPhone },
];

export type HomePageProps = PageProps & {
  imageSource: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

export const homePages: HomePageProps[] = [
  {
    route: Page.WorkPlace,
    label: "Moštárna",
    icon: tap,
    imageSource: workPlaceWidescreen,
  },
  {
    route: Page.FruitOrchards,
    label: "Ovocné sady",
    icon: leaf,
    imageSource: cuteLady,
  },
  {
    route: Page.Making,
    label: "Vyrábíme",
    icon: appleAndBottle,
    imageSource: bottlesWidescreen,
  },
  {
    route: Page.PublicAppleJuicing,
    label: "Moštování pro veřejnost",
    icon: wineGlass,
    imageSource: publicAppleJuicing,
  },
];
