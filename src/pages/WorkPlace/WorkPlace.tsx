import TextContent from "./components/TextContent";
import workplace from "@root/assets/mostarnaWidescreen.jpg";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";
import ContentHeader from "@src/components/PagesContent/Layout/ContentHeader";

const WorkPlace = () => {
  return (
    <HomeSubPageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <ContentHeader />
            <TextContent />
          </Column>

          <Column isOnRight>
            <PageImage src={workplace} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </HomeSubPageWrapper>
  );
};

export default WorkPlace;
