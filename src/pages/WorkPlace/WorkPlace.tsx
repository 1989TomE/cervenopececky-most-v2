import { Header } from "@src/components/Typography";
import TextContent from "./components/TextContent";
import workplace from "@root/assets/mostarnaPortait.jpg";
import PagePortraitImage from "@src/components/PagesContent/PortraitImage/PagePortraitImage";
import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";

const WorkPlace = () => {
  return (
    <HomeSubPageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <Header title="Moštárna" />
            <TextContent />
          </Column>

          <Column isOnRight>
            <PagePortraitImage src={workplace} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </HomeSubPageWrapper>
  );
};

export default WorkPlace;
