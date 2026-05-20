import { ProductItemProps } from "./ProductItem";
import bedynkajablka from "@root/assets/bedynkajablka.jpg";
import cerstvymost from "@root/assets/cerstvymost.jpg";
import suseneovoce from "@root/assets/suseneovoce.jpg";
import jablko from "@root/assets/mostjablko.jpg";
import speciality from "@root/assets/mostspeciality.png";

export const productsItems: ProductItemProps[] = [
  {
    title: "ČERSTVÝ MOŠT",
    descriptions: [
      "Každý týden čepujeme jinou variantu",
      "Jablko / hruška a mixy",
      "(mrkev, červená řepa, višeň, ostružina,",
      "pomeranč, rakytník, rybíz, jahoda).",
    ],
    src: cerstvymost,
  },
  {
    title: "MOŠT JABLKO",
    descriptions: [
      "100 % jablko, pasterizováno.",
      "1 l láhev sklo, ostatní baleno v krabici.",
    ],
    src: jablko,
  },
  {
    title: "SPECIALITY",
    descriptions: [
      "100 % mixy jablko a mrkev,",
      "červená řepa, višeň, ostružina,",
      "pomeranč, rakytník, rybíz, jahoda.",
      "1l lahev sklo, 3l BiB, pasterizováno.",
    ],
    src: speciality,
  },
  {
    title: "SUŠENÉ OVOCE",
    descriptions: [
      "100 % jablečné nebo hruškové plátky.",
      "Baleno v doypack sáčku.",
    ],
    src: suseneovoce,
  },
  {
    title: "JABLKA",
    descriptions: [
      "Red bohemia, gala, rozela, jonagold,",
      "golden, red topaz, goldstar,",
      "a další odrůdy dle sklizně.",
    ],
    src: bedynkajablka,
  },
];
