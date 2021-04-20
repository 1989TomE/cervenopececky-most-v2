import { Header } from "@src/components/TextContent";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";

const PublicAppleJuicing = () => {
  return (
    <HomeSubPageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <Header title="Moštování pro veřejnost" />
            <LeftColumn />
          </Column>

          <Column isOnRight>
            <RightColumn />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </HomeSubPageWrapper>
  );
};

export default PublicAppleJuicing;
