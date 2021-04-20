import HomeNavigation from "@src/components/Navigation/HomeNavigation";
import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";
import PagePortraitImage from "@src/components/PagesContent/PortraitImage/PagePortraitImage";
import { Header } from "@src/components/Typography";
import TextContent from "./components/TextContent";
import fruitOrchards from "@root/assets/cuteLady.jpg";

const FruitOrchards = () => {
  return (
    <HomeSubPageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <Header title="Ovocné sady" />
            <TextContent />
          </Column>

          <Column isOnRight>
            <PagePortraitImage src={fruitOrchards} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </HomeSubPageWrapper>
  );
};

export default FruitOrchards;
