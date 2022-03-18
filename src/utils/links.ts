import cert from "@root/assets/pdf/cert.pdf";
import euMostarna from "@root/assets/EU_PREZENTACE.pdf";

export const handleEUClick = () => {
  window.open(euMostarna, "_blank");
};

export const handlePolabiClick = () => {
  window.open(cert, "_blank");
};
