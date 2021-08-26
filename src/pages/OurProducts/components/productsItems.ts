import { ProductItemProps } from "./ProductItem";
import bedynkajablka from "@root/assets/bedynkajablka.jpg";
import cerstvymost from "@root/assets/cerstvymost.jpg";
import suseneovoce from "@root/assets/suseneovoce.jpg";
import hruska from "@root/assets/mosthruska.jpg";
import jablko from "@root/assets/mostjablko.jpg";
import jablkohruska from "@root/assets/mostjablkohruska.jpg";

export const productsItems: ProductItemProps[] = [
  {
    title: "MOŠT JABLKO",
    prices: ["35 Kč / 1 l", "70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: [
      "100 % jablko, pasterizováno.",
      "1 l láhev sklo, ostatní baleno v krabici.",
    ],
    src: jablko,
  },
  {
    title: "MOŠT HRUŠKA",
    prices: ["70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: ["100 % hruška, pasterizováno.", "Baleno v krabici."],
    src: hruska,
  },
  {
    title: "MOŠT JABLKO A HRUŠKA",
    prices: ["70 Kč / 2 l", "90 Kč / 3 l"],
    descriptions: [
      "50 % jablko, 50 % hruška,",
      "pasterizováno. Baleno v krabici.",
    ],
    src: jablkohruska,
  },
  {
    title: "ČERSTVÝ MOŠT",
    prices: ["20 Kč / 1 l"],
    descriptions: [
      "Jablko / hruška dle sklizně",
      "K zakoupení během moštování",
    ],
    src: cerstvymost,
  },
  {
    title: "SUŠENÉ OVOCE",
    prices: ["40 Kč / 100 g"],
    descriptions: [
      "100 % jablečné nebo hruškové plátky.",
      "Baleno v doypack sáčku.",
    ],
    src: suseneovoce,
  },
  {
    title: "JABLKA",
    prices: ["od 20 Kč / 1 kg"],
    descriptions: [
      "Gloster, rubín, golden, idared",
      "a další odrůdy dle sklizně.",
    ],
    src: bedynkajablka,
  },
];
