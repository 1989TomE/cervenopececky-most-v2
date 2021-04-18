import { NavigationRoute } from "@src/pages/index";
import ImageLink from "./ImageLink";

import workPlaceWidescreen from "@root/assets/mostarnaWidescreen.jpg";
import cuteLady from "@root/assets/cuteLady.jpg";
import bottlesWidescreen from "@root/assets/bottlesWidescreen.jpg";
import publicAppleJuicing from "@root/assets/publicAppleJuicing.jpg";

import { default as Leaf } from "@root/assets/leaf.svg";
import { default as AppleAndBottle } from "@root/assets/appleAndBottle.svg";
import { default as Tap } from "@root/assets/tap.svg";
import { default as WineGlass } from "@root/assets/wineGlass.svg";

import PageColumn from "@src/components/PageColumn/PageColumn";

const Content = () => {
  return (
    <>
      <PageColumn>
        <ImageLink
          to={NavigationRoute.WorkPlace}
          imageSource={workPlaceWidescreen}
          imageAltText="mostarna"
          icon={Tap}
          iconAltText="kohoutek"
        />
        <ImageLink
          to={NavigationRoute.WorkPlace}
          imageSource={bottlesWidescreen}
          imageAltText="mostarna"
          icon={AppleAndBottle}
          iconAltText="jablko"
        />
      </PageColumn>
      <PageColumn>
        <ImageLink
          to={NavigationRoute.Arboriculture}
          imageSource={cuteLady}
          imageAltText="ovocné sady"
          icon={Leaf}
          iconAltText="list"
        />
        <ImageLink
          to={NavigationRoute.MakingAppleJuiceForPublic}
          imageSource={publicAppleJuicing}
          imageAltText="moštování pro veřejnost"
          icon={WineGlass}
          iconAltText="víno"
        />
      </PageColumn>
    </>
  );
};

export default Content;
