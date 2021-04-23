import TextContent from "./components/TextContent";
import workplace from "@root/assets/mostarnaWidescreen.jpg";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";
import ContentHeader from "@src/components/PagesContent/Layout/ContentHeader";

const WorkPlace = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default WorkPlace;
