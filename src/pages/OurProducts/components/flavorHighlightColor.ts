import { Theme } from "@src/styles/theme";

type FlavorHighlightKey = keyof Theme["colors"]["flavorHighlight"];

const flavorToColorKey: Record<string, FlavorHighlightKey> = {
  jablko: "jablko",
  hruška: "hruska",
  mrkev: "mrkev",
  "červená řepa": "cervenaRepa",
  višeň: "visen",
  ostružina: "ostruzina",
  pomeranč: "pomeranc",
  rakytník: "rakytnik",
  rybíz: "rybiz",
  jahoda: "jahoda",
  jablečné: "jablko",
  hruškové: "hruska",
  "red bohemia": "jablko",
  gala: "jablko",
  rozela: "rybiz",
  jonagold: "appleGolden",
  golden: "appleGolden",
  "red topaz": "jablko",
  goldstar: "appleGolden",
};

export const getFlavorHighlightColor = (
  flavorName: string,
  theme: Theme
): string => {
  const key = flavorToColorKey[flavorName.toLowerCase()];
  if (key != null) {
    return theme.colors.flavorHighlight[key];
  }
  return theme.colors.redLight;
};
