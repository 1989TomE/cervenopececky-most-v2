import { ProductItemProps } from "./ProductItem";
import apples from "@root/assets/cuteLady.jpg";
import productImage from "@root/assets/jablkohruska3L.jpg";

export const data: ProductItemProps[] = [
  {
    title: "MOŠT JABLKO",
    prices: ["70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: ["100 % jablko, pasterizováno.", "Baleno v krabici."],
    src: productImage,
  },
  {
    title: "MOŠT HRUŠKA",
    prices: ["70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: ["100 % hruška, pasterizováno.", "Baleno v krabici."],
    src: productImage,
  },
  {
    title: "MOŠT JABLKO A HRUŠKA",
    prices: ["70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: [
      "50 % jablko, 50 % hruška",
      "pasterizováno. Baleno v krabici.",
    ],
    src: productImage,
  },
  {
    title: "ČERSTVÝ MOŠT",
    prices: ["20 Kč / 1 l"],
    descriptions: ["Jablko / hruška", "dle denní nabídky."],
    src: productImage,
  },
  {
    title: "SUŠENÉ OVOCE",
    prices: ["40 Kč / 100 g"],
    descriptions: ["100 % jablečné plátky", "Baleno v sáčku."],
    src: productImage,
  },
  {
    title: "JABLKA",
    prices: ["od 20 Kč / 1 kg"],
    descriptions: ["Odrůdy dle sklizně."],
    src: productImage,
  },
];
