import { ProductItemProps } from "./ProductItem";
import bedynkajablka from "@root/assets/bedynkajablka.jpg";
import cerstvymost from "@root/assets/cerstvymost.jpg";
import suseneovoce from "@root/assets/suseneovoce.jpg";
import hruska from "@root/assets/mosthruska.jpg";
import jablko from "@root/assets/mostjablko.jpg";
import jablkohruska from "@root/assets/mostjablkohruska.jpg";
import speciality from "@root/assets/mostspeciality.png";
import { StockStatus } from "./Variant";

export const productsItems: ProductItemProps[] = [
  {
    title: "MOŠT JABLKO",
    variants: [
      { text: "35 Kč / 1 l", stockStatus: StockStatus.InStock },
      { text: "70 Kč / 2 l", stockStatus: StockStatus.OutOfStock },
      { text: "90 Kč / 3 l", stockStatus: StockStatus.InStock },
    ],
    descriptions: [
      "100 % jablko, pasterizováno.",
      "1 l láhev sklo, ostatní baleno v krabici.",
    ],
    src: jablko,
  },
  {
    title: "MOŠT HRUŠKA",
    variants: [
      { text: "70 Kč / 2 l", stockStatus: StockStatus.OutOfStock },
      { text: "90 Kč / 3 l", stockStatus: StockStatus.OutOfStock },
    ],
    descriptions: ["100 % hruška, pasterizováno.", "Baleno v krabici."],
    src: hruska,
  },
  {
    title: "MOŠT JABLKO A HRUŠKA",
    variants: [
      { text: "70 Kč / 2 l", stockStatus: StockStatus.OutOfStock },
      { text: "90 Kč / 3 l", stockStatus: StockStatus.OutOfStock },
    ],
    descriptions: [
      "50 % jablko, 50 % hruška,",
      "pasterizováno. Baleno v krabici.",
    ],
    src: jablkohruska,
  },
  {
    title: "ČERSTVÝ MOŠT",
    variants: [{ text: "25 Kč / 1 l" }],
    descriptions: [
      "Každý týden čepujeme jinou variantu",
      "Jablko / hruška a mixy",
      "(mrkev, červená řepa, višeň, ostružina, pomeranč, rakytník, rybíz, jahoda)",
    ],
    src: cerstvymost,
  },
  {
    title: "SPECIALITY",
    variants: [],
    descriptions: [
      "100 % mixy jablko a mrkev, červená řepa, višeň, ostružina, pomeranč, rakytník, rybíz, jahoda,",
      "1l lahev sklo, 3l BiB, pasterizováno",
    ],
    src: speciality,
  },
  {
    title: "SUŠENÉ OVOCE",
    variants: [{ text: "40 Kč / 100 g", stockStatus: StockStatus.InStock }],
    descriptions: [
      "100 % jablečné nebo hruškové plátky.",
      "Baleno v doypack sáčku.",
    ],
    src: suseneovoce,
  },
  {
    title: "JABLKA",
    variants: [
      { text: "od 20 Kč / 1 kg", stockStatus: StockStatus.OutOfStock },
    ],
    descriptions: [
      "Red bohemia, gala, rozela, jonagold, golden, red topaz, goldstar",
      "a další odrůdy dle sklizně.",
    ],
    src: bedynkajablka,
  },
];
