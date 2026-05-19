import { ProductItemProps } from "./ProductItem";
import bedynkajablka from "@root/assets/bedynkajablka.jpg";
import cerstvymost from "@root/assets/cerstvymost.jpg";
import suseneovoce from "@root/assets/suseneovoce.jpg";
import jablko from "@root/assets/mostjablko.jpg";
import speciality from "@root/assets/mostspeciality.png";
import { flavor, joinFlavors, text } from "./descriptionParts";
import { StockStatus } from "./Variant";

const freshJuiceMixFlavors = [
  "mrkev",
  "červená řepa",
  "višeň",
  "ostružina",
  "pomeranč",
  "rakytník",
  "rybíz",
  "jahoda",
];

const specialityMixFlavors = [
  "jablko",
  "mrkev",
  "červená řepa",
  "višeň",
  "ostružina",
  "pomeranč",
  "rakytník",
  "rybíz",
  "jahoda",
];

export const productsItems: ProductItemProps[] = [
  {
    title: "SPECIALITY",
    isNew: true,
    variants: [],
    descriptions: [
      [
        text("100 % mixy "),
        ...joinFlavors(specialityMixFlavors),
        text(","),
      ],
      [text("1l lahev sklo, 3l BiB, pasterizováno")],
    ],
    src: speciality,
  },
  {
    title: "MOŠT JABLKO",
    variants: [
      { text: "35 Kč / 1 l", stockStatus: StockStatus.InStock },
      { text: "70 Kč / 2 l", stockStatus: StockStatus.OutOfStock },
      { text: "90 Kč / 3 l", stockStatus: StockStatus.InStock },
    ],
    descriptions: [
      [text("100 % jablko, pasterizováno.")],
      [text("1 l láhev sklo, ostatní baleno v krabici.")],
    ],
    src: jablko,
  },
  {
    title: "ČERSTVÝ MOŠT",
    variants: [{ text: "25 Kč / 1 l" }],
    descriptions: [
      [text("Každý týden čepujeme jinou variantu")],
      [flavor("Jablko"), text(" / "), flavor("hruška"), text(" a mixy")],
      [text("("), ...joinFlavors(freshJuiceMixFlavors), text(")")],
    ],
    src: cerstvymost,
  },
  {
    title: "SUŠENÉ OVOCE",
    variants: [{ text: "40 Kč / 100 g", stockStatus: StockStatus.InStock }],
    descriptions: [
      [text("100 % jablečné nebo hruškové plátky.")],
      [text("Baleno v doypack sáčku.")],
    ],
    src: suseneovoce,
  },
  {
    title: "JABLKA",
    variants: [
      { text: "od 20 Kč / 1 kg", stockStatus: StockStatus.OutOfStock },
    ],
    descriptions: [
      [
        text(
          "Red bohemia, gala, rozela, jonagold, golden, red topaz, goldstar"
        ),
      ],
      [text("a další odrůdy dle sklizně.")],
    ],
    src: bedynkajablka,
  },
];
