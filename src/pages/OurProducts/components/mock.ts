import { ProductItemProps } from "./ProductItem";
import apples from "@root/assets/cuteLady.jpg";

export const mock: ProductItemProps[] = [
  {
    title: "MOŠT JABLKO",
    prices: ["70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: ["100 % jablko, pasterizováno.", "Baleno v krabici."],
    src: apples,
  },
  {
    title: "MOŠT HRUŠKA",
    prices: ["70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: ["100 % hruška, pasterizováno.", "Baleno v krabici."],
  },
  {
    title: "MOŠT JABLKO A HRUŠKA",
    prices: ["70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: [
      "50 % jablko, 50 % hruška",
      "pasterizováno. Baleno v krabici.",
    ],
  },
  {
    title: "ČERSTVÝ MOŠT",
    prices: ["20 Kč / 1 l"],
    descriptions: ["Jablko / hruška", "dle denní nabídky."],
  },
  {
    title: "SUŠENÉ JABLKO",
    prices: ["40 Kč / 100 g"],
    descriptions: ["100 % jablečné plátky", "Baleno v sáčku."],
  },
  {
    title: "SUŠENÁ HRUŠKA",
    prices: ["40 Kč / 100 g"],
    descriptions: ["100 % hruškové plátky.", "Baleno v sáčku."],
  },
  {
    title: "SUŠENÉ JABLKO A HRUŠKA",
    prices: ["40 Kč / 100 g"],
    descriptions: ["50 % jablečné a 50 % hruškové", "plátky. Baleno v sáčku."],
  },
  {
    title: "JABLKA",
    prices: ["od 20 Kč / 1 kg"],
    descriptions: ["Odrůdy dle sklizně."],
  },
];
